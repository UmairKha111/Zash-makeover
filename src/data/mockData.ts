/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, PortfolioItem, Review, AcademyCourse, FAQItem } from '../types';

export const SERVICES_DATA: Service[] = [
  // 1. BRIDAL MAKEUP
  { 
    id: 'srv-bridal-hd', 
    name: 'Bridal Makeup (HD)', 
    category: 'Bridal', 
    tier: 'HD',
    price: 15000, 
    duration: '120 min', 
    imageUrl: 'https://scontent.flko1-1.fna.fbcdn.net/v/t1.15752-9/785349728_1060427426713925_5536480585746540937_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=uPU0ypx25hcQ7kNvwHR8-2w&_nc_oc=Adp2d9bq49ZTuMJUmEhkMS8zR_w92DUFFumi8jCny7XtSk_rIWMrr8lJpZqj7GLYl0eym614k00qfKl_u6_u-fJd&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QFUTUdGDqOobHgHuxx6jC4mq73qJ-RCnXbYIcPxLQnCyA&oe=6AB9E32D',
    description: 'Flawless 16-hour sweatproof HD base, bespoke 3D micro-contours, jewel-toned eye design, luxury mink lashes, and royal dupatta & jewelry draping.',
    features: ['16-hour sweatproof & tearproof HD formulation', 'Custom mink lashes & brow micro-shaping', 'Royal dupatta setting & jewelry placement', 'Complimentary luxury mini touch-up kit'],
    popular: true
  },
  { 
    id: 'srv-bridal-celebrity', 
    name: 'Bridal Makeup (Celebrity)', 
    category: 'Bridal', 
    tier: 'Celebrity',
    price: 25000, 
    duration: '150 min', 
    imageUrl: 'https://scontent.flko1-2.fna.fbcdn.net/v/t1.15752-9/778542304_1370433275200946_2892329162514592919_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=Fn9fcJYU2g8Q7kNvwE20kAL&_nc_oc=AdpAhBF-DMbG3SaIKgLP5dcXcBTrBRvGTMM1NLfGFJE5hNP72h8pJNsYdwU1LXwcDstG6bng-cKxzx3IXhll6FxM&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD6QETpQlfP13WquqVinsdF_UwZs4vDXIspu32CdX-vtpBug&oe=6AB9D121',
    description: 'Ultra-luxury high-definition celebrity bridal transformation with gold-infused hydra prep, bespoke 24K eye shimmer, and red-carpet finish.',
    features: ['High-end luxury brand products (Dior, Charlotte Tilbury)', '24K gold skin hydration prep & essence', 'Master artist priority styling & drape', 'Deluxe bridal touch-up vanity kit'],
    popular: false
  },
  { 
    id: 'srv-bridal-basic', 
    name: 'Bridal Makeup (Basic)', 
    category: 'Bridal', 
    tier: 'Basic',
    price: 8000, 
    duration: '90 min', 
    imageUrl: 'https://scontent.flko1-2.fna.fbcdn.net/v/t1.15752-9/784074458_1572803860964224_6800930702155895670_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=xEj_aZWJzs4Q7kNvwHLcwRr&_nc_oc=AdrhsV9Z2w09UkNUcZx_9FagBKivFZ4PYqoxnjKclES6SC8kjrI_T16ipVUFMAYGJ8br0uatZuSJszSqg977lVL9&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD6QHPZfdMeNLTdOcI7MiySGgFyHGgL6PWcNi4ix-RJjjLkw&oe=6AB9D415',
    description: 'Classic high-coverage bridal glam with radiant complexion base, traditional eye accents, and lehenga dupatta pinning.',
    features: ['Long-lasting radiant bridal base', 'Classic smokey or shimmer eye design', 'Lash installation & liner', 'Dupatta setting & bindi positioning']
  },

  // 2. RECEPTION MAKEUP
  { 
    id: 'srv-reception-hd', 
    name: 'Reception Makeup (HD)', 
    category: 'Reception', 
    tier: 'HD',
    price: 13000, 
    duration: '100 min', 
    imageUrl: 'https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/780550818_1605849674544713_287040913512456892_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=RI4iGjGBbtUQ7kNvwE4tjA1&_nc_oc=Adr7OGf_xzPY_jVduLFL12gWm99Vv4wgrf2-XilasVawEj2kN-gxzNeQCjLobxXaf0SYcT9ItOkZWuSqhGmzkH75&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QFWPryR0X-HkxNY89s3vaL70f0qBbQjmroGsviUCS-uBg&oe=6AB9D1E1',
    description: 'Regal evening reception glam with illuminated skin, smoked halo eyes, and sculpted contours crafted for banquet lighting.',
    features: ['HD camera-optimized finish', 'Smoked halo eye artistry with micro-glitter', 'Silk lashes & satin ombre lips', 'Gown / Saree styling assistance'],
    popular: true
  },
  { 
    id: 'srv-reception-celebrity', 
    name: 'Reception Makeup (Celebrity)', 
    category: 'Reception', 
    tier: 'Celebrity',
    price: 23000, 
    duration: '120 min', 
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
    description: 'High-octane red-carpet reception artistry with glass skin strobing, dramatic cut-crease, and luxury designer pigments.',
    features: ['Couture skin finish & strobe body glow', 'Precision graphic / halo diamond eye design', 'Premium international luxury vanity', 'Complete hair architecture & drape']
  },
  { 
    id: 'srv-reception-basic', 
    name: 'Reception Makeup (Basic)', 
    category: 'Reception', 
    tier: 'Basic',
    price: 7000, 
    duration: '75 min', 
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    description: 'Clean, elegant evening reception look with glowing base and refined soft-glam contours.',
    features: ['Flawless evening foundation', 'Neutral / warm shimmer lids', 'Natural flutter lash enhancement', 'Hair & dupatta assistance']
  },

  // 3. ENGAGEMENT MAKEUP
  { 
    id: 'srv-engagement-hd', 
    name: 'Engagement Makeup (HD)', 
    category: 'Engagement', 
    tier: 'HD',
    price: 5000, 
    duration: '90 min', 
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    description: 'Dewy long-wear makeup customized for cocktail and sagan lighting with rose gold shimmer and satin lip pairing.',
    features: ['Hydrated glass-skin illumination', 'Smoked rose gold eye art', 'Silk lash installation', 'Saree / lehenga drape styling'],
    popular: true
  },
  { 
    id: 'srv-engagement-celebrity', 
    name: 'Engagement Makeup (Celebrity)', 
    category: 'Engagement', 
    tier: 'Celebrity',
    price: 7000, 
    duration: '90 min', 
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    description: 'High-fashion cocktail and engagement glow with sculpted bone structure and diamond glitter lids.',
    features: ['3D Bone sculpting & strobe prep', 'Waterproof 12-hour high-hold pigments', 'Luxury lash layers & glossy lips', 'Premium designer product line']
  },
  { 
    id: 'srv-engagement-basic', 
    name: 'Engagement Makeup (Basic)', 
    category: 'Engagement', 
    tier: 'Basic',
    price: 3000, 
    duration: '60 min', 
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    description: 'Fresh, luminous base with soft pastel eye accents tailored for daytime rings and sagan ceremonies.',
    features: ['Breathable luminous foundation', 'Pastel peach / pink eye shadow', 'Mascara & natural lash accent', 'Outfit drape support']
  },

  // 4. PARTY MAKEUP
  { 
    id: 'srv-party-hd', 
    name: 'Party Makeup (HD)', 
    category: 'Party', 
    tier: 'HD',
    price: 2500, 
    duration: '60 min', 
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    description: 'Monochromatic elegant palettes, soft sculpted highlighting, and radiant skin finish for wedding guests and soirees.',
    features: ['Featherlight breathable HD foundation', 'Customized blush draping', 'Natural flutter lash accent', 'Transfer-resistant satin/matte lip'],
    popular: true
  },
  { 
    id: 'srv-party-celebrity', 
    name: 'Party Makeup (Celebrity)', 
    category: 'Party', 
    tier: 'Celebrity',
    price: 5000, 
    duration: '75 min', 
    imageUrl: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=800&auto=format&fit=crop',
    description: 'VIP luxury party glam with strobe highlights, dramatic lashes, and camera-ready runway finish.',
    features: ['4K Camera-optimized skin texture', 'Graphic or glitter lid placement', 'Volume lash extensions', 'Full international luxury brands']
  },
  { 
    id: 'srv-party-basic', 
    name: 'Party Makeup (Basic)', 
    category: 'Party', 
    tier: 'Basic',
    price: 1500, 
    duration: '45 min', 
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    description: 'Quick, radiant party look with glowing skin, soft winged eye, and complementary lipstick.',
    features: ['Hydrating BB / liquid foundation', 'Soft neutral eye shadow', 'Kajal & lip stain', 'Natural glow finish']
  }
];
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Crimson Bridal Glow',
    category: 'Bridal',
    imageUrl:
      'https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/780550818_1605849674544713_287040913512456892_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=RI4iGjGBbtUQ7kNvwE4tjA1&_nc_oc=Adr7OGf_xzPY_jVduLFL12gWm99Vv4wgrf2-XilasVawEj2kN-gxzNeQCjLobxXaf0SYcT9ItOkZWuSqhGmzkH75&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QFWPryR0X-HkxNY89s3vaL70f0qBbQjmroGsviUCS-uBg&oe=6AB9D1E1',
    description:
      'A traditional royal Indian bridal look featuring seamless matte HD coverage, gold-flecked lids, and a velvet royal crimson lip designed to radiate under intense wedding mandap chandeliers.',
    techniques: [
      'Dual-tone HD Base Sculpting',
      '24k Gold Leaf Eye Shimmer',
      'Precision Velvet Lip Shaping',
      'Hydra-Shield Setting Mist',
    ],
    priceEst: 15000,
    timeEst: '2 hours',
    primaryColor: '#8C1D2F',
    secondaryColor: '#C5A059',
    accentTone: 'Warm Crimson & Royal Gold',
    story:
      'Created for a sunset heritage wedding at Noor Manzil Palace. The client needed a base that could transition flawlessly from golden hour outdoor portraits to bright indoor reception lighting.',
    productsUsed: [
      'Charlotte Tilbury Hollywood Flawless Filter',
      'NARS Radiant Longwear Foundation',
      'Huda Beauty Empowered Palette',
      'MAC Retro Matte Ruby Woo',
    ],
  },

  {
    id: 'port-2',
    title: 'Subtle Luminescence & Glass Skin',
    category: 'Soft Glam',
    imageUrl:
      'https://scontent.flko1-2.fna.fbcdn.net/v/t1.15752-9/783406514_3187007901493600_7873042593095188934_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=ZQp-7lsm_a0Q7kNvwFpXjTZ&_nc_oc=AdpxH4tSKRk3S3ie2_DJpOrOcUC9wnxOcKrhm1S9z-d_bya6joRMyltWZveVNf3_twvln0pEipo_00eTk0E8ps8q&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD6QHpJqJ5BPx9vg05Z4r-m5ad5jSMz2DpzJg79THEy0C6Nw&oe=6AB9CDDD',
    description:
      'A glass-skin finish with soft mauve tones and high-impact dewiness, magnifying the model’s natural bone structure without looking heavy in daylight.',
    techniques: [
      'Hydrated Strobe Base',
      'Monochromatic Mauve Tint Draping',
      'Individual Feather Lashes',
      'Glazed Lip Gloss Layering',
    ],
    priceEst: 2500,
    timeEst: '1 hour',
    primaryColor: '#EAC9C1',
    secondaryColor: '#8C6C63',
    accentTone: 'Rose Quartz & Mauve Silk',
    story:
      'Designed for an afternoon garden engagement party. Focus was on hyper-hydrated, bouncy skin that catches natural sunbeams from every angle.',
    productsUsed: [
      'Dior Backstage Glow Face Palette',
      'Rare Beauty Soft Pinch Liquid Blush',
      'Fenty Beauty Gloss Bomb in Fenty Glow',
    ],
  },

  {
    id: 'port-3',
    title: 'Vogue Metallic & Bronzed Edge',
    category: 'Editorial',
    imageUrl:
      'https://scontent.flko1-2.fna.fbcdn.net/v/t1.15752-9/778542304_1370433275200946_2892329162514592919_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=Fn9fcJYU2g8Q7kNvwE20kAL&_nc_oc=AdpAhBF-DMbG3SaIKgLP5dcXcBTrBRvGTMM1NLfGFJE5hNP72h8pJNsYdwU1LXwcDstG6bng-cKxzx3IXhll6FxM&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD6QETpQlfP13WquqVinsdF_UwZs4vDXIspu32CdX-vtpBug&oe=6AB9D121',
    description:
      'Designed for a high-fashion digital editorial spread. Features structured bronze cheek sculpting with a bold wet-look holographic shadow and bare satin lips.',
    techniques: [
      '3D Bone Sculpting',
      'Wet-look Gloss Lids',
      'Bleached Micro Brow Styling',
      'Nude Satin Lip Contour',
    ],
    priceEst: 5000,
    timeEst: '1.5 hours',
    primaryColor: '#2C2A29',
    secondaryColor: '#C5A059',
    accentTone: 'Smoked Charcoal & Molten Bronze',
    story:
      'Curated for Fashion Week digital campaign featuring sharp architectural lighting and dramatic jewelry styling.',
    productsUsed: [
      'Pat McGrath Mothership Palette',
      'Danessa Myricks Colorfix Glaze',
      'Tom Ford Shade & Illuminate',
    ],
  },

  {
    id: 'port-4',
    title: 'Pre-Wedding Sagan Pastels',
    category: 'Sagan',
    imageUrl:
      'https://scontent.flko1-2.fna.fbcdn.net/v/t1.15752-9/784074458_1572803860964224_6800930702155895670_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=xEj_aZWJzs4Q7kNvwHLcwRr&_nc_oc=AdrhsV9Z2w09UkNUcZx_9FagBKivFZ4PYqoxnjKclES6SC8kjrI_T16ipVUFMAYGJ8br0uatZuSJszSqg977lVL9&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD6QHPZfdMeNLTdOcI7MiySGgFyHGgL6PWcNi4ix-RJjjLkw&oe=6AB9D415',
    description:
      'Perfectly balanced cocktail aesthetic. Features soft peach smoked contours and a romantic half-up hair artistry designed for whimsical pastel lehengas.',
    techniques: [
      'Dewy Peach Contours',
      'Smoked Espresso Micro-Wings',
      'Volumetric Hair Prep & Pearls',
      'Velvet Coral Lip Staining',
    ],
    priceEst: 5000,
    timeEst: '1.5 hours',
    primaryColor: '#F2DFD8',
    secondaryColor: '#BCA49F',
    accentTone: 'Pastel Peach & Champagne Taupe',
    story:
      'Crafted for a luxury destination sagan ceremony in Jaipur, complementing a mint green and blush pink embroidered lehenga.',
    productsUsed: [
      'Laura Mercier Translucent Honey',
      'Anastasia Beverly Hills Soft Glam',
      'YSL Rouge Pur Couture',
    ],
  },

  {
    id: 'port-5',
    title: 'Sunset Terracotta Radiance',
    category: 'Soft Glam',
    imageUrl:
      'https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/780619626_1054231370683336_7216920493865028102_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=VbJGlGsIDgkQ7kNvwHuR5Dl&_nc_oc=AdpNCvgo_5fKyh-LyjiKzyHpcMMeWxK75Hra30guM1KI_o5aMX1VzZd7FEKIuO9u_TQAc7siezZo-KGJ3y4Jub2b&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QFJCIxQWy8_ttuLqYcYEUrM_5YoWmMe_AT4dCrV9sZhKg&oe=6AB9F9B2',
    description:
      'A warm, sunkissed glam focusing on glowing collarbones, custom sun-bleached terracotta tones, and gold-dusted satin lips.',
    techniques: [
      'Liquid Bronze Body Strobe',
      'Warm Terracotta Blush Placement',
      'Satin Amber Glossing',
      'Golden Olive Eyeliner',
    ],
    priceEst: 2500,
    timeEst: '1 hour',
    primaryColor: '#D38E75',
    secondaryColor: '#C5A059',
    accentTone: 'Sun-drenched Terracotta & Amber',
    story:
      'Ideal for mehendi and haldi functions, blending earthy warmth with sweatproof durability.',
    productsUsed: [
      'Sol de Janeiro Glowmotions',
      'NARS Taj Mahal Blush',
      'Benefit Hoola Caramel',
    ],
  },

  {
    id: 'port-6',
    title: 'The Modern Classic Wing & Velvet Red',
    category: 'Editorial',
    imageUrl:
      'https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/785279876_1044699908182040_5405859298454074412_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=3xJNEytbEY4Q7kNvwEnnIwv&_nc_oc=AdqiIGWkng2YfOw_wXPkjYViyCvApSkJc1bOxF7v2gJmRGtfYsnF9yBXQ_tRNrsOeabBVEF6KJGUqAqvFqZjLzmB&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QF7Al1T53zDhHfsIePNtyBW0ffBDWwWkRhXWPwL_yzFaA&oe=6AB9D512',
    description:
      'A striking minimalist look starring a hyper-extended, hand-painted graphic eyeliner wing, flawless satin porcelain complexion, and bold cherry red lips.',
    techniques: [
      'Graphic Gel Winging',
      'Porcelain Skin Blur Finish',
      'Matte Cherry Statement Lip',
      'Precision Brow Lamination',
    ],
    priceEst: 5000,
    timeEst: '1.25 hours',
    primaryColor: '#1A1A1A',
    secondaryColor: '#D11D27',
    accentTone: 'Midnight Onyx & Cherry Lacquer',
    story:
      'Vintage Old-Hollywood charm reinvented with sharp contemporary graphic precision for a magazine cover shoot.',
    productsUsed: [
      'Inglot AMC Gel Eyeliner 77',
      'Estée Lauder Double Wear',
      'Fenty Beauty Stunna Lip Paint',
    ],
  },

  {
    id: 'port-7',
    title: 'Noor Emerald Royal Reception',
    category: 'Bridal',
    imageUrl:
      'https://scontent.flko1-1.fna.fbcdn.net/v/t1.15752-9/785349728_1060427426713925_5536480585746540937_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=uPU0ypx25hcQ7kNvwHR8-2w&_nc_oc=Adp2d9bq49ZTuMJUmEhkMS8zR_w92DUFFumi8jCny7XtSk_rIWMrr8lJpZqj7GLYl0eym614k00qfKl_u6_u-fJd&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QFUTUdGDqOobHgHuxx6jC4mq73qJ-RCnXbYIcPxLQnCyA&oe=6AB9E32D',
    description:
      'Rich jewel tones with smoked emerald accents, micro-glitter inner tearducts, and warm caramel contoured cheekbones.',
    techniques: [
      'Jeweled Halo Eye Technique',
      'Airbrushed Velvet Finish',
      'Ombre Lip Contour',
      'Heavy Dupatta Pinning',
    ],
    priceEst: 13000,
    timeEst: '2 hours',
    primaryColor: '#1B3B2B',
    secondaryColor: '#C5A059',
    accentTone: 'Emerald Velvet & Vintage Gold',
    story:
      'Created for a grand evening reception paired with antique polki emerald jewelry.',
    productsUsed: [
      'Natasha Denona Glam Palette',
      'Kryolan Derma Color Camouflage',
      'Bobbi Brown Shimmer Brick',
    ],
  },

  {
    id: 'port-8',
    title: 'Champagne Cocktail Luminary',
    category: 'Cocktail',
    imageUrl:
      'https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/781152975_2984519745219110_5873059318247935551_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=_vu4f4QGkrMQ7kNvwF577yS&_nc_oc=AdriPo6zxoJb2bloNW9PM2_z5BjcmcDys7oAb5tCu4GCC4XinK0R-EEOaVMhEfYnkqUKxtqRqNeztlpCJL7XeMjn&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QFWUMSdrYzwecxlv4YgnVUM9QQilwh1oNeQScVd4i1XoA&oe=6AB9E533',
    description:
      'A glowing champagne monochromatic glam, with fine glitter cut crease and high-gloss nude lips, engineered to shine under club strobes and ambient dining lights.',
    techniques: [
      'Diamond Cut-Crease',
      'Glass Lip Lacquer',
      'Strobe Highlighting',
      'Textured Ponytail Styling',
    ],
    priceEst: 5000,
    timeEst: '1.25 hours',
    primaryColor: '#E6D7C3',
    secondaryColor: '#7A6B5D',
    accentTone: 'Champagne Shimmer & Cocoa',
    story:
      'Popular look for bachelorette parties, cocktail nights, and sangeet dance celebrations.',
    productsUsed: [
      'Stila Magnificent Metals Kitten Karma',
      'Too Faced Born This Way',
      'Urban Decay All Nighter',
    ],
  },

   {
    id: 'port-8',
    title: 'Champagne Cocktail Luminary',
    category: 'Cocktail',
    imageUrl:
      'https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/791244872_1531096138816848_6867002188865905314_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=_ogTnGZExQ8Q7kNvwFTE-7v&_nc_oc=AdrWuVW0Eo6oGl-79qCSD4AKe3ZjSijeyiPIQrVIUwGdwLapKsgKcZ4iDRB5XI-HliQ0mHZVeMOPdF4cD2I8P69b&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QEJM6I92bbKwpkfcWQTaVwlJEKbz9Ypf52cRGGW5kOzsw&oe=6ABC6540',
    description:
      'A glowing champagne monochromatic glam, with fine glitter cut crease and high-gloss nude lips, engineered to shine under club strobes and ambient dining lights.',
    techniques: [
      'Diamond Cut-Crease',
      'Glass Lip Lacquer',
      'Strobe Highlighting',
      'Textured Ponytail Styling',
    ],
    priceEst: 5000,
    timeEst: '1.25 hours',
    primaryColor: '#E6D7C3',
    secondaryColor: '#7A6B5D',
    accentTone: 'Champagne Shimmer & Cocoa',
    story:
      'Popular look for bachelorette parties, cocktail nights, and sangeet dance celebrations.',
    productsUsed: [
      'Stila Magnificent Metals Kitten Karma',
      'Too Faced Born This Way',
      'Urban Decay All Nighter',
    ],
  },
];
export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'acad-1',
    title: '30-Day Pro Master Bridal Artistry Diploma',
    duration: '30 Days (120 Hours Intensive)',
    level: 'Masterclass & Pro',
    fee: 35000,
    schedule: 'Mon - Fri | 10:30 AM - 3:30 PM',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop',
    description: 'Our premier certification program covering fundamental skin anatomy to advanced 3D HD bridal layering, airbrush technology, bridal draping, professional photography lighting, and business monetization.',
    curriculum: [
      'Skin Anatomy, Skin Conditions & Corrective Color Theory',
      'Advanced Undertone Mapping (Warm, Cool, Olive, Neutral)',
      'Flawless HD & 4K Camera-Ready Base Application',
      'Airbrush Compressor Technology & Maintenance',
      '12 Distinct Eye Techniques (Cut Crease, Halo, Arabic, Brazilian Smokey)',
      'Bridal Hair Styling: Hollywood Waves, Textured Buns & Fresh Flora',
      'Dupatta, Saree & Veil Draping Masterclass',
      'Client Consultation Psychology, Pricing Strategy & Instagram Growth'
    ],
    includedKit: [
      'Professional 32-Piece Luxury Synthetic & Natural Bristle Brush Set',
      'HD Concealer & Foundation Wheel (Multi-shade)',
      'Contour, Highlight & Blush Pro Palette',
      'VLCC-Aligned Course Manual & Certification Badge',
      'Live Model Portfolio Shoot by Fashion Photographer'
    ],
    certification: 'Certified VLCC Professional MUA Diploma & Zash Studio Badge',
    seatsAvailable: 6
  },
  {
    id: 'acad-2',
    title: '5-Day Intensive HD Base & Airbrush Workshop',
    duration: '5 Days (25 Hours)',
    level: 'Intermediate',
    fee: 15000,
    schedule: 'Saturday - Wednesday | 11:00 AM - 4:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    description: 'Designed for working makeup artists wishing to upgrade their complexion work. Master sweatproof glass-skin, airbrush misting, seamless spot concealing, and color correction.',
    curriculum: [
      'Glass-Skin Prepping: Toners, Essences & Priming Oils',
      'Color Correction for Hyperpigmentation, Acne & Dark Circles',
      'Airbrush Gun Control, Dilution Ratios & Silicon Base Mastery',
      'Baking, Micro-setting & 16-Hour Waterproofing Formulations',
      'Photography & Natural vs Studio Light Calibration'
    ],
    includedKit: [
      'Temptu Airbrush Sample Kit & Cleaner',
      'Microfiber Powder Puffs & Blending Eggs',
      'Certificate of Advanced Complexion Mastery'
    ],
    certification: 'Advanced Complexion & Airbrush Specialization Certificate',
    seatsAvailable: 4
  },
  {
    id: 'acad-3',
    title: '2-Day Personal Self-Glam & Everyday Mastery',
    duration: '2 Days (8 Hours)',
    level: 'Beginner',
    fee: 5000,
    schedule: 'Weekend Batch (Sat & Sun) | 1:00 PM - 5:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
    description: 'Learn to do your own makeup like a seasoned professional! Tailored entirely to your face shape, eye shape, and personal cosmetic bag.',
    curriculum: [
      'Vanity Audit: What to keep, toss, or add to your makeup bag',
      '10-Minute Morning Glow Routine for daily elegance',
      'Winged Eyeliner & Lash Application tailored to your eye shape',
      'Daytime Office Chic to Nighttime Cocktail Glam Transformation',
      'Easy 5-Minute Hair Blowout & Wave Techniques'
    ],
    includedKit: [
      'Essential 8-Piece Daily Brush Set',
      'Personal Face Chart & Product Guidebook',
      'Certificate of Completion'
    ],
    certification: 'Zash Studio Personal Glam Master Certificate',
    seatsAvailable: 8
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Anjali Sharma',
    role: 'Bride (Grand Royal Wedding)',
    category: 'Bridal',
    rating: 5,
    date: '2026-05-18',
    avatarUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=300&auto=format&fit=crop',
    text: 'Zash made my bridal makeup dreams come true! The HD base lasted for 14 hours straight through tears, dancing, and high-intensity flash photography. Truly a certified VLCC master with remarkable warmth and patience.',
    verified: true,
    eventLocation: 'Noor Manzil Palace, Aligarh'
  },
  {
    id: 'rev-2',
    name: 'Meera Rao',
    role: 'Sagan & Engagement Event',
    category: 'Bridal',
    rating: 5,
    date: '2026-06-02',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    text: 'The glass-skin finish was incredible! Got endless compliments on my dewy look. It felt lighter than air, didn’t crease in smile lines, and photographed beautifully under the evening fairy lights.',
    verified: true,
    eventLocation: 'Grand Heritage Lawn, Delhi NCR'
  },
  {
    id: 'rev-3',
    name: 'Rhea Sen',
    role: 'Fashion Model / Creative Director',
    category: 'Editorial',
    rating: 5,
    date: '2026-06-14',
    avatarUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=300&auto=format&fit=crop',
    text: 'I worked with Zash for our couture studio editorial spread. The precision on the graphic wing and cheek contour is level-10. Absolute master of clean Editorial lines and fast turnarounds on set!',
    verified: true,
    eventLocation: 'Studio Lumen, Mumbai'
  },
  {
    id: 'rev-4',
    name: 'Sana Fatima',
    role: 'Academy Graduate (30-Day Pro Diploma)',
    category: 'Academy',
    rating: 5,
    date: '2026-07-09',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    text: 'Enrolling in Zash’s Academy was the best career move I ever made. Her hands-on correction, detailed color theory notes, and live model photoshoots gave me the confidence to launch my own freelance bridal studio within 2 months!',
    verified: true,
    eventLocation: 'Zash Makeup Academy, Aligarh'
  },
  {
    id: 'rev-5',
    name: 'Dr. Tanya Verma',
    role: 'Reception Bride',
    category: 'Bridal',
    rating: 5,
    date: '2026-07-28',
    avatarUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=300&auto=format&fit=crop',
    text: 'As someone with hyper-sensitive skin, I was nervous about heavy bridal makeup. Zash used premium hypoallergenic brands (Dior, Charlotte Tilbury) and sterilized every single brush. Flawless skin without a single breakout!',
    verified: true,
    eventLocation: 'The Oberoi Amarvilas'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Bridal',
    question: 'How far in advance should I book my bridal makeup date?',
    answer: 'We recommend reserving your bridal date 3 to 6 months in advance, especially during the peak wedding season (October to March). Bookings are secured on a first-come, first-served basis with an initial confirmation.'
  },
  {
    category: 'Bridal',
    question: 'Do you travel on-location for destination weddings?',
    answer: 'Yes! Zash and our senior vanity team frequently travel across India and internationally for destination weddings. Travel and lodging arrangements are calculated transparently based on venue location.'
  },
  {
    category: 'Hygiene',
    question: 'What hygiene and sterilization protocols are followed?',
    answer: 'Hygiene is non-negotiable. All makeup brushes undergo medical-grade sanitization between clients. We strictly use disposable mascara wands, lip applicators, metal palettes, and 70% isopropyl alcohol sanitizing sprays for all powder/cream products.'
  },
  {
    category: 'Booking',
    question: 'Are hair styling, jewelry setting, and dupatta draping included in bridal packages?',
    answer: 'Yes! Our Luxury HD Bridal Signature Suite includes complete bespoke hair artistry, dupatta pinning, veil draping, and jewelry placement.'
  },
  {
    category: 'Academy',
    question: 'Do I need prior makeup experience to enroll in the 30-Day Pro Diploma course?',
    answer: 'No prior experience is necessary. The curriculum starts from the absolute fundamentals of skin science, brush ergonomics, and color theory before escalating into advanced masterclass techniques.'
  }
];
