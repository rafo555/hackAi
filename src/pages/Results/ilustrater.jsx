import React, {memo, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import { getMultiMatting, AiUpload } from '../../helpers/AIFetch';
import { useDispatch } from 'react-redux';
import { loadImage, resizeIfNeededImage, upScaleImage } from '../../helpers';
import Konva from 'konva';

async function uploadToAi(file) {
    const formData = new FormData();
    formData.append('image', file);
    const [, id] = await AiUpload(formData);
    //const json = await response.json();
    return id;
}

async function createPngFromMask (maskUrl, originalIMage, color) {
    const mask = await loadImage(maskUrl);
    const maskImage = await upScaleImage(mask, 600, 600);
    const canvas = document.createElement('canvas');
    canvas.width = originalIMage.width;
    canvas.height = originalIMage.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(originalIMage, 0, 0, originalIMage.width, originalIMage.height, 0,0, 600, 600);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(maskImage, 0, 0);
    ctx.globalCompositeOperation = 'source-in';
    ctx.beginPath();
    ctx.rect(0, 0, 600, 600);
    ctx.fillStyle = color;
    ctx.fill();
    return canvas;
}

// #E2B1A0 skin

function createKonva(id, hairCanvas, lipsCanvas, clothesCanvas, skinCanvas){
    const stage = new Konva.Stage({ container: id, width: 600, height: 600 });
    const layer = new Konva.Layer();
    stage.add(layer);
    const rect = new Konva.Rect({ width: 600, height: 600, fill: '#FCCFBC' });
    const imageClothes = new Konva.Image({ image: clothesCanvas, draggable: true });
    const imageSkin = new Konva.Image({ image: skinCanvas, draggable: true });
    const imageHair = new Konva.Image({ image: hairCanvas, draggable: true });
    const imageLips = new Konva.Image({ image: lipsCanvas, draggable: true });
    layer.add(rect);
    layer.add(imageClothes);
    layer.add(imageSkin);
    layer.add(imageHair);
    layer.add(imageLips);
    layer.batchDraw();
    return stage;
}

async function removeBackgroundMulti(srcArray = []) {
    const imagesArray = await Promise.all(srcArray.map(item => loadImage(item.url))); // original
    const resizedImagesArray = await Promise.all(imagesArray.map(image => resizeIfNeededImage(image, 1024)));
    const imagesIds = await Promise.all(resizedImagesArray.map(blob => uploadToAi(new File([blob], Date.now() + '.jpg'))));
    const hairMaskUrls = await Promise.all(imagesIds.map(id => getMultiMatting(id, 'hair')));
    const lipsMaskUrls = await Promise.all(imagesIds.map(id => getMultiMatting(id, 'lips')));
    const clothesMaskUrls = await Promise.all(imagesIds.map(id => getMultiMatting(id, 'clothes')));
    const skinMaskUrls = await Promise.all(imagesIds.map(id => getMultiMatting(id, 'skin')));
    const hairCanvasSource = await Promise.all(imagesArray
        .map((image, index) => {
            const { url: maskUrl } = hairMaskUrls[index];
            return createPngFromMask(maskUrl, image, '#221C1E');
        })
    );
    const lipsCanvasSource = await Promise.all(imagesArray
        .map((image, index) => {
            const { url: maskUrl } = lipsMaskUrls[index];
            return createPngFromMask(maskUrl, image, '#B56679');
        })
    )
    const clothesCanvasSource = await Promise.all(imagesArray
        .map((image, index) => {
            const { url: maskUrl } = clothesMaskUrls[index];
            return createPngFromMask(maskUrl, image, 'white');
        })
    )
    const skinCanvasSource = await Promise.all(imagesArray
        .map((image, index) => {
            const { url: maskUrl } = skinMaskUrls[index];
            return createPngFromMask(maskUrl, image, '#E2B1A0');
        })
    )
    const stages = hairCanvasSource.map((hairCanvas, index) => {
        const { id } = srcArray[index];
        const lipsCanvas = lipsCanvasSource[index];
        const clothesCanvas = clothesCanvasSource[index];
        const skinCanvas = skinCanvasSource[index];
        return createKonva(id, hairCanvas, lipsCanvas, clothesCanvas, skinCanvas);
    })
    return stages;
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
            window.stageArray = await removeBackgroundMulti(imagesSrc);
            console.log(window.stageArray);
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