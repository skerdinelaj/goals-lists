import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

type PolymorphicComponentProps<T extends ElementType> = {
    as?: T
    children: ReactNode
} & ComponentPropsWithoutRef<T>

export default function PolymorphicComponent<C extends ElementType>({as, children, ...props}: PolymorphicComponentProps<C>) {
    const Component = as || "div"
  return (
    <Component {...props}>{children}</Component>
  )
}
//note for me
//Polymorphic components in React refer to components that can accept and render different types of children. This allows for greater flexibility and reusability of components.


