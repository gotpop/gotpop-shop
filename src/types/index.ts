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
