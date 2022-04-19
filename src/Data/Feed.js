import React from 'react'

const Feed = (props) => {
  return (
    <>
      <h1>EMPLOYEE FEEDBACK DATA</h1>
      <div className='feed'>

        {props.data.map(
          (value, index) => <h3 className='box' key={index}>Name:{value.name}| Department: {value.department}| Rating:{value.rating}</h3>
        )}
      </div>


      <button className='goback' onClick={props.goBack}>Go Back</button>
    </>
  )
}

export default Feed
