import React from "react"
import { IconType } from "@/types/IconType"

export const ChatIcon = ({ className, color, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="#B5B5B5"
      d="M7.008 2.084C4.42 3.378 3.234 4.564 2.012 7.188c-1.15 2.48-1.257 5.893-.251 8.121.683 1.474.683 1.51-.072 3.666-1.078 3.019-.683 3.414 2.336 2.336 2.156-.755 2.192-.755 3.666-.072 2.336 1.042 5.642.934 8.301-.36 2.624-1.257 3.81-2.443 5.031-5.174 1.833-3.99.755-9.2-2.443-11.967-2.192-1.833-3.738-2.444-6.72-2.588-2.373-.108-2.948 0-4.852.934Z"
    />
  </svg>
)