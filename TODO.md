# TODO List for Furniture E-commerce Enhancements

## 1. Create Wishlist Context
- [x] Create contexts/WishlistContext.jsx similar to CartContext for managing wishlist items (add, remove, check if in wishlist).

## 2. Update Navigation Component
- [x] Add wishlist icon in Navigation.jsx that links to /wishlist page.
- [x] Ensure proper styling and responsiveness.

## 3. Create Wishlist Page
- [x] Create app/wishlist/page.jsx to display wishlist items.
- [x] Include functionality to remove items, view product details, and add to cart.

## 4. Update Products Grid
- [x] Modify components/ProductsGrid.jsx to use Google image URLs instead of local imports.
- [x] Add wishlist button functionality (heart icon) to add/remove from wishlist.
- [x] Ensure images load properly (handle CORS if needed, or use public URLs).

## 5. Update Product Detail Page
- [x] Modify app/products/[id]/page.jsx to display multiple images (array of URLs) and detailed product information.
- [x] Add wishlist and cart buttons.

## 6. Add New Product Import Functionality
- [x] Add a simple form in ProductsGrid.jsx or a new component to import new products with Google image links.
- [x] Allow adding product name, category, price, multiple image URLs, etc.

## 7. Testing and Verification
- [x] Test cart and checkout flow to ensure they are functional.
- [x] Test wishlist add/remove/view flow.
- [x] Verify images load from Google URLs.
- [x] Check product detail page with multiple images.
