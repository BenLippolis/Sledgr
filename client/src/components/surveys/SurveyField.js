import React from 'react'

// input prop has a binch of build in event handlers
// pass props.input to our field
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input className='form-control' {...input} />
      <div className='text-danger'>
        {touched && error}
      </div>
    </div>
  )
}
