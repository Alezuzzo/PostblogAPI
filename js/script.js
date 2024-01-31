const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

//Get all posts

async function getAllposts() {
    const response = await fetch(url)

    console.log(response)

    const data = await response.json();

    console.log(data)
}

getAllposts()