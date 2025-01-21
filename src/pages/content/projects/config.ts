import { defineCollection, z } from "astro:content";
import { string } from "astro:schema";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        lenguage: z.string(),
        desc: z.string(),
        framework: z.string().optional(),
        link: z.string().url(),
        repo: z.string().url(),
        img: z.string()
    })
})