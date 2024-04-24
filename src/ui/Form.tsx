import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react"

type FormProps = ComponentPropsWithoutRef<"form"> & {
    onSave: (value: unknown) => void
}

export type FormHandle = {
    clear: ()=> void
}

const Form =forwardRef<FormHandle, FormProps>(
    function Form({children, onSave, ...props}, ref) {
        //we want to expoze a function that can be called outside that component to interact with that component
        const form = useRef<HTMLFormElement>(null)
        useImperativeHandle(ref, () => {
            return {
                clear() {
                    form.current?.reset()
                }
            }
        })
        function handleSubmit (e: FormEvent<HTMLFormElement>){
            e.preventDefault()
            const fromData = new FormData(e.currentTarget)
            const data = Object.fromEntries(fromData)
            onSave(data)
        }
      return (
        <form onSubmit={handleSubmit} {...props} ref={form}>{children}</form>
      )
    }
) 

export default Form