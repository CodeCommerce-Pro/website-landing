import clsx from "clsx"
import type { FunctionComponent, ReactNode } from "react"

const FloatingBlock: FunctionComponent<{
  className?: string
  children?: ReactNode
}> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "flex h-full w-full flex-col items-left justify-left  text-left",
        className
      )}
    >
      {children != null && (
        <div className="mt-8 text-lg text-left space-y-4">{children}</div>
      )}
    </div>
  )
}

export default FloatingBlock