import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        lenguage: z.string(),
        desc: z.string(),
        starred: z.boolean(),
        framework: z.string().optional(),
        link: z.string().url().optional(),
        repo: z.string().url().optional(),
        styled: z.string().optional(),
        img: z.string(),
        profile: z.string()
    })
})

const projectsEditor = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projectsEditor" }),
    schema: z.object({
        title: z.string(),
        brief: z.string(),
        desc: z.string(),
        link: z.string(),
        img: z.string(),
        starred: z.boolean(),
        profile: z.string()
    })
})

export const collections = { projects, projectsEditor }