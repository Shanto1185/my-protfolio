import React from 'react';
import { Nav } from 'react-bootstrap';
import './Projects.css'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <div className="container mb-5" id="projects">
                <h1 className="my-5">My Recent Projects</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                    <div className="col">
                        <div className="card h-100 bg-dark">
                            <img src="https://i.ibb.co/P5G04sw/2.png" className="card-img-top" alt="..." />
                            <div className="card-body  text-success">
                                <h4 className="card-title">MOBILE SHOP -Niche Product Website (MERN stack)</h4>
                                <p className="card-text">
                                    <strong>Technology Used:</strong> React js, Bootstrap, Material UI, Firebase Authentication, Nodes
                                    JS(Express), MongoDB, Heroku(server deploy), firebase hosting(client site deploy)
                                </p>
                            </div>
                            <div className="d-flex align-items-sm-center justify-content-around">
                                <Link to="/shop">Details</Link>
                                <Nav.Link target="_blank" href=" https://mobile-shop-a9ca5.web.app">view Site</Nav.Link>
                                <Link>View Code</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-dark">
                            <img src="https://i.ibb.co/TYc9tbz/1.png" className="card-img-top" alt="..." />
                            <div className="card-body text-success">
                                <h4 className="card-title">GHURBO- A Tour Management Website (MERN stack)</h4>
                                <p className="card-text">
                                    <strong>Technology Used:</strong> React js, React bootstrap, Bootstrap, Firebase Authentication, Nodes
                                    JS(Express), MongoDB, Heroku(server deploy), firebase hosting(client site deploy)
                                </p>
                            </div>
                            <div className="d-flex align-items-sm-center justify-content-around">
                                <Link>Details</Link>
                                <Nav.Link target="_blank" href="https://ghurbo-authentication.web.app/home">view Site</Nav.Link>
                                <Link>View Code</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-dark">
                            <img src="https://i.ibb.co/Sn0ST61/3.png" className="card-img-top" alt="..." />
                            <div className="card-body text-success">
                                <h4 className="card-title">Hona CBR 300-R</h4>
                                <p className="card-text">
                                    <strong>Technology Used:</strong>HTML5, CSS3, Bootstrap5
                                </p>
                            </div>
                            <div className="d-flex align-items-sm-center justify-content-around">
                                <Link>Details</Link>
                                <Nav.Link target="_blank" href="https://flamboyant-wozniak-152dc3.netlify.app/">view Site</Nav.Link>
                                <Link>View Code</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;