import React from "react"
import { IconType } from "@/types/IconType"

export const DownIcon = ({ className, width, height, ...rest}: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    className={className}
    {...rest}
  >
    <path d="M27.7 111.1C17.4 113.5 8 121.4 3.3 131.5 1 136.6.5 138.8.6 146c0 16-9.6 5.2 119.2 134.2 77.7 77.8 116 115.5 119.1 117.2 7.3 3.9 15.8 5.3 23.4 3.7 3.4-.7 8.3-2.4 10.8-3.7 3.1-1.7 41.4-39.4 119.1-117.2C521 151.2 511.4 162 511.4 146c0-7.2-.4-9.4-2.8-14.7-8.4-18.4-30.8-26.2-49.1-17.1-2.6 1.3-38.8 36.8-103.7 101.6L256 315.5l-99.8-99.7C91 150.7 55.1 115.5 52.5 114.2c-7.6-3.7-17-4.9-24.8-3.1z" />
  </svg>
)
