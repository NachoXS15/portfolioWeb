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
    | 'html'
    | 'css'
    | 'git'
    | 'nodejs'
    | 'bootstrap'
    | 'notion'
    | 'sql'
    | 'express'
    | 'sass'
    | 'vscode'
    | 'figma'
    | 'adobexd'
    | 'illustrator'
    | 'postgresql'
    | 'nextjs' 

const Icons: {[key in DevIcon]: IconType } = {
    'astro': SI.SiAstro,
    'github': SI.SiGithub,
    'instagram': SI.SiInstagram,
    'typescript': SI.SiTypescript,
    'linkedin': SI.SiLinkedin,
    'react' : SI.SiReact,
    'javascript': SI.SiJavascript,
    'tailwind': SI.SiTailwindcss,
    'html': SI.SiHtml5,
    'css': SI.SiCss3,
    'git': SI.SiGit,
    "nodejs": SI.SiNodedotjs,
    "bootstrap": SI.SiBootstrap,
    "notion": SI.SiNotion,
    "sql": SI.SiMysql,
    "express": SI.SiExpress,
    "sass": SI.SiSass,
    "vscode": SI.SiVisualstudiocode,
    "figma": SI.SiFigma,
    "adobexd": SI.SiAdobexd,
    "illustrator": SI.SiAdobeillustrator,
    "postgresql": SI.SiPostgresql,
    "nextjs": SI.SiNextdotjs
}

const IconsColors: {[key in DevIcon]: string} = {
    'typescript': '#3178c6',
    'javascript': '#efd81d',
    'react': "#1399c4",
    'tailwind': '#3ebff8',
    'linkedin': '#126bc4',
    'instagram': '#bb23ac',
    'astro': '#f67a01',
    'github': '#16181f',
    'html': "#e5532d",
    "css": "#2167b2",
    'git': "#f05539",
    "nodejs": "#77c832",
    "bootstrap": "#8c19fe",
    "notion": "#ffffff",
    "sql": "#ffffff",
    "express": '#ffffff',
    "sass": "#ff89c4",
    "vscode": "#2dabdd",
    "figma": "default",
    "adobexd": "#68004e",
    "illustrator": "#ff9a00",
    "postgresql": "#31638c",
    "nextjs": "#000"
}


export {Icons, IconsColors };