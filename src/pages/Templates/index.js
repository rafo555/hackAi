import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

const data = [{
    id: 1,
    type: '',
    url: 'https://cdn130.picsart.com/320571728314201.jpg?type=webp&to=min&r=480',
},
    {
        id: 2,
        type: '',
        url: 'https://cdn130.picsart.com/320571728314201.jpg?type=webp&to=min&r=480',
    },
    {
        id: 3,
        type: '',
        url: 'https://cdn130.picsart.com/320571728314201.jpg?type=webp&to=min&r=480',
    }
]

const Templates = () => {

    return (
        <div className='mainContainerDiv'>
            Templates
            {data.map((el) => {
                return (
                    <div className='templateImgClass'>
                        <img className='templateImg' src={el.url}/>
                    </div>
                )
            })}
        </div>
    );
};

const useStyles = createUseStyles({
    mainContainerDiv: {
        padding: '28px 35px',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    templateImgClass: {
        width: 250,
        height: 250,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    templateImg: {
        borderRadius: 7,
        cursor: 'pointer'
    }
})

export default memo(Templates);