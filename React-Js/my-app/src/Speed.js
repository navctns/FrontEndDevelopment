import React from 'react'

export default(props) => {

  if (props.symbols !== 0 && props.sec !== 0){

    const wpm = (props.symbols/5)/(props.sec/60);//To calculate words per min assuming a word has 5 char
    return (
      <div><h5>{Math.round(wpm)} wpm</h5></div>
    );

  }

  return null;
}
