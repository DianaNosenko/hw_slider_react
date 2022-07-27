import React from 'react'
import styles from './Slide.module.scss';

export default function Slide(props) {
     const {images} = props;
     const {currentImgId} = props;
  return (
     <div className={styles.img_container}><img src={images[currentImgId]} alt="#" /></div>
  )
}
