import React, { useRef } from 'react'
import './Testimonials.css'
import next_btn from '../../assets/next-icon.png';
import back_btn from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

function Testimonials (){
    const sliding=useRef()
    let tx=0
    

function slideForward(){
    if(tx>-50){
        tx -=25
    }
    sliding.current.style.transform=`translateX(${tx}%)`

}
function slideBackward(){
    if(tx<0){
        tx +=25;
    }
    sliding.current.style.transform=`translateX(${tx}%)`
 

}

  return (
    <div className="testimonials" id='testimonials'>
        <img src={next_btn} className='next-btn' onClick={slideForward}></img>
        <img src={back_btn} className='back-btn' onClick={slideBackward}></img>
        <div className="slider">
            <ul ref={sliding}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1}></img>
                            <div>
                                <h3>Alice Perera</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions i've ever made.The Supportive community 
                            ,state-of-the-art facilities, and commitment to academic excellence 
                            have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2}></img>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions i've ever made.The Supportive community 
                            ,state-of-the-art facilities, and commitment to academic excellence 
                            have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3}></img>
                            <div>
                                <h3>Sophia Paul</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions i've ever made.The Supportive community 
                            ,state-of-the-art facilities, and commitment to academic excellence 
                            have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4}></img>
                            <div>
                                <h3>Christina Philip</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions i've ever made.The Supportive community 
                            ,state-of-the-art facilities, and commitment to academic excellence 
                            have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials