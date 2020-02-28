import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

const data = [
    {
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
    },
    {
        id: 4,
        type: '',
        url: 'https://cdn130.picsart.com/320571728314201.jpg?type=webp&to=min&r=480',
    },
    {
        id: 5,
        type: '',
        url: 'https://cdn130.picsart.com/320571728314201.jpg?type=webp&to=min&r=480',
    },
    {
        id: 6,
        type: '',
        url: 'https://cdn130.picsart.com/320571728314201.jpg?type=webp&to=min&r=480',
    }
];

const Templates = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainerDiv}>
            {data.map((el) => {
                return (
                    <div key={el.id} className={classes.templateImgClass}>
                        <img alt='img' className={classes.templateImg} src={el.url}/>
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
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 35,
        marginRight: 35
    },
    templateImgClass: {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        marginRight: 15,
        backgroundColor: 'white'
    },
    templateImg: {
        borderRadius: 10,
        cursor: 'pointer',
        width: 180,
        height: 180
    }
})

export default memo(Templates);