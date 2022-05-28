import './App.css';
import React from 'react';
import { useState } from "react"
import classNames from "classnames"
import PhotoComponent from './components/photo';
import ButtonComponent from './components/button';



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

       <div className={classNames("box center-screen ",{warning: isWarning})}>
        This is a warning message
      </div>

      <div className={classNames("box center-screen", { warning: isWarning })}>
      Idk! This is a extra message 
    </div>

      <div><ChildComp status="error" /></div>


      <PhotoComponent picture="https://images.unsplash.com/photo-1653325655196-d8419ff68221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"/>
      <ButtonComponent buttonName = "See details 1"/>
      <PhotoComponent picture="https://images.unsplash.com/photo-1652982646049-50401c088dd4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032"/>
      <ButtonComponent buttonName = "See details 2"/>
      <PhotoComponent picture="https://images.unsplash.com/photo-1652512456007-e16ac46f1879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"/>
      <ButtonComponent buttonName = "See details 3"/>
      <PhotoComponent picture="https://images.unsplash.com/photo-1652648495352-6180ba2a9000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <ButtonComponent buttonName = "See details 4"/>

    </>
  )
}



classNames("foo", { bar: true, duck: false }, "baz", { quux: true }) // => 'foo bar baz quux'



export default App