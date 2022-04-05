import { getRandomPicture } from "./picsum-gateway.js"

document.getElementById("image_update_button")
.addEventListener("click", () => {
    const imagePromise = getRandomPicture()
    imagePromise.then(data => {
        const imageHtml = `<img src=${data.url}></img>`
        document.getElementById("image_div").innerHTML = imageHtml
    })
})