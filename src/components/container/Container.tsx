import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './container.module.scss'

export type ContainerProps = {} & ComponentPropsWithoutRef<'div'>

export const Container = forwardRef<HTMLDivElement, ContainerProps>(({ className, ...rest }, ref) => {
    const classNames = `${s.container} ${className}`

    return <div className={classNames} ref={ref} {...rest}></div>
})
