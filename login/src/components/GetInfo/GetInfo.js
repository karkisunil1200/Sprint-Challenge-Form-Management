import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../axiosWithAuth/axiosWithAuth';

import Info from '../Info/Info';
import './getInfo.css';

function GetInfo() {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:5000/api/restricted/data';
    axiosWithAuth()
      .get(url)
      .then(res => {
        console.log(res.data);
        setDataInfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className=' getInfo friendsList d-flex flex-wrap p-5'>
      {dataInfo.map(info => {
        return <Info info={info} />;
      })}
    </div>
  );
}

export default GetInfo;
