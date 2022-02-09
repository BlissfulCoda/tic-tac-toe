function openPlayerConfig(e) {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block'
    e.preventDefault()
}

function closePlayerConfig(e) {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';

    e.preventDefault()
}