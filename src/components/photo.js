import React from "react";


const PhotoComponent = ({picture}) => {
    return (
      <div>
      <img className='img-size' alt="test" src={picture}/>
      </div>
    )
}

export default PhotoComponent