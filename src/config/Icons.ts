import { string } from 'astro/zod'
import type {IconType} from 'react-icons'
import * as SI from 'react-icons/si'

export type DevIcon = 
    | 'astro'
    | 'github'
    | 'instagram'
    | 'typescript'
    | 'linkedin'
    | 'react'
    | 'javascript'
    | 'tailwind'

const Icons: { [key in DevIcon]: IconType } = {
    'astro': SI.SiAstro,
    'github': SI.SiGithub,
    'instagram': SI.SiInstagram,
    'typescript': SI.SiTypescript,
    'linkedin': SI.SiLinkedin,
    'react' : SI.SiReact,
    'javascript': SI.SiJavascript,
    'tailwind': SI.SiTailwindcss
}

const IconsColors: { [key in DevIcon]: string} = {
    'typescript': '#3178c6',
    'javascript': '#efd81d',
    'react': "#1399c4",
    'tailwind': '#3ebff8',
    'linkedin': '#126bc4',
    'instagram': '#bb23ac',
    'astro': '#170b29',
    'github': '#16181f'
}


export {Icons, IconsColors };