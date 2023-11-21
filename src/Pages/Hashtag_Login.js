import React from 'react'
import './Hashtag_Login.css'
import Card from '../Images/Card.png'
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'
import profile from '../Images/profile.jpg'
import { Outlet, Link } from 'react-router-dom'
const Hashtag_Login = () => {
    return (
        <div>
            <div class="card text-bg-dark">
                <img src={Card} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <div className='row'>
                        <div className='col align-self-start'>
                            <p className='hashtag'> #Hashtag</p>
                        </div>
                        <div className='col align-self-end'>
                            <div className="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Explore
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul> &nbsp; &nbsp;
                                <img src={profile} class="profile" alt="..." />
                                &nbsp;&nbsp;&nbsp;
                                <button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                </svg> Upload</button>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                    <h1 className="card-text">Let’s Find The Perfect Free <br />
                        Photo For You</h1>
                    <br />
                    <div className="search main">
                        <div className="  btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-light">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                                &nbsp;
                                <text className='search'>  search for all images on #Hashtag</text>

                            </button>


                            <div class="btn-group" role="group">
                                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Images
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='nav'>
                <div>
                    <h3 className='h3'>Popular Hashtag</h3>
                    <p className='nav-button'>
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Nature</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Travel</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Food</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Fashion</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Happy</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#places</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#selfie</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Music</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Animals</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Lifestyle</button> &nbsp;
                        <button type="button" class="btn" disabled data-bs-toggle="button">#Motivation</button> &nbsp;
                    </p>
                </div>
            </div >
            <div className='card_images'>
                <div class="card" >
                    <img src={image1} class="card-img-top" alt="..." />
                </div>
                <br />
                <div class="card" >
                    <img src={image2} class="card-img-top" alt="..." />
                </div>
                <br />
                <div class="card" >
                    <img src={image3} class="card-img-top" alt="..." />
                </div>
                <br />
                <div class="card" >
                    <img src={image4} class="card-img-top" alt="..." />
                </div>
                <br />
                <div class="card" >
                    <img src={image5} class="card-img-top" alt="..." />
                </div>
                <br />
            </div>

        </div >
    )
}

export default Hashtag_Login