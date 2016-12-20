//var keyClass = document.getElementsByClassName('key')
window.addEventListener('keydown', e => {
  console.log(e)
  if ( !e.metaKey ) {
    e.preventDefault();
  }
  document.querySelector('.keycode-display').innerHTML = e.keyCode
  document.querySelector('.text-display').innerHTML = e.key
})
