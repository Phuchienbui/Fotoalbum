const images =
    [
        { src: "./imgkombri/ahmetyuksek-swan-close-up-9767494_1920.jpg", alt: "Schwan mit Jungtier auf dem Wasser", title: "Schwanenfamilie auf dem See" },
        { src: "./imgkombri/husien_pro-iced-coffee-10260387_1920.jpg", alt: "Eiskaffee mit Milchschichten und Schaumkrone in einem Glas", title: "Erfrischender Iced Latte Macchiato" },
        { src: "./imgkombri/couleur-dandelion-10245975_1920.jpg", alt: "Löwenzahn mit Samen im Gegenlicht", title: "Löwenzahn im Wind" },
        { src: "./imgkombri/daniil_kondrashin-autumn-9912502_1920.jpg", alt: "Frau mit roten Haaren", title: "Porträt einer Frau" },
        { src: "./imgkombri/fotos-art-fine-art-9978188_1920.jpg", alt: "Nahaufnahme von Kirschblüten", title: "Kirschblüte im Frühling" },
        { src: "./imgkombri/gom_su_cuong_duyen-ceramic-vase-10211596_1920.jpg", alt: "Porträt einer Frau neben einer Blumenvase", title: "Porträt mit Blumenarrangement" },
        { src: "./imgkombri/gruendercoach-robin-10205230_1920.jpg", alt: "Ein Rotkehlchen sitzt auf einem Ast mit Tannen-Nadeln", title: "Das ist ein Rotkehlchen" },
        { src: "./imgkombri/guvo59-berry-tarts-9735441_1920.jpg", alt: "Törtchen mit Beeren und Puderzucker", title: "Beeren-Törtchen mit Puderzuckert" },
        { src: "./imgkombri/kyraxys-depth-10210903_1920.jpg", alt: "Silhouette eines Tauchers unter Wasser im Lichtstrahl", title: "Tauchgang ins Licht" },
        { src: "./imgkombri/storme22k-fennec-fox-9846388_1920.jpg", alt: "Schlafender Fuchs auf einem Stein", title: "Ein Moment der Ruhe" },
        { src: "./imgkombri/thibaultlamtran-vinyl-9617456_1920.jpg", alt: "Schallplatte auf einem Plattenspieler", title: "Vinyl auf dem Plattenspieler" },
        { src: "./imgkombri/veronika_andrews-anna-10217636_1920.jpg", alt: "Kolibri im Flug mit ausgebreiteten Flügeln", title: "Leichter Flug" },
        { src: "./imgkombri/tehzeebkazmii-highland-cattle-10239253_1920.jpg", alt: "Porträt eines braunen schottischen Hochlandrinds mit langen Hörnern und zotteligem Fell auf einer grünen Wiese", title: "Majestätisches Hochlandrind" },
    ]


const gallery = document.getElementById("gallery");
const dialog = document.querySelector("dialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogCloseBtn = document.getElementById("dialogCloseBtn");
const dialogLeftBtn = document.getElementById('dialogLeftBtn');
const dialogRightBtn = document.getElementById('dialogRightBtn');
const pCounter = document.getElementById('counter');
const dialogItems = document.getElementById('dialogimgs');

let currentCounter = 0;

function renderGallery() {
    let galleryHtML = "";
    for (let i = 0; i < images.length; i++) {
        galleryHtML +=
            `
            <li class="gallery_item">
                    <button onclick="openDialog(${i})" class="gallery__button" data-index="${i}">
                        <img class= "gallery__pic" src="${images[i].src}" alt="${images[i].alt}">
                        <img class= "heart-icon" src="./svg/favorite.svg" alt="aria-hidden=true">
                    </button>
                    
                </li>
        `
    }
    gallery.innerHTML = galleryHtML;
}

function updateDialog(index) {
    currentCounter = index;
    dialogItems.src = images[currentCounter].src;
    dialogItems.alt = images[currentCounter].alt;
    dialogTitle.textContent = images[currentCounter].title;
    pCounter.textContent = `${currentCounter+1}/${(images.length)}`
}

function swipeLeft(){
    currentCounter--;
    if(currentCounter <0){
        currentCounter = images.length-1;
    }
    updateDialog(currentCounter);
}

function swipeRight(){
    currentCounter++;
    if(currentCounter >= images.length){
        currentCounter = 0;
    }
    updateDialog(currentCounter);
}

function openDialog(index) {
    updateDialog(index);
    dialog.showModal();
}

function dialogClose() {
    dialog.close();
}

