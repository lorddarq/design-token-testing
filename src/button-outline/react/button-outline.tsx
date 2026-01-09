import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonoutlineVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
    size: {
      'large': 'gap-[var(--spacing-space-0)] pl-[var(--spacing-space-200)] pr-[var(--spacing-space-200)] pt-[var(--spacing-space-200)] pb-[var(--spacing-space-200)] rounded-tl-[var(--radius-radius-150)] rounded-tr-[var(--radius-radius-150)] rounded-bl-[var(--radius-radius-150)] rounded-br-[var(--radius-radius-150)] pl-[var(--spacing-space-050)] pr-[var(--spacing-space-050)]',
      'medium': 'gap-[var(--spacing-space-0)] pl-[var(--spacing-space-150)] pr-[var(--spacing-space-150)] pt-[var(--spacing-space-150)] pb-[var(--spacing-space-150)] rounded-tl-[var(--radius-radius-150)] rounded-tr-[var(--radius-radius-150)] rounded-bl-[var(--radius-radius-150)] rounded-br-[var(--radius-radius-150)] pl-[var(--spacing-space-050)] pr-[var(--spacing-space-050)]',
      'small': 'gap-[var(--spacing-space-0)] pl-[var(--spacing-space-150)] pr-[var(--spacing-space-150)] pt-[var(--spacing-space-150)] pb-[var(--spacing-space-150)] rounded-tl-[var(--radius-radus-100)] rounded-tr-[var(--radius-radus-100)] rounded-bl-[var(--radius-radus-100)] rounded-br-[var(--radius-radus-100)] pl-[var(--spacing-space-050)] pr-[var(--spacing-space-050)]',
      'xsmall': 'gap-[var(--spacing-space-0)] pl-[var(--spacing-space-100)] pr-[var(--spacing-space-100)] pt-[var(--spacing-space-100)] pb-[var(--spacing-space-100)] rounded-tl-[var(--radius-radus-100)] rounded-tr-[var(--radius-radus-100)] rounded-bl-[var(--radius-radus-100)] rounded-br-[var(--radius-radus-100)] pl-[var(--spacing-space-050)] pr-[var(--spacing-space-050)]'
    },
    state: {
      'default': 'border-[var(--color-components-button-outline-stroke-default)] border-[1px]',
      'pressed': 'border-[var(--color-components-button-outline-stroke-pressed)] border-[1px]',
      'hover': 'border-[var(--color-components-button-outline-stroke-hover)] border-[1px]',
      'focus': 'border-[var(--color-components-button-outline-stroke-focus)] border-[3px]',
      'disabled': 'border-[var(--color-components-button-outline-background-disabled)] border-[1px]'
    }
    },
    defaultVariants: {
      size: 'large',
      state: 'default'
    },
  }
);

/**
 * ButtonOutline
 * Generated from Figma component: Button Outline
 * Component ID: 502:1189
 */
export interface ButtonOutlineProps extends VariantProps<typeof buttonoutlineVariants> {
  className?: string;
  children?: React.ReactNode;
  iconLeading?: boolean;
  iconTrailing?: boolean;
}

export const ButtonOutline = ({
  className = '',
  children,
  size = 'large' as 'large' | 'medium' | 'small' | 'xsmall',
  state = 'default' as 'default' | 'pressed' | 'hover' | 'focus' | 'disabled',
  iconLeading = false,
  iconTrailing = false,
}: ButtonOutlineProps) => {
  const variantClasses = buttonoutlineVariants({ size, state });
  return (
    <div className={variantClasses + (className ? ' ' + className : '')}>
      {children}
    </div>
  );
};

export default ButtonOutline;