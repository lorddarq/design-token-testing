import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttondangerVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
    size: {
      'large': 'gap-[var(--spacing-space-0)] pl-[var(--spacing-space-200)] pr-[var(--spacing-space-200)] pt-[var(--spacing-space-200)] pb-[var(--spacing-space-200)] rounded-tl-[var(--radius-radius-150)] rounded-tr-[var(--radius-radius-150)] rounded-bl-[var(--radius-radius-150)] rounded-br-[var(--radius-radius-150)] pl-[var(--spacing-space-050)] pr-[var(--spacing-space-050)]',
      'medium': 'gap-[var(--spacing-space-0)] pl-[var(--spacing-space-150)] pr-[var(--spacing-space-150)] pt-[var(--spacing-space-150)] pb-[var(--spacing-space-150)] rounded-tl-[var(--radius-radius-150)] rounded-tr-[var(--radius-radius-150)] rounded-bl-[var(--radius-radius-150)] rounded-br-[var(--radius-radius-150)] pl-[var(--spacing-space-050)] pr-[var(--spacing-space-050)]',
      'small': 'gap-[var(--spacing-space-0)] pl-[var(--spacing-space-150)] pr-[var(--spacing-space-150)] pt-[var(--spacing-space-150)] pb-[var(--spacing-space-150)] rounded-tl-[var(--radius-radus-100)] rounded-tr-[var(--radius-radus-100)] rounded-bl-[var(--radius-radus-100)] rounded-br-[var(--radius-radus-100)] pl-[var(--spacing-space-050)] pr-[var(--spacing-space-050)]',
      'xsmall': 'gap-[var(--spacing-space-050)] pl-[var(--spacing-space-100)] pr-[var(--spacing-space-100)] pt-[var(--spacing-space-100)] pb-[var(--spacing-space-100)] rounded-tl-[var(--radius-radus-100)] rounded-tr-[var(--radius-radus-100)] rounded-bl-[var(--radius-radus-100)] rounded-br-[var(--radius-radus-100)] pl-[var(--spacing-space-050)] pr-[var(--spacing-space-050)]'
    },
    state: {
      'default': 'bg-[var(--color-components-button-danger-background-default)]',
      'pressed': 'bg-[var(--color-components-button-danger-background-pressed)] shadow-shadow-s',
      'hover': 'bg-[var(--color-components-button-danger-background-hover)] shadow-shadow-m',
      'focus': 'bg-[var(--color-components-button-danger-background-focus)] border-[var(--color-components-button-danger-stroke-focus)] border-[3px]',
      'disabled': 'bg-[var(--color-components-button-danger-background-disabled)]'
    }
    },
    defaultVariants: {
      size: 'large',
      state: 'default'
    },
  }
);

/**
 * ButtonDanger
 * Generated from Figma component: Button Danger
 * Component ID: 502:915
 */
export interface ButtonDangerProps extends VariantProps<typeof buttondangerVariants> {
  className?: string;
  children?: React.ReactNode;
  iconLeading?: boolean;
  iconTrailing?: boolean;
}

export const ButtonDanger = ({
  className = '',
  children,
  size = 'large' as 'large' | 'medium' | 'small' | 'xsmall',
  state = 'default' as 'default' | 'pressed' | 'hover' | 'focus' | 'disabled',
  iconLeading = false,
  iconTrailing = false,
}: ButtonDangerProps) => {
  const variantClasses = buttondangerVariants({ size, state });
  return (
    <div className={variantClasses + (className ? ' ' + className : '')}>
      {children}
    </div>
  );
};

export default ButtonDanger;