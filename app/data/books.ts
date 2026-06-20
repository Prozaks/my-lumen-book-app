export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  coverType: "ocean" | "red" | "yellow" | "desert" | "umbrella" | "portrait" | "custom";
  coverBg?: string; // for custom additions
  coverText?: string; // text displayed on the cover
  description: string;
  category: string;
  availability: "In Stock" | "Out of Stock";
  brand: string;
  color: string;
  material: string;
}

export const initialBooks: Book[] = [
  {
    id: "1",
    slug: "simple-way-of-piece-life",
    title: "Simple Way Of Piece Life.",
    author: "Arthur Greatey",
    price: 40.00,
    rating: 4.8,
    coverType: "ocean",
    coverText: "Simple Way Of Piece Life.",
    description: "Discover the profound secrets to cultivating inner harmony and simplifying your daily routines. Arthur Greatey guides you through a serene journey of self-reflection, offering practical advice and timeless wisdom to achieve a peaceful and meaningful lifestyle.",
    category: "Philosophy",
    availability: "In Stock",
    brand: "Lumen Press",
    color: "Blue",
    material: "Paperback"
  },
  {
    id: "2",
    slug: "great-travel-at-desert",
    title: "Great Travel At Desert",
    author: "Samil Harly",
    price: 38.00,
    rating: 4.5,
    coverType: "red",
    coverText: "MY BOOK COVER",
    description: "An evocative exploration of the world's most barren yet beautiful landscapes. This volume highlights the physical and spiritual journeys undertaken by desert wanderers, documenting their survival, discoveries, and the quiet majesty of shifting sands.",
    category: "Adventure",
    availability: "In Stock",
    brand: "Apex Books",
    color: "Red",
    material: "Hardcover"
  },
  {
    id: "3",
    slug: "the-lady-beauty-scarlett",
    title: "The Lady Beauty Scarlett",
    author: "Arthur Wite",
    price: 45.00,
    rating: 4.7,
    coverType: "yellow",
    coverText: "YOUR SIMPLE BOOK COVER",
    description: "A sweeping romantic drama set in the high society of the late 19th century. Arthur Wite chronicles the enigmatic life of Scarlett, a woman whose beauty, intellect, and stubborn resolve challenge the societal conventions of her era.",
    category: "Fiction",
    availability: "In Stock",
    brand: "Lumen Press",
    color: "Yellow",
    material: "Paperback"
  },
  {
    id: "4",
    slug: "great-travel-at-desert-adventure",
    title: "Great Travel At Desert",
    author: "Samil Harly",
    price: 38.00,
    rating: 4.2,
    coverType: "desert",
    coverText: "Great Travel At Desert",
    description: "The sequel to the acclaimed desert narrative, Samil Harly dives deeper into the remote dunes, detailing forgotten ancient oases and the nomadic cultures that have thrived in the heat for generations.",
    category: "Adventure",
    availability: "In Stock",
    brand: "Apex Books",
    color: "Orange",
    material: "Hardcover"
  },
  {
    id: "5",
    slug: "the-hypocrite-world",
    title: "The Lady Beauty Scarlett",
    author: "John Goyle",
    price: 45.00,
    rating: 4.9,
    coverType: "umbrella",
    coverText: "THE HYPOCRITE WORLD",
    description: "A sharp, biting social satire that peels back the layers of polite society's double standards. Written by John Goyle, it exposes the humorous and sometimes tragic contradictions of modern communal life.",
    category: "Satire",
    availability: "In Stock",
    brand: "Beacon Publishing",
    color: "Dark Blue",
    material: "Paperback"
  },
  {
    id: "6",
    slug: "the-lady-beauty-scarlett-classic",
    title: "The Lady Beauty Scarlett",
    author: "Arthur Goyle",
    price: 45.00,
    rating: 4.6,
    coverType: "portrait",
    coverText: "The Lady Beauty Scarlett",
    description: "A classic retelling and deep analysis of the Scarlett legend, complete with historical illustrations and literary commentary. Arthur Goyle provides context and critical essays that reveal the source material's enduring legacy.",
    category: "Fiction",
    availability: "In Stock",
    brand: "Lumen Press",
    color: "Cream",
    material: "Paperback"
  }
];
