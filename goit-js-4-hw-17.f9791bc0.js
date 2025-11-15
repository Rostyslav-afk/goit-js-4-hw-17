let e=document.querySelector(".app-images_list"),t=document.querySelector(".app-button"),a=1;function i(t){fetch(`https://pixabay.com/api/?key=53258695-1fd31dd851d45136729bfb187&per_page=4&page=${t}`).then(e=>e.json()).then(t=>{let a;a=t.hits.map(e=>e.userImageURL).map(e=>`
        <li class="app-images_list-item">
            <img src="${e}" alt="Image" class="app-images_list-item_image">
        </li>
    `).join(""),e.insertAdjacentHTML("beforeend",a)})}i(1),t.addEventListener("click",()=>{i(a+=1)});
//# sourceMappingURL=goit-js-4-hw-17.f9791bc0.js.map
