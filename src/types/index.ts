import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export interface IButtonIcon {
    content: string
    properties?: { local: string; global: string }[]
    icon?: IconType
    doClick?: MouseEventHandler<HTMLButtonElement>
}

export type Card = {
    id: string
    text: string
    title: string
    links: Link[]
}

export type Link = {
    name: string
    href: string
}


