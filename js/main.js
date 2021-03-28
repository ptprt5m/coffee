window.addEventListener("load", function () {

    let modalWindow = document.querySelector('.modalWindow')
    let form = document.querySelector('.modalWindow__form')
    let inputs = form.querySelectorAll('.modalWindow__form-text')
    let menu = document.querySelector('.header__links')

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
			let pos = target.offsetTop
			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			})
		}
	}

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

    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
      document.body.style.overflow = 'hidden'
      modalWindow.classList.add("modalWindowVisible")
    })
    document.querySelector('[href="#close"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible'
      modalWindow.classList.remove("modalWindowVisible")
    })
})