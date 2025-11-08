// 1️⃣ Select all image elements
let imageEle = document.querySelectorAll(".image"); // NodeList of images
let imgArr = Array.from(imageEle); // Convert NodeList to array to use map
console.log("Images Array:", imgArr);

// 2️⃣ Define an array of new image URLs
const newImages = [
  "https://i.pinimg.com/736x/2c/8d/27/2c8d279757d005851ef670d0d703fd89.jpg",
  "https://i.pinimg.com/736x/a8/93/1c/a8931cf500f8c568c97f8c9ed2e076dd.jpg",
  "https://i.pinimg.com/736x/63/58/bb/6358bbbb8400d6bf54d4b455c6b34f38.jpg",
];

let currentIndex = 0; // Keep track of which image is displayed

// 3️⃣ Function to update images
function updateImages(index) {
  // Using forEach to update src of each image
  imgArr.forEach((img, i) => {
    img.src = newImages[(index + i) % newImages.length]; // Rotate images
  });
}

// 4️⃣ Next button functionality
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= newImages.length) {
    currentIndex = 0; // loop back to first
  }
  updateImages(currentIndex);
});

// 5️⃣ Previous button functionality
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = newImages.length - 1; // loop back to last
  }
  updateImages(currentIndex);
});

// 6️⃣ Optional: Change all images using map (example)
const mappedImages = imgArr.map((img, i) => {
  img.src = newImages[i];
  return img.src; // map returns a new array of image URLs
});
console.log("Mapped Images:", mappedImages);
