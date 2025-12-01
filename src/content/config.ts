import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        lenguage: z.string(),
        desc: z.string(),
        starred: z.boolean(),
        framework: z.string().optional(),
        link: z.string().url(),
        repo: z.string().url(),
        styled: z.string().optional(),
        img: z.string()
    })
})

export const collections = { projects }