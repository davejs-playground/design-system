import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export const Appearance = ['default', 'primary', 'secondary', 'warning', 'danger', 'link'] as const;
export type Appearance = (typeof Appearance)[number];

export const Size = ['small', 'medium', 'large'] as const;
export type Size = (typeof Size)[number];

export type ButtonProps = ComponentProps<'button'> & {
  /**
   * Defines the intent of the button action.
   * @default default
   *
   * # **`default`**
   * Unopinionated button style.
   *
   * # **`primary`**
   * Used for the primary actions such as "Save" or "Submit".
   *
   * # **`secondary`**
   * Used for secondary/repetitive actions such as "Cancel" or "Reset".
   *
   * # **`warning`**
   * Used for actions that require attention or caution.
   *
   * # **`danger`**
   * Used for actions that result in irreversible changes or deletion of data.
   *
   * # **`link`**
   * Used for inline actions alongside text content.
   */
  appearance?: Appearance;
  /**
   * Sets the button's size
   * @default medium
   * */
  size?: Size;
  /** Icon to be displayed inside the button */
  icon?: React.ReactNode;
  /** Shows a loading spinner inside the button and disables it */
  isLoading?: boolean;

  /** If true, the button will span the full width of its container */
  isFullWidth?: boolean;
  /** If true, the button will be rendered as a child component */
  asChild?: boolean;
  /** If true, the button will be rendered as an icon */
  isIconOnly?: boolean;
};

const buttonVariants = cva(
  [
    'inline-flex cursor-pointer items-center justify-center gap-[0.25em] overflow-hidden rounded-md border !border-transparent px-[0.75em] py-[0.5em] text-sm leading-[1.25] font-medium transition-colors duration-200 ease-in-out outline-none',

    // icons
    'focus-visible:ring-ring [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-[1em]',

    // disabled
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',

    // focus-visible
    'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-offset-1',

    // aria-invalid
    'aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40',
  ],
  {
    variants: {
      appearance: {
        default: 'bg-default text-default-foreground shadow-xs hover:bg-default/90',
        primary: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        warning: 'bg-warning text-warning-foreground shadow-xs hover:bg-warning',
        danger:
          'bg-danger text-danger-foreground shadow-xs hover:bg-danger/90 focus-visible:ring-danger/50 dark:bg-danger/60 dark:focus-visible:ring-danger/40',
        link: 'text-neutral underline-offset-4 hover:underline',
      } satisfies Record<Appearance, string>,
      size: {
        small: 'text-xs',
        medium: 'text-sm',
        large: 'text-md',
      } satisfies Record<Size, string>,
    },
  },
);

const Button = ({
  className,
  appearance = 'default',
  size = 'medium',
  isLoading = false,
  asChild = false,
  children,
  disabled = false,
  isIconOnly = false,
  isFullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ appearance, size, className }),
        isIconOnly && '!size-[2.55em] p-0',
        isFullWidth && 'w-full',
      )}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading && <Loader2 className="size-4 animate-spin" />}
      {children && <span className="truncate">{children}</span>}
    </Comp>
  );
};

export default Button;
