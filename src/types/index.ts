import { ChangeEventHandler, MouseEventHandler } from "react";

import { IconType } from "react-icons";

export interface IButtonIcon {
    content: string;
    properties?: { local: string; global: string }[];
    icon?: IconType;
    doClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export interface ILinkIcon {
    content?: string;
    properties?: { local: string; global: string }[];
    icon?: IconType;
    href: string;
}

export interface Card {
    id: string;
    text: string;
    title: string;
    links: Link[];
}

export interface Link {
    name: string;
    href: string;
}

export interface IPanel {
    id: string;
    text: string;
    title: string;
}

export interface IForm {
    id: string;
    text: string;
    title: string;
}

export interface IFormProps {
    form: IForm2;
}

export interface IForm2 {
    [key: string]: {
        value: string;
        valid: boolean;
        error: string;
    }
}

export type User = {
    id: number;
    name?: string;
}

export interface IData {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
}

export interface IInputText {
    children?: string
    error?: string
    handleChange?: ChangeEventHandler<HTMLInputElement>
    name?: string
    pattern?: string
    required?: boolean
    type?: string
    valid?: string
    value?: string
}

export interface IData3 {
    first?: string
    last?: string
}