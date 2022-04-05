
document.getElementById("image_update_button")
.addEventListener("click", () => {
    const imageHtml = `<img src=assets/cute_cat.jpg></img>`
    document.getElementById("image_div").innerHTML = imageHtml
})