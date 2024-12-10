"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-subtitle focus:ring-1 focus:ring-[#0cc9af] outline-none",
        className
      )}
      {...props}
    />
  )
)
Input.displayName = "Input"

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-subtitle focus:ring-1 focus:ring-[#05C7AE] outline-none",
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = "Textarea"

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string
  multiline?: boolean
}

export const FloatingInput = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FloatingInputProps>(
  ({ className, label, multiline = false, type = "text", ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(false)
      setHasValue(!!e.target.value)
    }

    const InputComponent = multiline ? Textarea : Input

    return (
      <div className="flex relative w-full">
        <label
          className={cn(
            "absolute left-4 transition-all duration-200",
            (isFocused || hasValue) ? "-top-2.5 text-sm bg-white px-1" : "top-4 text-gray-500"
          )}
        >
          {label}
        </label>
        <InputComponent
          type={type}
          className={cn(
            "h-14 rounded-2xl pl-4 pr-[18px] pt-4 w-full",
            multiline && "min-h-[150px] rounded-2xl pt-6 pb-4 resize-none",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref as any}
          {...props}
        />
      </div>
    )
  }
)

FloatingInput.displayName = "FloatingInput"