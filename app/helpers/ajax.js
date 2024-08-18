export async function ajax (props) {
    let {url, cbSuccess} = props
    try {
        const res = await fetch(url)
        if (!res.ok) throw {}
        const json = await res.json()
        cbSuccess(json)
    }
    catch (err){
        let message = err.statusText || "Ocurrio un error."
        document.getElementById("main").innerHTML = `
        <div class="error">
        Error ${err.status}: ${message}
        </div>`
        document.querySelector(".loader").style.display = "none"
    }
}