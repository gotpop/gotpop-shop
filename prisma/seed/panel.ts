import { books, html, keyboard, mac } from "./photos";

export const panels = [
    {
        direction: 'ltr',
        linktext: 'Find out more',
        linkhref: '/shop',
        excerpt: 'Size queries in Container Queries provide a way to query the size of a container, and conditionally apply CSS to the content of that container.',
        title: '@container queries',
        photos: {
            create: books
        }
    },
    {
        direction: 'ltr',
        linktext: 'Find out more',
        linkhref: '/shop',
        excerpt: 'The color-contrast() functional notation takes a color value and compares it to a list of other color values, selecting the one with the highest contrast from the list.',
        title: 'Color Contrast',
        photos: {
            create: html
        }
    },
    {
        direction: 'ltr',
        linktext: 'Find out more',
        linkhref: '/shop',
        excerpt: 'Say Hello to selectmenu, a Fully Style-able select Element.',
        title: 'Select Menu Element',
        photos: {
            create: keyboard
        }
    },
    {
        direction: 'ltr',
        linktext: 'Find out more',
        linkhref: '/shop',
        excerpt: 'Before @custom-media, media queries had to repeat themselves over and over, or rely on preprocessors to generate the proper output based on static variables during build time.',
        title: '@custom-media',
        photos: {
            create: mac
        }
    }
]
