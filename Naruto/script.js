const bot = document.querySelectorAll(".bots")
const image = document.querySelectorAll(".personagens")

bot.forEach((botao, list) => {
    botao.addEventListener('click', () => {
        remover_img()
        botao.classList.add('selecionar')


        image[list].classList.add('selecionar')
        console.log(image)

        
    })
})

function remover_img() {
    const r_i =  document.querySelector('.personagens.selecionar')
    r_i.classList.remove('selecionar')

}


