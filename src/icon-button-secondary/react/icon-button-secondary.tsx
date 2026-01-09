import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const iconbuttonsecondaryVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
    size: {
      'large': 'gap-[var(--spacing-space-100)] pl-[var(--spacing-space-300)] pr-[var(--spacing-space-300)] pt-[var(--spacing-space-300)] pb-[var(--spacing-space-300)] rounded-tl-[var(--radius-radius-rounded)] rounded-tr-[var(--radius-radius-rounded)] rounded-bl-[var(--radius-radius-rounded)] rounded-br-[var(--radius-radius-rounded)]',
      'medium': 'gap-[var(--spacing-space-100)] pl-[var(--spacing-space-200)] pr-[var(--spacing-space-200)] pt-[var(--spacing-space-200)] pb-[var(--spacing-space-200)] rounded-tl-[var(--radius-radius-rounded)] rounded-tr-[var(--radius-radius-rounded)] rounded-bl-[var(--radius-radius-rounded)] rounded-br-[var(--radius-radius-rounded)]',
      'small': 'gap-[var(--spacing-space-100)] pl-[var(--spacing-space-200)] pr-[var(--spacing-space-200)] pt-[var(--spacing-space-200)] pb-[var(--spacing-space-200)] rounded-tl-[var(--radius-radius-rounded)] rounded-tr-[var(--radius-radius-rounded)] rounded-bl-[var(--radius-radius-rounded)] rounded-br-[var(--radius-radius-rounded)]',
      'xsmall': 'gap-[var(--spacing-space-100)] pl-[var(--spacing-space-150)] pr-[var(--spacing-space-150)] pt-[var(--spacing-space-150)] pb-[var(--spacing-space-150)] rounded-tl-[var(--radius-radius-rounded)] rounded-tr-[var(--radius-radius-rounded)] rounded-bl-[var(--radius-radius-rounded)] rounded-br-[var(--radius-radius-rounded)]'
    },
    state: {
      'default': 'bg-[var(--color-components-button-secondary-background-default)]',
      'pressed': 'bg-[var(--color-components-button-secondary-background-pressed)] shadow-shadow-s',
      'hover': 'bg-[var(--color-components-button-secondary-background-hover)] shadow-shadow-m',
      'focus': 'bg-[var(--color-components-button-secondary-background-focus)] border-[var(--color-components-button-secondary-stroke-focus)] border-[3px]',
      'disabled': 'bg-[var(--color-components-button-secondary-background-disabled)]'
    }
    },
    defaultVariants: {
      size: 'large',
      state: 'default'
    },
  }
);

/**
 * IconButtonSecondary
 * Generated from Figma component: Icon Button Secondary
 * Component ID: 503:2001
 */
export interface IconButtonSecondaryProps extends VariantProps<typeof iconbuttonsecondaryVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const IconButtonSecondary = ({
  className = '',
  children,
  size = 'large' as 'large' | 'medium' | 'small' | 'xsmall',
  state = 'default' as 'default' | 'pressed' | 'hover' | 'focus' | 'disabled',
}: IconButtonSecondaryProps) => {
  const variantClasses = iconbuttonsecondaryVariants({ size, state });
  return (
    <div className={variantClasses + (className ? ' ' + className : '')}>
      {children}
    </div>
  );
};

export default IconButtonSecondary;