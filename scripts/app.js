const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const cancelPlayerEditButton = document.getElementById('btn-cancel');


const editPlayer1Button = document.getElementById('edit-player-1-btn')
const editPlayer2Button = document.getElementById('edit-player-2-btn')


// event listners

function eventListeners() {
    editPlayer1Button.addEventListener('click', openPlayerConfig)
    editPlayer2Button.addEventListener('click', openPlayerConfig);
    cancelPlayerEditButton.addEventListener('click', closePlayerConfig)
}

eventListeners()
