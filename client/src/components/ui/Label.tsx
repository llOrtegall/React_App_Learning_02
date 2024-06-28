import React, { forwardRef } from 'react'

interface PropsLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label = forwardRef<HTMLLabelElement, PropsLabel>(
  ({ children, className, ...props }, ref) => {
    return (
      <label ref={ref} {...props} className={`block text-sm font-medium text-gray-700 ${className}`} >
        {children}
      </label>
    )
  }
)

Label.displayName = 'Label'
