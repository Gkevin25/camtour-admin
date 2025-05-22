// This file contains mock data for the admin dashboard
// In a real application, this would be replaced with API calls to your backend

// Tours data
export const getAllTours = () => {
  return [
    {
      id: 1,
      title: "Mount Cameroon Hiking Adventure",
      image: "/placeholder.svg?height=300&width=400",
      price: 85000,
      duration: "2 days",
      rating: 4.8,
      reviews: 124,
      location: "Buea",
      tag: "Adventure",
      description:
        "Climb West Africa's highest peak with expert guides. Experience breathtaking views and diverse ecosystems.",
      highlights: [
        "Summit West Africa's highest mountain",
        "Experience diverse ecological zones",
        "Professional mountain guides",
        "Camping equipment included",
      ],
    },
    {
      id: 2,
      title: "Limbe Wildlife Centre & Black Sand Beaches",
      image: "/placeholder.svg?height=300&width=400",
      price: 45000,
      duration: "1 day",
      rating: 4.7,
      reviews: 98,
      location: "Limbe",
      tag: "Nature",
      description:
        "Discover Limbe's famous wildlife center and relax on unique black sand beaches. Includes hotel pickup and lunch.",
      highlights: [
        "Visit the Limbe Wildlife Centre and see rescued primates",
        "Relax on the volcanic black sand beaches",
        "Enjoy a traditional Cameroonian lunch",
        "Learn about local conservation efforts",
      ],
    },
    {
      id: 3,
      title: "Kribi Waterfall & Beach Excursion",
      image: "/placeholder.svg?height=300&width=400",
      price: 55000,
      duration: "1 day",
      rating: 4.9,
      reviews: 156,
      location: "Kribi",
      tag: "Beach",
      description:
        "Visit the spectacular Lobe Falls where the river meets the ocean and enjoy time on Kribi's pristine beaches.",
      highlights: [
        "See the unique Lobe Falls where water cascades directly into the ocean",
        "Relax on Kribi's beautiful white sand beaches",
        "Optional boat ride to get closer to the falls",
        "Fresh seafood lunch at a local restaurant",
      ],
    },
    {
      id: 4,
      title: "Yaoundé Cultural Heritage Tour",
      image: "/placeholder.svg?height=300&width=400",
      price: 35000,
      duration: "1 day",
      rating: 4.6,
      reviews: 87,
      location: "Yaoundé",
      tag: "Cultural",
      description: "Explore Cameroon's capital city, including government buildings, museums, and cultural landmarks.",
      highlights: [
        "Visit the National Museum of Yaoundé",
        "See the Unity Palace and government district",
        "Explore the Central Market",
        "Panoramic views from Mont Fébé",
      ],
    },
    {
      id: 5,
      title: "Waza National Park Safari",
      image: "/placeholder.svg?height=300&width=400",
      price: 95000,
      duration: "3 days",
      rating: 4.9,
      reviews: 112,
      location: "Far North",
      tag: "Wildlife",
      description:
        "Experience the incredible wildlife of Waza National Park, home to elephants, lions, giraffes, and numerous bird species.",
      highlights: [
        "Game drives in open safari vehicles",
        "Professional wildlife guides",
        "Comfortable accommodation in safari lodges",
        "All meals and refreshments included",
      ],
    },
    {
      id: 6,
      title: "Foumban Royal Palace & Artisan Tour",
      image: "/placeholder.svg?height=300&width=400",
      price: 50000,
      duration: "1 day",
      rating: 4.8,
      reviews: 64,
      location: "Foumban",
      tag: "Cultural",
      description:
        "Explore the historic Foumban Royal Palace and meet local artisans known for their exceptional craftsmanship.",
      highlights: [
        "Tour the Foumban Royal Palace and Museum",
        "Meet local artisans and see traditional crafts being made",
        "Shop for authentic Cameroonian art and crafts",
        "Learn about the history of the Bamoun Kingdom",
      ],
    },
    {
      id: 7,
      title: "Korup National Park Expedition",
      image: "/placeholder.svg?height=300&width=400",
      price: 100000,
      duration: "4 days",
      rating: 4.7,
      reviews: 42,
      location: "Southwest",
      tag: "Adventure",
      description:
        "Explore one of Africa's oldest and most diverse rainforests with expert guides. Spot rare primates and birds.",
      highlights: [
        "Guided hikes through pristine rainforest",
        "Wildlife spotting including rare primates",
        "Camping in the heart of the forest",
        "Learn about conservation efforts",
      ],
    },
    {
      id: 8,
      title: "Bamenda Highlands Cultural Experience",
      image: "/placeholder.svg?height=300&width=400",
      price: 75000,
      duration: "2 days",
      rating: 4.6,
      reviews: 53,
      location: "Northwest",
      tag: "Cultural",
      description:
        "Immerse yourself in the rich culture of the Bamenda Highlands. Visit traditional villages and witness cultural performances.",
      highlights: [
        "Visit traditional Bafut and Bali-Nyonga palaces",
        "Experience authentic cultural performances",
        "Meet local craftspeople and artisans",
        "Stunning mountain scenery and landscapes",
      ],
    },
  ]
}

export const getTourById = (id: string) => {
  const tours = getAllTours()
  return tours.find((tour) => tour.id.toString() === id) || null
}

// Destinations data
export const getAllDestinations = () => {
  return [
    {
      id: 1,
      name: "Limbe",
      region: "Coastal Region",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Limbe is a coastal city in the Southwest Region of Cameroon, known for its black sand beaches, botanical garden, and wildlife center.",
      highlights: [
        "Black Sand Beaches",
        "Limbe Wildlife Centre",
        "Limbe Botanical Garden",
        "Mount Cameroon Views",
        "Fresh Seafood",
      ],
      activities: [
        {
          name: "Visit the Limbe Wildlife Centre",
          description: "Home to rescued primates including gorillas, chimpanzees, and drills.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Relax on Down Beach",
          description: "Experience the unique black sand beaches formed from volcanic deposits.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      tours: [2],
    },
    {
      id: 2,
      name: "Kribi",
      region: "Coastal Region",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Kribi is a beach resort and sea port in Cameroon on the Gulf of Guinea coast, known for its white sand beaches and the Lobe Falls.",
      highlights: ["White Sand Beaches", "Lobe Falls", "Fresh Seafood", "Water Sports", "Pygmy Village Tours"],
      activities: [
        {
          name: "Visit Lobe Falls",
          description: "See the unique waterfall that flows directly into the Atlantic Ocean.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Beach Relaxation",
          description: "Enjoy the pristine white sand beaches and clear waters.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      tours: [3],
    },
    {
      id: 3,
      name: "Buea",
      region: "Western Highlands",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Buea is a city in the Southwest Region of Cameroon and the gateway to Mount Cameroon, the highest mountain in West Africa.",
      highlights: [
        "Mount Cameroon",
        "German Colonial Architecture",
        "Botanical Garden",
        "Mountain Climate",
        "Cultural Festivals",
      ],
      activities: [
        {
          name: "Hike Mount Cameroon",
          description: "Climb West Africa's highest peak with experienced guides.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Visit the Botanical Garden",
          description: "Explore the diverse plant species in this historic garden.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      tours: [1],
    },
    {
      id: 4,
      name: "Douala",
      region: "Coastal Region",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Douala is the largest city in Cameroon and its economic capital, featuring a major port, vibrant markets, and colonial architecture.",
      highlights: ["Maritime Museum", "Central Market", "Bonanjo District", "Wouri River", "Nightlife"],
      activities: [
        {
          name: "Explore the Maritime Museum",
          description: "Learn about Cameroon's maritime history and culture.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Shop at Central Market",
          description: "Experience the bustling atmosphere of this colorful market.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      tours: [],
    },
    {
      id: 5,
      name: "Yaoundé",
      region: "Central Region",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Yaoundé is the capital city of Cameroon, known for its seven hills, government buildings, and cultural institutions.",
      highlights: ["National Museum", "Unity Palace", "Mefou National Park", "Mont Fébé", "Benedictine Monastery"],
      activities: [
        {
          name: "Visit the National Museum",
          description: "Explore Cameroon's rich cultural heritage and history.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Climb Mont Fébé",
          description: "Enjoy panoramic views of the city from this scenic viewpoint.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      tours: [4],
    },
    {
      id: 6,
      name: "Foumban",
      region: "Western Highlands",
      image: "/placeholder.svg?height=800&width=1600",
      description: "Foumban is a city in western Cameroon, known for its royal palace, museum, and skilled artisans.",
      highlights: ["Royal Palace", "Palace Museum", "Artisan Quarter", "Traditional Crafts", "Cultural Festivals"],
      activities: [
        {
          name: "Tour the Royal Palace",
          description: "Explore the historic palace of the Bamoun Kingdom.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Visit the Artisan Quarter",
          description: "Watch skilled craftspeople create traditional art and crafts.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      tours: [6],
    },
  ]
}

export const getDestinationById = (id: string) => {
  const destinations = getAllDestinations()
  return destinations.find((destination) => destination.id.toString() === id) || null
}
