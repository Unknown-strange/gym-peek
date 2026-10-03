import proFloor from '../assets/pro-fitness-gym/PRO-FITNESS-GYM-Accra-Ghana-TortoisePathcom-jpeg.webp'
import proCardio from '../assets/pro-fitness-gym/PRO-FITNESS-GYM-Accra-Ghana-TortoisePathcom-12-jpeg.webp'
import proCable from '../assets/pro-fitness-gym/PRO-FITNESS-GYM-Accra-Ghana-TortoisePathcom-5-jpeg.webp'
import proTraining from '../assets/pro-fitness-gym/images.jpg'

export type GymStatus = 'open' | 'soon' | 'closed'

export interface GymRate {
  label: string
  detail: string
  price: number
  badge?: string
  /** Billing period shown after the price, e.g. day / wk / mo / 3 mo */
  unit?: string
}

export interface OpeningHour {
  day: string
  hours: string
  today?: boolean
}

export interface Gym {
  id: string
  slug: string
  name: string
  area: string
  city: string
  region: string
  address: string
  landmark: string
  type: string
  priceFrom: number
  photoCount: number
  status: GymStatus
  closesAt: string
  rating: number
  reviews: number
  amenities: string[]
  tags: string[]
  photo: string
  gallery: { label: string; photo: string }[]
  description: string
  stats: { value: string; label: string }[]
  rates: GymRate[]
  hours: OpeningHour[]
  registrationFee: number
  phone: string
  whatsapp: string
  mapsQuery: string
  featured?: boolean
}

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export const gyms: Gym[] = [
  {
    id: '1',
    slug: 'pulse-fitness-hub',
    name: 'Pulse Fitness Hub',
    area: 'East Legon',
    city: 'Accra',
    region: 'Greater Accra',
    address: 'Boundary Road, near A&C Mall, East Legon, Accra',
    landmark: 'Directly opposite Starbites East Legon, 2 minutes drive from A&C Square',
    type: 'Luxury / Wellness',
    priceFrom: 250,
    photoCount: 24,
    status: 'open',
    closesAt: '9:00 PM',
    rating: 4.8,
    reviews: 132,
    amenities: [
      'Air conditioning',
      'Hot showers',
      'Dedicated parking',
      'Personal trainers',
      'Secure lockers',
      'High-speed WiFi',
      'Water refill',
      'Smoothie bar',
    ],
    tags: ['Weight room', 'Cardio deck', 'Sauna', 'Lockers'],
    photo: U('1534438327276-14e5300c3a48'),
    gallery: [
      { label: 'Floor', photo: U('1534438327276-14e5300c3a48') },
      { label: 'Cardio', photo: U('1571902943202-507ec2618e8f') },
      { label: 'Lockers', photo: U('1558611848-73f7eb4001a1') },
      { label: 'Studio', photo: U('1518611012118-696072aa579a') },
      { label: 'Entrance', photo: U('1571019613454-1cb2f99b2d8b') },
    ],
    description:
      'Pulse Fitness Hub is a premium wellness and strength training facility situated in the heart of East Legon. Featuring state-of-the-art cardio machines, Olympic weightlifting platforms, air-conditioned studio spaces, and clean private shower facilities. Designed for both casual fitness enthusiasts and serious powerlifters looking for high-end equipment with zero fluff.',
    stats: [
      { value: '8,500', label: 'Square feet' },
      { value: '2 Levels', label: 'Strength & studio' },
      { value: 'Certified', label: 'Trainers on deck' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 30, unit: 'day' },
      { label: 'Weekly Pass', detail: '7 consecutive days', price: 100, unit: 'wk' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 250, badge: 'Best value', unit: 'mo' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '5:30 AM – 10:00 PM', today: true },
      { day: 'Saturday', hours: '6:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: '8:00 AM – 6:00 PM' },
    ],
    registrationFee: 50,
    phone: '+233 24 123 4567',
    whatsapp: '233241234567',
    mapsQuery: 'Pulse Fitness Hub East Legon Accra',
    featured: true,
  },
  {
    id: '2',
    slug: 'decathlon-active-arena',
    name: 'Decathlon Active Arena',
    area: 'Airport Residential Area',
    city: 'Accra',
    region: 'Greater Accra',
    address: 'Spintex Road, Airport Residential Area, Accra',
    landmark: 'Behind the Plaza Mall, opposite the Total petrol station',
    type: 'CrossFit & HIIT',
    priceFrom: 180,
    photoCount: 18,
    status: 'open',
    closesAt: '10:00 PM',
    rating: 4.6,
    reviews: 98,
    amenities: ['AC & chilled air', 'Showers', 'Free weights', 'Cardio deck', 'Group classes'],
    tags: ['AC & Chilled', 'Showers', 'Free weights', 'Cardio deck'],
    photo: U('1517836357463-d25dfeac3438'),
    gallery: [
      { label: 'Floor', photo: U('1517836357463-d25dfeac3438') },
      { label: 'Cardio', photo: U('1540497077202-7c8a3999166f') },
      { label: 'Studio', photo: U('1571019614242-c5c5dee9f50b') },
      { label: 'Lockers', photo: U('1596357395217-80de13130e92') },
      { label: 'Entrance', photo: U('1534438327276-14e5300c3a48') },
    ],
    description:
      'A high-energy training floor built for circuits, HIIT sessions and functional strength work. Racked platforms, sled lanes and a full conditioning zone keep classes moving, with chilled air conditioning throughout the hall and fast showers for anyone heading straight back to the office.',
    stats: [
      { value: '6,200', label: 'Square feet' },
      { value: '4', label: 'Daily class slots' },
      { value: '12', label: 'Certified coaches' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 45, unit: 'day' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 180, badge: 'Popular', unit: 'mo' },
      { label: 'Quarterly', detail: '3 months, billed once', price: 480, unit: '3 mo' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '5:00 AM – 10:00 PM', today: true },
      { day: 'Saturday', hours: '6:00 AM – 9:00 PM' },
      { day: 'Sunday', hours: '7:00 AM – 6:00 PM' },
    ],
    registrationFee: 40,
    phone: '+233 55 987 6543',
    whatsapp: '233559876543',
    mapsQuery: 'Decathlon Active Arena Airport Residential Accra',
    featured: true,
  },
  {
    id: '3',
    slug: 'kumasi-iron-and-core-club',
    name: 'Kumasi Iron & Core Club',
    area: 'Ahodwo',
    city: 'Kumasi',
    region: 'Ashanti',
    address: 'Ahodwo Roundabout Road, Kumasi',
    landmark: 'Beside Ahodwo Netbank, 3 minutes from the roundabout',
    type: 'Weightlifting / Strength',
    priceFrom: 140,
    photoCount: 14,
    status: 'open',
    closesAt: '9:30 PM',
    rating: 4.7,
    reviews: 74,
    amenities: ['Powerlifting', 'Showers', 'AC', 'Personal trainer', 'Chalk station'],
    tags: ['Powerlifting', 'Showers', 'AC', 'Personal Trainer'],
    photo: U('1583454110551-21f2fa2afe61'),
    gallery: [
      { label: 'Floor', photo: U('1583454110551-21f2fa2afe61') },
      { label: 'Cardio', photo: U('1534258936925-c58bed479fcb') },
      { label: 'Studio', photo: U('1526506118085-60ce8714f8c5') },
      { label: 'Entrance', photo: U('1571019614242-c5c5dee9f50b') },
    ],
    description:
      'A no-nonsense strength club built around calibrated plates, competition benches and three lifting platforms. Coaches on the floor during every session, chalk always stocked, and enough rack space that you never queue at 6pm.',
    stats: [
      { value: '4,800', label: 'Square feet' },
      { value: '3', label: 'Lifting platforms' },
      { value: '5', label: 'Coaches on deck' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 25, unit: 'day' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 140, badge: 'Best value', unit: 'mo' },
      { label: 'Student Rate', detail: 'Valid student ID required', price: 95, unit: 'mo' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '5:30 AM – 9:30 PM', today: true },
      { day: 'Saturday', hours: '7:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: '9:00 AM – 5:00 PM' },
    ],
    registrationFee: 30,
    phone: '+233 20 555 7788',
    whatsapp: '233205557788',
    mapsQuery: 'Kumasi Iron and Core Club Ahodwo Kumasi',
  },
  {
    id: '4',
    slug: 'atlantic-coast-fitness',
    name: 'Atlantic Coast Fitness',
    area: 'Beach Road',
    city: 'Takoradi',
    region: 'Western',
    address: 'Beach Road, Takoradi',
    landmark: 'Opposite the Jubilee Grounds car park',
    type: 'Luxury / Wellness',
    priceFrom: 160,
    photoCount: 16,
    status: 'open',
    closesAt: '8:30 PM',
    rating: 4.5,
    reviews: 52,
    amenities: ['Ocean view deck', 'Weight room', 'Spinning studio', 'Showers', 'Parking'],
    tags: ['Ocean View', 'Weight room', 'Spinning studio'],
    photo: U('1571902943202-507ec2618e8f'),
    gallery: [
      { label: 'Floor', photo: U('1571902943202-507ec2618e8f') },
      { label: 'Cardio', photo: U('1540497077202-7c8a3999166f') },
      { label: 'Studio', photo: U('1518611012118-696072aa579a') },
      { label: 'Entrance', photo: U('1571019613454-1cb2f99b2d8b') },
    ],
    description:
      'A coastal gym with a breeze. The main floor runs along the ocean-facing side of the building, with a dedicated spinning studio, a full weight room and a shaded recovery deck for cool-downs after evening sessions.',
    stats: [
      { value: '5,400', label: 'Square feet' },
      { value: '2', label: 'Training studios' },
      { value: 'Ocean', label: 'Recovery deck' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 35, unit: 'day' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 160, badge: 'Popular', unit: 'mo' },
      { label: 'Couple Plan', detail: 'Two members, one account', price: 280, unit: 'mo' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '6:00 AM – 8:30 PM', today: true },
      { day: 'Saturday', hours: '7:00 AM – 7:00 PM' },
      { day: 'Sunday', hours: '8:00 AM – 5:00 PM' },
    ],
    registrationFee: 35,
    phone: '+233 24 334 1190',
    whatsapp: '233243341190',
    mapsQuery: 'Atlantic Coast Fitness Beach Road Takoradi',
  },
  {
    id: '5',
    slug: 'pro-fitness-gym',
    name: 'Pro Fitness Gym',
    area: 'Cantonments',
    city: 'Accra',
    region: 'Greater Accra',
    address: 'Cantonments Road, Accra',
    landmark: 'Yellow and black branding on the frontage, inside the Cantonments plaza',
    type: 'Weightlifting / Strength',
    priceFrom: 250,
    photoCount: 4,
    status: 'open',
    closesAt: '9:00 PM',
    rating: 4.7,
    reviews: 84,
    amenities: [
      'Air conditioning',
      'Dumbbell racks',
      'Cable crossover',
      'Treadmill row',
      'Spin bikes',
      'Free parking',
      'Showers',
    ],
    tags: ['Strength floor', 'Cardio deck', 'Cable crossover', 'AC'],
    photo: proFloor,
    gallery: [
      { label: 'Floor', photo: proFloor },
      { label: 'Cardio', photo: proCardio },
      { label: 'Cables', photo: proCable },
      { label: 'Training', photo: proTraining },
    ],
    description:
      'Pro Fitness Gym is a full-service strength and conditioning floor in Accra. The main room runs plate-loaded and pin-loaded machines along both walls, with a dedicated cable crossover bay, a full treadmill and spin bike row against the yellow branded wall, and enough rack space to train at peak hours without queuing. Air conditioning throughout, free parking on site, and a staffed front desk every day.',
    stats: [
      { value: '5,600', label: 'Square feet' },
      { value: '2', label: 'Training zones' },
      { value: 'Free', label: 'On-site parking' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 35, unit: 'day' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 250, badge: 'Best value', unit: 'mo' },
      { label: 'Quarterly', detail: '3 months, billed once', price: 675, unit: '3 mo' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '5:30 AM – 9:00 PM', today: true },
      { day: 'Saturday', hours: '6:30 AM – 8:00 PM' },
      { day: 'Sunday', hours: '8:00 AM – 5:00 PM' },
    ],
    registrationFee: 50,
    phone: '+233 24 000 0000',
    whatsapp: '2332400000000',
    mapsQuery: 'Pro Fitness Gym Cantonments Accra Ghana',
    featured: true,
  },
  {
    id: '6',
    slug: 'savannah-fitness-zone',
    name: 'Savannah Fitness Zone',
    area: 'Commercial Area',
    city: 'Tamale',
    region: 'Northern',
    address: 'Commercial Area, Tamale',
    landmark: 'Near the Aboabo junction, opposite the market',
    type: 'CrossFit & HIIT',
    priceFrom: 120,
    photoCount: 12,
    status: 'open',
    closesAt: '9:00 PM',
    rating: 4.4,
    reviews: 39,
    amenities: ['Cardio', 'Free weights', 'Boxing bags', 'Lockers', 'Evening classes'],
    tags: ['Cardio', 'Free weights', 'Boxing bags', 'Lockers'],
    photo: U('1534258936925-c58bed479fcb'),
    gallery: [
      { label: 'Floor', photo: U('1534258936925-c58bed479fcb') },
      { label: 'Cardio', photo: U('1540497077202-7c8a3999166f') },
      { label: 'Studio', photo: U('1518611012118-696072aa579a') },
      { label: 'Entrance', photo: U('1571019613454-1cb2f99b2d8b') },
    ],
    description:
      "Tamale's busiest evening gym. A full cardio row, a free-weight floor with dumbbells up to 50kg, and a boxing bay with six heavy bags. Group sessions run at 6am and 6pm daily, and members get locker access with a deposit.",
    stats: [
      { value: '3,900', label: 'Square feet' },
      { value: '6', label: 'Boxing bags' },
      { value: '2', label: 'Daily class slots' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 20, unit: 'day' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 120, badge: 'Popular', unit: 'mo' },
      { label: 'Student Rate', detail: 'Valid student ID required', price: 85, unit: 'mo' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '5:30 AM – 9:00 PM', today: true },
      { day: 'Saturday', hours: '7:00 AM – 7:00 PM' },
      { day: 'Sunday', hours: '8:00 AM – 4:00 PM' },
    ],
    registrationFee: 25,
    phone: '+233 27 445 8890',
    whatsapp: '233274458890',
    mapsQuery: 'Savannah Fitness Zone Tamale',
  },
  {
    id: '7',
    slug: 'osu-recovery-and-performance',
    name: 'Osu Recovery & Performance',
    area: 'Osu',
    city: 'Accra',
    region: 'Greater Accra',
    address: 'Oxford Street, Osu, Accra',
    landmark: 'Above the pharmacy, opposite Osu Library',
    type: 'Luxury / Wellness',
    priceFrom: 200,
    photoCount: 21,
    status: 'open',
    closesAt: '9:00 PM',
    rating: 4.6,
    reviews: 88,
    amenities: ['Sauna', 'Sports massage', 'Hot showers', 'AC', 'Physio on call'],
    tags: ['Sauna', 'Sports massage', 'Hot showers', 'AC'],
    photo: U('1540497077202-7c8a3999166f'),
    gallery: [
      { label: 'Floor', photo: U('1540497077202-7c8a3999166f') },
      { label: 'Cardio', photo: U('1571902943202-507ec2618e8f') },
      { label: 'Studio', photo: U('1518611012118-696072aa579a') },
      { label: 'Lockers', photo: U('1558611848-73f7eb4001a1') },
    ],
    description:
      'Built around recovery as much as training. A sauna, a sports massage room and a physio on call twice a week, alongside a compact but complete cardio and free-weight floor. Popular with runners and footballers in the Osu corridor.',
    stats: [
      { value: '4,200', label: 'Square feet' },
      { value: 'Sauna', label: 'Recovery suite' },
      { value: '2x', label: 'Weekly physio' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 40, unit: 'day' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 200, badge: 'Popular', unit: 'mo' },
      { label: 'Recovery Add-on', detail: 'Sauna + massage, monthly', price: 320, unit: 'mo' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '6:00 AM – 9:00 PM', today: true },
      { day: 'Saturday', hours: '7:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: '8:00 AM – 6:00 PM' },
    ],
    registrationFee: 45,
    phone: '+233 26 771 2205',
    whatsapp: '233267712205',
    mapsQuery: 'Osu Recovery and Performance Oxford Street Accra',
  },
  {
    id: '8',
    slug: 'spintex-boxing-and-strength',
    name: 'Spintex Boxing & Strength',
    area: 'Spintex',
    city: 'Accra',
    region: 'Greater Accra',
    address: 'Spintex Road, near Koala, Accra',
    landmark: 'After the Shell station, first floor of the grey building',
    type: 'Boxing & Combat',
    priceFrom: 150,
    photoCount: 19,
    status: 'open',
    closesAt: '9:30 PM',
    rating: 4.7,
    reviews: 66,
    amenities: ['Boxing ring', 'Heavy bags', 'Strength floor', 'Showers', 'Coaches'],
    tags: ['Boxing ring', 'Heavy bags', 'Strength floor', 'Showers'],
    photo: U('1517836357463-d25dfeac3438'),
    gallery: [
      { label: 'Floor', photo: U('1517836357463-d25dfeac3438') },
      { label: 'Cardio', photo: U('1534258936925-c58bed479fcb') },
      { label: 'Studio', photo: U('1571019614242-c5c5dee9f50b') },
      { label: 'Entrance', photo: U('1534438327276-14e5300c3a48') },
    ],
    description:
      'A full-size ring, twelve heavy bags and a strength floor tucked behind it. Amateur and pro boxers train alongside beginners in the 6pm pad work class, and every membership includes wraps on your first day.',
    stats: [
      { value: '5,000', label: 'Square feet' },
      { value: '12', label: 'Heavy bags' },
      { value: '4', label: 'Boxing coaches' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 30, unit: 'day' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 150, badge: 'Popular', unit: 'mo' },
      { label: 'Fight Camp', detail: '8-week coached block', price: 520, unit: '8 wks' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '5:30 AM – 9:30 PM', today: true },
      { day: 'Saturday', hours: '7:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: '9:00 AM – 5:00 PM' },
    ],
    registrationFee: 35,
    phone: '+233 54 660 3312',
    whatsapp: '233546603312',
    mapsQuery: 'Spintex Boxing and Strength Spintex Road Accra',
  },
  {
    id: '9',
    slug: 'tema-community-one-gym',
    name: 'Tema Community One Gym',
    area: 'Community 1',
    city: 'Tema',
    region: 'Greater Accra',
    address: 'Community 1, Tema',
    landmark: 'Next to the community centre, opposite the clinic',
    type: 'Weightlifting / Strength',
    priceFrom: 100,
    photoCount: 11,
    status: 'closed',
    closesAt: '8:00 PM',
    rating: 4.2,
    reviews: 27,
    amenities: ['Free weights', 'Cardio row', 'Showers', 'Parking'],
    tags: ['Free weights', 'Cardio row', 'Showers', 'Parking'],
    photo: U('1571019614242-c5c5dee9f50b'),
    gallery: [
      { label: 'Floor', photo: U('1571019614242-c5c5dee9f50b') },
      { label: 'Cardio', photo: U('1540497077202-7c8a3999166f') },
      { label: 'Entrance', photo: U('1571019613454-1cb2f99b2d8b') },
    ],
    description:
      'A straightforward neighbourhood gym with the essentials covered: a solid free-weight floor, a cardio row along the wall, and free parking directly outside. One of the most affordable full-access memberships in Tema.',
    stats: [
      { value: '3,200', label: 'Square feet' },
      { value: 'Free', label: 'On-site parking' },
      { value: '100', label: 'From GHC / month' },
    ],
    rates: [
      { label: 'Daily Pass', detail: 'Single-day full access', price: 15, unit: 'day' },
      { label: 'Monthly Plan', detail: 'Full unlimited access', price: 100, badge: 'Best value', unit: 'mo' },
      { label: 'Quarterly', detail: '3 months, billed once', price: 270, unit: '3 mo' },
    ],
    hours: [
      { day: 'Monday – Friday', hours: '6:00 AM – 8:00 PM', today: true },
      { day: 'Saturday', hours: '7:00 AM – 6:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    registrationFee: 20,
    phone: '+233 30 220 4411',
    whatsapp: '233302204411',
    mapsQuery: 'Tema Community One Gym Tema',
  },
]

export const regions = ['All Areas (Ghana)', ...Array.from(new Set(gyms.map((g) => g.region)))]

export const gymTypes = [
  'All Gym Types',
  'Weightlifting / Strength',
  'CrossFit & HIIT',
  'Boxing & Combat',
  'Luxury / Wellness',
]

export const popularAreas = [
  'East Legon',
  'Osu',
  'Airport Residential',
  'Spintex',
  'Dzorwulu',
  'Cantonments',
]

export const priceBands = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Budget-friendly (< GHC200)', min: 0, max: 200 },
  { label: 'Mid-range (GHC200 – 300)', min: 200, max: 300 },
  { label: 'Premium (GHC300+)', min: 300, max: Infinity },
]

export const directionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`

export const whatsappUrl = (number: string) => `https://wa.me/${number}`

export const getGym = (slug: string) => gyms.find((g) => g.slug === slug)
