import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);

    const slideForward = () => {
        if (tx > -50) { // Move forward by 50% (2 slides)
            setTx(tx - 50);
        }
    };

    const slideBackward = () => {
        if (tx < 0) { // Move back by 50%
            setTx(tx + 50);
        }
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} className='next-btn' alt="Next" onClick={slideForward} />
            <img src={back_icon} className='back-btn' alt="Back" onClick={slideBackward} />
            
            <div className="slider">
                <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>Sarah Thompson</h3>
                                    <span>Edusity, Canada</span>
                                </div>
                            </div>
                            <p>The learning environment at Edusity is outstanding. The faculty is knowledgeable, and the curriculum is well-structured for career growth.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>David Smith</h3>
                                    <span>Edusity, UK</span>
                                </div>
                            </div>
                            <p>Edusity has given me the confidence and skills needed to excel in my field. The exposure to real-world scenarios is invaluable.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>Emily Johnson</h3>
                                    <span>Edusity, Australia</span>
                                </div>
                            </div>
                            <p>I'm grateful for the opportunity to study at Edusity. The support system and resources available to students are exceptional.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
