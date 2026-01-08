import React, { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeiconVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
    size: {
      'medium': '',
      'small': ''
    },
    appearance: {
      'light': '',
      'dark': ''
    },
    type: {
      'primary': '',
      'success': '',
      'warning': '',
      'error': '',
      'neutral': ''
    }
    },
    defaultVariants: {
      size: 'medium',
      appearance: 'light',
      type: 'primary'
    },
  }
);

/**
 * BadgeIcon
 * Generated from Figma component: Badge Icon
 * Component ID: 609:6642
 */
export interface BadgeIconProps extends VariantProps<typeof badgeiconVariants> {
  className?: string;
  children?: React.ReactNode;

}

const BadgeIcon: FC<BadgeIconProps> = ({
  className = '',
  children,
  size = 'medium',
  appearance = 'light',
  type = 'primary',
}) => {
  return (
    <div
      className={`${badgeiconVariants({ size, appearance, type })} ${className}`}
      style={{
        width: 411px,
        height: 230px,
      }}
    >
      {children}
    </div>
  );
};

export default BadgeIcon;