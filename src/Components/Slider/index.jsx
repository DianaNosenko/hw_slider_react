import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Controller from './Controller';
import styles from './Slider.module.scss';
import Slide from './Slide';


export default function Slider() {
    const [currentImgId, setCurrentImgId] = useState(0);
    const images = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
      ];
    const setPrevSlide = () => {
        currentImgId == 0 ? 
        setCurrentImgId(images.length-1) : 
        setCurrentImgId(currentImgId - 1);
    }
    const setNextSlide = () => {
        currentImgId == images.length-1 ? 
        setCurrentImgId(0) : 
        setCurrentImgId(currentImgId + 1);
    }
    return(
        <div className={styles.container}>
            <Slide images={images} currentImgId={currentImgId}/> 
            <Controller setPrevSlide={setPrevSlide} setNextSlide={setNextSlide} />
        </div>
    )
}

Slider.propTypes = {
    images: PropTypes.array.isRequired,
};
