import React, { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
    type: {
      'info': '',
      'error': '',
      'success': '',
      'warning': ''
    }
    },
    defaultVariants: {
      type: 'info'
    },
  }
);

/**
 * Alert
 * Generated from Figma component: Alert
 * Component ID: 708:7829
 */
export interface AlertProps extends VariantProps<typeof alertVariants> {
  className?: string;
  children?: React.ReactNode;
  2ndContent70812?: boolean;
  cta70813?: boolean;
  icon70814?: boolean;
  title70827?: boolean;
}

const Alert: FC<AlertProps> = ({
  className = '',
  children,
  type = 'info',
  2ndContent70812 = true,
  cta70813 = true,
  icon70814 = true,
  title70827 = true,
}) => {
  return (
    <div
      className={`${alertVariants({ type })} ${className}`}
      style={{
        width: 1296px,
        height: 640px,
      }}
    >
      {children}
    </div>
  );
};

export default Alert;