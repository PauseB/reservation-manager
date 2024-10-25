import { useState } from 'react'


type Red1234Props = {
  text: string,
}
export function Red1234({ text }: Red1234Props) {

  if (text === "김동영") return (
    <p className='text-4xl font-bold'>{ text }</p>
  )
 
  return (
    <p className='text-red-500 text-4xl font-bold'>{ text }</p>
  )
}
