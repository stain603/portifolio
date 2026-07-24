import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type SharedProps = {
  children: React.ReactNode
  className?: string
}

type ButtonVariant = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type AnchorVariant = SharedProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type InteractiveHoverButtonProps = ButtonVariant | AnchorVariant

function ButtonContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#22C55E] transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="size-4" />
      </div>
    </>
  )
}

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: InteractiveHoverButtonProps) {
  const sharedClassName = cn(
    "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-[#27272A] bg-transparent p-2 px-6 text-center font-semibold text-[#FAFAFA] hover:border-[#22C55E]",
    className
  )

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props
    return (
      <a href={href} className={sharedClassName} {...anchorProps}>
        <ButtonContent>{children}</ButtonContent>
      </a>
    )
  }

  const buttonProps = props as ButtonVariant
  return (
    <button type="button" className={sharedClassName} {...buttonProps}>
      <ButtonContent>{children}</ButtonContent>
    </button>
  )
}
