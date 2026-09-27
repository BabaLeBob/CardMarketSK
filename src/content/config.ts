import { defineCollection, z } from 'astro:content';

const seriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    code: z.string(),
  }),
});

const cardsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    seriesId: z.string(),
    numberInSet: z.string(),
    versions: z.array(
      z.object({
        versionLabel: z.string(), // ex: V1 - Normal, V2 - Holographique
        image: z.string(),
        listings: z.array(
          z.object({
            condition: z.string(), // ex: Near Mint, Excellent
            price: z.number(),
            stock: z.number(),
          })
        ),
      })
    ),
  }),
});

export const collections = {
  series: seriesCollection,
  cards: cardsCollection,
};