const ModalBtn = document.querySelector("#btn");
const body = document.body;

ModalBtn.addEventListener('click', e=>{
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("modal");

    overlayElement.addEventListener("click", e=>{
        closeElement.click()
    });
     
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal__container");
    modalContainer.innerHTML =  "Проверка";

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href="#";
    
    closeElement.addEventListener('click', e=>{
        e.preventDefault();
        body.removeChild(overlayElement);

    })


    overlayElement.appendChild(modalContainer);
    modalContainer.appendChild(closeElement);
    body.appendChild(overlayElement);
});

function createModal(content){
    
}