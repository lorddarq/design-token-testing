import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonlinkVariants = cva(
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
      'default': '',
      'pressed': '',
      'hover': '',
      'focus': 'border-[var(--color-components-button-secondary-stroke-focus)] border-[3px]',
      'disabled': ''
    }
    },
    defaultVariants: {
      size: 'large',
      state: 'default'
    },
  }
);

/**
 * ButtonLink
 * Generated from Figma component: Button Link
 * Component ID: 503:2408
 */
export interface ButtonLinkProps extends VariantProps<typeof buttonlinkVariants> {
  className?: string;
  children?: React.ReactNode;
  iconLeading?: boolean;
  iconTrailing?: boolean;
}

export const ButtonLink = ({
  className = '',
  children,
  size = 'large' as 'large' | 'medium' | 'small' | 'xsmall',
  state = 'default' as 'default' | 'pressed' | 'hover' | 'focus' | 'disabled',
  iconLeading = false,
  iconTrailing = false,
}: ButtonLinkProps) => {
  const variantClasses = buttonlinkVariants({ size, state });
  return (
    <div className={variantClasses + (className ? ' ' + className : '')}>
      {children}
    </div>
  );
};

export default ButtonLink;