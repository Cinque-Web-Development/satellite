import React from 'react';
import './Cards.css';
import Picture from '../../assets/satellite_header.png'
import Instagram from '../../assets/instagram.png';
import Person from '../../assets/person.png'

export default function Cards() {

  
  return (
    <div className="cards">
      <div className="stlt-card-one">
          <div className="stlt-card-image">
              <img className="stlt-image" alt="" src={Picture} />
          </div>
          <div className="stlt-card-content">
            <h3 className="stlt-title">Title</h3>
            <p className="stlt-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil esse neque amet perspiciatis. Minus ea veniam, deleniti provident molestias.</p>
          </div>
      </div>
      <div className="stlt-card-two">
        <div className="stlt-top-card">
            <div className="stlt-top-image">
            <img className="stlt-tiny-image" alt="" src={Person} />
              Samuel
            </div>
          <div className="stlt-card-time">14h</div>
        </div>
        <div className="stlt-post">
          <img className="stlt-post-image" alt="" src={Instagram}></img>
        </div>
        <div className="stlt-comment-section">
          <div className="stlt-comments">
           <i className="fas fa-comment"></i>&nbsp; 3 comments
          </div>
          <div className="stlt-likes">
            <i className="far fa-heart"></i> &nbsp;15 likes
          </div>
        </div>
      </div>
    </div>
  )
}
