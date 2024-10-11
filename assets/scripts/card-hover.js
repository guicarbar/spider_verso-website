// função para criar a animação de quando o mouse entrar
function handleMouseEnter() {
    this.classList.add("section-card__hovered")
    document.body.id = `${this.id}-hovered`
}

// finção pra voltar ao normaç quando o mouse sair
function handleMouseLeave() {
    this.classList.remove("section-card__hovered")
    document.body.id = ``
}

// função principal
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName("section-card")   
    // para cada item do array gerado a cima que seria os item do card
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index]
        // quando o mopuse entra
        card.addEventListener('mouseenter', handleMouseEnter)
        // quando o mouse sair
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

// "ouvidor" dos eventos para inicialização da função principal
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)