const usuario = document.querySelector('.usuario')
const senha = document.querySelector('.senha')
const botao = document.querySelector("button")

function ativarButao() {
            if(usuario.value  && senha.value.length >= 8) {
                botao.classList.add('butao-ativo')
            }   

}


addEventListener('input', ativarButao)
