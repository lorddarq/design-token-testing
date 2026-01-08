import React, { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cookiesalertVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
    type: {
      'floating': '',
      'full-width': '',
      'mobile': ''
    }
    },
    defaultVariants: {
      type: 'full-width'
    },
  }
);

/**
 * CookiesAlert
 * Generated from Figma component: Cookies Alert
 * Component ID: 708:7850
 */
export interface CookiesAlertProps extends VariantProps<typeof cookiesalertVariants> {
  className?: string;
  children?: React.ReactNode;
  title70832?: boolean;
  2ndContent70836?: boolean;
}

const CookiesAlert: FC<CookiesAlertProps> = ({
  className = '',
  children,
  type = 'full-width',
  title70832 = true,
  2ndContent70836 = true,
}) => {
  return (
    <div
      className={`${cookiesalertVariants({ type })} ${className}`}
      style={{
        width: 1520px,
        height: 966px,
      }}
    >
      {children}
    </div>
  );
};

export default CookiesAlert;