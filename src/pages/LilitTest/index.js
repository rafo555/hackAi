import React, {memo, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {readDropDownFile} from '../../utils';

const LilitTest = () => {

    const onDrop = useCallback(async acceptedFiles => {
        const fileSrc = await readDropDownFile(acceptedFiles[0]);

        if (!fileSrc) {
            return;
        }

        const uploadImage = {
            url: fileSrc,
            id: Date.now().toString(36)
        };

        console.log('1', uploadImage);

    }, []);

    const {getRootProps, getInputProps} = useDropzone({
        onDropAccepted: onDrop,
        accept: 'image/jpeg, image/png',
        multiple: false
    });

    return (
        <>
            <div
                {...getRootProps()}
            >
                <input {...getInputProps()}/>
                <p>Use your first image</p>
            </div>

            <div
                {...getRootProps()}
            >
                <input {...getInputProps()}/>
                <p>Use your second image</p>
            </div>
        </>
    );
};

export default memo(LilitTest);