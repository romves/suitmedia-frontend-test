import React, { SVGProps } from 'react'

export default function SpinnerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className='animate-spin' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} ><path fill="currentColor" d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8"></path></svg>
  )
}
