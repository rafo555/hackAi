import React, {memo, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import { AiFetch, AiUpload } from '../../helpers/AIFetch';
import { useDispatch } from 'react-redux';
import { loadImage, resizeIfNeededImage, upScaleImage } from '../../helpers';
import Konva from 'konva';
import { ADD_STAGE_POINTERS } from '../../store/actionTypes';

async function uploadToAi(file) {
    const formData = new FormData();
    formData.append('image', file);
    const [response, id] = await AiUpload(formData);
    //const json = await response.json();
    return id;
}

async function createPngFromMask (maskUrl, originalIMage) {
    const mask = await loadImage(maskUrl);
    const maskImage = await upScaleImage(mask, originalIMage.width, originalIMage.height);
    const canvas = document.createElement('canvas');
    canvas.width = originalIMage.width;
    canvas.height = originalIMage.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(originalIMage, 0, 0);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(maskImage, 0, 0);
    return canvas;
}

async function createKonva(id, hairCanvas, lipsCanvas){
    const stage = new Konva.Stage({ container: id, width: hairCanvas.width, height: hairCanvas.height });
    const layer = new Konva.Layer();
    stage.add(layer);
    const image = new Konva.Image({ image: hairCanvas });
    const image1 = new Konva.Image({ image: lipsCanvas });
    layer.add(image);
    layer.add(image1);
    layer.batchDraw();
    return stage;
}

async function removeBackgroundMulti(srcArray = []) {
    const imagesArray = await Promise.all(srcArray.map(item => loadImage(item.url))); // original
    const resizedImagesArray = await Promise.all(imagesArray.map(image => resizeIfNeededImage(image, 1024)));
    const imagesIds = await Promise.all(resizedImagesArray.map(blob => uploadToAi(new File([blob], 'image.jpeg'))));
    const hairMaskUrls = Promise.all(imagesIds.map(id => getMultiMatting(id, 'hair')));
    const lipsMaskUrls = Promise.all(imagesIds.map(id => getMultiMatting(id, 'lips')));
    const hairCanvasSource = await Promise.all(imagesArray
        .map((image, index) => {
            const { data: { url: maskUrl } } = hairMaskUrls[index];
            return createPngFromMask(maskUrl, image, 'black');
        })
    );
    const lipsCanvasSource = await Promise.all(imagesArray
        .map((image, index) => {
            const { data: { url: maskUrl } } = lipsMaskUrls[index];
            return createPngFromMask(maskUrl, image, 'red');
        })
    )
    const stages = hairCanvasSource.map((hairCanvas, index) => {
        const { id } = srcArray[index];
        const lipsCanvas = lipsCanvasSource[index];
        return createKonva(id, hairCanvas, lipsCanvas);
    })
    return imageDataUrlArray;
}

// async function removeBackgroundBulk (srcArray = [], callback) {
//     const arrayOfArray = [];
//     while(srcArray.length !== 0) {
//         arrayOfArray.push(srcArray.splice(0, 10));
//     }
//     var lastPromise = null
//     for (let i = 0, p = Promise.resolve(); i < arrayOfArray.length; i++) {
//         lastPromise = p = p.then(data => {
//             i && callback(data, false);
//             return removeBackgroundMulti(arrayOfArray[i]);
//         });
//     }
//     lastPromise.then(data => { callback(data, false); callback(null, true) });
// }

const Ilustratr = ({ imagesSrc }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        (async function () {
            const stage = await removeBackgroundMulti(imagesSrc);
            console.log(stage);
            dispatch({
                type: ADD_STAGE_POINTERS,
                payload: stage
            });
        })();
        return () => null;
    }, [imagesSrc, dispatch]);
    return (
        <>
            {imagesSrc.map(el => {
                return (
                    <div
                        key={el.id}
                        id={el.id}
                        className={classes.resultDiv}>
                    </div>)
            })}
        </>
    );
};

const useStyles = createUseStyles({
    result: {
        marginRight: 150,
        height: `calc(100vh - 40px)`
    },
    resultDiv: {
        width: 240,
        height: 250,
        float: 'left',
        marginLeft: 20,
        marginTop: 20,
        
            '& canvas': {
                width: '240px !important',
                height: '250px !important',
            }
            
        
    },
});

export default memo(Ilustratr);