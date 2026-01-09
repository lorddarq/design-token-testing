import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const iconbuttonoutlineVariants = cva(
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
      'default': 'border-[var(--color-components-button-primary-stroke-focus)] border-[1px]',
      'pressed': 'border-[var(--color-components-button-primary-background-pressed)] border-[1px]',
      'hover': 'border-[var(--color-components-button-primary-background-hover)] border-[1px]',
      'focus': 'border-[var(--color-components-button-secondary-stroke-focus)] border-[3px]',
      'disabled': 'border-[var(--color-components-button-primary-background-disabled)] border-[1px]'
    }
    },
    defaultVariants: {
      size: 'large',
      state: 'default'
    },
  }
);

/**
 * IconButtonOutline
 * Generated from Figma component: Icon Button Outline
 * Component ID: 503:2082
 */
export interface IconButtonOutlineProps extends VariantProps<typeof iconbuttonoutlineVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const IconButtonOutline = ({
  className = '',
  children,
  size = 'large' as 'large' | 'medium' | 'small' | 'xsmall',
  state = 'default' as 'default' | 'pressed' | 'hover' | 'focus' | 'disabled',
}: IconButtonOutlineProps) => {
  const variantClasses = iconbuttonoutlineVariants({ size, state });
  return (
    <div className={variantClasses + (className ? ' ' + className : '')}>
      {children}
    </div>
  );
};

export default IconButtonOutline;