export default function getImages(page) {
  return fetch(
    `https://pixabay.com/api/?key=53258695-1fd31dd851d45136729bfb187&per_page=4&page=${page}`
  ).then((res) => res.json());
}
