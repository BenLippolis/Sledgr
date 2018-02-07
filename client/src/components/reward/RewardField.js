import React from 'react'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <div className='form-group'>
        <input placeholder={label} className='form-control' {...input} />
        <div className='text-danger'>
          {touched && error}
        </div>
      </div>
    </div>
  )
}
