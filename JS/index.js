
let numerZdjecia = 0;
let zdjecia = ["pic1","pic2", "pic3"];

function next () {

    let f1 = document.getElementById("foto1");
    let f2 = document.getElementById("foto2");

    f1.classList.add("slideInLeft");
    f2.classList.add("slideOutRight");

    f1.classList.remove("slideInRight");
    f2.classList.remove("slideOutLeft");

    if (numerZdjecia < 0) {
        numerZdjecia = zdjecia.length + (numerZdjecia % zdjecia.length)
    } 

    f1.classList.add("hide"); 
    f1.setAttribute("style", "background-image: url('IMG/" + zdjecia[(numerZdjecia+1)%zdjecia.length] + ".jpg')")
    f2.setAttribute("style", "background-image: url('IMG/" + zdjecia[(numerZdjecia)%zdjecia.length] + ".jpg')")
    
    f2.classList.remove("hide");
    setTimeout(function () {
        f1.classList.remove("hide");
        f2.classList.add("hide"); 
    }, 500);

    numerZdjecia += 1;

};

function prev() {

    let f1 = document.getElementById("foto1");
    let f2 = document.getElementById("foto2");

    f1.classList.remove("slideInLeft");
    f2.classList.remove("slideOutRight");

    f1.classList.add("slideInRight");
    f2.classList.add("slideOutLeft");

    if (numerZdjecia < 0) {
        numerZdjecia = zdjecia.length + (numerZdjecia % zdjecia.length)
    } 

    f1.classList.add("hide");
    if ((numerZdjecia-1) == -1){
        f1.setAttribute("style", "background-image: url('IMG/" + zdjecia[zdjecia.length-1] + ".jpg')")
    } else {
        f1.setAttribute("style", "background-image: url('IMG/" + zdjecia[(numerZdjecia - 1) % zdjecia.length] + ".jpg')")
    }
    f2.setAttribute("style", "background-image: url('IMG/" + zdjecia[(numerZdjecia) % zdjecia.length] + ".jpg')")

    f2.classList.remove("hide");
    setTimeout(function () {
        f1.classList.remove("hide");
        f2.classList.add("hide");
       
    }, 500);

    numerZdjecia--;

};