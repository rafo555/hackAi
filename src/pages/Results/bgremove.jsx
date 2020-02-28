import React, {memo, useEffect, useCallback, useState} from 'react';
import {createUseStyles} from 'react-jss';
import { genToken, AiFetch } from '../../helpers/AIFetch';
import { loadImage, resizeIfNeededImage, upScaleImage } from '../../helpers';

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

async function removeBackgroundMulti(srcArray = []) {
    const imagesArray = await Promise.all(srcArray.map(src => loadImage(src))); // original
    const resizedImagesArray = await Promise.all(imagesArray.map(image => resizeIfNeededImage(image, 512)));
    const maskArray = await Promise.all(resizedImagesArray.map(blob => removeBackground(new File([blob], 'image.jpeg'))));
    const imageDataUrlArray = await Promise.all(imagesArray
        .map((image, index) => {
            const { data: { url: maskUrl } } = maskArray[index];
            return createPngFromMask(maskUrl, image)
        })
    )
    return imageDataUrlArray;
}

async function removeBackgroundBulk (srcArray = [], callback) {
    const arrayOfArray = [];
    while(srcArray.length !== 0) {
        arrayOfArray.push(srcArray.splice(0, 10));
    }
    var lastPromise = null
    for (let i = 0, p = Promise.resolve(); i < arrayOfArray.length; i++) {
        lastPromise = p = p.then(data => {
            i && callback(data, false);
            return removeBackgroundMulti(arrayOfArray[i]);
        });
    }
    lastPromise.then(data => { callback(data, false); callback(null, true) });
}

const BgRemove = ({ imagesSrc }) => {
    const classes = useStyles();
    const [canvases, setCanvases] = useState([]);
    const handlerUpdate = useCallback((data, done) => {
        if(done){
            setCanvases([...canvases, ...data]);
        }
    }, [canvases]);
    useEffect(() => {
        removeBackgroundBulk(imagesSrc.map(item => item.url), handlerUpdate);
        return () => null;
    }, [imagesSrc]);
    return (
        <>
            {canvases.map((el, index) => {
                return (
                    <div
                        key={`result_${index}`}
                        className={classes.resultDiv}>
                        {
                            React.cloneElement(el)
                        }
                    </div>)
            })}
        </>
    );
};

const useStyles = createUseStyles({
    result: {
        marginRight: 150,
        height: `calc(100vh - 40px)`,
        overflow: 'auto'
    },
    resultDiv: {
        width: 240,
        height: 250,
        float: 'left',
        marginLeft: 20,
        marginTop: 20
    },
    resultImg: {
        width: 240,
        height: 250,
        objectFit: 'cover',
    }

});

export default memo(BgRemove);