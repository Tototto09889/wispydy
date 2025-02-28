import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:pages";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/pages/blog/` directory.
  loader: glob({ base: "./src/pages/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
