import React from 'react';

import './Info.css';
function Info(props) {
  return (
    <div className='info m-4'>
      <p>{props.info.name}</p>
      <p>{props.info.course}</p>
      <p>{props.info.technique}</p>
    </div>
  );
}

export default Info;
