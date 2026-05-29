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

export const visualArchiveEntries: VisualArchiveEntry[] = [
  {
    id: "visual-archive-001",
    order: 1,
    slug: "theatre-of-figures",
    title: "Theatre of Figures",
    subtitle: "Staged silhouettes and structured gestures of the canvas.",
    archiveNote: "Theatre of Figures is a foundational canvas in Nino Devdariani’s practice. It captures a series of stylized, theatrical silhouettes suspended between dramatic performance and silent contemplation. The structured composition acts as an architectural proscenium, isolating each figure in its own field of gestural tension and emotional resonance. The dark, bold outlines anchor the figures, giving them a physical presence that refuses to blend into the ivory backdrop.",
    tags: ["Figure", "Theatre", "Gesture", "Oxblood", "Composition"],
    image: {
      src: "/images/visual-archive/theatre-of-figures.jpeg",
      alt: "Theatre of Figures — painting detail with staged silhouettes by Nino Devdariani",
      orientation: "portrait"
    },
    details: [
      {
        title: "Structured Postures",
        text: "The heavy canvas texture is worked in layers, forming deep black outlines that carve each character out of the warm ivory backdrop."
      },
      {
        title: "The Proscenium Frame",
        text: "An inner structural framing lines the canvas edges, referencing classical theatrical spaces where figures represent psychological states rather than realistic portraits."
      }
    ],
    whatToNotice: [
      "Heavy charcoal contours that separate characters",
      "Suspended dramatic gestures suggesting an unresolved narrative",
      "Deep oxblood and subtle warm brass accents",
      "The architectural layering of the canvas plane"
    ],
    archiveRelations: [
      {
        title: "A Chorus of Faces",
        slug: "a-chorus-of-faces",
        note: "Shares the theatrical staging and the grouping of isolated, expressive identities."
      },
      {
        title: "Carnival Machine",
        slug: "carnival-machine",
        note: "Complements the structured, dramatic choreography through kinetic mechanical energy."
      }
    ],
    wearableConnection: {
      enabled: true,
      text: "The architectural staging of Theatre of Figures has been translated into a limited silk carré edition. This translation captures the geometric tension of the canvas contours, allowing the heavy strokes to flow naturally with body movement.",
      ctaLabel: "Explore the Wearable Carré",
      href: "/wearable-archive"
    },
    meta: {
      artist: "Nino Devdariani",
      medium: "Acrylic and ink on canvas",
      year: "Year to be confirmed",
      dimensions: "Dimensions to be confirmed",
      status: "Original work"
    }
  },
  {
    id: "visual-archive-002",
    order: 2,
    slug: "the-history-of-painting-misbehaves",
    title: "The History of Painting Misbehaves",
    subtitle: "Classical references distorted in high-contrast play.",
    archiveNote: "This work acts as a humorous yet solemn intervention in historical art forms. Nino Devdariani deconstructs and disrupts the expectations of classical portraiture and decorative symmetry. Figures dissolve into pure gesture, architectural frames collapse, and historical pigments are layered with acrylic spontaneity. It is a painting that questions its own heritage while celebrating the raw act of mark-making.",
    tags: ["Deconstruction", "History", "Asymmetry", "Ink", "Play"],
    image: {
      src: "/images/visual-archive/the-history-of-painting-misbehaves.jpeg",
      alt: "The History of Painting Misbehaves — expressive artwork by Nino Devdariani",
      orientation: "landscape"
    },
    details: [
      {
        title: "Pigment Layering",
        text: "The interaction between fluid ink washes and thick acrylic layers creates a physical texture resembling aged stone walls or historical fresco fragments."
      },
      {
        title: "Distorted Contours",
        text: "Classical silhouettes are deliberately broken and opened up, allowing the raw brushstrokes to dictate the final structure and spirit of the character."
      }
    ],
    whatToNotice: [
      "Dripping ink accents that disrupt standard boundaries",
      "Layered classical forms that emerge and dissolve on the surface",
      "Asymmetrical layouts that reject clean decorative grids",
      "Exposed unpainted canvas margins providing breathing space"
    ],
    archiveRelations: [
      {
        title: "Theatre of Figures",
        slug: "theatre-of-figures",
        note: "Shares the focus on isolated, expressive figures but deconstructs their boundaries more aggressively."
      }
    ],
    wearableConnection: {
      enabled: true,
      text: "Fragments of the deconstructed history painting are featured on the silk edition, showcasing a modern juxtaposition of classical weight and gestural lightness.",
      ctaLabel: "View Limited Silk Edition",
      href: "/wearable-archive"
    },
    meta: {
      artist: "Nino Devdariani",
      medium: "Acrylic and ink on canvas",
      year: "Year to be confirmed",
      dimensions: "Dimensions to be confirmed",
      status: "Original work"
    }
  },
  {
    id: "visual-archive-003",
    order: 3,
    slug: "clothing-as-character",
    title: "Clothing as Character",
    subtitle: "Textile memory and the architecture of the body.",
    archiveNote: "This work investigates the profound relationship between the body and costume. In Nino Devdariani's vision, garments are not external ornaments; they are structural extensions of the human psyche. The clothing itself is given physical weight, becoming a character that defines, restricts, and elevates the silent silhouette. The drapery behaves like protective armor, preserving the mystery of the figure underneath.",
    tags: ["Costume", "Body", "Textile", "Ivory", "Silhouette"],
    image: {
      src: "/images/visual-archive/clothing-as-character.jpeg",
      alt: "Clothing as Character — painting with structured drapery by Nino Devdariani",
      orientation: "portrait"
    },
    details: [
      {
        title: "Textile Memory",
        text: "Heavy geometric drapery mimics historical cloaks, creating an armor-like silhouette that protects the internal figure."
      },
      {
        title: "The Silent Silhouette",
        text: "By abstracting the facial features, the emphasis is entirely shifted onto the posture and folds of the structured garment."
      }
    ],
    whatToNotice: [
      "Heavy geometric drapery that dictates the composition",
      "Textured fabric-like brushstrokes simulating heavy weave",
      "Absence of facial details to amplify the gestural stance",
      "Strong vertical alignment of the central column"
    ],
    archiveRelations: [
      {
        title: "The Wardrobe of Stories",
        slug: "the-wardrobe-of-stories",
        note: "Directly relates through the study of garments as narrative containers and textile architecture."
      }
    ],
    wearableConnection: {
      enabled: true,
      text: "This painting's investigation into textile memory directly inspired the brand's physical philosophy: creating garments that carry an artistic presence and act as wearable statements.",
      ctaLabel: "View Wearable Works",
      href: "/wearable-archive"
    },
    meta: {
      artist: "Nino Devdariani",
      medium: "Acrylic and ink on canvas",
      year: "Year to be confirmed",
      dimensions: "Dimensions to be confirmed",
      status: "Original work"
    }
  },
  {
    id: "visual-archive-004",
    order: 4,
    slug: "a-chorus-of-faces",
    title: "A Chorus of Faces",
    subtitle: "A dense gathering of identities and gazes.",
    archiveNote: "A Chorus of Faces is a visually dense, rhythmic canvas populated by a multitude of expressive masks and gazes. It creates a space where private mythologies and cultural memories collide, presenting a silent, collective witness to the passing of history. Rather than separate characters, the faces seem to grow from a single collective root, forming a dense wall of shared human experiences.",
    tags: ["Identity", "Faces", "Rhythm", "Density", "Chamber"],
    image: {
      src: "/images/visual-archive/a-chorus-of-faces.jpeg",
      alt: "A Chorus of Faces — layered mask-like composition by Nino Devdariani",
      orientation: "square"
    },
    details: [
      {
        title: "Collective Gazes",
        text: "A sequence of faces overlaps dynamically, creating a psychological network that shifts as the viewer moves."
      },
      {
        title: "Mask-Like Forms",
        text: "Influenced by ancient cultural fragments and theatrical masks, the faces are abstracted to highlight primal human emotions."
      }
    ],
    whatToNotice: [
      "Overlapping layers of paint that create structural depth",
      "Highly stylized, expressive mask-like eyes looking outward",
      "Rhythmic repetition of patterns across the canvas",
      "Deep charcoal contours defining separate identities"
    ],
    archiveRelations: [
      {
        title: "Theatre of Figures",
        slug: "theatre-of-figures",
        note: "Shares a core theatrical sensibility, but compresses the spatial boundaries to gather a dense chorus of voices."
      },
      {
        title: "The Blue Witnesses",
        slug: "the-blue-witnesses",
        note: "Explores a similar collective psychological presence but shifts the palette and emotional temperature."
      }
    ],
    wearableConnection: {
      enabled: true,
      text: "The rhythmic arrangement of faces in this work translates into a beautifully intricate pattern on silk, where each corner of the scarf reveals a unique gaze and character.",
      ctaLabel: "Explore the Face Carré",
      href: "/wearable-archive"
    },
    meta: {
      artist: "Nino Devdariani",
      medium: "Acrylic and ink on canvas",
      year: "Year to be confirmed",
      dimensions: "Dimensions to be confirmed",
      status: "Original work"
    }
  },
  {
    id: "visual-archive-005",
    order: 5,
    slug: "the-wardrobe-of-stories",
    title: "The Wardrobe of Stories",
    subtitle: "Garments as repositories of private mythologies.",
    archiveNote: "The Wardrobe of Stories is an expansive landscape painting that treats textile archives as architectural rooms. Nino Devdariani details the intricate, layered memories caught within the folds of heavy fabrics, presenting each pattern as a coded script of personal and cultural events. The scale of the work invites the viewer to enter slowly, walking through the patterns as if traversing a museum vault of textile memories.",
    tags: ["Textile", "Mythology", "Pattern", "Scale", "Narratives"],
    image: {
      src: "/images/visual-archive/the-wardrobe-of-stories.jpeg",
      alt: "The Wardrobe of Stories — expansive landscape composition by Nino Devdariani",
      orientation: "landscape"
    },
    details: [
      {
        title: "Architectural Patterns",
        text: "Large decorative structures resemble tapestries, merging interior environments with the outer world."
      },
      {
        title: "Coded Scripts",
        text: "Small graphic gestures and abstract marks are embedded within the paint, suggesting hidden records and historical tales."
      }
    ],
    whatToNotice: [
      "Tapestry-scale composition with grand visual rhythm",
      "Deep intricate patterns that require close viewing",
      "Harmonious warm charcoal, bone, and ivory shades",
      "Embedded calligraphic marks that resemble ancient writing"
    ],
    archiveRelations: [
      {
        title: "Clothing as Character",
        slug: "clothing-as-character",
        note: "Continues the dialogue of fabric and dress as key structures of human memory."
      }
    ],
    wearableConnection: {
      enabled: true,
      text: "This expansive composition served as a major blueprint for the Wearable Archive, providing a rich catalog of patterns that translate beautifully onto the flat boundaries of premium silk.",
      ctaLabel: "Explore Silk Collections",
      href: "/wearable-archive"
    },
    meta: {
      artist: "Nino Devdariani",
      medium: "Acrylic and ink on canvas",
      year: "Year to be confirmed",
      dimensions: "Dimensions to be confirmed",
      status: "Original work"
    }
  },
  {
    id: "visual-archive-006",
    order: 6,
    slug: "the-blue-witnesses",
    title: "The Blue Witnesses",
    subtitle: "Cool shadows observing theatrical gestures.",
    archiveNote: "Standing as a quiet departure from the warm ivory tones of the rest of the collection, The Blue Witnesses introduces cool charcoal-blues and deep oceanic ink. The figures stand as silent observers, acting as a contemplative and atmospheric anchor in the visual archive. Their interlocking shapes convey a deep sense of companionship and shared secrets.",
    tags: ["Blue", "Witness", "Shadow", "Ink", "Silence"],
    image: {
      src: "/images/visual-archive/the-blue-witnesses.jpeg",
      alt: "The Blue Witnesses — cool charcoal-blue composition by Nino Devdariani",
      orientation: "landscape"
    },
    details: [
      {
        title: "Cool Contours",
        text: "A wash of dark indigo and Prussian blue frames the central figures, adding a cold shadow effect to the collection."
      },
      {
        title: "Contemplative Postures",
        text: "The figures lean into one another, their gestures indicating close conversation or shared, ancient secrets."
      }
    ],
    whatToNotice: [
      "Cool indigo and blue-grey color wash across the canvas",
      "Interlocking group composition suggesting unity",
      "Fine gestural ink detailing on top of acrylic backgrounds",
      "Restrained atmospheric background with generous breathing space"
    ],
    archiveRelations: [
      {
        title: "A Chorus of Faces",
        slug: "a-chorus-of-faces",
        note: "Explores a similar collective psychological presence but shifts the palette and emotional temperature."
      }
    ],
    wearableConnection: {
      enabled: true,
      text: "The cool indigo washes of this work have been translated into a special edition silk carré, offering a quiet, sophisticated cooler palette for collectors.",
      ctaLabel: "View Blue Silk Edition",
      href: "/wearable-archive"
    },
    meta: {
      artist: "Nino Devdariani",
      medium: "Acrylic and ink on canvas",
      year: "Year to be confirmed",
      dimensions: "Dimensions to be confirmed",
      status: "Original work"
    }
  },
  {
    id: "visual-archive-007",
    order: 7,
    slug: "carnival-machine",
    title: "Carnival Machine",
    subtitle: "A mechanical choreography of theatrical movement.",
    archiveNote: "Carnival Machine is the final, high-energy block in the archive. It presents a mechanical structure where figures, gears, and costumes rotate in a structured circus choreography. The painting explores the tension between structured societal constraints and the chaotic play of Carnival, balancing rigid geometric lines with playful, layered textures.",
    tags: ["Movement", "Carnival", "Structure", "Oxblood", "Choreography"],
    image: {
      src: "/images/visual-archive/carnival-machine.jpeg",
      alt: "Carnival Machine — geometric and theatrical painting by Nino Devdariani",
      orientation: "square"
    },
    details: [
      {
        title: "Mechanical Motion",
        text: "Strong geometric axes guide the eye in a circular motion, conveying the physical weight of rotating gears."
      },
      {
        title: "The Carnival Mask",
        text: "The central figures wear stylized festival masks, representing the playful masks that individuals wear in structured spaces."
      }
    ],
    whatToNotice: [
      "Circular geometric composition that drives visual motion",
      "Rich oxblood and aged brass hues layered on top of ivory",
      "Highly structured choreographic axes lining the figures",
      "Layered, highly textured surfaces with physical presence"
    ],
    archiveRelations: [
      {
        title: "Theatre of Figures",
        slug: "theatre-of-figures",
        note: "Contrasts static, suspended theatrical postures with dynamic, mechanical carnival movement."
      }
    ],
    wearableConnection: {
      enabled: true,
      text: "The dynamic circular motion of Carnival Machine translates into a spinning layout on the silk scarf, creating an energetic flow that changes beautifully as it draping.",
      ctaLabel: "Explore the Carnival Carré",
      href: "/wearable-archive"
    },
    meta: {
      artist: "Nino Devdariani",
      medium: "Acrylic and ink on canvas",
      year: "Year to be confirmed",
      dimensions: "Dimensions to be confirmed",
      status: "Original work"
    }
  }
];
