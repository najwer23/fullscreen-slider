
let idPicture = 0;
let pictures = ["pic1","pic2", "pic5", "pic6", "pic7", "pic8", "pic9", "pic10", "pic11"];

let idPicture2Show = 1;
let formatPicture = ".jpg";
let pictureName = pictures[0] + formatPicture;

function start() {
    showDescription();    
};

function showDescription() {
    let d = document.getElementById("description"); 
    d.innerHTML = "(" + idPicture2Show + "/" + pictures.length + ") " + pictureName;
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode === 37) {
        prev();
    }
    
    if (e.keyCode === 39) {
        next();
    }
}



function next () {

    let f1 = document.getElementById("foto1");
    let f2 = document.getElementById("foto2");

    f1.classList.add("slideInLeft");
    f2.classList.add("slideOutRight");

    f1.classList.remove("slideInRight");
    f2.classList.remove("slideOutLeft");

    if (idPicture < 0) {
        idPicture = pictures.length + (idPicture % pictures.length);
    } 

    f1.classList.add("hide"); 
    f1.setAttribute("style", "background-image: url('IMG/" + pictures[(idPicture + 1) % pictures.length] + "" + formatPicture+"')");
    f2.setAttribute("style", "background-image: url('IMG/" + pictures[(idPicture) % pictures.length] + "" +formatPicture+"')");
    
    idPicture2Show = ((idPicture + 1) % pictures.length)+1;
    pictureName = pictures[(idPicture + 1) % pictures.length] + formatPicture;

    f2.classList.remove("hide");
    setTimeout(function () {
        f1.classList.remove("hide");
        f2.classList.add("hide"); 
    }, 500);

    idPicture += 1;

    showDescription();
}

function prev() {

    let f1 = document.getElementById("foto1");
    let f2 = document.getElementById("foto2");

    f1.classList.remove("slideInLeft");
    f2.classList.remove("slideOutRight");

    f1.classList.add("slideInRight");
    f2.classList.add("slideOutLeft");

    if (idPicture < 0) {
        idPicture = pictures.length + (idPicture % pictures.length);
    } 

    f1.classList.add("hide");
    if ((idPicture-1) == -1) {
        f1.setAttribute("style", "background-image: url('IMG/" + pictures[pictures.length - 1] + "" + formatPicture+"')");
        pictureName = pictures[pictures.length - 1] + formatPicture;
        idPicture2Show = pictures.length - 1 + 1;
    } else {
        f1.setAttribute("style", "background-image: url('IMG/" + pictures[(idPicture - 1) % pictures.length] + "" + formatPicture +"')");
        pictureName = pictures[(idPicture - 1) % pictures.length] + formatPicture;
        idPicture2Show = ((idPicture - 1) % pictures.length)+1;
    }
    f2.setAttribute("style", "background-image: url('IMG/" + pictures[(idPicture) % pictures.length] + "" + formatPicture +"')");

    f2.classList.remove("hide");
    setTimeout(function () {
        f1.classList.remove("hide");
        f2.classList.add("hide");
       
    }, 500);

    showDescription();

    idPicture--;
}