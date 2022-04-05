const PICSUM_URL = "https://picsum.photos/"

export const getRandomPicture = () => {
    return fetch(PICSUM_URL + "200")
}