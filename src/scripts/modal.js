
function createModal() {
    const section = document.createElement('section')
    const form = document.createElement('form')
    const h3 = document.createElement('h3')
    const span = document.createElement('span')
    const paragraph1 = document.createElement('p')
    const paragraph2 = document.createElement('p')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const button = document.createElement('button')

    section.classList.add("modal__container")
    form.classList.add("modal__form")
    span.classList.add("modal__close")

    h3.innerText = "Recuperação de senha"

    span.innerText = "X"
    span.id = "btnModalClose"

    paragraph1.innerText = "Por favor digite um E-mail valido."
    paragraph2.innerText = "Vamos enviar um link de cofirmação para que possa realizar a troca da senha."

    label.innerText = "Recuperaçao de E-mail"
    label.setAttribute("for", "recoveryEmail")
    label.setAttribute("hidden", "")


    input.type = "email"
    input.name = "recoveryEmail"
    input.id = "recoveryEmail"
    input.placeholder = "Digite aqui o seu E-mail"

    button.innerText = "ENVIAR"


    form.append(h3, span, paragraph1, paragraph2, label, input, button)
    section.appendChild(form)

    return section

}


function showModal() {
    const body = document.querySelector('body')
    const btnModalOpen = document.querySelector('#modalOpen')

    btnModalOpen.addEventListener("click", (event) => {
        const clickOpen = createModal()

        body.appendChild(clickOpen)

        closeModal()
    })
}


function closeModal() {
    const modalSection = document.querySelector(".modal__container")
    const btnModalClose = document.querySelector("#btnModalClose")

    btnModalClose.addEventListener("click", (event) => {
        modalSection.remove()
    })
}

showModal()