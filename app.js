//template_soili7m
//service_8ssayoo
//cZX4ezttbcoqQYv0q
function contact() {
    event.preventDefault(event);
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
       .sendForm(
         "service_8ssayoo",
            "template_soili7m",
           event.target,
            "cZX4ezttbcoqQYv0q"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += (" modal__overlay--visible")
            setTimeout(() => {
                success.classList.remove("modal__overlay--visible")
            }, 5000);
       }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on justin1017555@gmail.com"
        )
       })
}
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"

}
let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle === true) {
        document.body.classList += " dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
    
}
function moveBackground(event) {
    const scaleFactor = 1 / 20;
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}