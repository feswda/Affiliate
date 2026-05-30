import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { trendingEvents, venueData, teamData, tournaments } from './mockData.js'

export async function seedDatabase() {
  const payload = await getPayload({ config: configPromise })

  // Check if already seeded
  const existingCategories = await payload.find({ collection: 'categories' })
  if (existingCategories.totalDocs > 0) {
    console.log('Database already seeded.')
    return
  }

  console.log('Seeding database...')

  // Seed Categories
  const catFootball = await payload.create({
    collection: 'categories',
    data: { name: 'Football', slug: 'football' }
  })
  const catConcerts = await payload.create({
    collection: 'categories',
    data: { name: 'Concerts', slug: 'concerts' }
  })

  // Seed Venue
  const venue = await payload.create({
    collection: 'venues',
    data: {
      name: venueData.name,
      capacity: venueData.capacity,
      city: venueData.city,
      country: 'UK'
    }
  })

  // Seed Team
  const team = await payload.create({
    collection: 'teams',
    data: {
      name: teamData.name,
      slug: 'real-madrid'
    }
  })

  // Seed Partner
  const partner = await payload.create({
    collection: 'partners',
    data: {
      name: 'StubHub',
      baseUrlPattern: 'https://stubhub.com/event/{id}'
    }
  })

  // Seed Events
  for (const evt of trendingEvents) {
    await payload.create({
      collection: 'events',
      data: {
        title: evt.name,
        slug: evt.slug,
        category: evt.vertical === 'football' ? catFootball.id : catConcerts.id,
        venue: venue.id,
        startDatetime: evt.date,
        minPrice: evt.minPrice || 0,
        status: 'published',
        description: null, // richText requires specific format, leave null for now
        affiliateLinks: [
          { partner: partner.id, url: `https://stubhub.com/event/${evt.id}` }
        ]
      }
    })
  }

  // Create first user
  await payload.create({
    collection: 'users',
    data: {
      email: 'admin@helios.com',
      password: 'password123'
    }
  })

  console.log('Seeding complete! User: admin@helios.com / password123')
}
