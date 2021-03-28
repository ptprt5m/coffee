window.addEventListener("load", function () {

    let modalWindow = document.querySelector('.modalWindow')
    let form = document.querySelector('.modalWindow__form')
    let inputs = form.querySelectorAll('.modalWindow__form-text')
    let menu = document.querySelector('.header__links')
    let openModal = document.querySelector('[href="#openModal"]')
    let close = document.querySelector('[href="#close"]')
    let closeBurger = document.querySelector('[href="#closeBurger"]')
    let burger = document.querySelector('.header__burger')

    // Прокрутка по ссылкам меню

    menu.addEventListener('click', function(e){ 			
		let link = e.target 								
		if(link.classList.contains('header__link')) {			
			e.preventDefault()								
			scrollToTarget(link.hash)						
		}
	})

    function scrollToTarget(id){							
		let target = document.querySelector(id)				
		if(target !== null){								
			let pos = target.offsetTop - 100
			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			})
		}
	}

    //Открытие модалки

    openModal.addEventListener('click', function () {
        document.body.style.overflow = 'hidden'
        modalWindow.classList.add("modalWindowVisible")
    })
    close.addEventListener('click', function () {
        document.body.style.overflow = 'visible'
        modalWindow.classList.remove("modalWindowVisible")
    })

    //Простая проверка на заполнение полей формы модалки
    
    form.addEventListener("submit", validations) 
    function validations(e) {
        for(let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length == 0) {
                e.preventDefault()
                inputs[i].classList.add('error')
            }
        }
    }
    form.addEventListener("input", function(event) {
        for(let i = 0; i < inputs.length; i++) {
            event.target.classList.remove('error')
        }
    })

    burger.addEventListener('click', function(e){
        document.querySelector('#header__links').classList.remove('header__links')
        document.querySelector('#header__links').classList.add('burger__box')
        document.querySelector('#header__links').style.display = block
        document.querySelector('.header__link-toOrder').style.display = block
    })
    closeBurger.addEventListener('click', function(){
        document.querySelector('#header__links').classList.add('header__links')
        document.querySelector('#header__links').classList.remove('burger__box')
        document.querySelector('#header__links').style.display = none
    })

})