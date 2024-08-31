'use client'

import { useCreateRouter } from '@/utils/helpers/nav'
import React from 'react'

function CTAButton({
  title,
  style = 'btn btn-neutral',
  route = '/'
} : {
  title?: string
  style?: string
  route?: string
}) {
  const { router } = useCreateRouter()

  const handleClick = () => {
    router.push(route)
  }

  return (
    <button 
      onClick={handleClick}
      className={style}>
      {title || 'CTA Button'}
    </button>
  )
}

export default CTAButton