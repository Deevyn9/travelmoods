const moodsData = [
  {
    name: "Adventurous",
    emoji: "🏃‍♂",
    places: [
      {
        name: "Interlaken, Switzerland",
        description:
          "Offers skydiving, paragliding, and canyoning in the Swiss Alps.",
        src: "https://www.youtube.com/embed/qDcn4-Oe9Nc?si=SfQ7vFBuVfv8id_1",
      },
      {
        name: "Queenstown, New Zealand",
        description:
          "Known as the adventure capital of the world, offering bungee jumping, skydiving, and jet boating.",
        src: "https://www.youtube.com/embed/bFCoMqDGo_w?si=B7wsE7lIeiMDJgr8",
      },
      {
        name: "Machu Picchu, Peru",
        description:
          "An ancient Incan city with challenging hikes and breathtaking views.",
        src: "https://www.youtube.com/embed/oZ90M55mDac?si=A70C0DC0zHSHFqVm",
      },
      {
        name: "Moab, Utah, USA",
        description:
          "A paradise for rock climbing, mountain biking, and off-roading in Arches and Canyonlands National Parks.",
        src: "https://www.youtube.com/embed/HxUb1RJf-3s?si=ZHjE3nyAQhBLrvti",
      },
      {
        name: "Chamonix, France",
        description:
          "Famous for alpine skiing, paragliding, and mountaineering around Mont Blanc.",
        src: "https://www.youtube.com/embed/x4JkC3QOMSc?si=uoMKHNjaXgCgQPXE",
      },
      {
        name: "Whistler, Canada",
        description:
          "Renowned for skiing, snowboarding, and mountain biking in the summer.",
        src: "https://www.youtube.com/embed/syTdzClrSno?si=zM2bBQBA_6vKw6F_",
      },
      {
        name: "Patagonia, Argentina/Chile",
        description:
          "A vast wilderness with opportunities for trekking, climbing, and kayaking.",
        src: "https://www.youtube.com/embed/AIXmPeqyuH0?si=OhxnhpzEgT98zqg4",
      },
      {
        name: "Reykjavik, Iceland",
        description: "Explore volcanic landscapes, glaciers, and hot springs.",
        src: "https://www.youtube.com/embed/j80T3sbTePM?si=CL3uAtkg7VePP3WL",
      },

      {
        name: "Costa Rica",
        description: "Known for zip-lining, white-water rafting, and surfing.",
        src: "https://www.youtube.com/embed/AQc1NSwqgwM?si=mX_35CLtKy-mZ1Iy",
      },

      {
        name: "Torres del Paine, Chile",
        description: "Perfect for trekking, wildlife watching, and camping.",
        src: "https://www.youtube.com/embed/xN_dWIRJRcc?si=0sUGJqtlHMnDKwTl",
      },
    ],
  },
  {
    name: "Relaxed",
    emoji: "😴",
    places: [
      {
        name: "Bali, Indonesia",
        description:
          "A tropical haven with serene beaches, yoga retreats, and luxurious spas.",
        src: "https://www.youtube.com/embed/BFS9n4B_2xA?si=FYlUlhhLGimhyGhL",
      },
      {
        name: "Maldives",
        description:
          "Idyllic islands with overwater bungalows, crystal-clear waters, and world-class resorts.",
        src: "https://www.youtube.com/embed/Z755vZBf9oM?si=diLXVpSEXJnJR6pU",
      },
      {
        name: "Santorini, Greece",
        description:
          "Famous for its stunning sunsets, white-washed buildings, and calm Aegean Sea.",
        src: "https://www.youtube.com/embed/yONFghDe__w?si=rqn_gxl2M0SO0dPu",
      },
      {
        name: "Maui, Hawaii, USA",
        description:
          "Offers beautiful beaches, lush rainforests, and luxurious resorts.",
        src: "https://www.youtube.com/embed/DXJVyEowf8o?si=7oaqq4umN7uBip6K",
      },
      {
        name: "Amalfi Coast, Italy",
        description:
          "Known for its picturesque coastline, charming towns, and delicious cuisine.",
        src: "https://www.youtube.com/embed/Mupom-sgjAU?si=QaLS0fZduhQejJsm",
      },
      {
        name: "Sedona, Arizona, USA",
        description:
          "Renowned for its red rock scenery, spas, and spiritual retreats.",
        src: "https://www.youtube.com/embed/_qHjLngt7OI?si=BlHmrSAP7zrPueN0",
      },
      {
        name: "Tulum, Mexico",
        description:
          "A bohemian paradise with beautiful beaches, cenotes, and eco-friendly resorts.",
        src: "https://www.youtube.com/embed/dA6GR9HuqJk?si=K_WYSrVVLZkae7zw",
      },
      {
        name: "Fiji",
        description:
          "A tropical escape with pristine beaches, coral reefs, and luxury resorts.",
        src: "https://www.youtube.com/embed/tFinoZHubEQ?si=NbGa4K1XnbhX5RsW",
      },
      {
        name: "Phuket, Thailand",
        description:
          "Offers stunning beaches, vibrant nightlife, and serene wellness retreats.",
        src: "https://www.youtube.com/embed/m_pCh6p8_wg?si=UGs5NONRT-uliGg5",
      },
      {
        name: "Lake Como, Italy",
        description:
          "Known for its beautiful villas, tranquil waters, and charming towns.",
        src: "https://www.youtube.com/embed/5NfhCB_8uAk?si=tyi_WL5d3A8dbq6X",
      },
    ],
  },
  {
    name: "Exotic",
    emoji: "🌺",
    places: [
      {
        name: "Marrakech, Morocco",
        description:
          "A vibrant city with bustling souks, stunning palaces, and a rich cultural heritage.",
        src: "https://www.youtube.com/embed/0NkAE4N8E1A?si=ESpFjMTAsgIKsN_T",
      },
      {
        name: "Kyoto, Japan",
        description:
          "Famous for its historic temples, traditional tea houses, and beautiful gardens.",
        src: "https://www.youtube.com/embed/IMjwqUeEOo4?si=5IrKiKpFysm6e6zT",
      },
      {
        name: "Bora Bora, French Polynesia",
        description:
          "Known for its turquoise waters, luxury overwater bungalows, and stunning coral reefs.",
        src: "https://www.youtube.com/embed/gSudm8JWvlQ?si=l5cqbOrg-X5ie7xB",
      },
      {
        name: "Zanzibar, Tanzania",
        description:
          "An island paradise with white sandy beaches, spice plantations, and historic Stone Town.",
        src: "https://www.youtube.com/embed/zr9WDySrMEs?si=BTNUasMdwgPnM136",
      },
      {
        name: "Istanbul, Turkey",
        description:
          "A city where East meets West, offering a mix of historic mosques, bazaars, and palaces.",
        src: "https://www.youtube.com/embed/1L2PIyGczCA?si=WRfCmK3BcoCXF7qg",
      },
      {
        name: "Rajasthan, India",
        description:
          "Known for its majestic palaces, colorful festivals, and vibrant culture.",
        src: "https://www.youtube.com/embed/sWMnfd4Cras?si=he_l9hAQ6CaXtYVL",
      },
      {
        name: "Galápagos Islands, Ecuador",
        description:
          "A unique archipelago with diverse wildlife and stunning landscapes.",
        src: "https://www.youtube.com/embed/vpsI03O4eok?si=DBMFDi2GhaGXpZKJ",
      },
      {
        name: "Petra, Jordan",
        description:
          "An ancient city carved into pink sandstone cliffs, offering a glimpse into history.",
        src: "https://www.youtube.com/embed/N4IBbMQSPlk?si=-5J6FMcFR759D2PP",
      },
      {
        name: "Hoi An, Vietnam",
        description:
          "A charming town with lantern-lit streets, historic architecture, and a rich culinary scene.",
        src: "https://www.youtube.com/embed/N4IBbMQSPlk?si=F30_GOO3X9TI-w6i",
      },
      {
        name: "Madagascar",
        description:
          "An island with unique wildlife, lush rainforests, and beautiful beaches.",
        src: "https://www.youtube.com/embed/oO3orxMtmgU?si=80En0mtQuYYG9_n-",
      },
    ],
  },
  {
    name: "Playful",
    emoji: "🤹",
    places: [
      {
        name: "Orlando, Florida, USA",
        description:
          "Home to world-famous theme parks like Walt Disney World and Universal Studios.",
        src: "https://www.youtube.com/embed/-Tz4G11f9T8?si=aLJvuCMdR03_wJny",
      },
      {
        name: "Tokyo, Japan",
        description:
          "Offers a mix of high-tech attractions, quirky cafes, and vibrant neighborhoods.",
        src: "https://www.youtube.com/embed/77lWbSfnF_g?si=5m4gugwJsH5hEjfi",
      },
      {
        name: "Las Vegas, Nevada, USA",
        description:
          "Known for its lively entertainment, casinos, and vibrant nightlife.",
        src: "https://www.youtube.com/embed/HjklndipGGQ?si=diwaIc7DTm_HYeCb",
      },
      {
        name: "Barcelona, Spain",
        description:
          "A city with a playful spirit, offering unique architecture, beaches, and lively festivals.",
        src: "https://www.youtube.com/embed/ulpTYgJQxEg?si=kJzgLbFR-UnPfoLi",
      },
      {
        name: "Amsterdam, Netherlands",
        description:
          "Famous for its canals, vibrant nightlife, and unique cultural experiences.",
        src: "https://www.youtube.com/embed/3izVLop9iKg?si=X3HnuRycyvqVEJlE",
      },
      {
        name: "Miami, Florida, USA",
        description:
          "Offers beautiful beaches, lively nightlife, and a vibrant cultural scene.",
        src: "https://www.youtube.com/embed/yQCBAaJg1LE?si=HADyi2LpVHaviFRk",
      },
      {
        name: "Berlin, Germany",
        description:
          "A city known for its eclectic nightlife, art scene, and historical landmarks.",
        src: "https://www.youtube.com/embed/PNt9-tfsXYw?si=hzvJ68ZMeJgFL4bn",
      },
      {
        name: "Sydney, Australia",
        description:
          "Offers iconic landmarks, beautiful beaches, and a vibrant cultural scene.",
        src: "https://www.youtube.com/embed/PLsFZbqr3Qo?si=JP37xcKJd5onYDnD",
      },
      {
        name: "Rio de Janeiro, Brazil",
        description:
          "Famous for its carnival, beaches, and lively samba music.",
        src: "https://www.youtube.com/embed/ZYA0Bz3Tsl8?si=ys4Dz6-Z2kg3glmi",
      },
      {
        name: "New Orleans, Louisiana, USA",
        description:
          "Known for its vibrant music scene, festivals, and unique cultural heritage.",
        src: "https://www.youtube.com/embed/fFWJc2bXOvk?si=Jt4alEoxHgUq6B9t",
      },
    ],
  },
  {
    name: "Wild",
    emoji: "🦁",
    places: [
      {
        name: "Serengeti, Tanzania",
        description:
          "Famous for its annual wildebeest migration and diverse wildlife.",
        src: "https://www.youtube.com/embed/OH6tv9y-iaE?si=fKFjQI1-dHEitXSL",
      },
      {
        name: "Kruger National Park, South Africa",
        description:
          "One of Africa's largest game reserves, offering the chance to see the Big Five.",
        src: "https://www.youtube.com/embed/Wh-aeugBA3E?si=8jLWICP_o41u_Ub3",
      },
      {
        name: "Amazon Rainforest, Brazil",
        description:
          "The world's largest rainforest, home to an incredible diversity of wildlife.",
        src: "https://www.youtube.com/embed/AhP5Tg_BLIk?si=qxZ7t2okVDQUzuXz",
      },
      {
        name: "Yellowstone National Park, USA",
        description:
          "Known for its geothermal features and diverse wildlife, including bison and grizzly bears.",
        src: "https://www.youtube.com/embed/bme0rs75Z3E?si=T6q4tUC4iNV-hpY5",
      },
      {
        name: "Borneo, Malaysia/Indonesia",
        description:
          "Home to endangered orangutans, unique wildlife, and lush rainforests.",
        src: "https://www.youtube.com/embed/iwINn95cp4Y?si=U0k-Uit42Hl-4RXq",
      },
      {
        name: "Okavango Delta, Botswana",
        description:
          "A unique inland delta with abundant wildlife and stunning landscapes.",
        src: "https://www.youtube.com/embed/__lYWslv7W4?si=FkCXTHUIlaMIDIo-",
      },
      {
        name: "Rwanda",
        description:
          "Famous for its mountain gorillas and stunning volcanic landscapes.",
        src: "https://www.youtube.com/embed/6qhm_Re-cQ8?si=QUWqhWUp698Ggtsw",
      },
      {
        name: "Pantanal, Brazil",
        description:
          "The world's largest tropical wetland, home to jaguars, caimans, and diverse birdlife.",
        src: "https://www.youtube.com/embed/jxHqOFe98xY?si=SyQagYNCR5tbfwMV",
      },
      {
        name: "Galápagos Islands, Ecuador",
        description:
          "A unique archipelago with diverse wildlife and stunning landscapes.",
        src: "https://www.youtube.com/embed/paTsVDhqX9Q?si=Vjh04bv53fC_MkZi",
      },
      {
        name: "Madagascar",
        description:
          "An island with unique wildlife, lush rainforests, and beautiful beaches.",
        src: "https://www.youtube.com/embed/oO3orxMtmgU?si=80En0mtQuYYG9_n-",
      },
    ],
  },
  {
    name: "Spiritual",
    emoji: "☯",
    places: [
      {
        name: "Varanasi, India",
        description:
          "A holy city on the banks of the Ganges River, known for its spiritual significance and rituals.",
        src: "https://www.youtube.com/embed/1udJsv1VcII?si=8dYeI9wI5SnUQWIC",
      },
      {
        name: "Lhasa, Tibet",
        description:
          "The spiritual heart of Tibetan Buddhism, home to the Potala Palace and Jokhang Temple.",
        src: "https://www.youtube.com/embed/5Gg4Lmqx7GM?si=RkkqWD_0MOq4m7-2",
      },
      {
        name: "Kyoto, Japan",
        description:
          "Famous for its historic temples, traditional tea houses, and beautiful gardens.",
        src: "https://www.youtube.com/embed/IMjwqUeEOo4?si=rxd7MTbXmXZxCGxx",
      },
      {
        name: "Jerusalem, Israel",
        description:
          "A city of profound religious significance for Judaism, Christianity, and Islam.",
        src: "https://www.youtube.com/embed/YF_m6lYV4d0?si=_sr1JkayR9x5RPoW",
      },
      {
        name: "Machu Picchu, Peru",
        description:
          "An ancient Incan city with a deep spiritual and historical legacy.",
        src: "https://www.youtube.com/embed/lNIEZ61PyG0?si=MEVtnJDk4-z80I1j",
      },
      {
        name: "Uluru, Australia",
        description:
          "A sacred site for the Aboriginal people, known for its spiritual significance and stunning beauty.",
        src: "https://www.youtube.com/embed/qL2aTgk266s?si=vn_LlGEuyBclFFx0",
      },
      {
        name: "Rishikesh, India",
        description:
          "Known as the yoga capital of the world, offering numerous ashrams and spiritual retreats.",
        src: "https://www.youtube.com/embed/z_84snnKkjQ?si=EahYlh_KIY76Sd1p",
      },
      {
        name: "Sedona, Arizona, USA",
        description:
          "Renowned for its red rock scenery, spas, and spiritual retreats.",
        src: "https://www.youtube.com/embed/_qHjLngt7OI?si=k73VNbtSi2lCb283",
      },
      {
        name: "Angkor Wat, Cambodia",
        description:
          "A massive temple complex and a symbol of Cambodia's spiritual and cultural heritage.",
        src: "https://www.youtube.com/embed/Qh8fZUnpKyg?si=JaqKuHtGKvEYL4ri",
      },
      {
        name: "Mount Kailash, Tibet",
        description:
          "Considered a sacred mountain by Buddhists, Hindus, Jains, and Bonpos.",
        src: "https://www.youtube.com/embed/a5KKOi0Il1M?si=PjebzX_3uR5ULsbh",
      },
    ],
  },
  {
    name: "Romantic",
    emoji: "❤",
    places: [
      {
        name: "Paris, France",
        description:
          "Known as the city of love, offering romantic walks along the Seine, iconic landmarks, and charming cafes.",
        src: "https://www.youtube.com/embed/DNNMS7l6A-g?si=Vq9ui7876d1EIZ0v",
      },
      {
        name: "Venice, Italy",
        description:
          "Famous for its canals, gondola rides, and stunning architecture.",
        src: "https://www.youtube.com/embed/2uS5QP1K_hk?si=OpXEuMysSxPbymy4",
      },
      {
        name: "Santorini, Greece",
        description:
          "Famous for its stunning sunsets, white-washed buildings, and calm Aegean Sea.",
        src: "https://www.youtube.com/embed/I0nsyCzajCo?si=Hi0tJQyye0XBslX1",
      },
      {
        name: "Kyoto, Japan",
        description:
          "Famous for its historic temples, traditional tea houses, and beautiful gardens.",
        src: "https://www.youtube.com/embed/IMjwqUeEOo4?si=GSRG47jvqg0B4_oW",
      },
      {
        name: "Maldives",
        description:
          "Idyllic islands with overwater bungalows, crystal-clear waters, and world-class resorts.",
        src: "https://www.youtube.com/embed/Z755vZBf9oM?si=44W_McxU0-F6IXdz",
      },
      {
        name: "Tuscany, Italy",
        description:
          "Known for its rolling hills, vineyards, and charming countryside.",
        src: "https://www.youtube.com/embed/7aNxp7ybmX8?si=uc8k36cUlHP_NAeP",
      },
      {
        name: "Bora Bora, French Polynesia",
        description:
          "Known for its turquoise waters, luxury overwater bungalows, and stunning coral reefs.",
        src: "https://www.youtube.com/embed/gSudm8JWvlQ?si=A5ugGZo16zEE77dW",
      },
      {
        name: "Bali, Indonesia",
        description:
          "A tropical haven with serene beaches, yoga retreats, and luxurious spas.",
        src: "https://www.youtube.com/embed/BFS9n4B_2xA?si=jZ9QmDcRhQmHAR69",
      },
      {
        name: "Cinque Terre, Italy",
        description:
          "A picturesque coastal region with colorful villages, stunning views, and romantic trails.",
        src: "https://www.youtube.com/embed/bTzoa8FyByo?si=Mqh9kV7rJluZQX2H",
      },
      {
        name: "Maui, Hawaii, USA",
        description:
          "Offers beautiful beaches, lush rainforests, and luxurious resorts.",
        src: "https://www.youtube.com/embed/DXJVyEowf8o?si=ZxVLbR_L3f3ua6J-",
      },
    ],
  },
  {
    name: "Vibrant",
    emoji: "🔥",
    places: [
      {
        name: "New York City, USA",
        description:
          "A bustling metropolis with iconic landmarks, diverse neighborhoods, and a vibrant cultural scene.",
        src: "https://www.youtube.com/embed/9p3dtE98xRY?si=zb_KG3pUR5_OS1Em",
      },
      {
        name: "Rio de Janeiro, Brazil",
        description:
          "Famous for its carnival, beaches, and lively samba music.",
        src: "https://www.youtube.com/embed/ZYA0Bz3Tsl8?si=ys4Dz6-Z2kg3glmi",
      },
      {
        name: "Bangkok, Thailand",
        description:
          "A city known for its vibrant street life, bustling markets, and rich cultural heritage.",
        src: "https://www.youtube.com/embed/KyC_mKy7Zf8?si=AVZ2R_3zIuPMXt6b",
      },
      {
        name: "Istanbul, Turkey",
        description:
          "A city where East meets West, offering a mix of historic mosques, bazaars, and palaces.",
        src: "https://www.youtube.com/embed/1L2PIyGczCA?si=WRfCmK3BcoCXF7qg",
      },
      {
        name: "New Orleans, Louisiana, USA",
        description:
          "Known for its vibrant music scene, festivals, and unique cultural heritage.",
        src: "https://www.youtube.com/embed/fFWJc2bXOvk?si=SxEsBBk_AVS_CNWz",
      },
      {
        name: "Mumbai, India",
        description:
          "A city that never sleeps, known for its bustling markets, Bollywood, and cultural diversity.",
        src: "https://www.youtube.com/embed/tWD_-Rzrn8o?si=Cykay3bke9TiWiGZ",
      },
      {
        name: "Havana, Cuba",
        description:
          "A city with a rich history, colorful architecture, and vibrant music and dance scene.",
        src: "https://www.youtube.com/embed/eoALIZBx8fw?si=GM6ydQUT4nol88he",
      },
      {
        name: "Barcelona, Spain",
        description:
          "A city with a playful spirit, offering unique architecture, beaches, and lively festivals.",
        src: "https://www.youtube.com/embed/ulpTYgJQxEg?si=kJzgLbFR-UnPfoLi",
      },
      {
        name: "Sydney, Australia",
        description:
          "Offers iconic landmarks, beautiful beaches, and a vibrant cultural scene.",
        src: "https://www.youtube.com/embed/PLsFZbqr3Qo?si=JP37xcKJd5onYDnD",
      },
      {
        name: "Tokyo, Japan",
        description:
          "Offers a mix of high-tech attractions, quirky cafes, and vibrant neighborhoods.",
        src: "https://www.youtube.com/embed/77lWbSfnF_g?si=5m4gugwJsH5hEjfi",
      },
    ],
  },
  {
    name: "Scenic",
    emoji: "🗻",
    places: [
      {
        name: "Banff, Canada",
        description:
          "A picturesque town surrounded by the stunning Rocky Mountains and beautiful turquoise lakes.",
        src: "https://www.youtube.com/embed/TJohEDj0KPk?si=rondIrLiI4FVQFYL",
      },
      {
        name: "Swiss Alps, Switzerland",
        description:
          "Renowned for its breathtaking mountain landscapes and charming alpine villages.",
        src: "https://www.youtube.com/embed/TE_Gf16EGHA?si=Ufnz6nrJR4KLcs_V",
      },
      {
        name: "Great Ocean Road, Australia",
        description:
          "A scenic coastal drive offering stunning ocean views and unique rock formations.",
        src: "https://www.youtube.com/embed/GDySwaR64jE?si=r2j-dJlSZ-ESDmD-",
      },
      {
        name: "Plitvice Lakes National Park, Croatia",
        description:
          "Known for its cascading lakes, waterfalls, and lush forests.",
        src: "https://www.youtube.com/embed/p-4tzNe4Oko?si=XWPm79T2HY7Gs7S4",
      },
      {
        name: "Norwegian Fjords, Norway",
        description:
          "Famous for their dramatic landscapes, steep cliffs, and deep blue waters.",
        src: "https://www.youtube.com/embed/j1h_D4ytRIU?si=uxzbvJCnmKs_sNuD",
      },
      {
        name: "Santorini, Greece",
        description:
          "Famous for its stunning sunsets, white-washed buildings, and calm Aegean Sea.",
        src: "https://www.youtube.com/embed/I0nsyCzajCo?si=Hi0tJQyye0XBslX1",
      },
      {
        name: "Cinque Terre, Italy",
        description:
          "A picturesque coastal region with colorful villages, stunning views, and romantic trails.",
        src: "https://www.youtube.com/embed/bTzoa8FyByo?si=Mqh9kV7rJluZQX2H",
      },
      {
        name: "Yosemite National Park, USA",
        description:
          "Known for its majestic waterfalls, giant sequoias, and granite cliffs.",
        src: "https://www.youtube.com/embed/9fJEFi3ccwI?si=_0JlpRqziNpJletO",
      },
      {
        name: "Machu Picchu, Peru",
        description: "An ancient Incan city with breathtaking mountain views.",
        src: "https://www.youtube.com/embed/lNIEZ61PyG0?si=MEVtnJDk4-z80I1j",
      },
      {
        name: "Torres del Paine, Chile",
        description:
          "A stunning national park with dramatic mountains, glaciers, and lakes.",
        src: "https://www.youtube.com/embed/xN_dWIRJRcc?si=0sUGJqtlHMnDKwTl",
      },
    ],
  },
  {
    name: "Independent",
    emoji: "💃",
    places: [
      {
        name: "Berlin, Germany",
        description:
          "A city known for its eclectic nightlife, art scene, and historical landmarks.",
        src: "https://www.youtube.com/embed/PNt9-tfsXYw?si=hzvJ68ZMeJgFL4bn",
      },
      {
        name: "Reykjavik, Iceland",
        description:
          "A vibrant city with a unique culture, stunning landscapes, and independent spirit.",
        src: "https://www.youtube.com/embed/j80T3sbTePM?si=CL3uAtkg7VePP3WL",
      },
      {
        name: "Portland, Oregon, USA",
        description:
          "Known for its independent culture, craft breweries, and quirky vibe.",
        src: "https://www.youtube.com/embed/1PGiixdhNVk?si=vTFuNFJAjiIf0Qfz",
      },
      {
        name: "Melbourne, Australia",
        description:
          "A city with a vibrant arts scene, diverse neighborhoods, and an independent spirit.",
        src: "https://www.youtube.com/embed/H-P6LbEoaYw?si=sLqLbR3dNxbYnLba",
      },
      {
        name: "Austin, Texas, USA",
        description:
          "Famous for its live music scene, cultural festivals, and independent spirit.",
        src: "https://www.youtube.com/embed/KzX9kJumv9A?si=YAUgoX0D_WLG20Fl",
      },
      {
        name: "Buenos Aires, Argentina",
        description:
          "A city with a rich cultural heritage, vibrant nightlife, and a strong independent spirit.",
        src: "https://www.youtube.com/embed/F2sepCUnENg?si=LSNvedMuAgDdnuBR",
      },
      {
        name: "Edinburgh, Scotland",
        description:
          "A city with a unique blend of history, culture, and independent spirit.",
        src: "https://www.youtube.com/embed/zXDXBkc7CJ8?si=gebbygPgbEXzmbEI",
      },
      {
        name: "Seoul, South Korea",
        description:
          "A bustling metropolis with a unique culture, vibrant neighborhoods, and independent spirit.",
        src: "https://www.youtube.com/embed/eREftfTRsaQ?si=ReO5D40b9_4u1Fig",
      },
      {
        name: "Lisbon, Portugal",
        description:
          "A city known for its vibrant culture, historic neighborhoods, and independent spirit.",
        src: "https://www.youtube.com/embed/6DrBlgSckA4?si=orUCVmexdteud3Uy",
      },
      {
        name: "San Francisco, California, USA",
        description:
          "A city with a diverse culture, iconic landmarks, and a strong independent spirit.",
        src: "https://www.youtube.com/embed/Oo6iAxf4si0?si=uKH1p_PCo6HnpbFi",
      },
    ],
  },
  {
    name: "Spontaneous",
    emoji: "🎉",
    places: [
      {
        name: "Las Vegas, Nevada, USA",
        description:
          "Known for its lively entertainment, casinos, and vibrant nightlife.",
        src: "https://www.youtube.com/embed/HjklndipGGQ?si=diwaIc7DTm_HYeCb",
      },
      {
        name: "Ibiza, Spain",
        description:
          "Famous for its nightlife, beautiful beaches, and lively party scene.",
        src: "https://www.youtube.com/embed/GD95D1ViGfQ?si=u_blS5CHezBNIWnf",
      },
      {
        name: "Bangkok, Thailand",
        description:
          "A city known for its vibrant street life, bustling markets, and rich cultural heritage.",
        src: "https://www.youtube.com/embed/KyC_mKy7Zf8?si=AVZ2R_3zIuPMXt6b",
      },
      {
        name: "Amsterdam, Netherlands",
        description:
          "Famous for its canals, vibrant nightlife, and unique cultural experiences.",
        src: "https://www.youtube.com/embed/3izVLop9iKg?si=X3HnuRycyvqVEJlE",
      },
      {
        name: "New Orleans, Louisiana, USA",
        description:
          "Known for its vibrant music scene, festivals, and unique cultural heritage.",
        src: "https://www.youtube.com/embed/fFWJc2bXOvk?si=SxEsBBk_AVS_CNWz",
      },
      {
        name: "Rio de Janeiro, Brazil",
        description:
          "Famous for its carnival, beaches, and lively samba music.",
        src: "https://www.youtube.com/embed/ZYA0Bz3Tsl8?si=ys4Dz6-Z2kg3glmi",
      },
      {
        name: "Tokyo, Japan",
        description:
          "Offers a mix of high-tech attractions, quirky cafes, and vibrant neighborhoods.",
        src: "https://www.youtube.com/embed/77lWbSfnF_g?si=5m4gugwJsH5hEjfi",
      },
      {
        name: "Miami, Florida, USA",
        description:
          "Offers beautiful beaches, lively nightlife, and a vibrant cultural scene.",
        src: "https://www.youtube.com/embed/yQCBAaJg1LE?si=HADyi2LpVHaviFRk",
      },
      {
        name: "Barcelona, Spain",
        description:
          "A city with a playful spirit, offering unique architecture, beaches, and lively festivals.",
        src: "https://www.youtube.com/embed/ulpTYgJQxEg?si=kJzgLbFR-UnPfoLi",
      },
      {
        name: "Prague, Czech Republic",
        description:
          "A city with a rich history, stunning architecture, and a vibrant nightlife.",
        src: "https://www.youtube.com/embed/idg6vW3vXtE?si=qhhXH3i0BSLKOPTq",
      },
    ],
  },
  {
    name: "Epicurean",
    emoji: "🤯",
    places: [
      {
        name: "Paris, France",
        description:
          "Known for its world-class cuisine, bakeries, and Michelin-starred restaurants.",
        src: "https://www.youtube.com/embed/DNNMS7l6A-g?si=Vq9ui7876d1EIZ0v",
      },
      {
        name: "Tokyo, Japan",
        description:
          "Offers a diverse culinary scene with everything from street food to Michelin-starred dining.",
        src: "https://www.youtube.com/embed/77lWbSfnF_g?si=5m4gugwJsH5hEjfi",
      },
      {
        name: "Barcelona, Spain",
        description: "Famous for its tapas, seafood, and vibrant food markets.",
        src: "https://www.youtube.com/embed/ulpTYgJQxEg?si=kJzgLbFR-UnPfoLi",
      },

      {
        name: "New York City, USA",
        description:
          "A melting pot of cuisines offering a diverse and vibrant food scene.",
        src: "https://www.youtube.com/embed/9p3dtE98xRY?si=zb_KG3pUR5_OS1Em",
      },
      {
        name: "Bangkok, Thailand",
        description:
          "Known for its vibrant street food scene and flavorful Thai cuisine.",
        src: "https://www.youtube.com/embed/KyC_mKy7Zf8?si=AVZ2R_3zIuPMXt6b",
      },
      {
        name: "Bologna, Italy",
        description:
          "Famous for its rich culinary heritage, including pasta, cheese, and cured meats.",
        src: "https://www.youtube.com/embed/U4vejC9GZF4?si=_PmHzpASVY0rhGOq",
      },
      {
        name: "Lyon, France",
        description:
          "Known as the gastronomic capital of France, offering a rich culinary experience.",
        src: "https://www.youtube.com/embed/Gp6b_AEouaw?si=0ZFPdiMxT2gCzih4",
      },
      {
        name: "Marrakech, Morocco",
        description:
          "Offers a unique culinary experience with aromatic spices and traditional dishes.",
        src: "https://www.youtube.com/embed/0NkAE4N8E1A?si=ESpFjMTAsgIKsN_T",
      },
      {
        name: "San Sebastian, Spain",
        description:
          "Famous for its pintxos bars and Michelin-starred restaurants.",
        src: "https://www.youtube.com/embed/aUjgUVkttN8?si=kRHp0rWRMVogVa66",
      },
      {
        name: "Istanbul, Turkey",
        description:
          "A city where East meets West, offering a rich and diverse culinary scene.",
        src: "https://www.youtube.com/embed/1L2PIyGczCA?si=WRfCmK3BcoCXF7qg",
      },
    ],
  },
  {
    name: "Urban",
    emoji: "🚕",
    places: [
      {
        name: "New York City, USA",
        description:
          "A bustling metropolis with iconic landmarks, diverse neighborhoods, and a vibrant cultural scene.",
        src: "https://www.youtube.com/embed/9p3dtE98xRY?si=zb_KG3pUR5_OS1Em",
      },
      {
        name: "Tokyo, Japan",
        description:
          "Offers a mix of high-tech attractions, quirky cafes, and vibrant neighborhoods.",
        src: "https://www.youtube.com/embed/77lWbSfnF_g?si=5m4gugwJsH5hEjfi",
      },
      {
        name: "London, England",
        description:
          "A city with a rich history, iconic landmarks, and diverse cultural experiences.",
        src: "https://www.youtube.com/embed/NYY2ELEH0AA?si=a8WcE2NDjBVjrycZ",
      },
      {
        name: "Paris, France",
        description:
          "Known as the city of love, offering romantic walks along the Seine, iconic landmarks, and charming cafes.",
        src: "https://www.youtube.com/embed/DNNMS7l6A-g?si=Vq9ui7876d1EIZ0v",
      },
      {
        name: "Hong Kong",
        description:
          "A vibrant city with a stunning skyline, bustling markets, and a unique blend of cultures.",
        src: "https://www.youtube.com/embed/d8yxY7UiDdQ?si=m80Tqe3PQkbimfK8",
      },
      {
        name: "Singapore",
        description:
          "A modern city-state known for its cleanliness, architecture, and diverse culinary scene.",
        src: "https://www.youtube.com/embed/Ln38av8gLng?si=UtfWe3HHMn7O2rdQ",
      },
      {
        name: "Berlin, Germany",
        description:
          "A city known for its eclectic nightlife, art scene, and historical landmarks.",
        src: "https://www.youtube.com/embed/PNt9-tfsXYw?si=hzvJ68ZMeJgFL4bn",
      },
      {
        name: "Los Angeles, California, USA",
        description:
          "Known for its entertainment industry, beautiful beaches, and diverse neighborhoods.",
        src: "https://www.youtube.com/embed/9wbNabuP6aM?si=sAqPc0Wd_23rTwyM",
      },
      {
        name: "Seoul, South Korea",
        description:
          "A bustling metropolis with a unique culture, vibrant neighborhoods, and independent spirit.",
        src: "https://www.youtube.com/embed/eREftfTRsaQ?si=ReO5D40b9_4u1Fig",
      },
      {
        name: "Buenos Aires, Argentina",
        description:
          "A city with a rich cultural heritage, vibrant nightlife, and a strong independent spirit.",
        src: "https://www.youtube.com/embed/F2sepCUnENg?si=LSNvedMuAgDdnuBR",
      },
    ],
  },
  {
    name: "Coastal",
    emoji: "🐠",
    places: [
      {
        name: "Amalfi Coast, Italy",
        description:
          "Known for its picturesque coastline, charming towns, and delicious cuisine.",
        src: "https://www.youtube.com/embed/Mupom-sgjAU?si=QaLS0fZduhQejJsm",
      },
      {
        name: "Maui, Hawaii, USA",
        description:
          "Offers beautiful beaches, lush rainforests, and luxurious resorts.",
        src: "https://www.youtube.com/embed/DXJVyEowf8o?si=ZxVLbR_L3f3ua6J-",
      },
      {
        name: "Santorini, Greece",
        description:
          "Famous for its stunning sunsets, white-washed buildings, and calm Aegean Sea.",
        src: "https://www.youtube.com/embed/I0nsyCzajCo?si=Hi0tJQyye0XBslX1",
      },
      {
        name: "Great Barrier Reef, Australia",
        description:
          "The world's largest coral reef system, offering incredible diving and snorkeling experiences.",
        src: "https://www.youtube.com/embed/AR1cSKxxSmU?si=EqblrCbIBSoRrdHq",
      },
      {
        name: "Phuket, Thailand",
        description:
          "Offers stunning beaches, vibrant nightlife, and serene wellness retreats.",
        src: "https://www.youtube.com/embed/m_pCh6p8_wg?si=UGs5NONRT-uliGg5",
      },
      {
        name: "Bali, Indonesia",
        description:
          "A tropical haven with serene beaches, yoga retreats, and luxurious spas.",
        src: "https://www.youtube.com/embed/BFS9n4B_2xA?si=jZ9QmDcRhQmHAR69",
      },
      {
        name: "Cinque Terre, Italy",
        description:
          "A picturesque coastal region with colorful villages, stunning views, and romantic trails.",
        src: "https://www.youtube.com/embed/bTzoa8FyByo?si=Mqh9kV7rJluZQX2H",
      },
      {
        name: "Maldives",
        description:
          "Idyllic islands with overwater bungalows, crystal-clear waters, and world-class resorts.",
        src: "https://www.youtube.com/embed/Z755vZBf9oM?si=44W_McxU0-F6IXdz",
      },
      {
        name: "Zanzibar, Tanzania",
        description:
          "An island paradise with white sandy beaches, spice plantations, and historic Stone Town.",
        src: "https://www.youtube.com/embed/zr9WDySrMEs?si=BTNUasMdwgPnM136",
      },
    ],
  },
  {
    name: "Reverence",
    emoji: "🙏",
    places: [
      {
        name: "Jerusalem, Israel",
        description:
          "A city of profound religious significance for Judaism, Christianity, and Islam.",
        src: "https://www.youtube.com/embed/YF_m6lYV4d0?si=_sr1JkayR9x5RPoW",
      },
      {
        name: "Mecca, Saudi Arabia",
        description:
          "The holiest city in Islam, attracting millions of pilgrims annually.",
        src: "https://www.youtube.com/embed/TuLH0oKx-WE?si=P7KYgTOvsx99w3NQ",
      },
      {
        name: "Varanasi, India",
        description:
          "A holy city on the banks of the Ganges River, known for its spiritual significance and rituals.",
        src: "https://www.youtube.com/embed/1udJsv1VcII?si=8dYeI9wI5SnUQWIC",
      },
      {
        name: "Lhasa, Tibet",
        description:
          "The spiritual heart of Tibetan Buddhism, home to the Potala Palace and Jokhang Temple.",
        src: "https://www.youtube.com/embed/5Gg4Lmqx7GM?si=RkkqWD_0MOq4m7-2",
      },
      {
        name: "Rome, Italy",
        description:
          "A city with a rich religious history, home to the Vatican and numerous historic churches.",
        src: "https://www.youtube.com/embed/5DcA4BePBdA?si=h2zu-gxiOVdbVm1d",
      },
      {
        name: "Kyoto, Japan",
        description:
          "Famous for its historic temples, traditional tea houses, and beautiful gardens.",
        src: "https://www.youtube.com/embed/IMjwqUeEOo4?si=GSRG47jvqg0B4_oW",
      },
      {
        name: "Santiago de Compostela, Spain",
        description:
          "The culmination of the Camino de Santiago pilgrimage route, known for its stunning cathedral.",
        src: "https://www.youtube.com/embed/ETuvrv2-VZ4?si=TSYV5UauXfE1LmFM",
      },
      {
        name: "Medina, Saudi Arabia",
        description:
          "The second holiest city in Islam, home to the Prophet's Mosque.",
        src: "https://www.youtube.com/embed/9np1b4C3XnE?si=VsNT6lop5oAoSSur",
      },
      {
        name: "Istanbul, Turkey",
        description:
          "A city where East meets West, offering a mix of historic mosques, bazaars, and palaces.",
        src: "https://www.youtube.com/embed/1L2PIyGczCA?si=WRfCmK3BcoCXF7qg",
      },
      {
        name: "Angkor Wat, Cambodia",
        description:
          "A massive temple complex and a symbol of Cambodia's spiritual and cultural heritage.",
        src: "https://www.youtube.com/embed/Qh8fZUnpKyg?si=JaqKuHtGKvEYL4ri",
      },
    ],
  },
  {
    name: "Guilty",
    emoji: "🙊",
    places: [
      {
        name: "Las Vegas, Nevada, USA",
        description:
          "Known for its lively entertainment, casinos, and vibrant nightlife.",
        src: "https://www.youtube.com/embed/HjklndipGGQ?si=diwaIc7DTm_HYeCb",
      },
      {
        name: "Macau, China",
        description:
          "Often called the 'Las Vegas of Asia', known for its casinos and luxury hotels.",
        src: "https://www.youtube.com/embed/SOvYXRsPVEo?si=M91_SZE3sGb0rWPH",
      },
      {
        name: "Amsterdam, Netherlands",
        description:
          "Famous for its canals, vibrant nightlife, and unique cultural experiences.",
        src: "https://www.youtube.com/embed/3izVLop9iKg?si=X3HnuRycyvqVEJlE",
      },
      {
        name: "Bangkok, Thailand",
        description:
          "A city known for its vibrant street life, bustling markets, and rich cultural heritage.",
        src: "https://www.youtube.com/embed/KyC_mKy7Zf8?si=AVZ2R_3zIuPMXt6b",
      },
      {
        name: "Rio de Janeiro, Brazil",
        description:
          "Famous for its carnival, beaches, and lively samba music.",
        src: "https://www.youtube.com/embed/ZYA0Bz3Tsl8?si=ys4Dz6-Z2kg3glmi",
      },
      {
        name: "Ibiza, Spain",
        description:
          "Famous for its nightlife, beautiful beaches, and lively party scene.",
        src: "https://www.youtube.com/embed/GD95D1ViGfQ?si=u_blS5CHezBNIWnf",
      },
      {
        name: "New Orleans, Louisiana, USA",
        description:
          "Known for its vibrant music scene, festivals, and unique cultural heritage.",
        src: "https://www.youtube.com/embed/fFWJc2bXOvk?si=SxEsBBk_AVS_CNWz",
      },
      {
        name: "Miami, Florida, USA",
        description:
          "Offers beautiful beaches, lively nightlife, and a vibrant cultural scene.",
        src: "https://www.youtube.com/embed/yQCBAaJg1LE?si=HADyi2LpVHaviFRk",
      },
      {
        name: "Los Angeles, California, USA",
        description:
          "Known for its entertainment industry, beautiful beaches, and diverse neighborhoods.",
        src: "https://www.youtube.com/embed/9wbNabuP6aM?si=sAqPc0Wd_23rTwyM",
      },
      {
        name: "Berlin, Germany",
        description:
          "A city known for its eclectic nightlife, art scene, and historical landmarks.",
        src: "https://www.youtube.com/embed/PNt9-tfsXYw?si=hzvJ68ZMeJgFL4bn",
      },
    ],
  },
  {
    name: "Vagabond",
    emoji: "🚶",
    places: [
      {
        name: "Kathmandu, Nepal",
        description:
          "A bustling city with a mix of ancient temples, vibrant markets, and a gateway to the Himalayas.",
        src: "https://www.youtube.com/embed/xAvWBKybqHo?si=hVAdeahE86IGXbUK",
      },
      {
        name: "Vientiane, Laos",
        description:
          "A laid-back capital with a mix of French colonial architecture, Buddhist temples, and a vibrant riverfront.",
        src: "https://www.youtube.com/embed/cjcS5PmVYXs?si=aV-GDHi3w4MwgwnW",
      },
      {
        name: "Chiang Mai, Thailand",
        description:
          "Known for its historic temples, night markets, and surrounding mountains.",
        src: "https://www.youtube.com/embed/IW5-Xr_2ZTw?si=-jNeu_cwutvgrBZE",
      },
      {
        name: "Luang Prabang, Laos",
        description:
          "A UNESCO World Heritage site with a rich history, beautiful temples, and stunning natural surroundings.",
        src: "https://www.youtube.com/embed/CG9yX515ksU?si=7vwqnyMdzzG_-RU1",
      },
      {
        name: "Marrakech, Morocco",
        description:
          "Offers a unique cultural experience with aromatic spices, bustling souks, and historic palaces.",
        src: "https://www.youtube.com/embed/0NkAE4N8E1A?si=ESpFjMTAsgIKsN_T",
      },
      {
        name: "Hanoi, Vietnam",
        description:
          "A city with a rich history, vibrant street life, and delicious cuisine.",
        src: "https://www.youtube.com/embed/YcSIbqLYqT8?si=nEtaQdARzZNFk9JB",
      },
      {
        name: "Fez, Morocco",
        description:
          "Known for its historic medina, vibrant markets, and traditional crafts.",
        src: "https://www.youtube.com/embed/aAtHlcWuOhQ?si=FFQ41oD3Dj5QYmE_",
      },
      {
        name: "Cusco, Peru",
        description:
          "A historic city and gateway to Machu Picchu, offering a rich blend of Incan and Spanish colonial heritage.",
        src: "https://www.youtube.com/embed/lNIEZ61PyG0?si=MEVtnJDk4-z80I1j",
      },
      {
        name: "Hoi An, Vietnam",
        description:
          "A charming town known for its well-preserved ancient architecture, lantern-lit streets, and tailor shops.",
        src: "https://www.youtube.com/embed/g2IuR6cW7hI?si=9Prd9FVAuym9POkd",
      },
      {
        name: "Pokhara, Nepal",
        description:
          "A serene city with beautiful lakes, stunning mountain views, and a gateway to the Annapurna region.",
        src: "https://www.youtube.com/embed/npxAFD84mqk?si=MjuOLVPzZtCx-tSB",
      },
    ],
  },
];

export default moodsData;
