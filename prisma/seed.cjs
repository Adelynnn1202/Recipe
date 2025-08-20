/* eslint-disable */
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
async function main() {
  const password = await bcrypt.hash('password123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'demo@recipe.app' },
    update: {},
    create: {
      email: 'demo@recipe.app',
      password,
      name: 'Demo User',
      handle: 'demo',
      role: 'CREATOR',
    },
  });

  const recipe = await prisma.recipe.create({
    data: {
      title: 'Summer Glow Makeup Look',
      coverImage: '/uploads/demo-cover.jpg',
      category: 'MAKEUP',
      tags: ['glow', 'summer', 'beginner'],
      difficulty: 'EASY',
      estTimeMinutes: 20,
      estCostCents: 3500,
      allowComments: true,
      premium: false,
      authorId: user.id,
      materials: {
        create: [
          {
            name: 'Primer – “Soft Silk” style',
            quantity: '1',
            offers: {
              create: [
                { vendor: 'Amazon', product: 'Fenty-like Primer', url: 'https://example.com/primer', priceCents: 1200, currency: 'USD' }
              ]
            }
          },
          {
            name: 'Highlighter – “Positive Light” style',
            offers: {
              create: [
                { vendor: 'Sephora', product: 'Rare-like Highlighter', url: 'https://example.com/highlighter', priceCents: 1900, currency: 'USD' }
              ]
            }
          }
        ]
      },
      steps: {
        create: [
          { index: 1, text: 'Prep skin with moisturizer and primer.', mediaUrl: null },
          { index: 2, text: 'Apply foundation evenly with a damp sponge.', mediaUrl: null },
          { index: 3, text: 'Highlight cheekbones and inner corners.', mediaUrl: null }
        ]
      }
    }
  });

  console.log('Seed complete:', { user: user.email, recipe: recipe.title });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
