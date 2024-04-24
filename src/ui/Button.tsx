import { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<'button'>&{
    href?: never
}
type LinkProps = ComponentPropsWithoutRef<'a'> & {
    href?: string
}

function isAnchorProp (props: ButtonProps | LinkProps): props is LinkProps{
    return "href" in props
}

export default function Button(props: ButtonProps | LinkProps) {
    if (isAnchorProp(props)) {
        return <a {...props}></a>
    }
  return (
    <button {...props}></button>
  )
}
