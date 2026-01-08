import React, { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
    size: {
      'medium': '',
      'small': '',
      'xsmall': ''
    },
    appearance: {
      'default': '',
      'light': ''
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
      appearance: 'default',
      type: 'primary'
    },
  }
);

/**
 * Badge
 * Generated from Figma component: Badge
 * Component ID: 609:6521
 */
export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children?: React.ReactNode;
  iconLeading1314?: boolean;
  iconTrailing1315?: boolean;
}

const Badge: FC<BadgeProps> = ({
  className = '',
  children,
  size = 'medium',
  appearance = 'default',
  type = 'primary',
  iconLeading1314 = true,
  iconTrailing1315 = true,
}) => {
  return (
    <div
      className={`${badgeVariants({ size, appearance, type })} ${className}`}
      style={{
        width: 955px,
        height: 360px,
      }}
    >
      {children}
    </div>
  );
};

export default Badge;