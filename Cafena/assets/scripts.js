const buyListBtns = document.querySelectorAll('.buy');
const products = document.querySelectorAll('.card');
let modalDiv = document.querySelector('.modal');

buyListBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        let shopIcon = document.querySelector('.shop')
        shopIcon.classList.add('fill')
    })
})

products.forEach(product => {
    product.addEventListener('click', (event)=>{
        if (!event.target.classList.contains('buy') && !event.target.closest('.buy')) {

            // acessando os elementos de dentro de cada product
            const imgSrc = product.querySelector('img').src;
            const coffeeName = product.querySelector('.coffe-name').textContent;
            const description = product.querySelector('.description').textContent

            modal(imgSrc, coffeeName, description)

        }
    })
})


function modal(imgSrc, coffeeName, description){
    modalDiv.style = 'display:block'

    let modalIcon = document.querySelector('.modal-content img')
    let modalName = document.querySelector('.modal-content h2')
    let modalDescription = document.querySelector('.modal-content p')
    
    modalIcon.src = imgSrc
    modalName.innerHTML = coffeeName
    modalDescription.innerHTML = description
}


modalDiv.addEventListener('click', (event)=>{
    if (!event.target.closest('.modal-content')) {
        modalDiv.style = 'display:none;'
    }
})