import React, {memo, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import { genToken, AiFetch } from '../../helpers/AIFetch';
import { useDispatch } from 'react-redux';
import { loadImage, resizeIfNeededImage, upScaleImage } from '../../helpers';
import Konva from 'konva';
// import { ADD_STAGE_POINTERS } from '../../store/actionTypes';

async function removeBackground(file) {
    const formData = new FormData();
    formData.append('image', file);
    const [token, sid] = genToken();
    const options = {
        body: formData,
        method: 'POST',
        headers: { sid, Authorization: `Bearer ${token}` },
    }
    const response = await AiFetch(`matting/${sid}`, { ...options });
    return await response.json();
}

async function createPngFromMask (maskUrl, originalIMage, id) {
    const mask = await loadImage(maskUrl);
    const maskImage = await upScaleImage(mask, 600, 600);
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(originalIMage, 0, 0, originalIMage.width, originalIMage.height, 0,0, 600, 600);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(maskImage, 0, 0);
    const stage = new Konva.Stage({ container: id, width: 600, height: 600 });
    const layer = new Konva.Layer();
    stage.add(layer);
    const image = new Konva.Image({ image: canvas, draggable: true });
    const rect = new Konva.Rect({ width: 600, height: 600, fill: '#eff5fd' });
    const positionXRect = 600 - 218;
    const positionYRect = 600 - 121;
    const rectPrice = new Konva.Rect({ width: 218, height: 80, fill: '#2f303c', opacity: 0.9, x: positionXRect, y: positionYRect, draggable: true });
    const text1 = new Konva.Text({ text: 'Jacket - S,M,L,XL', x: positionXRect + 31, y: positionYRect + 13, fontSize: 20, fill: 'white', draggable: true });
    const text2 = new Konva.Text({ text: '$350', x: positionXRect + 126, y: positionYRect + 45, fontSize: 25, fill: 'white', draggable: true });
    layer.add(rect);
    layer.add(image);
    layer.add(rectPrice);
    layer.add(text1);
    layer.add(text2);
    layer.batchDraw();
    return stage;
}

async function removeBackgroundMulti(srcArray = []) {
    const imagesArray = await Promise.all(srcArray.map(item => loadImage(item.url))); // original
    const resizedImagesArray = await Promise.all(imagesArray.map(image => resizeIfNeededImage(image, 512)));
    const maskArray = await Promise.all(resizedImagesArray.map(blob => removeBackground(new File([blob], 'image.jpeg'))));
    const imageDataUrlArray = await Promise.all(imagesArray
        .map((image, index) => {
            const { data: { url: maskUrl } } = maskArray[index];
            const { id } = srcArray[index];
            return createPngFromMask(maskUrl, image, id);
        })
    )
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

const BgRemove = ({ imagesSrc }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        (async function () {
            window.stageArray = await removeBackgroundMulti(imagesSrc);
            // console.log(stage);
            // dispatch({
            //     type: ADD_STAGE_POINTERS,
            //     payload: stage
            // });
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

export default memo(BgRemove);