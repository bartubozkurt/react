import './App.css';

import { useState } from "react"
import classNames from "classnames"

const ChildComp = props => {
  return (
  <div className={`box center-screen ${props.status}`}>
    This is an error message
  </div>
  )
}

function App() {
  const  [isWarning] = useState(true)

  return(
    <>
      <div className="box success center-screen">This is a success message</div>
      {/* <div className={`box ${isWarning === true && "warning"}`}>
        This is a warning message
      </div> */}
      <div className={classNames("box center-screen ",{warning: isWarning})}>
        This is a warning message
      </div>
      <div className={classNames("box center-screen", { warning: isWarning })}>
      Idk! This is a extra message 
    </div>
      <div><ChildComp status="error" /></div>
    </>
  )
}

classNames("foo", { bar: true, duck: false }, "baz", { quux: true }) // => 'foo bar baz quux'



export default App