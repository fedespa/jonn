export function Loader() {
    const $loader = document.createElement("img")
    $loader.src = "app/assets/bouncing-circles.svg"
    $loader.alt = "Cargando..."
    $loader.classList.add("loader")

    return $loader
}