    const bot = document.querySelectorAll('.bots')
    const estrutura = document.querySelectorAll('.container_fundo')

    bot.forEach((botao, list) =>{
        botao.addEventListener("click", () => {

        remover_est()
        remover_b()

            botao.classList.add('selecionado')

            estrutura[list].classList.add("selecionado")
            console.log(botao)
        })
    })

     function remover_est(){
             const re_e = document.querySelector('.container_fundo.selecionado')
             re_e.classList.remove("selecionado")
     }
     function remover_b(){
             const re_b = document.querySelector('.bots.selecionado')
             re_b.classList.remove("selecionado")
     }


