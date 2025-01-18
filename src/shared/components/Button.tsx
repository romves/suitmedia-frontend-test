import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { SpinnerIcon } from './icon'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-100 disabled:text-primary-400",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-primary-600 bg-background shadow-sm text-primary-600 hover:text-primary-700 active:text-primary-800 hover:border-primary-700 active:border-primary-800 disabled:border-primary-200 disabled:text-primary-200",
        bezel:
          "enabled:bg-gradient-to-b from-primary-500 to-primary-600 text-primary-foreground hover:bg-gradient-to-b hover:from-primary-600 hover:to-primary-700 active:bg-gradient-to-b active:from-primary-700 active:to-primary-800 disabled:bg-primary-100 disabled:text-primary-400",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  leftIcon?: React.ElementType
  rightIcon?: React.ElementType
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'default',
      size = 'default',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      ...rest
    },
    ref
  ) => {
    const disabled = buttonDisabled || isLoading
    // const isIconOnly = !children && (LeftIcon || RightIcon)

    const buttonClasses = buttonVariants({
      variant,
      size,
      className,
    })

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        {...rest}
      >
        {
          isLoading && (
            <SpinnerIcon />
          )
        }
        {LeftIcon && <LeftIcon className="w-5 h-5" />}
        {children && <span>{children}</span>}
        {RightIcon && <RightIcon className="w-5 h-5" />}
      </button>
    )
  }
)
Button.displayName = 'Button'

export default Button;

export { buttonVariants }
