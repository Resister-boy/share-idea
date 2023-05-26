import React from "react"
import { IconType } from "@/types/IconType"

export const ImageIcon = ({ className, width, height, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    className={`${className}`}
    viewBox="0 0 23 23"
    {...rest}
  >
    <path
      fill="#333"
      d="M5.93 2.12c-1.546.396-2.516 1.078-3.27 2.336-.612.97-.683 1.905-.683 7.044 0 6.613.251 7.51 2.48 8.84.97.612 1.868.683 7.043.683s6.073-.071 7.044-.682c2.228-1.33 2.48-2.229 2.48-8.841 0-5.175-.072-6.073-.683-7.044-1.294-2.12-2.336-2.444-8.122-2.551-2.875-.036-5.678.036-6.29.215Zm11.536 1.653c1.617.683 2.3 2.3 2.3 5.535v2.515l-1.15-.18c-1.043-.179-1.474.073-3.702 1.977-2.623 2.264-3.701 2.624-4.995 1.653-1.078-.826-2.049-.646-4.097.755-1.078.719-2.049 1.186-2.156 1.042-.144-.143-.288-2.48-.36-5.175-.215-8.122.288-8.625 8.122-8.66 3.414 0 5.14.143 6.038.538Z"
    />
    <path
      fill="#333"
      d="M7.26 5.966c-.9.61-1.043 2.156-.288 3.198.647.899 2.66.899 3.306 0 1.114-1.51.108-3.773-1.653-3.773-.323 0-.934.251-1.366.575Z"
    />
  </svg>
)