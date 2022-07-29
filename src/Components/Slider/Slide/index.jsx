import React, {useState} from 'react';
import styles from './Slide.module.scss';

export default function Slide(props) {
     const {images} = props;
     const {currentImgId} = props;
     const [fullScreen, setFullScreen] = useState(null);
     // функция делает картинку на весь экран
     const full = () => {
      setFullScreen({
         width: window.innerWidth,
         height: window.innerHeight,
      })
    }
    // функция, при нажатии 'Esc' выходит из полноэкранного режима
    const escEvent = (e) => {
      if(e.keyCode == 27){
         exit();
     }
    }
    // функция выхода из полноэкранного режима при клике на кнопку
    const exit = () => {
      setFullScreen(null)
    }
  return (
   <div onKeyDown={escEvent} >
     <div className={styles.img_container} style={fullScreen}><img src={images[currentImgId]} alt="#" /></div>
     <div className={styles.btn_container}>
     <button onClick={full}>Fullscreen</button>
     <button onClick={exit}>Exit fullscreen</button>
     </div>
   </div>
  )
}
