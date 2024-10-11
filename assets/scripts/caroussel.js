function selectcarousselItem(item) {
    // pegando qual foi
    const selectedItem = item.id

    // pegando qual o angulo o caroussel se encontra
    const caroussel = document.querySelector(`.card-carousel`)
    const trasnform = caroussel.style.transform
    const rotateY = trasnform.match(/rotateY\((-?\d+deg)\)/i)
        // expressão regular pra procurar o angulo /rotateY\((-?\d+deg)\)/i

    // pegando qual aposição desejada pelo usuario
    const rotateDeg = -120 * (Number(selectedItem)- 1)
    // -120 para ser antihorario e o valor de 120 pq é 360/3 que e o numero de cards e -1 pois o tobey e o primreio home a aranha entao ele tem que estar no meio e o angulo dele e 0deg

    // corrigondo os novos valores
    const newTrasnform =  trasnform.replace(rotateY[0], `rotateY(${rotateDeg}deg)`)

    // aplicando ao caroussel
    caroussel.style.transform = newTrasnform

    // mudando a classe active-buttton de elemento
    const activeButton = document.querySelector(`.controller-button__active`)
    activeButton.classList.remove('controller-button__active')
    item.classList.add('controller-button__active')
}