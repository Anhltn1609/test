import React from "react";
import '../../assets/sass/scss/Feature.scss';

const FeatureItem = ({ description, imageUrl }) => {
  return (
    <div className="feature-item">
      <div className="feature-item-img">
      <img src={imageUrl} alt=''></img>
      </div>
      <p className='h-[300px]'>{description}</p>
    </div>
  )
}

export default FeatureItem