// Script to fetch Instagram image URLs from post URLs
// Run this with: node scripts/fetch-instagram-images.js

const posts = [
  { id: "DBjCxUbuKge", brand: "Delhi059" },
  { id: "DSGIHDZgcQm", brand: "Local Ride" },
  { id: "DTSxqv6iNh5", brand: "Astro Nexus" },
  { id: "DHIHRiZSdrU", brand: "Dee Cee" },
  { id: "DOLPnqODw42", brand: "CabTale" },
  { id: "DRelzQxjF9d", brand: "BG Foundation" },
  { id: "DR1YULWEegw", brand: "Read Abroad" },
];

async function fetchInstagramImage(postId, brand) {
  try {
    const url = `https://www.instagram.com/p/${postId}/media/?size=l`;
    console.log(`${brand}: ${url}`);
  } catch (error) {
    console.error(`Error fetching ${brand}:`, error.message);
  }
}

console.log("Instagram Image URLs:\n");
posts.forEach((post) => fetchInstagramImage(post.id, post.brand));
