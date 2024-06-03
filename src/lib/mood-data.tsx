const moodData = [
  {
    name: "Adventurous",
    places: [
      {
        name: "Queenstown, New Zealand",
        description:
          "A thrill-seeker's paradise with bungee jumping, skydiving, and white-water rafting.",
      },
      {
        name: "Queenstown, New Zealand",
        description:
          "A thrill-seeker's paradise with bungee jumping, skydiving, and white-water rafting.",
      },
      {
        name: "Queenstown, New Zealand",
        description:
          "A thrill-seeker's paradise with bungee jumping, skydiving, and white-water rafting.",
      },
    ],
  },
  {
    name: "Relaxed",
    places: [
      {
        name: "Bali, Indonesia",
        description:
          "A tropical haven with serene beaches, yoga retreats, and luxurious spas.",
      },
      {
        name: "Bali, Indonesia",
        description:
          "A tropical haven with serene beaches, yoga retreats, and luxurious spas.",
      },
      {
        name: "Bali, Indonesia",
        description:
          "A tropical haven with serene beaches, yoga retreats, and luxurious spas.",
      },
    ],
  },
  {
    name: "Exotic",
    places: [
      {
        name: "Marrakech, Morocco",
        description:
          "A vibrant souk with colorful markets, aromatic spices, and stunning architecture.",
      },
      {
        name: "Marrakech, Morocco",
        description:
          "A vibrant souk with colorful markets, aromatic spices, and stunning architecture.",
      },
      {
        name: "Marrakech, Morocco",
        description:
          "A vibrant souk with colorful markets, aromatic spices, and stunning architecture.",
      },
    ],
  },
  {
    name: "Playful",
    places: [
      {
        name: "Orlando, Florida",
        description:
          "A theme park paradise with Disney World, Universal Studios, and Legoland.",
      },
      {
        name: "Orlando, Florida",
        description:
          "A theme park paradise with Disney World, Universal Studios, and Legoland.",
      },
      {
        name: "Orlando, Florida",
        description:
          "A theme park paradise with Disney World, Universal Studios, and Legoland.",
      },
    ],
  },
  {
    name: "Wild",
    places: [
      {
        name: "Yellowstone National Park, USA",
        description:
          "A wilderness wonderland with geysers, hot springs, and diverse wildlife.",
      },
      {
        name: "Yellowstone National Park, USA",
        description:
          "A wilderness wonderland with geysers, hot springs, and diverse wildlife.",
      },
      {
        name: "Yellowstone National Park, USA",
        description:
          "A wilderness wonderland with geysers, hot springs, and diverse wildlife.",
      },
    ],
  },
  {
    name: "Spiritual",
    places: [
      {
        name: "Varanasi, India",
        description:
          "A sacred city with ancient temples, river Ganges, and spiritual enlightenment.",
      },
      {
        name: "Varanasi, India",
        description:
          "A sacred city with ancient temples, river Ganges, and spiritual enlightenment.",
      },
      {
        name: "Varanasi, India",
        description:
          "A sacred city with ancient temples, river Ganges, and spiritual enlightenment.",
      },
    ],
  },
  {
    name: "Romantic",
    places: [
      {
        name: "Paris, France",
        description:
          "The City of Love with iconic Eiffel Tower, charming streets, and luxurious getaways.",
      },
      {
        name: "Paris, France",
        description:
          "The City of Love with iconic Eiffel Tower, charming streets, and luxurious getaways.",
      },
      {
        name: "Paris, France",
        description:
          "The City of Love with iconic Eiffel Tower, charming streets, and luxurious getaways.",
      },
    ],
  },
  {
    name: "Vibrant",
    places: [
      {
        name: "Rio de Janeiro, Brazil",
        description:
          "A Carnival city with colorful streets, stunning beaches, and lively nightlife.",
      },
      {
        name: "Rio de Janeiro, Brazil",
        description:
          "A Carnival city with colorful streets, stunning beaches, and lively nightlife.",
      },
      {
        name: "Rio de Janeiro, Brazil",
        description:
          "A Carnival city with colorful streets, stunning beaches, and lively nightlife.",
      },
    ],
  },
  {
    name: "Scenic",
    places: [
      {
        name: "Ha Long Bay, Vietnam",
        description:
          "A breathtaking archipelago with emerald waters, limestone karsts, and scenic boat tours.",
      },
      {
        name: "Orlando, Florida",
        description:
          "A theme park paradise with Disney World, Universal Studios, and Legoland.",
      },
      {
        name: "Orlando, Florida",
        description:
          "A theme park paradise with Disney World, Universal Studios, and Legoland.",
      },
    ],
  },
  {
    name: "Independent",
    places: [
      {
        name: "Reykjavik, Iceland",
        description:
          "A hip city with vibrant culture, stunning landscapes, and solo traveler vibes.",
      },
      {
        name: "Reykjavik, Iceland",
        description:
          "A hip city with vibrant culture, stunning landscapes, and solo traveler vibes.",
      },
      {
        name: "Reykjavik, Iceland",
        description:
          "A hip city with vibrant culture, stunning landscapes, and solo traveler vibes.",
      },
    ],
  },
  {
    name: "Spontaneous",
    places: [
      {
        name: "New Orleans, Louisiana",
        description:
          "A jazz city with lively streets, impromptu performances, and carefree atmosphere.",
      },
      {
        name: "New Orleans, Louisiana",
        description:
          "A jazz city with lively streets, impromptu performances, and carefree atmosphere.",
      },
      {
        name: "New Orleans, Louisiana",
        description:
          "A jazz city with lively streets, impromptu performances, and carefree atmosphere.",
      },
    ],
  },
  {
    name: "Epicurean",
    places: [
      {
        name: "Tuscany, Italy",
        description:
          "A foodie's paradise with vineyards, olive groves, and gourmet cuisine.",
      },
      {
        name: "Tuscany, Italy",
        description:
          "A foodie's paradise with vineyards, olive groves, and gourmet cuisine.",
      },
      {
        name: "Tuscany, Italy",
        description:
          "A foodie's paradise with vineyards, olive groves, and gourmet cuisine.",
      },
    ],
  },
  {
    name: "Urban",
    places: [
      {
        name: "Tokyo, Japan",
        description:
          "A futuristic city with neon lights, bustling streets, and cutting-edge technology.",
      },
      {
        name: "Tokyo, Japan",
        description:
          "A futuristic city with neon lights, bustling streets, and cutting-edge technology.",
      },
      {
        name: "Tokyo, Japan",
        description:
          "A futuristic city with neon lights, bustling streets, and cutting-edge technology.",
      },
    ],
  },
  {
    name: "Coastal",
    places: [
      {
        name: "Santorini, Greece",
        description:
          "A picturesque island with whitewashed houses, blue domes, and stunning sunsets.",
      },
      {
        name: "Santorini, Greece",
        description:
          "A picturesque island with whitewashed houses, blue domes, and stunning sunsets.",
      },
      {
        name: "Santorini, Greece",
        description:
          "A picturesque island with whitewashed houses, blue domes, and stunning sunsets.",
      },
    ],
  },
  {
    name: "Reverence",
    place: {
      name: "Jerusalem, Israel",
      description:
        "A sacred city with ancient history, religious landmarks, and spiritual significance.",
    },
    places: [
      {
        name: "Jerusalem, Israel",
        description:
          "A sacred city with ancient history, religious landmarks, and spiritual significance.",
      },
      {
        name: "Jerusalem, Israel",
        description:
          "A sacred city with ancient history, religious landmarks, and spiritual significance.",
      },
      {
        name: "Jerusalem, Israel",
        description:
          "A sacred city with ancient history, religious landmarks, and spiritual significance.",
      },
    ],
  },
  {
    name: "Guilty",
    places: [
      {
        name: "Orlando, Florida",
        description:
          "A theme park paradise with Disney World, Universal Studios, and Legoland.",
      },
    ],
  },
  {
    name: "Vagabond",
    places: [
      {
        name: "Chiang Mai, Thailand",
        description:
          "A digital nomad hub with affordable living, rich culture, and adventurous spirit.",
      },
      {
        name: "Chiang Mai, Thailand",
        description:
          "A digital nomad hub with affordable living, rich culture, and adventurous spirit.",
      },
      {
        name: "Chiang Mai, Thailand",
        description:
          "A digital nomad hub with affordable living, rich culture, and adventurous spirit.",
      },
    ],
  },
  {
    name: "Wanderlust",
    places: [
      {
        name: "The Great Ocean Road, Australia",
        description:
          "A scenic drive with stunning coastlines, iconic landmarks, and endless exploration.",
      },
      {
        name: "The Great Ocean Road, Australia",
        description:
          "A scenic drive with stunning coastlines, iconic landmarks, and endless exploration.",
      },
      {
        name: "The Great Ocean Road, Australia",
        description:
          "A scenic drive with stunning coastlines, iconic landmarks, and endless exploration.",
      },
    ],
  },
];

export default moodData;
