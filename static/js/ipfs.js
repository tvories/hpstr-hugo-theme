function use_ipfs(image) {
    if (image.naturalWidth == 0 && image.src.search("/ipfs/") != -1) {
        image.src = image.src.split('#')[1];
    }
}

let image = document.getElementsByClassName("entry-image")[0].getElementsByTagName('img')[0];
window.onload(use_ipfs(image));
