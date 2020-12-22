import React from 'react'

import {BsPersonCheckFill,BsFillCaretDownFill, BsThreeDots } from 'react-icons/bs'
import profilePhoto from '../../assets/profileImage.jpg'

import { ProfileInfo } from './styles'


const Profile: React.FC = () => {
    return (
        <ProfileInfo>
            <div className="image-container">
              <img src={profilePhoto} alt="profile"/>
            </div>
            <div className="info-container">
              <div className="title">

                <h1>_gustavofe_</h1>
                
                <div className="title-buttons">
                  <button> Message </button>
                  <button>  <BsPersonCheckFill size={16}/> </button>  
                  <button className="droplist"> <BsFillCaretDownFill size={9}/> </button>
                  
                </div>
                
                <BsThreeDots size={22} style={{cursor: 'pointer'}}/>
              </div>
              <div className="statistics">
                <div>
              
                  <h2>631 </h2>
                  <span> posts</span> 

                </div>
                <div>

                  <h2>94.2k  </h2>
                  <span> followers</span>

                </div>

                <div>

                  <h2>805  </h2>
                  <span> following</span>

                </div> 

              </div>
              <div className="description">
                <h2> Gustavo Fernandes </h2>
                <span>Software Enginner <a href="#"></a></span>
                <span>✉️ gust4f3rn@gmail.com</span>
                <h3>Followed by <span>guizaokermen</span>, <span>pabloxrm</span>, <span>goforgaming</span> +75 more</h3>
              </div>
              <div className="network">
                
              </div>
            </div>
          </ProfileInfo>
    )

}

export default Profile