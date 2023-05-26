import React from "react"
import { IconType } from "@/types/IconType"

export const GlobeICon = ({ className, width, height, ...rest} : IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 64 64"
    className={className}
    {...rest}
  >
    <path d="M22.3 1.8C11.4 5.7 4.5 13 1.3 23.9c-2.9 10.2.4 22.8 8.2 30.6 12.2 12.1 32.8 12.1 45 0 9.1-9.2 11.8-24.1 6.4-35.6C54 4.3 36.8-3.4 22.3 1.8zm17.6 3.6c.6.4.3 1.8-.7 3.5-1.6 2.8-1.5 3.1.2 5 1.5 1.7 2.9 2 8.4 1.8 6.5-.2 6.6-.1 8.5 3.1l2 3.4-5.7-.7c-6.3-.8-8.4.3-10.6 5.5-1.6 3.8-.1 6.4 5 9 4.4 2.3 4.4 2.1 3 7-.7 2.6-.6 3.9.5 5.7.8 1.2 1.5 2.4 1.5 2.7 0 .2-2.1 1.8-4.6 3.5C31 65.7 9 56.7 5 37.4c-.7-3-.9-7.3-.5-9.4l.7-4 3.3 2.6c2.1 1.6 3.5 3.7 3.9 5.8.4 1.9 1.3 3.9 2.1 4.6.8.7 1.5 2.3 1.5 3.5 0 3.9 5.8 15.5 7.8 15.5 2.3 0 4.2-1.9 4.2-4.2 0-1 .9-2.6 2-3.5 1.1-1 2-2.6 2-3.7 0-1 1.6-3.6 3.5-5.7 4-4.4 4.2-5.8 1.7-8.9-1.3-1.6-3-2.4-5.5-2.4-2.5-.1-4.2-.8-5.2-2.3-.9-1.3-3.1-2.4-5.5-2.8-4-.7-5.6-2.5-2.2-2.5 3.2 0 9.5-2.7 10.5-4.5.6-1.2.6-3-.2-5.5-1.8-6.2-1.7-6.3 4.4-5.7 3 .3 5.9.8 6.4 1.1z" />
  </svg>
)