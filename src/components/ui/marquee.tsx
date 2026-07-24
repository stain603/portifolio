import { Children, type ComponentPropsWithoutRef, useState } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
  vertical?: boolean
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 2,
  ...props
}: MarqueeProps) {
  const [touchPaused, setTouchPaused] = useState(false)
  const items = Children.toArray(children)

  return (
    <div
      {...props}
      onTouchEnd={() => setTouchPaused(false)}
      className={cn(
        "group/marquee flex overflow-hidden p-2 [--duration:35s] [--gap:1rem]",
        touchPaused && "[&_.marquee-track]:![animation-play-state:paused]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn("marquee-track flex shrink-0 items-stretch gap-(--gap)", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover/marquee:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {items.map((child, childIndex) => (
            <div
              key={childIndex}
              className="shrink-0"
              onTouchStart={() => setTouchPaused(true)}
            >
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
