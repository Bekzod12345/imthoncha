"use strict";
let hero__items = getElement(".hero__items")
let Movies = movies.slice(0, 50)
const handleRenderMovies = (arr) => {
    arr.forEach(item => {
            let li = createTag("li")
            li.style.width = "32%"
            li.className = "hero__item rounded bg-light p-2 text-center my-3"
            let img = createTag("img")
            img.width = "320"
            img.height = "250"
            img.src = item.bigPoster
            img.classList.add("rounded")
            let name = createTag("h3")
            name. appendChild(document.createTextNode(item.title.split(" ").length > 2 ? `${item.title.split(" ").slice(0, 2).join(" ")} ... ` : item.title))
            name.classList.add("py-2", "fs-2")
            let year = createTag("h4")
            year.classList.add("text-danger", "mb-3")
            year.appendChild(document.createTextNode(item.year))
            let trailer = createTag("a")
            trailer.classList.add("text-uppercase")
            trailer.appendChild(document.createTextNode("trailer"))
            trailer.href = item.trailer
            trailer.classList.add("btn", "btn-success")
            li.appendChild(img)
            li.appendChild(name)
            li.appendChild(year)
            li.appendChild(trailer)
            hero__items.appendChild(li)
    });
}
handleRenderMovies(Movies)