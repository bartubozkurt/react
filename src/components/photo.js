import React from "react";


const PhotoComponent = (props) => {
  console.log("propslar",props)
    return (
      <div>
      <img className='img-size' alt="test" src={props.picture}/>
      </div>
    )
}

export default PhotoComponent