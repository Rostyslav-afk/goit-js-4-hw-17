import getImages from "./getImages";

const imagesList = document.querySelector(".app-images_list");
const downloadMoreButton = document.querySelector(".app-button");

let page = 1;

loadImages(page);

downloadMoreButton.addEventListener("click", () => {
  page += 1;
  loadImages(page);
});

function loadImages(page) {
  getImages(page).then((res) => {
    // res.hits - масив з фотками
    const imageLinks = res.hits.map((img) => img.userImageURL);
    renderImages(imageLinks);
  });
}

function renderImages(imageLinks) {
  const item = imageLinks.map((imageLink) => {
    return `
        <li class="app-images_list-item">
            <img src="${imageLink}" alt="Image" class="app-images_list-item_image">
        </li>
    `;
  }).join("");

  imagesList.insertAdjacentHTML("beforeend", item);
}
