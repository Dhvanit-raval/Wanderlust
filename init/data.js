const sampleListings = [
  {
    title: "Seaside Villa",
    description:
      "A peaceful beachside villa with private pool and sea-facing balcony. Perfect for families and friends.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    price: 18500,
    location: "Goa",
    country: "India",
    category: "Beach",
  },
  {
    title: "Mountain Cabin Escape",
    description:
      "Rustic wooden cabin surrounded by pine trees, offering hiking trails and cozy nights by the fire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    price: 12500,
    location: "Manali",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Skyline Rooftop Café",
    description:
      "Trendy rooftop café with panoramic views of the city skyline. Great for dates and sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    },
    price: 4500,
    location: "Mumbai",
    country: "India",
    category: "Amazing View",
  },
  {
    title: "Artisan Coffee Bar",
    description:
      "Modern café serving freshly roasted coffee and vegan desserts in a minimal aesthetic space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
    price: 3200,
    location: "Bangalore",
    country: "India",
    category: "Trending",
  },
  {
    title: "Desert Camp Retreat",
    description:
      "Luxury tents under the stars in the golden sands of Jaisalmer. Includes camel rides and local cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80",
    },
    price: 9800,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
  },
  {
    title: "Tokyo Street Ramen",
    description:
      "Authentic ramen restaurant offering rich broths and handmade noodles in the heart of Tokyo.",
    image: {
      filename: "listingimage",
      url: "https://visit-chiyoda.tokyo/app/upload/images/P1599500.jpg",
    },
    price: 5100,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
  },
  {
    title: "Countryside Farmhouse Stay",
    description:
      "A cozy farmhouse surrounded by green fields and peaceful scenery, ideal for a calm weekend.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
    },
    price: 8900,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms",
  },
  {
    title: "Parisian Boutique Café",
    description:
      "Elegant café offering croissants, espresso, and a romantic atmosphere near the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    },
    price: 6200,
    location: "Paris",
    country: "France",
    category: "Iconic Cities",
  },
  {
    title: "Modern Apartment with City View",
    description:
      "A high-rise apartment with sleek design and floor-to-ceiling windows overlooking the skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    },
    price: 17500,
    location: "Singapore",
    country: "Singapore",
    category: "Iconic Cities",
  },
  {
    title: "Vintage Book Café",
    description:
      "A cozy café surrounded by shelves of classic novels, perfect for reading and relaxing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
    price: 3400,
    location: "London",
    country: "United Kingdom",
    category: "Trending",
  },
  {
    title: "Lakeview Cottage",
    description:
      "Beautiful wooden cottage beside a calm lake. Great for photography, fishing, and family getaways.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    price: 9800,
    location: "Nainital",
    country: "India",
    category: "Lakefront",
  },
  {
    title: "Jungle Treehouse Stay",
    description:
      "Unique stay in an elevated treehouse offering panoramic forest views and nature trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    price: 11800,
    location: "Kerala",
    country: "India",
    category: "Amazing View",
  },
  {
    title: "Urban Studio Apartment",
    description:
      "Compact studio apartment designed for digital nomads, close to cafes and public transport.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/ee56da4a-48ba-42cb-a048-eb2e4af66a43.jpg?im_w=960",
    },
    price: 8500,
    location: "Berlin",
    country: "Germany",
    category: "Rooms",
  },
  {
    title: "Heritage Haveli",
    description:
      "Experience royalty in a 200-year-old haveli featuring antique decor and traditional cuisine.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/19/55/31/ranthambhore-heritage.jpg?w=900&h=-1&s=1",
    },
    price: 15200,
    location: "Jaipur",
    country: "India",
    category: "Trending",
  },
  {
    title: "Italian Countryside Vineyard",
    description:
      "Stay amidst grapevines, enjoy wine tasting, and soak in Tuscan sunsets at this serene villa.",
    image: {
      filename: "listingimage",
      url: "https://wineinternationalassociation.org/wp-content/uploads/2021/01/Italian-Wineries-Connoisseur-Feature-Image-1536x768.jpg",
    },
    price: 19600,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
  },
  {
    title: "Snow Cabin Retreat",
    description:
      "Warm and cozy wooden cabin surrounded by snow, complete with fireplace and hot cocoa bar.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?auto=format&fit=crop&w=800&q=80",
    },
    price: 13200,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "City Art Gallery Café",
    description:
      "A creative café featuring rotating art exhibitions and handcrafted drinks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    price: 4100,
    location: "Los Angeles",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Desert Luxury Villa",
    description:
      "Experience ultimate comfort in this modern desert villa with infinity pool and sunset views.",
    image: {
      filename: "listingimage",
      url: "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1920/media/minor/anantara/images/qasr-al-sarab-desert-resort-by-anantara/villas/sahra/sahra-banner-lowersize.jpg",
    },
    price: 23400,
    location: "Dubai",
    country: "UAE",
    category: "Amazing Pools",
  },
  {
    title: "Forest Yoga Retreat",
    description:
      "Reconnect with yourself in this forest wellness retreat offering yoga, meditation, and nature walks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=800&q=80",
    },
    price: 9600,
    location: "Bali",
    country: "Indonesia",
    category: "Camping",
  },
  {
    title: "Riverside Tea House",
    description:
      "Traditional tea house with beautiful river view serving premium teas and pastries.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    price: 4800,
    location: "Seoul",
    country: "South Korea",
    category: "Lakefront",
  },
  {
    title: "Cozy Hilltop Homestay",
    description:
      "Peaceful homestay on a hill with wide valley views and authentic homemade food.",
    image: {
      filename: "listingimage",
      url: "https://media1.thrillophilia.com/filestore/8kqreob7ozehafw0550339cxgc9o_51.webp?w=auto&h=600",
    },
    price: 7800,
    location: "Darjeeling",
    country: "India",
    category: "Amazing View",
  },
  {
    title: "Lakeside Camping Site",
    description:
      "Camp under the stars near a serene lake with kayaking, bonfire nights, and adventure vibes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    price: 6200,
    location: "Udaipur",
    country: "India",
    category: "Lakefront",
  },
  {
    title: "Luxury Floating Villa",
    description:
      "A unique overwater villa offering endless ocean views and private decks for sunrise lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80",
    },
    price: 29800,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing Pools",
  },
  {
    title: "Modern Sushi Bar",
    description:
      "Contemporary sushi restaurant serving fresh seafood and sake in a minimalist interior.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1066,w_1600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/overview_jx8dt0.jpg",
    },
    price: 6100,
    location: "Osaka",
    country: "Japan",
    category: "Iconic Cities",
  },
  {
    title: "Rustic Forest Cabin",
    description:
      "Secluded log cabin deep in the forest, perfect for nature lovers and writers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=800&q=80",
    },
    price: 8900,
    location: "Oregon",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Sky Tower Lounge",
    description:
      "High-rise restaurant and bar offering cocktails with breathtaking skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    },
    price: 9300,
    location: "Dubai",
    country: "UAE",
    category: "Amazing View",
  },
  {
    title: "Art Deco Hotel",
    description:
      "Stylish art deco-inspired hotel with rooftop pool, gourmet dining, and modern comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    },
    price: 17400,
    location: "Miami",
    country: "United States",
    category: "Amazing Pools",
  },
  {
    title: "Herbal Spa Resort",
    description:
      "Relax and rejuvenate in this eco-resort offering herbal treatments, spa, and organic meals.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max300/651542305.jpg?k=30f69ec1ebe37096034b9520df9275ac53e68bdd06ed0a42fe95db2074529d2a&o=",
    },
    price: 11200,
    location: "Chiang Mai",
    country: "Thailand",
    category: "Trending",
  },
  {
    title: "Cultural Heritage Stay",
    description:
      "Stay in a traditional home surrounded by historic architecture and local art.",
    image: {
      filename: "listingimage",
      url: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/02/24110447/Untitled-design-2022-02-24T110435.744.jpg?tr=w-1366,f-jpg,pr-true",
    },
    price: 8700,
    location: "Varanasi",
    country: "India",
    category: "Iconic Cities",
  },
  {
    title: "Skyline Penthouse",
    description:
      "Luxurious penthouse with private terrace, jacuzzi, and stunning night views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    },
    price: 28500,
    location: "New York City",
    country: "United States",
    category: "Amazing View",
  },
  {
    title: "Rainforest Resort",
    description:
      "Eco-friendly resort located in the heart of rainforest with nature trails and waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=800&q=80",
    },
    price: 15800,
    location: "Borneo",
    country: "Malaysia",
    category: "Mountains",
  },
  {
    title: "Luxury Heritage Palace",
    description:
      "Royal palace stay offering grand rooms, local performances, and cultural cuisine.",
    image: {
      filename: "listingimage",
      url: "https://mediawtravel.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/12/29171146/30.176.1-Darbar-Hall-at-Rajmahal-Palace-RAAS-Jaipur.jpg",
    },
    price: 26400,
    location: "Udaipur",
    country: "India",
    category: "Trending",
  },
  {
    title: "Cityview Lounge Café",
    description:
      "Trendy café on the 25th floor serving coffee, desserts, and city views from above.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    price: 5200,
    location: "Bangkok",
    country: "Thailand",
    category: "Amazing View",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beach",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Rooms",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Farms",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Beach",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Lakefront",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Amazing View",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Camping",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic Cities",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Beach",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic Cities",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Beach",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Iconic Cities",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Trending",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Amazing Pools",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Beach",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Camping",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Rooms",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Lakefront",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing Pools",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage", 
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Beach",
  }
];

module.exports = { data: sampleListings };