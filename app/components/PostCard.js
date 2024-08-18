export function PostCard(props){
    let {date,id,slug,title,_embedded} = props
    let formatDate = new Date(date).toLocaleString(),
        urlPoster = _embedded["wp:featuredmedia"] 
            ? _embedded["wp:featuredmedia"][0].source_url 
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-oTCfJdO8zwDoyHB7j5tktdQq31w6t31GsA&s"; 

    document.addEventListener("click",(e)=>{
        if (!e.target.matches(".post-card a")) return false
        localStorage.setItem("wpPostId",e.target.getAttribute("data-id"))
    })

    return `
            <article class="post-card">
                <img src="${urlPoster}" alt="${title.rendered}">
                <h2>${title.rendered}</h2>
                <p>
                    <time datetime="${date}">${formatDate}</time>
                    <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
                </p>
            </article>
            `
}