import React from 'react'

export interface HeaderProps {
    window?: () => Window,
    children: JSX.Element
}

export interface TopHeaderProps {
    window?: () => Window,
    title?: String
}

