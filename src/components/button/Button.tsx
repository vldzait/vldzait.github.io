import React, { FC } from 'react';
import cn from 'clsx';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={cn('storybook-button', `storybook-button--${size}`, mode)}
      style={{ backgroundColor: backgroundColor || 'green' }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
