import React from 'react';

/**
 * ButtonSecondary
 * Generated from Figma component: Button Secondary
 * Component ID: 10022:960
 */
export interface ButtonSecondaryProps extends VariantProps<typeof buttonsecondaryVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const ButtonSecondary = ({
  className = '',
  children,
}: ButtonSecondaryProps) => {
  const variantClasses = '';
  return (
    <div className={variantClasses + (className ? ' ' + className : '')}>
      {children}
    </div>
  );
};

export default ButtonSecondary;