import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'

type Intent =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'destructive'
  | 'link'
type Size = 'sm' | 'md' | 'lg'

export type ButtonProps = React.ComponentProps<'button'> & {
  /**
   * Defines the intent of the button action.
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
   * # **`destructive`**
   * Used for actions that result in irreversible changes or deletion of data.
   *
   * # **`link`**
   * Used for inline actions alongside text content.
   * @default default
   */
  intent?: Intent
  /** Sets the button's size */
  size?: Size
  /** Icon to be displayed inside the button */
  icon?: React.ReactNode
  /** Shows a loading spinner inside the button and disables it */
  isLoading?: boolean

  /** If true, the button will span the full width of its container */
  isFullWidth?: boolean
  /** If true, the button will be rendered as a child component */
  asChild?: boolean
  /** If true, the button will be rendered as an icon */
  isIconOnly?: boolean
}

const buttonVariants = cva(
  [
    'inline-flex overflow-hidden items-center justify-center leading-[1.25] gap-[0.25em] px-[0.75em] py-[0.5em] rounded-md transition-colors duration-200 ease-in-out border !border-transparent outline-none cursor-pointer text-sm',

    // icons
    '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-[1em] [&_svg]:shrink-0',
    // disabled
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',

    // focus-visible
    'focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-1',

    // aria-invalid
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  ],
  {
    variants: {
      intent: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        primary:
          'bg-blue-500 text-primary-foreground shadow-xs hover:bg-blue-500/90',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        warning: 'bg-warning text-white shadow-xs hover:bg-warning/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/50 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        link: 'text-primary underline-offset-4 hover:underline',
      } satisfies Record<Intent, string>,
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-md',
      } satisfies Record<Size, string>,
    },

    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  },
)

const Button = ({
  className,
  intent,
  size,
  isLoading = false,
  asChild = false,
  children,
  disabled = false,
  isIconOnly = false,
  isFullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ intent, size, className }),
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
  )
}

export default Button
