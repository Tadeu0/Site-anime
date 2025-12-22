const btn = document.querySelectorAll('.bots')
const est = document.querySelectorAll('.personagens')

btn.forEach((botao, list) =>{
    botao.addEventListener('click', () =>{
            remover_b()
            remover_img()

        botao.classList.add('selecionado')
        est[list].classList.add('selecionado')

        console.log(est)


    })
})

function remover_img(){
    const r = document.querySelector(".personagens.selecionado")
    r.classList.remove("selecionado")
}
function remover_b(){
    const r = document.querySelector(".bots.selecionado")
    r.classList.remove("selecionado")
}