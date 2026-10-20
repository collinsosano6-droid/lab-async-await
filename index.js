// Write your code here!
// fetch('https://jsonplaceholder.typicode.com/')
//     .then(response => response.json())
//     .then(posts => {
//         console.log(posts);
//     })
//     .catch(error => {
//         console.log("Error fetching details", error);
//     })

function displayPosts(posts){
    const postList = document.querySelector("#post-list");
    posts.forEach(post => {
        const list = document.createElement("li")
        const title = document.createElement("h1")
        title.textContent = post.title
        const body = document.createElement("p")
        body.textContent = post.body

        list.appendChild(title)
        list.appendChild(body)

    postList.append(list)
    })

} 

async function fetchAndDisplayPosts(){
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
    }
    catch(error){
        console.error("Error fetching posts", error);
    }
}
fetchAndDisplayPosts()