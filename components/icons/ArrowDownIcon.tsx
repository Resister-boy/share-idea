import React from "react"
import { IconType } from "@/types/IconType"

export const ArrowDownIcon = ({ className, width, height, color, isVoted, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    className={`${className}`}
    {...rest}
  >
    <path
      fill={`${isVoted === true ? `${color}` : "#000"}`}
      d="M8.086 20.333c2.11 2.11 4.101 3.829 4.414 3.829.82 0 8.203-7.461 8.203-8.282 0-.351-.273-.742-.625-.86-.43-.155-1.523.626-3.515 2.579l-2.891 2.773v-8.789c0-4.882-.117-9.101-.235-9.453-.312-.82-1.562-.82-1.874 0-.118.352-.235 4.57-.235 9.453v8.79l-2.93-2.813c-2.89-2.813-3.789-3.203-4.023-1.758-.078.508 1.133 1.953 3.71 4.531Z"
    />
  </svg>
)