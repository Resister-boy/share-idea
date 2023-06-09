import { IconType } from '@/types/IconType';
import React from 'react';

export const CommentIcon = ({ className, color, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="#B5B5B5"
      d="M1.438 3.625c-.813.812-.813.906-.813 5.187 0 4.188.031 4.376.781 5.094.407.438.907.781 1.094.781.156 0 .313.407.313.876 0 1.937 1.28 2.124 2.968.374L7 14.688H17.719l.843-.812c.813-.813.813-.906.813-5.125s0-4.313-.813-5.125l-.843-.813H2.28l-.844.813ZM18 4.406c.469.531.625 1.25.719 3.469.031 1.531 0 3.25-.094 3.844-.375 1.969-.594 2.031-6.469 2.031H6.875L5.5 15c-.75.688-1.438 1.25-1.563 1.25-.093 0-.187-.5-.187-1.125 0-.938-.125-1.156-.938-1.406-1.28-.469-1.656-1.906-1.53-5.657C1.468 3.5.968 3.75 10 3.75c7.125 0 7.438.031 8 .656Z"
    />
  </svg>
)
