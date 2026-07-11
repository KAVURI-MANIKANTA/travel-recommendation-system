const moodData = {
  relax: [
    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
      desc: "Backwaters",
      details: "Enjoy houseboats, lush greenery, and peaceful backwater cruises.",
    },
    {
      name: "Bali",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600",
      desc: "Island vibes",
      details: "Relax on beaches, explore temples, and enjoy tropical resorts.",
    },
    {
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "Luxury stay",
      details: "Private villas, clear water, and peaceful ocean views.",
    },
    
    {
        name: "Andaman & Nicobar",
        image: "https://images.unsplash.com/photo-1589395937772-f670e7c2c7d1?w=1600",
        desc: "Crystal clear beaches and peaceful vibes",
        details: "Famous for Radhanagar Beach, scuba diving, and turquoise waters."
    },

    {
      name: "Goa (South)",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "Quiet beaches",
      details: "Less crowded beaches and relaxing sunsets.",
    },
    {
      name: "Phuket",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600",
      desc: "Tropical calm",
      details: "Beach resorts and spa relaxation.",
    },
  ],

  party: [
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "Nightlife",
      details: "Clubs, beach parties, and vibrant nightlife.",
    },
    {
      name: "Ibiza",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      desc: "DJ paradise",
      details: "World-famous DJs and party nights.",
    },
    {
        name: "Las Vegas",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600",
        desc: "Party capital with nightlife",
        details: "Known for casinos, nightlife, shows, and luxury hotels."
    },
    {
      name: "Bangkok",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600",
      desc: "Street vibe",
      details: "Clubs, rooftop bars, and street fun.",
    },
    {
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600",
      desc: "Luxury party",
      details: "Clubs, beach parties, and luxury nightlife.",
    },
    {
      name: "Mykonos",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "Island party",
      details: "Beach clubs and music festivals.",
    },
  ],

  adventure: [
    {
      name: "Manali",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
      desc: "Snow trekking",
      details: "Skiing, trekking, and mountain adventures.",
    },
    {
      name: "Ladakh",
      image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?w=600",
      desc: "Bike trips",
      details: "High-altitude roads and scenic landscapes.",
    },
    {
      name: "Rishikesh",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600",
      desc: "Rafting",
      details: "River rafting and adventure sports.",
    },
    {
      name: "Spiti Valley",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      desc: "Remote adventure",
      details: "Cold desert mountains and trekking.",
    },
    {
      name: "New Zealand",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      desc: "Extreme sports",
      details: "Bungee jumping, skydiving, hiking.",
    },
    {
      name: "Switzerland",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      desc: "Alps",
      details: "Skiing and mountain views.",
    },
  ],

  romantic: [
    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
      desc: "City of love",
      details: "Eiffel Tower, cafes, and romantic vibes.",
    },
    {
      name: "Udaipur",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600",
      desc: "Royal love",
      details: "Lakes, palaces, and sunset views.",
    },
    {
      name: "Venice",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600",
      desc: "Canals",
      details: "Gondola rides and romantic canals.",
    },
    {
      name: "Santorini",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "Sunsets",
      details: "White houses and sunset views.",
    },
    {
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "Luxury romance",
      details: "Private villas and beaches.",
    },
    {
      name: "Bora Bora",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "Island love",
      details: "Crystal waters and honeymoon stays.",
    },
  ],

  peaceful: [
    {
      name: "Rishikesh",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600",
      desc: "Yoga",
      details: "Meditation and spiritual vibes.",
    },
    {
      name: "Dharamshala",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      desc: "Monasteries",
      details: "Peaceful Tibetan culture.",
    },
    {
      name: "Bhutan",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
      desc: "Happiness",
      details: "Nature and calm environment.",
    },
    {
      name: "Kyoto",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600",
      desc: "Zen",
      details: "Temples and gardens.",
    },
    {
      name: "Coorg",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
      desc: "Green hills",
      details: "Coffee plantations and calm nature.",
    },
    {
      name: "Ooty",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
      desc: "Hill station",
      details: "Cool weather and peaceful views.",
    },
  ],
};

export default moodData;