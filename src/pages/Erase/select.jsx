import React, { useState, memo, useEffect, createRef, forwardRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ForwardDiv = forwardRef((props, ref) => <div ref={ref} {...props} />);
const SelectWraper = styled(ForwardDiv)`
    width: ${props => props.width};
    position: relative;
    display: inline-block;
    margin-bottom: 10px;
`;
//------------------------------------------
const Selected = styled.div`
    color: ${props => props.textColor};
    background-color: ${(props) => props.color};
    padding: 8px 16px 8px ${(props) => props.withImage ? '16px;' : '16px'};
    span: {
        width: 20px;
    }
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
    &::after{
        position: absolute;
        content: "";
        top: ${(props) => props.open ? '7px;' : '14px;'};
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: ${(props) => props.open ? 'transparent transparent #fff transparent;' : '#fff transparent transparent transparent;'};
    }
`;
Selected.propTypes = {
    withImage: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    textColor: PropTypes.string.isRequired
};
//--------------------------------------------
const SelectOptionsList = styled.div`
    display: ${(props) => props.open ? 'unset' : 'none'};
    background-color: ${(props) => props.color};
    color: ${(props) => props.textColor};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
`;
SelectOptionsList.propTypes = {
    color: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    textColor: PropTypes.string.isRequired
};
//-----------------------------------------------
const SelectOptions = styled.div`
    position: relative;
    color: ${(props) => props.textColor};
    padding: 8px 16px 8px ${(props) => props.withImage ? '16px;' : '16px'};
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
    background-color: ${(props) => props.active ? 'rgba(255,255,255,0.3)' : 'unset'};
    &:hover{
        background-color: rgba(255,255,255,0.3)
    }
`;
SelectOptions.propTypes = {
    withImage: PropTypes.bool.isRequired,
    textColor: PropTypes.string.isRequired,
    active: PropTypes.bool
};
SelectOptions.defaultProps = {
    active: false
};
export const Select = memo((props) => {
    // eslint-disable-next-line no-unused-vars, react/prop-types
    const { data, value, name, onChange, required, color, textColor, width, ...rest } = props;
    let referenceWarper = createRef();
    const initState = useMemo(() => data.findIndex(item => item.value === value), [data, value]);
    const [currentIndex, setIndex] = useState(initState);
    const [isOpen, setIsOpen] = useState(false);
    function selectHendler(index) {
        onChange(name, data[index].value);
        setIndex(index);
        setIsOpen(false);
    }
    function mouseDownHandler(e) {
        if (referenceWarper.current.contains(e.target)) {
            return;
        }
        isOpen && setIsOpen(false);
    }
    useEffect(() => {
        document.addEventListener('mousedown', mouseDownHandler, false);
        return () => {
            document.removeEventListener('mousedown', mouseDownHandler, false);
        };
    });
    const currentImage = (currentIndex >= 0) ? data[currentIndex].image : false;
    const currentText = (currentIndex >= 0) ? data[currentIndex].text : false;
    const handlerClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);
    return (
        <SelectWraper ref={referenceWarper} width={width}>
            <Selected color={color} textColor={textColor} open={isOpen} withImage={Boolean(currentImage)} onClick={handlerClick}>
                {currentImage && <span ><img alt='' src={currentImage} /></span>}
                {currentText ? (currentText) : ('Select')}
            </Selected>
            <SelectOptionsList key={currentIndex} color={color} textColor={textColor} open={isOpen} >
                {
                    // eslint-disable-next-line react/jsx-no-bind
                    data.map((item, index) => <SelectOptions textColor={textColor} active={index === currentIndex} key={item.value} withImage={Boolean(item.image)} onClick={selectHendler.bind(this, index)}>
                        {Boolean(item.image) && <span ><img alt='' src={currentImage} /></span>}
                        {item.text}
                    </SelectOptions>)
                }
            </SelectOptionsList>
        </SelectWraper>
    );
});
Select.defaultProps = {
    color: '#1d2025',
    textColor: `white`,
    width: '200px'
};
Select.propTypes = {
    color: PropTypes.string,
    textColor: PropTypes.string,
    width: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
//******************************************************************************************************** */