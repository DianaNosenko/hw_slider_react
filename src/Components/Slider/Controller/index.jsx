import React, {useState} from 'react';
import styles from './Controller.module.scss';
import PropTypes from 'prop-types';

export default function Controller(props) {
  const {setPrevSlide, setNextSlide} = props;
  const [isRunning, setIsRunning] = useState(false);
  const [slideshowId, setSlideshowId] = useState(null);
  const [delay, setDelay] = useState(1000);

  const start = () => {
    if(!isRunning){
        setIsRunning(true);
        setSlideshowId(setInterval(setNextSlide, {delay}));
    } 

  }
  const stop = () => {
    if(isRunning){
        setIsRunning(false);
        clearInterval(slideshowId);  
    }
    
  }

  const delayHandler = (e) => {
    setDelay(e.target.value);
  }
 

  return (
    <div className={styles.container}>
        <div className={styles.navigation}>
          <p>Change slide</p>
            <button onClick={setPrevSlide}>{'<'}</button>
            <button onClick={setNextSlide}>{'>'}</button>
        </div>
        <div className={styles.workedContainer}>
            <p>Slideshow</p>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <p>Delay: {delay} msec</p>
            <input name="delay" type="range"  min={500} max={3000} step={100} value={delay} onChange={delayHandler} />
        </div>
    </div>

  )
}

Controller.propTypes = {
    setPrevSlide: PropTypes.func.isRequired,
    setNextSlide: PropTypes.func.isRequired
};
