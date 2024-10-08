    var altura= 0
    var largura= 0
    var vidas= 1
    var tempo= 30
    var criaTempoabobora = 1500



     var nivel = window.location.search
     nivel = nivel.replace('?', '')

        if(nivel==='normal'){
            criaTempoabobora = 1500
            

        } else if(nivel==='dificil'){
            criaTempoabobora = 1000

        } else if(nivel==='impossivel(?)'){
            criaTempoabobora = 100

        }
     

    function tamanhodocenariojogo(){ //mudei o nome de ajusTamanhoPalco para tamanho do cenario jogo NAO USAR A MESMA SINTAXE OS MSM VAR DE OUTROS JA USADOS AQUI
        altura = window.innerHeight
        largura = window.innerWidth
        console.log(largura,altura)

    }

    tamanhodocenariojogo()

    var cronometro=setInterval( function(){
        tempo -=1
        document.getElementById('cronometro').innerHTML= tempo

        if(tempo<0){
            clearInterval(cronometro)
            clearInterval(criaAbobora)
            window.location.href='vitoria.html'

        } else{

        }

    },1000)


    function posicaoRandomica1(){

        if(document.getElementById('abobora')){
            document.getElementById('abobora').remove()

            if (vidas>3){
                window.location.href='game_over.html'
            } else{

                document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

                vidas++

            }

        }

    




    var posicaoX = Math.floor(Math.random()*largura) -90
    var posicaoY = Math.floor(Math.random()*altura) -90

    posicaoX = posicaoX < 0 ? 0: posicaoX
    posicaoY = posicaoY < 0 ? 0: posicaoY



    //criar o elemento html

    var abobora = document.createElement('img')
        abobora.src='imagens/abobora.png'
        abobora.className = tamanhoAleatorio1 ()
        abobora.style.left = posicaoX + 'px'
        abobora.style.top = posicaoY + 'px'
        abobora.style.position = 'absolute'
        abobora.id='abobora'
        abobora.onclick = function(){
            this.remove()

        }

        document.body.appendChild(abobora)

    }

    function tamanhoAleatorio1(){
        var classe = Math.floor(Math.random()*3)
    switch (classe){
        case 0:
            return 'abobora1'
        case 1:
            return 'abobora2' 
        case 2:
            return 'abobora3'         
            
            
    }    

    }
