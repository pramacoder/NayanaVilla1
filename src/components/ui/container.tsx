import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "narrow" | "wide";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = "div", size = "default", className, children, ...props }, ref) => {
    const sizeClasses = {
      default: "max-w-content", // 1280px
      narrow: "max-w-reading",  // 720px
      wide: "max-w-[1440px]",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto px-5 md:px-8 lg:px-16",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

