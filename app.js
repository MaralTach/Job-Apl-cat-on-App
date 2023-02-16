let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
} 

window.onscroll = () =>{
  navbar.classList.remove('active')
}

document.querySelectorAll('input[type="number"]').forEach(inputNumer => {
  inputNumer.oninput = () =>{
    if (inputNumer.value.length > inputNumer.maxLength) inputNumer.value = inputNumer.value.slice(0, inputNumer.maxLength)
  }
})