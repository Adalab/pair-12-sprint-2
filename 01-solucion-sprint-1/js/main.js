'use strict';


/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');

let kittenDataList = [];

//Objetos con cada gatito
const kittenData_1 = {
    image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    name: "Anastacio",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_2 = {
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
    name: "Fiona",
    desc: "Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_3 = {
    image: "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
    name: "Cielo",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};

//const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

console.log(kittenDataList.newKittenDataObject);

//Funciones
function renderKitten(kittenData) {
    const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
    return kitten;
}

function renderKittenList(kittenDataList) {
    listElement.innerHTML = "";
    for (const kittenItem of kittenDataList) {
        listElement.innerHTML += renderKitten(kittenItem);
    }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
    newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
    newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newFormElement.classList.contains('collapsed')) {
        showNewCatForm();
    } else {
        hideNewCatForm();
    }
}
//Adicionar nuevo gatito
function addNewKitten(event) {
    event.preventDefault();
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    if (valueDesc === "" && valuePhoto === "" && valueName === "") {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
            labelMesageError.innerHTML = "";
        }
    }
    const newKittenDataObject = {};
    newKittenDataObject.desc = valueDesc;
    newKittenDataObject.name = valueName;
    newKittenDataObject.image = valuePhoto;






    kittenDataList.push(newKittenDataObject);
    renderKittenList(kittenDataList);

}
//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
    event.preventDefault();
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
}

//Filtrar por descripción
function filterKitten(event) {
    event.preventDefault();
    const descrSearchText = input_search_desc.value;

    const filterDesc = kittenDataList.filter((eachCat) => eachCat.desc.includes(descrSearchText));
    console.log(filterDesc);
    renderKittenList(filterDesc);



}



const GITHUB_USER = 'lauramargo';
const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;



const kittenListStored = JSON.parse(localStorage.getItem("kittensList"));

if (kittenListStored) {
    kittenDataList = kittenListStored;
    renderKittenList(kittenDataList);
    console.log(kittenDataList);

} else {
    fetch(SERVER_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .then((data) => {
            kittenDataList = data.results;
            renderKittenList(kittenDataList);
            localStorage.setItem("kittensList", JSON.stringify(kittenDataList));
        })
        .catch((error) => {
            console.error(error);
        });
}




/*console.log(kittenDataList);*/


//Completa el código;


/* function filterKitten(ev) {
    const filterDesc = kittenDataList.filter((risueño) => kittenItem.desc);
    console.log (filterDesc); */
//Modifica el código:
//Haz un filter sobre el listado de gatitos
//Vuelve a pintar el listado de gatitos filtrados en el HTML.


//Mostrar el litado de gatitos en ell HTML
renderKittenList(kittenDataList);

const newKittenDataObject = {
    image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    name: "Anastacio",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};


kittenDataList.push(newKittenDataObject);
renderKittenList(kittenDataList);


//Limpiar Inputs

/*function cancelNewKitten(event) {
    event.preventDefault();
    newFormElement.classList.remove("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
}*/


//Eventos
linkNewFormElememt.addEventListener("click", handleClickNewCatForm);
searchButton.addEventListener("click", filterKitten);
buttonAdd.addEventListener("click", addNewKitten);
buttonCancelForm.addEventListener("click", cancelNewKitten);






