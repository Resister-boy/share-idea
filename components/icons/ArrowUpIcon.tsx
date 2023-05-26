import React from "react"
import { IconType } from "@/types/IconType"

export const ArrowUpIcon = ({ className, width, height, color, isVoted, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    className={`${className}`}
    {...rest}
  >
    <path
      fill={`${isVoted === true ? `${color}` : '#000'}`}
      d="M16.914 5c-2.11-2.11-4.102-3.828-4.414-3.828-.82 0-8.203 7.46-8.203 8.281 0 .352.273.742.625.86.43.156 1.523-.626 3.516-2.579l2.89-2.773v8.789c0 4.883.117 9.102.235 9.453.312.82 1.562.82 1.874 0 .118-.351.235-4.57.235-9.453V4.96l2.93 2.813c2.89 2.813 3.789 3.204 4.023 1.758.078-.508-1.133-1.953-3.71-4.531Z"
    />
  </svg>
)
