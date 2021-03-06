import React from 'react';
import './AbountMe.css';
import image from '../../images/new.png'


const AboutMe = () => {
    return (
        <div className="banner container-fluid">
            <div className="container">
                <div className="top-section">
                    <div className="row gx-1">
                        <div className="col-md-6  mt-5 p-5">
                            <h1>Hello!</h1>
                            <div className="description">
                                <h1>I'M <span className="name">Najumul Hasan Shanto</span></h1>
                                <h5>I am an enthusiastic JavaScript developer with knowing some framework
                                    for the frontend and the backend. I know Basic PHP and MySQL but
                                    basically a MERN developer.
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6  mt-5">
                            <img src={image} alt="" className="img-fluid rounded-3 " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;