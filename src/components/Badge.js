import React from "react"

export default function Badge(props) {
  // console.log(props)

  return (
    <div className='badge'>
      <div className='header'>Badge:</div>
      <div className='row'>
        <div><p>Name: {props.fName + " " + props.lName}</p></div>
        <div><p>Phone: {props.phone}</p></div>
      </div>
      <div className='row'>
        <div><p>Place of Birth: {props.birthPlace}</p></div>
        <div><p>Favorite Food: {props.favoriteFood}</p></div>
      </div>
      <div className='email--comments'>
        <div><p>Email: {props.email}</p></div>
      </div>
      <div className='email--comments'>
        <div><p className="comment--section">{props.comments}</p></div>
      </div>
      <div className='footer'></div>
    </div>
  )
}