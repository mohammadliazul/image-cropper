import React from 'react';
import loveImg from '../../assets/shape/user_image_frame_1.png';
import squareImg from '../../assets/shape/user_image_frame_2.png';
import circleImg from '../../assets/shape/user_image_frame_3.png';
import rectangleImg from '../../assets/shape/user_image_frame_4.png';
import './Frame.css';

const Frame = ({handleFrame}) => {
    return (
        <section className='frame-main'>
            <div className="frame-container">
                <div id='original' className='frame-thumbnail span-wrapper active-frame' onClick={()=>handleFrame('empty')}>
                    <span>Original<br />Image</span>
                </div>
                <div id='heart' className='frame-thumbnail'>
                    <img src={loveImg} alt="heart frame" onClick={()=>handleFrame('love')}/>
                </div>
                <div id='square' className='frame-thumbnail'>
                    <img src={squareImg} alt="square frame" onClick={()=>handleFrame('square')}/>
                </div>
                <div id='circle' className='frame-thumbnail'>
                    <img src={circleImg} alt="circle frame" onClick={()=>handleFrame('circle')}/>
                </div>
                <div id='rectangle' className='frame-thumbnail'>
                    <img src={rectangleImg} alt="rectangle frame" onClick={()=>handleFrame('rectangle')}/>
                </div>            
            </div>
        </section>
    );
};

export default Frame;