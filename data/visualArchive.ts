export type VisualArchiveEntry = {
  id: string;
  order: number;
  slug: string;
  title: string;
  subtitle: string;
  archiveNote: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
    orientation?: "portrait" | "landscape" | "square";
  };
  details: {
    title: string;
    text: string;
    image?: {
      src: string;
      alt: string;
    };
  }[];
  whatToNotice: string[];
  archiveRelations: {
    title: string;
    slug: string;
    note: string;
  }[];
  wearableConnection?: {
    enabled: boolean;
    text?: string;
    ctaLabel?: string;
    href?: string;
  };
  meta?: {
    artist?: string;
    medium?: string;
    year?: string;
    dimensions?: string;
    status?: string;
  };
};

const defaultWearableText =
  "Selected fragments from this work may be translated into limited silk editions — not as simple reproductions, but as wearable fragments of the Visual Archive.";

const defaultMeta = {
  artist: "Nino Devdariani",
  medium: "Acrylic and ink on canvas",
  year: "Year to be confirmed",
  dimensions: "Dimensions to be confirmed",
  status: "Original work",
};

export const visualArchiveEntries: VisualArchiveEntry[] = [
  {
    id: "visual-archive-001",
    order: 1,
    slug: "a-b-c-d",
    title: "A B C D",
    subtitle:
      "A childhood world of color, first steps, first signs, and the alphabet of entering life.",
    archiveNote:
      "A B C D opens the archive with the logic of beginnings. The painting imagines childhood as a bright, crowded, unstable world where everything is being learned for the first time: signs, bodies, gestures, rules, mistakes, beauty, fear, and play. The alphabet becomes more than letters; it becomes the first structure through which life is entered step by step.",
    tags: ["Childhood", "Alphabet", "Beginning", "Color", "Learning", "First World"],
    image: {
      src: "/images/visual-archive/abcd.jpeg",
      alt: "A B C D — painting from Nino Devdariani's Visual Archive",
      orientation: "landscape",
    },
    details: [
      {
        title: "Detail I — The Alphabet",
        text: "The title turns the painting into a beginning: a place where life is still being learned letter by letter.",
      },
      {
        title: "Detail II — The Painted Crowd",
        text: "Figures and fragments gather like first impressions — vivid, uneven, confusing, and full of discovery.",
      },
      {
        title: "Detail III — Art Is Not Always Pretty",
        text: "The written phrase inside the painting pushes against decoration and reminds the viewer that art may begin in color, but it does not have to remain comfortable.",
      },
    ],
    whatToNotice: [
      "Childhood as a world of first signs",
      "The alphabet as a structure for entering life",
      "Color as memory rather than decoration",
      "Playfulness mixed with unease",
      "The sentence about art not always being pretty",
    ],
    archiveRelations: [],
    wearableConnection: {
      enabled: true,
      text: defaultWearableText,
      ctaLabel: "Explore the Wearable Archive",
      href: "/wearable-archive",
    },
    meta: defaultMeta,
  },
  {
    id: "visual-archive-002",
    order: 2,
    slug: "exhibition",
    title: "Exhibition",
    subtitle:
      "A strange procession of figures preparing paintings for a great exhibition.",
    archiveNote:
      "Exhibition turns the act of showing art into theatre. Japanese figures prepare for a large exhibition, carrying works toward their destination while the boundary between painting, frame, and character begins to collapse. Some images appear to step out of their frames; others trap their figures inside them. The result is an exhibition before the exhibition — a world where artworks are already alive before they reach the wall.",
    tags: ["Exhibition", "Frame", "Japanese Figures", "Procession", "Artworks Escaping", "Theatre"],
    image: {
      src: "/images/visual-archive/exhibition.jpeg",
      alt: "Exhibition — painting from Nino Devdariani's Visual Archive",
      orientation: "landscape",
    },
    details: [
      {
        title: "Detail I — Paintings in Transit",
        text: "The works are not yet installed, but they already behave as living objects.",
      },
      {
        title: "Detail II — Figures Inside Frames",
        text: "Characters appear caught between image and reality, turning the frame into a stage.",
      },
      {
        title: "Detail III — The Exhibition Before the Exhibition",
        text: "The preparation itself becomes the event, as if art begins performing before the audience arrives.",
      },
    ],
    whatToNotice: [
      "The boundary between artwork and viewer",
      "Frames as stages",
      "Paintings leaving their frames",
      "Theatrical preparation",
      "The exhibition as movement, not only display",
    ],
    archiveRelations: [],
    wearableConnection: {
      enabled: true,
      text: defaultWearableText,
      ctaLabel: "Explore the Wearable Archive",
      href: "/wearable-archive",
    },
    meta: defaultMeta,
  },
  {
    id: "visual-archive-003",
    order: 3,
    slug: "pia-nino",
    title: "Pia-Nino",
    subtitle:
      "A painted society gathered around music, taste, noise, and the fragile idea of quality.",
    archiveNote:
      "Pia-Nino is a work about listening. Around the piano gathers a mixed society: some figures belong to the world of quality, taste, and attention, while others bring noise, excess, and instability. The artist places herself within this listening society without turning the painting into a literal self-portrait. The piano notes refer to the Georgian song \"Tbiliso,\" making music a carrier of place, memory, and belonging.",
    tags: ["Music", "Piano", "Tbiliso", "Society", "Taste", "Listening"],
    image: {
      src: "/images/visual-archive/pia-nino.jpg",
      alt: "Pia-Nino — painting from Nino Devdariani's Visual Archive",
      orientation: "portrait",
    },
    details: [
      {
        title: "Detail I — The Piano",
        text: "The piano becomes the center of the painting, a place where different social and emotional worlds gather.",
      },
      {
        title: "Detail II — The Notes",
        text: "The written notes connect the work to Georgian musical memory and to the atmosphere of Tbilisi.",
      },
      {
        title: "Detail III — The Listening Society",
        text: "The figures are not equal in tone; some listen, some perform, some disturb, and some simply occupy the room.",
      },
    ],
    whatToNotice: [
      "Music as social structure",
      "The piano as a gathering point",
      "The contrast between quality and noise",
      "The hidden self-presence of the artist",
      "The reference to Georgian musical memory",
    ],
    archiveRelations: [],
    wearableConnection: {
      enabled: true,
      text: defaultWearableText,
      ctaLabel: "Explore the Wearable Archive",
      href: "/wearable-archive",
    },
    meta: {
      ...defaultMeta,
      year: "2026",
    },
  },
  {
    id: "visual-archive-004",
    order: 4,
    slug: "ai",
    title: "AI",
    subtitle: "An old society watches as a new civilization descends from above.",
    archiveNote:
      "AI stages a collision between ancient society and the arrival of a new civilizational force. Below, a community from an older, almost biblical world looks upward; above them, something new descends — technological, distant, powerful, and difficult to name. The painting does not treat artificial intelligence as a clean futuristic symbol. Instead, it turns AI into an event witnessed by people who belong to another order of time.",
    tags: ["Artificial Intelligence", "Civilization", "Old World", "Descent", "Witnesses", "Future"],
    image: {
      src: "/images/visual-archive/ai.jpeg",
      alt: "AI — painting from Nino Devdariani's Visual Archive",
      orientation: "portrait",
    },
    details: [
      {
        title: "Detail I — The Old Society",
        text: "The figures below belong to an earlier order, watching the future arrive from outside their world.",
      },
      {
        title: "Detail II — The Descent",
        text: "The new force comes from above, suggesting revelation, invasion, miracle, or threat.",
      },
      {
        title: "Detail III — Civilization as Spectacle",
        text: "AI is not shown as a device only; it appears as a civilizational moment.",
      },
    ],
    whatToNotice: [
      "Old society confronting the future",
      "The vertical structure of above and below",
      "AI as civilizational arrival",
      "A biblical or ancient atmosphere",
      "The tension between wonder and threat",
    ],
    archiveRelations: [],
    wearableConnection: {
      enabled: true,
      text: defaultWearableText,
      ctaLabel: "Explore the Wearable Archive",
      href: "/wearable-archive",
    },
    meta: {
      ...defaultMeta,
      year: "2025",
    },
  },
  {
    id: "visual-archive-005",
    order: 5,
    slug: "someone-else-in-eyes",
    title: "Someone Else in Eyes",
    subtitle:
      "A painting about identity watched, borrowed, reflected, and interrupted by another presence.",
    archiveNote:
      "Someone Else in Eyes turns identity into a crowded and unstable field. The figures do not simply look outward; they seem to contain other gazes inside themselves. Faces, costumes, animals, staged bodies, and visual fragments create a world where the self no longer belongs entirely to the person who carries it. The painting asks what happens when another presence enters the eye — and begins to look back from within.",
    tags: ["Identity", "Gaze", "Reflection", "Masks", "Self", "Other"],
    image: {
      src: "/images/visual-archive/someone-else-in-eyes.jpg",
      alt: "Someone Else in Eyes — painting from Nino Devdariani's Visual Archive",
      orientation: "landscape",
    },
    details: [
      {
        title: "Detail I — The Gaze",
        text: "The eye becomes a place of interruption, where the self may no longer be alone.",
      },
      {
        title: "Detail II — Costumes and Doubles",
        text: "The figures feel staged, disguised, borrowed, or partially inhabited by someone else.",
      },
      {
        title: "Detail III — The Other Within",
        text: "The painting suggests that identity is not fixed; it is watched, reflected, and sometimes invaded.",
      },
    ],
    whatToNotice: [
      "The instability of identity",
      "Eyes as interior spaces",
      "The relation between self and other",
      "Costume as disguise",
      "Figures that seem watched from within",
    ],
    archiveRelations: [],
    wearableConnection: {
      enabled: true,
      text: defaultWearableText,
      ctaLabel: "Explore the Wearable Archive",
      href: "/wearable-archive",
    },
    meta: defaultMeta,
  },
  {
    id: "visual-archive-006",
    order: 6,
    slug: "textile",
    title: "Textile",
    subtitle: "Paintings transferred onto clothing and worn by faceless models.",
    archiveNote:
      "Textile is the clearest bridge between the Visual Archive and the Wearable Archive. Here, paintings have already left the wall and moved onto clothing. The models are faceless, which shifts attention away from individual portraiture and toward surface, fabric, body, and transformation. The work does not simply decorate garments; it imagines clothing as a carrier of painted worlds.",
    tags: ["Textile", "Wearable Archive", "Garment", "Faceless Models", "Surface", "Transformation"],
    image: {
      src: "/images/visual-archive/textile.jpeg",
      alt: "Textile — painting from Nino Devdariani's Visual Archive",
      orientation: "landscape",
    },
    details: [
      {
        title: "Detail I — Faceless Models",
        text: "The absence of faces turns the figures into carriers of surface, gesture, and fabric.",
      },
      {
        title: "Detail II — Paintings on Clothing",
        text: "The painted world migrates from canvas to garment, anticipating the logic of wearable editions.",
      },
      {
        title: "Detail III — Body as Archive",
        text: "The body becomes a moving archive, not a neutral display form.",
      },
    ],
    whatToNotice: [
      "The direct link to Wearable Archive",
      "Paintings becoming clothing",
      "The faceless model as a deliberate device",
      "Fabric as a carrier of memory and image",
      "The body as a moving surface",
    ],
    archiveRelations: [],
    wearableConnection: {
      enabled: true,
      text: "This work directly visualizes the movement from painting to clothing. Selected fragments may be translated into limited silk editions — not as simple reproductions, but as wearable fragments of the Visual Archive.",
      ctaLabel: "Explore the Wearable Archive",
      href: "/wearable-archive",
    },
    meta: defaultMeta,
  },
  {
    id: "visual-archive-007",
    order: 7,
    slug: "fishes",
    title: "Fishes",
    subtitle:
      "A world of beings able to live anywhere, adapt to everything, and survive across incompatible conditions.",
    archiveNote:
      "Fishes is a painting about adaptation. Its figures seem able to survive in more than one world — on land, in water, inside costume, inside pattern, inside social pressure. The work treats adaptability not only as strength, but also as a strange condition of modern life: the ability to live anywhere may also mean the need to belong nowhere completely.",
    tags: ["Adaptation", "Survival", "Fish", "Hybrid Life", "Condition", "Belonging"],
    image: {
      src: "/images/visual-archive/fishes.jpeg",
      alt: "Fishes — painting from Nino Devdariani's Visual Archive",
      orientation: "square",
    },
    details: [
      {
        title: "Detail I — Hybrid Beings",
        text: "The figures appear able to cross conditions, as if they belong to several environments at once.",
      },
      {
        title: "Detail II — Land and Water",
        text: "The painting suggests a world where ordinary boundaries of habitat no longer hold.",
      },
      {
        title: "Detail III — Survival as Ambiguity",
        text: "Adaptation is not presented as purely positive; it carries both freedom and loss.",
      },
    ],
    whatToNotice: [
      "Adaptability as a survival mechanism",
      "Life across incompatible spaces",
      "Fish as metaphor",
      "The tension between flexibility and rootlessness",
      "Living everywhere and belonging nowhere",
    ],
    archiveRelations: [],
    wearableConnection: {
      enabled: true,
      text: defaultWearableText,
      ctaLabel: "Explore the Wearable Archive",
      href: "/wearable-archive",
    },
    meta: defaultMeta,
  },
  {
    id: "visual-archive-008",
    order: 8,
    slug: "dementia",
    title: "Dementia",
    subtitle: "A private world rearranged by the collapse and reordering of memory.",
    archiveNote:
      "Dementia imagines a mind in which familiar structures begin to dissolve and reassemble into a new private order. The painting should not be read simply as tragedy or as comfort. It enters a more delicate space: the unsettling formation of an inner world where memory, recognition, fear, tenderness, confusion, and invented coherence may exist together.",
    tags: ["Memory", "Inner World", "Dementia", "Recognition", "Private Order", "Fragility"],
    image: {
      src: "/images/visual-archive/dementia.jpg",
      alt: "Dementia — painting from Nino Devdariani's Visual Archive",
      orientation: "portrait",
    },
    details: [
      {
        title: "Detail I — Rearranged Memory",
        text: "The world does not disappear; it changes order, creating unfamiliar structures from familiar fragments.",
      },
      {
        title: "Detail II — Private Reality",
        text: "The painting suggests an inner space that may be inaccessible from the outside but internally coherent.",
      },
      {
        title: "Detail III — Fragility and Tenderness",
        text: "The emotional force of the work lies in its refusal to reduce dementia to either horror or peace.",
      },
    ],
    whatToNotice: [
      "Memory as structure",
      "Collapse and reordering",
      "A private inner world",
      "The coexistence of fear and tenderness",
      "The refusal to romanticize illness",
    ],
    archiveRelations: [],
    wearableConnection: {
      enabled: true,
      text: defaultWearableText,
      ctaLabel: "Explore the Wearable Archive",
      href: "/wearable-archive",
    },
    meta: defaultMeta,
  },
];
