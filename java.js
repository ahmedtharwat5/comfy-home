const header = document.querySelector("header");

Window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.Window.scrollY > 0);
})
