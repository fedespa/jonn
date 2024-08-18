import { ajax } from "../helpers/ajax.js"
import api from "../helpers/wp_api.js"
import { Post } from "./Post.js"
import { PostCard } from "./PostCard.js"

export async function Router () {
    const d = document, w = window
    let {hash} = location
    console.log(hash)
    d.getElementById("main").innerHTML = null

    if (!hash || hash === "#/") {
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let html = ""
                posts.forEach(post => {
                    html += PostCard(post)
                })
                document.getElementById("main").innerHTML = html
            }
        }) 
    } else if (hash.includes("#/search")) {
        d.getElementById("main").innerHTML = "<h2>Sección del Buscador</h2>"
    } else {
        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                document.getElementById("main").innerHTML = Post(post)
            }
        }) 
    }
    document.querySelector(".loader").style.display = "none"
}