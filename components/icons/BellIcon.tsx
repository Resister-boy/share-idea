import React from "react"
import { IconType } from "@/types/IconType"

export const BellIcon = ({ className, color, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="#B5B5B5"
      d="M11.094 3.242c-.117.547-.781 1.211-1.563 1.563-2.148 1.054-2.89 2.656-2.89 6.367 0 2.969-.04 3.203-1.172 4.258-.86.82-1.172 1.445-1.094 2.148l.117.977h16.016l.117-.977c.078-.703-.234-1.328-1.094-2.148-1.133-1.055-1.172-1.29-1.172-4.258 0-3.711-.742-5.313-2.89-6.367-.781-.352-1.446-1.016-1.563-1.563-.195-.703-.508-.898-1.406-.898-.898 0-1.21.195-1.406.898ZM9.766 20.82c0 1.68 3.593 2.5 4.804 1.133 1.211-1.328.82-1.64-2.07-1.64-2.031 0-2.734.117-2.734.507Z"
    />
  </svg>
)
