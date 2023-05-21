import React, { useEffect, useState } from 'react';
import FeatureItem from './FeatureItem';
import axios from 'axios';
import '../../assets/sass/scss/Feature.scss'
const FeatureList = () => {
    const [featureData,setFeatureData] = useState([]);
    useEffect(() => {
        axios.get("https://test-react.agiletech.vn/galleries")
          .then(response => {
            console.log(response.data);
            setFeatureData(response.data);
          })
          .catch(error => console.log(error))
      }, [])
console.log(featureData.length,"**" ,featureData);


    return (
        <div className='container'>
        <div className='wrapper'>
          <h1>Feature</h1>
          <span>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</span>
          <div className='feature-list-item'>
            {featureData.length > 0 && featureData.map(item =>
              <FeatureItem key={item.id} description={item.desctiption} imageUrl={item.imageUrl} />
            )}
          </div>
        </div>
      </div>
    )
};

export default FeatureList;