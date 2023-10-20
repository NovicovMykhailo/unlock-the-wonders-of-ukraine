const audioPlayer = document.querySelector('#audio')
const audioBtn = document.querySelector('.controls')

audioBtn.addEventListener('click', handleClickAudio)
function handleClickAudio(e){
    
    audioBtn.classList.toggle('muted')
    if(audioBtn.classList.contains('muted')){
        audioPlayer.pause()
    }else{
        audioPlayer.play()
    }

}