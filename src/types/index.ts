import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            selectmenu: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLSelectElement>,
                HTMLSelectElement
            >
        }
    }
}

export interface IButtonIcon {
    content: string
    properties?: { local: string; global: string }[]
    icon?: IconType
    doClick?: MouseEventHandler<HTMLButtonElement>
}


export type Person = {
    id: string
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    gender: string
}
