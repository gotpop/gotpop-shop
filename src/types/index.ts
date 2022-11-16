import { ChangeEventHandler, MouseEventHandler } from "react";

import { IconType } from "react-icons";

export interface IButtonIcon {
    content: string;
    properties?: { local: string; global: string }[];
    icon?: IconType;
    doClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export interface ILinkInternal {
    vars?: object;
    children?: string;
    properties?: { local: string; global: string }[];
    icon?: IconType;
    href: string;
}

export interface ILinkIcon {
    text?: string;
    children?: string;
    vars?: object;
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
        text: string;
        valid: boolean;
        error: string;
    }
}

export type User = {
    id: number;
    name?: string;
}

export interface IResults {
    firstName?: {
        text: string,
        value: string
    }
    lastName?: {
        text: string,
        value: string
    }
    email?: {
        text: string,
        value: string
    }
    password?: {
        text: string,
        value: string
    }
}

export interface IData {
    response?: Response;
    results?: IResults;
}

export interface IInputText {
    children?: string
    label?: string
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

export interface IPage {
    id: string;
    direction: string;
    link: {
        href: string;
        text: string;
    }
    excerpt: string;
    title: string;
}