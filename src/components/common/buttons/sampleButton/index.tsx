'use client'

import React from 'react'

function SampleButton({
  onClick = () => {},
  title
} : {
  onClick?: () => void
  title?: string
}) {
  return (
    <button 
      onClick={onClick}
      className='btn btn-primary'>
      {title || 'Sample Button'}
    </button>
  )
}

export default SampleButton