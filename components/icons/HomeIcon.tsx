import React from "react"
import { IconType } from "@/types/IconType"

export const HomeIcon = ({ className, width, height, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 64 64"
    className={className}
    {...rest}
  >
    <path d="M15.3 14.2C7.4 22.1.7 29.5.4 30.7c-.8 2.9 1.2 6.2 4.1 6.9 2.5.6 2.5.8 2.5 11.5 0 9.9.2 11 2.2 12.9 1.9 1.8 3.3 2 9.3 1.8l7-.3.5-9.5.5-9.5h11L38 54l.5 9.5 7 .3c6 .2 7.4 0 9.3-1.8 2-1.9 2.2-3 2.2-12.9 0-10.7 0-10.9 2.5-11.5 2.9-.7 4.9-4 4.1-6.9-.3-1.2-7-8.6-14.9-16.5C38.4 4.1 33.7 0 32 0c-1.7 0-6.4 4.1-16.7 14.2z" />
  </svg>
)
