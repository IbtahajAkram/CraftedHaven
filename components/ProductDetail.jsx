"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

export default function ProductDetail({ productId }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [product, setProduct] = useState(null);

  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();

  // Product data
const products = [
  {
    id: 1,
    name: "Modern Sectional Sofa",
    category: "Living Room",
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    images: [
      "https://images-cdn.ubuy.co.in/68fcb7aac4ea28584804f22c-pingliang-home-111-sectional-sofa-u.jpg",
      "https://paktameer.com/wp-content/uploads/2025/09/Jonathan-Extended-Side-Left-Chaise-Sectional-Sofa-Creamy-White-Square-Set_4-1682073903-500x500.avif.jpg",
      "https://roco.pk/wp-content/uploads/2024/12/Valiant-Corner-Sectional-Sofa-White-1.webp"
    ],
    colors: [
      { name: "brown", label: "Chocolate Brown", hex: "#8B4513" },
      { name: "gray", label: "Charcoal Gray", hex: "#36454F" },
      { name: "beige", label: "Cream Beige", hex: "#F5F5DC" }
    ],
    sizes: [
      { name: "compact", label: 'Compact (78")', price: 2299 },
      { name: "standard", label: 'Standard (96")', price: 2499 },
      { name: "large", label: 'Large (114")', price: 2799 }
    ],
    description: "Premium sectional sofa with modern design and comfortable seating.",
    features: [
      "Premium hardwood frame construction",
      "High-density foam cushioning",
      "Removable and washable covers",
      "Modular design for flexible arrangement",
      "10-year structural warranty"
    ],
    specifications: {
      Dimensions: '96" W x 64" D x 32" H',
      Weight: "185 lbs",
      Material: "Solid hardwood frame, premium fabric upholstery",
      Assembly: "Minimal assembly required",
      Care: "Professional cleaning recommended",
      Warranty: "10 years structural, 2 years fabric"
    },
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Rustic Dining Table",
    category: "Dining Room",
    price: 1899,
    originalPrice: 2299,
    rating: 4.5,
    reviews: 87,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/81x08sRQtgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81PslcoFmML._AC_SL1500_.jpg"
    ],
    colors: [
      { name: "oak", label: "Natural Oak", hex: "#C19A6B" },
      { name: "walnut", label: "Walnut Brown", hex: "#5C4033" }
    ],
    sizes: [
      { name: "4-seater", label: "4-Seater", price: 1899 },
      { name: "6-seater", label: "6-Seater", price: 2099 }
    ],
    description: "Beautiful rustic dining table perfect for family gatherings.",
    features: [
      "Solid wood construction",
      "Durable finish",
      "Spacious tabletop",
      "Easy to assemble",
      "Eco-friendly materials"
    ],
    specifications: {
      Dimensions: '72" L x 36" W x 30" H',
      Weight: "150 lbs",
      Material: "Solid wood",
      Assembly: "Required",
      Care: "Wipe with dry cloth",
      Warranty: "5 years"
    },
    badge: "New Arrival"
  },
  {
    id: 3,
    name: "Luxury King Bed Frame",
    category: "Bedroom",
    price: 1599,
    originalPrice: 1899,
    rating: 4.9,
    reviews: 98,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/81HpZLrmXfL.jpg",
      "https://wehomzfurn.com/cdn/shop/products/57ba8a29343534dfc685c8d211793ade120340f2.jpg?v=1658292820"
    ],
    colors: [
      { name: "walnut", label: "Walnut Brown", hex: "#5C4033" },
      { name: "white", label: "Snow White", hex: "#FFFFFF" }
    ],
    sizes: [
      { name: "queen", label: "Queen", price: 1499 },
      { name: "king", label: "King", price: 1599 }
    ],
    description: "Elegant king bed frame with premium materials and craftsmanship.",
    features: [
      "Solid hardwood frame",
      "Upholstered headboard",
      "Slatted base for mattress support",
      "Modern luxury design",
      "10-year warranty"
    ],
    specifications: {
      Dimensions: '80" W x 84" L x 48" H',
      Weight: "210 lbs",
      Material: "Solid hardwood, fabric upholstery",
      Assembly: "Required",
      Care: "Professional cleaning recommended",
      Warranty: "10 years"
    },
    badge: "Sale"
  },
  {
    id: 4,
    name: "Executive Office Chair",
    category: "Office",
    price: 899,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 200,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
    ],
    colors: [
      { name: "black", label: "Black", hex: "#000000" },
      { name: "gray", label: "Gray", hex: "#808080" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 899 }
    ],
    description: "Ergonomic office chair designed for comfort and productivity.",
    features: [
      "Adjustable height and tilt",
      "Breathable mesh backrest",
      "Lumbar support for posture correction",
      "Smooth-rolling casters",
      "Easy assembly in 15 minutes"
    ],
    specifications: {
      Dimensions: '26" W x 26" D x 40" H',
      Weight: "35 lbs",
      Material: "Mesh fabric, steel frame",
      Assembly: "Required",
      Care: "Wipe with dry cloth",
      Warranty: "5 years"
    },
    badge: "Featured"
  },
  {
    id: 5,
    name: "Patio Lounge Set",
    category: "Outdoor",
    price: 1299,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 110,
    inStock: true,
   images: [
      "https://m.media-amazon.com/images/I/91NSTuncjgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91w5XkCzhhS._UF894,1000_QL80_.jpg"
    ],
    colors: [
      { name: "gray", label: "Gray", hex: "#808080" },
      { name: "beige", label: "Beige", hex: "#F5F5DC" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 1299 }
    ],
    description: "Weather-resistant patio lounge set for outdoor relaxation.",
    features: [
      "Durable all-weather materials",
      "Comfortable cushions",
      "Stylish outdoor design",
      "Lightweight for easy relocation",
      "Easy to clean"
    ],
    specifications: {
      Dimensions: '78" W x 36" D x 32" H',
      Weight: "120 lbs",
      Material: "Synthetic wicker, fabric cushions",
      Assembly: "Minimal assembly",
      Care: "Wipe with damp cloth",
      Warranty: "3 years"
    },
    badge: "Trending"
  },
  {
    id: 6,
    name: "Minimalist Bookshelf",
    category: "Storage",
    price: 499,
    originalPrice: 699,
    rating: 4.5,
    reviews: 60,
    inStock: true,
    images: [
      "https://theminimalistvegan.com/wp-content/uploads/2024/01/Best-Minimalist-Bookshelf-Design-Ideas.jpg",
      "https://furniturepalacesuperstore.com/cdn/shop/files/801574_01xHD_800x.jpg?v=1755406447"
    ],
    colors: [
      { name: "white", label: "White", hex: "#FFFFFF" },
      { name: "oak", label: "Natural Oak", hex: "#C19A6B" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 499 }
    ],
    description: "Modern minimalist bookshelf with clean lines and ample storage.",
    features: [
      "Solid wood construction",
      "Adjustable shelves",
      "Clean minimalist design",
      "Lightweight",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '30" W x 12" D x 72" H',
      Weight: "50 lbs",
      Material: "Wood, MDF",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "2 years"
    },
    badge: "Hot Pick"
  },

   {
    id: 7,
    name: "Classic Leather Recliner",
    category: "Living Room",
    price: 1299,
    originalPrice: 2599,
    rating: 4.7,
    reviews: 75,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/41Qk7fH6+VL._AC_US750_.jpg",
      "https://m.media-amazon.com/images/I/71wo1jDHBaL._AC_SL1500_.jpg"
    ],
    colors: [
      { name: "brown", label: "Chocolate Brown", hex: "#8B4513" },
      { name: "black", label: "Black", hex: "#000000" }
    ],
    sizes: [
      { name: "single", label: "Single Seat", price: 1299 }
    ],
    description: "Comfortable classic leather recliner with footrest and adjustable back.",
    features: [
      "Genuine leather upholstery",
      "Adjustable reclining positions",
      "Sturdy wooden frame",
      "Smooth recline mechanism",
      "2-year warranty"
    ],
    specifications: {
      Dimensions: '40" W x 36" D x 42" H',
      Weight: "80 lbs",
      Material: "Leather, hardwood frame",
      Assembly: "Minimal assembly required",
      Care: "Use leather cleaner",
      Warranty: "2 years"
    },
    badge: "Bestseller"
  },
  {
    id: 8,
    name: "Convertible Sofa Bed",
    category: "Living Room",
    price: 1399,
    originalPrice: 1699,
    rating: 4.6,
    reviews: 68,
    inStock: true,
    images: [
      "https://i5.walmartimages.com/seo/3-1-Convertible-Sleeper-Sofa-Bed-55-Modern-Convertible-Sofa-Bed-2-Detachable-Arm-Pockets-Velvet-Pull-Couch-Pull-Bed-Living-Room-Furniture-Black_d72a3e10-ad45-4158-a4c4-c6ed88bcda43.b0dc8bbd1c9e25a2d56c77846694fa42.jpeg",
      "https://m.media-amazon.com/images/I/81VDg3PXV2L.jpg"
    ],
    colors: [
      { name: "gray", label: "Charcoal Gray", hex: "#36454F" },
      { name: "blue", label: "Ocean Blue", hex: "#1E3A5F" }
    ],
    sizes: [
      { name: "standard", label: "Standard (80\")", price: 1399 },
      { name: "large", label: "Large (100\")", price: 1599 }
    ],
    description: "Convertible sofa bed that transforms easily for guests.",
    features: [
      "Modern design",
      "Durable fabric",
      "Easy transformation",
      "Comfortable mattress",
      "5-year warranty"
    ],
    specifications: {
      Dimensions: '80" W x 36" D x 32" H',
      Weight: "110 lbs",
      Material: "Fabric upholstery, hardwood frame",
      Assembly: "Required",
      Care: "Vacuum and spot clean",
      Warranty: "5 years"
    },
    badge: "Trending"
  },
  {
    id: 9,
    name: "Industrial Coffee Table",
    category: "Living Room",
    price: 699,
    originalPrice: 899,
    rating: 4.4,
    reviews: 55,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/813KRCslTdL._AC_SL1500_.jpg"
    ],
    colors: [
      { name: "black", label: "Black", hex: "#000000" },
      { name: "brown", label: "Brown", hex: "#8B4513" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 699 }
    ],
    description: "Industrial style coffee table with metal frame and wooden top.",
    features: [
      "Durable metal frame",
      "Solid wood top",
      "Rustic industrial look",
      "Easy to clean",
      "Lightweight yet sturdy"
    ],
    specifications: {
      Dimensions: '48" W x 24" D x 18" H',
      Weight: "60 lbs",
      Material: "Wood, metal",
      Assembly: "Required",
      Care: "Wipe with dry cloth",
      Warranty: "2 years"
    },
    badge: "Hot"
  },
  {
    id: 10,
    name: "Ergonomic Gaming Chair",
    category: "Office",
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviews: 134,
    inStock: true,
    images: [
      "https://static.webx.pk/files/19643/Images/anda-seat-luna-gaming-chair-price-in-pakistan-junaidtech-2-19643-0-141124123223446.jpg"
    ],
    colors: [
      { name: "red", label: "Red", hex: "#FF0000" },
      { name: "black", label: "Black", hex: "#000000" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 799 }
    ],
    description: "Gaming chair with ergonomic support and adjustable features.",
    features: [
      "Adjustable armrests",
      "Lumbar support pillow",
      "Reclining and rocking functions",
      "Durable PU leather",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '27" W x 27" D x 52" H',
      Weight: "45 lbs",
      Material: "PU leather, metal frame",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "3 years"
    },
    badge: "Popular"
  }, 
  {
    id: 11,
    name: "Scandinavian Nightstand",
    category: "Bedroom",
    price: 1199,
    originalPrice: 1499,
    rating: 4.5,
    reviews: 42,
    inStock: true,
    images: [
      "https://scandinaviandesigns.com/cdn/shop/products/6351-bolig-nightstand-med_bb354019-c4fe-41e8-86ec-16f9f6b37082.jpg?v=1715215665",
      "https://m.media-amazon.com/images/I/71301zOxbML._AC_UF894,1000_QL80_.jpg"
    ],
    colors: [
      { name: "white", label: "White", hex: "#FFFFFF" },
      { name: "oak", label: "Natural Oak", hex: "#C19A6B" }
    ],
    sizes: [
      { name: "single", label: "Single Drawer", price: 299 }
    ],
    description: "Minimalist nightstand with Scandinavian design and practical storage.",
    features: [
      "Solid wood construction",
      "Single drawer with smooth glide",
      "Modern minimalist design",
      "Lightweight and portable",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '20" W x 16" D x 22" H',
      Weight: "25 lbs",
      Material: "Solid wood",
      Assembly: "Required",
      Care: "Wipe with dry cloth",
      Warranty: "2 years"
    },
    badge: "Trending"
  },
  {
    id: 12,
    name: "Outdoor Hanging Chair",
    category: "Outdoor",
    price: 599,
    originalPrice: 799,
    rating: 4.6,
    reviews: 58,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ],
    colors: [
      { name: "gray", label: "Gray", hex: "#808080" },
      { name: "beige", label: "Beige", hex: "#F5F5DC" }
    ],
    sizes: [
      { name: "standard", label: "Single Seat", price: 599 }
    ],
    description: "Comfortable hanging chair for patios or balconies.",
    features: [
      "Durable woven material",
      "Cushioned seat",
      "Hanging from sturdy frame",
      "Weather resistant",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '30" W x 30" D x 60" H',
      Weight: "40 lbs",
      Material: "Wicker, metal frame",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "3 years"
    },
    badge: "Hot Pick"
  },
  {
    id: 13,
    name: "Mid-Century TV Stand",
    category: "Living Room",
    price: 749,
    originalPrice: 949,
    rating: 4.4,
    reviews: 65,
    inStock: true,
    images: [
      "https://i5.walmartimages.com/seo/Mid-Century-Modern-TV-Stand-for-TVs-up-to-75-inch-Flat-Screen-Wood-TV-Console-Media-Cabinet-with-Storage_0e7bb1f5-3835-4e17-ae58-4de031c689d1.5c932a45b4397abbe1d5beb810c1c8f1.jpeg"
    ],
    colors: [
      { name: "walnut", label: "Walnut Brown", hex: "#5C4033" },
      { name: "white", label: "White", hex: "#FFFFFF" }
    ],
    sizes: [
      { name: "standard", label: "60-inch", price: 749 }
    ],
    description: "Mid-century modern TV stand with storage cabinets and open shelves.",
    features: [
      "Solid wood construction",
      "Cabinets and open shelving",
      "Durable finish",
      "Sleek modern design",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '60" W x 16" D x 24" H',
      Weight: "70 lbs",
      Material: "Solid wood, MDF",
      Assembly: "Required",
      Care: "Wipe with dry cloth",
      Warranty: "2 years"
    },
    badge: "Featured"
  },
  {
    id: 14,
    name: "Adjustable Standing Desk",
    category: "Office",
    price: 999,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 90,
    inStock: true,
    images: [
      "https://i5.walmartimages.com/seo/MXTARK-Height-Adjustable-Electric-Standing-Desk-Roller-with-Memory-Settings-it-Stand-Desk-with-Splice-Board-Black-Finish-55_66c659d0-7a97-42cf-9fb8-a2133a3bd670.8ee19b122f7fe409ab062a802fad05dd.jpeg"
    ],
    colors: [
      { name: "black", label: "Black", hex: "#000000" },
      { name: "white", label: "White", hex: "#FFFFFF" }
    ],
    sizes: [
      { name: "standard", label: "48-inch", price: 999 },
      { name: "large", label: "60-inch", price: 1199 }
    ],
    description: "Ergonomic adjustable desk for sitting or standing work.",
    features: [
      "Electric height adjustment",
      "Sturdy steel frame",
      "Spacious work surface",
      "Cable management included",
      "5-year warranty"
    ],
    specifications: {
      Dimensions: '48" W x 24" D x 28-47" H',
      Weight: "85 lbs",
      Material: "Steel, MDF",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "5 years"
    },
    badge: "Best Seller"
  },
  {
    id: 15,
    name: "Queen Upholstered Bed",
    category: "Bedroom",
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 120,
    inStock: true,
    images: [
      "https://multiwood.com.pk/cdn/shop/files/1multiwoodbeds1.jpg?v=1685473893",
      "https://rjdfurniture.com/cdn/shop/files/WEBSITE_PICTURES_12.jpg?v=1745570841"
    ],
    colors: [
      { name: "gray", label: "Charcoal Gray", hex: "#36454F" },
      { name: "blue", label: "Navy Blue", hex: "#1E3A5F" }
    ],
    sizes: [
      { name: "queen", label: "Queen", price: 1299 },
      { name: "king", label: "King", price: 1499 }
    ],
    description: "Elegant upholstered bed with soft fabric and sturdy frame.",
    features: [
      "Fabric upholstered headboard",
      "Solid wood frame",
      "Slatted base",
      "Modern design",
      "10-year warranty"
    ],
    specifications: {
      Dimensions: '60" W x 80" L x 48" H',
      Weight: "180 lbs",
      Material: "Wood, fabric",
      Assembly: "Required",
      Care: "Spot clean fabric",
      Warranty: "10 years"
    },
    badge: "New Arrival"
  },
  {
    id: 16,
    name: "Outdoor Dining Set",
    category: "Outdoor",
    price: 1299,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 85,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/91ZH9mbF7bL._AC_SL1500_.jpg",
      
    ],
    colors: [
      { name: "gray", label: "Gray", hex: "#808080" },
      { name: "white", label: "White", hex: "#FFFFFF" }
    ],
    sizes: [
      { name: "4-seater", label: "4-Seater", price: 1299 },
      { name: "6-seater", label: "6-Seater", price: 1499 }
    ],
    description: "Weather-resistant outdoor dining set for patios and gardens.",
    features: [
      "Durable materials",
      "Comfortable seating",
      "Rust-resistant frame",
      "Easy to assemble",
      "Stylish design"
    ],
    specifications: {
      Dimensions: '72" L x 36" W x 30" H',
      Weight: "140 lbs",
      Material: "Metal, fabric cushions",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "3 years"
    },
    badge: "Trending"
  },
  {
    id: 17,
    name: "Modern Accent Chair",
    category: "Living Room",
    price: 499,
    originalPrice: 699,
    rating: 4.5,
    reviews: 50,
    inStock: true,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCQOeoVOCVnQI5eyWr0RTU7Mt6_Srygl2XQ&s",
      "https://images.thdstatic.com/productImages/983c2276-2f5f-44ff-aa9c-918dffccdbf2/svn/blue-jayden-creation-accent-chairs-chmjm002-blue-s2-e1_600.jpg",
      "https://i.pinimg.com/736x/93/9c/43/939c43fc6d2c3c41037e493d1803a7da.jpg"
    ],
    colors: [
      { name: "blue", label: "Royal Blue", hex: "#4169E1" },
      { name: "gray", label: "Gray", hex: "#808080" }
    ],
    sizes: [
      { name: "standard", label: "Single Seat", price: 499 }
    ],
    description: "Stylish modern accent chair for living rooms and bedrooms.",
    features: [
      "Soft fabric upholstery",
      "Sturdy wooden legs",
      "Comfortable seating",
      "Contemporary design",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '28" W x 30" D x 32" H',
      Weight: "40 lbs",
      Material: "Fabric, wood",
      Assembly: "Required",
      Care: "Vacuum regularly",
      Warranty: "2 years"
    },
    badge: "Hot"
  },
  {
    id: 18,
    name: "Foldable Storage Ottoman",
    category: "Storage",
    price: 149,
    originalPrice: 199,
    rating: 4.3,
    reviews: 30,
    inStock: true,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRNWoyTgH0ga69JiIaT7te_bT4IW06B_CIw&s"
    ],
    colors: [
      { name: "gray", label: "Gray", hex: "#808080" },
      { name: "beige", label: "Beige", hex: "#F5F5DC" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 149 }
    ],
    description: "Foldable ottoman for storage and seating.",
    features: [
      "Durable fabric",
      "Hidden storage inside",
      "Lightweight and portable",
      "Collapsible design",
      "Easy to clean"
    ],
    specifications: {
      Dimensions: '18" W x 18" D x 18" H',
      Weight: "10 lbs",
      Material: "Fabric, MDF",
      Assembly: "None",
      Care: "Wipe with damp cloth",
      Warranty: "1 year"
    },
    badge: "Popular"
  },
  {
    id: 19,
    name: "Corner L-Shaped Desk",
    category: "Office",
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    reviews: 72,
    inStock: true,
    images: [
      "https://img.drz.lazcdn.com/static/pk/p/75e3149be7134293c415fe214246c1c3.jpg_720x720q80.jpg"
    ],
    colors: [
      { name: "black", label: "Black", hex: "#000000" },
      { name: "oak", label: "Natural Oak", hex: "#C19A6B" }
    ],
    sizes: [
      { name: "standard", label: "L-Shaped", price: 699 }
    ],
    description: "Spacious L-shaped desk for home office or study.",
    features: [
      "Sturdy MDF and metal construction",
      "Ample workspace",
      "Cable management system",
      "Modern design",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '55" W x 55" D x 30" H',
      Weight: "75 lbs",
      Material: "MDF, metal",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "3 years"
    },
    badge: "Best Seller"
  },
  {
    id: 20,
    name: "Reclining Leather Sofa",
    category: "Living Room",
    price: 1999,
    originalPrice: 2399,
    rating: 4.9,
    reviews: 140,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/71M1quiFmsL._AC_SL1500_.jpg",
      "https://shopforever.pk/wp-content/uploads/2021/09/64878496_2279050072188439_1841913505326825472_o.jpg"
    ],
    colors: [
      { name: "brown", label: "Chocolate Brown", hex: "#8B4513" },
      { name: "black", label: "Black", hex: "#000000" }
    ],
    sizes: [
      { name: "3-seater", label: "3-Seater", price: 1999 },
      { name: "4-seater", label: "4-Seater", price: 2299 }
    ],
    description: "Luxurious reclining leather sofa with adjustable footrest and premium comfort.",
    features: [
      "Genuine leather upholstery",
      "Reclining backrest",
      "Sturdy frame",
      "High-density foam cushions",
      "5-year warranty"
    ],
    specifications: {
      Dimensions: '88" W x 40" D x 38" H',
      Weight: "180 lbs",
      Material: "Leather, hardwood frame",
      Assembly: "Minimal assembly required",
      Care: "Leather cleaner recommended",
      Warranty: "5 years"
    },
    badge: "Featured"
  }
];


  useEffect(() => {
    const pid = Number(productId);
    const productData = products.find((p) => p.id === pid) || products[0];
    setProduct(productData);
    if (productData.colors.length) setSelectedColor(productData.colors[0].name);
    if (productData.sizes.length) setSelectedSize(productData.sizes[0].name);
  }, [productId]);

  if (!product) return <div className="pt-20 text-center">Loading...</div>;

  const currentPrice = product.sizes.find((size) => size.name === selectedSize)?.price || product.price;

  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600 transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-amber-600 transition-colors duration-300">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${product.originalPrice - currentPrice}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index ? "border-amber-500 scale-105" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img src={image || "/placeholder.svg"} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-amber-600 font-medium mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${currentPrice}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {Math.round(((product.originalPrice - currentPrice) / product.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                      selectedColor === color.name ? "border-amber-500 scale-110" : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.label}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Selected: {product.colors.find((c) => c.name === selectedColor)?.label}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-1 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-4 border-2 rounded-lg text-left transition-all duration-300 ${
                      selectedSize === size.name ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{size.label}</span>
                      <span className="text-amber-600 font-semibold">${size.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border rounded-lg hover:bg-gray-100"
                >-</button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border rounded-lg hover:bg-gray-100"
                >+</button>
              </div>
              <button
                onClick={() => addItem({ ...product, price: `$${currentPrice}`, quantity })}
                disabled={!product.inStock}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Add to Cart - ${currentPrice * quantity}
              </button>
              <button
                onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                className={`w-full border-2 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  isInWishlist(product.id)
                    ? "bg-red-500 border-red-500 text-white hover:bg-red-600"
                    : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                }`}
              >
                {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}