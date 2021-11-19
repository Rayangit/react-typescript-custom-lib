import React, {memo} from 'react'

import {Props} from './interfaces'

export const Text: React.FC<Props> = memo(({
  children,
  variant
}) => {
  console.log(variant)
  return (
    <h2>
      {children}
    </h2>
  )
})
