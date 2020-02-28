import React from 'react';
import { Select } from './select'
import { createUseStyles } from 'react-jss';

function Wrapper({ children }) {
    const classes = useStyles();
    return (
        <section className={classes.wrapper}>
            {children}
        </section>
    )
}

function LeftColumn() {
    const classes = useStyles();
    return (
        <div className={classes.leftColumn} >
            <div className={classes.templates} >
                <span><img src='/svg/group-39.svg' alt="" srcset=""/></span>
                <span><img src='/svg/transform-text.svg' alt="" srcset=""/></span>
                <span><img src='/svg/shape1.svg' alt="" srcset=""/></span>
                <span><img src='/svg/group-51.svg' alt="" srcset=""/></span>
            </div>
            <div className={classes.settings} >
                <Select width={'300px'} data={[{text: 'Font', image: '/svg/group-2.svg'}]} ></Select>
                <Select width={'300px'} data={[{text: 'Color', image: '/svg/group-3.svg'}]} ></Select>
                <Select width={'300px'} data={[{text: 'Outline', image: '/svg/ic-stroke.svg'}]} ></Select>
                <Select width={'300px'} data={[{text: 'Shadow', image: '/svg/shape.svg'}]} ></Select>
            </div>
        </div>
    )
}
function Canvas() {
    const classes = useStyles();
    return (
        <div className={classes.canvas} >

        </div>
    )
}
function RightColumn() {
    const classes = useStyles();
    return (
        <div className={classes.rightColumn} >

        </div>
    )
}

export default function Erase() {
    return (
        <Wrapper>
            <LeftColumn />
            <Canvas />
            <RightColumn />
        </Wrapper>
    );
}

const useStyles = createUseStyles({

    wrapper: {
        display: 'flex',
    },
    leftColumn: {
        backgroundColor: '#16191d',
        flex: '0 0 30%',
        display: 'flex',
    },
    templates: {
        padding: 15,
        flex: '0 0 20%',
        display: 'flex',
        flexDirection: 'column',
        '& img': {
            width: 20,
            height: 20
        }
    },
    settings: {
        padding: 15,
        flex: '0 0 80%',
        display: 'flex',
        flexDirection: 'column',
        '& select': {
            width: 386,
            height: 64,
            borderRadius: 4.3
        }
    },
    canvas: {
        flex: '0 0 60%'
    },
    rightColumn: {
        flex: '0 0 10%'
    }
});