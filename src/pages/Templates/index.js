import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

const data = [{
    type: '',
    url: '',
}]

const Templates = () => {

    return (
        <div className='mainContainerDiv'>
            Templates
            {data.map((el) => {
                return (
                    <div className='templateImgClass'>
                        <img className='templateImg'/>
                    </div>
                )
            })}
        </div>
    );
};

const useStyles = createUseStyles({
    mainContainerDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 30,
        justifyContent: 'space-between'
    },
    templateImgClass: {
        width: 250,
        height: 250,
        marginBottom: 10
    },
    templateImg: {
        borderRadius: 7,
        cursor: 'pointer'
    }
})

export default memo(Templates);