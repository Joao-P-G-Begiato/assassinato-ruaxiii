var resultado = prompt("Escolhar o número da opção correta, relembrando: 1- Margareth ; 2- Thiago; 3- Ramon; 4- Margareth E Ramon; 5- Margareth E Thiago; 6- Thiago E Ramon; 7- Margareth, Thiago e Ramon.");

  while(isNaN(resultado)){
    resultado = prompt("Escolha o número da opção correta.");
    }

    while(resultado > 7 || resultado < 1){
        resultado = prompt("Escolha o número entre as opções validas entre 1 e 7.");
        }

function ganharOuPerder (){
    if(resultado==7){
        document.write(`  
        <div class="vitoria">
            <h1 class="win"> Vitória </h1><br>
            <h3> Parabéns Detetive, você conseguiu desvendar esse mistério. </h3>

            <p>Ao prender os Assassinos eles confessaram o crime:</p>

                O Plano era dar um susto na Clotilde, a Margareth e o Thiago iriam segura-la enquanto Ramon 
                ameaçava com o tesourão, dizendo para ela começar a tratar as outras pessoas de uma maneira melhor, 
                porém Clotilde reagiu e conseguiu soltar uma das mãos, fazendo com que Ramon cortasse a mão e Thiago
                que sem querer esbarrou a mão ensanguentava na manga de Margareth e Clotilde com uma das mãos livres
                puxou a máscara de Ramon que acabou sendo exposto e decidiu então que precisaria matá-la. <br><br>

            <a href="./index.html">
                <button class="bwin">
                    Retorne ao início
                </button>
            </a>
        </div>
        `)
    } else{
        document.write(`
        <div class="gameover">
            <h1> GAME OVER </h1><br>
            <h3> 
            Você deixou o assasino fugir<br><br><br>
             Tente novamnte. <br><br>
                <em>
                 Dica:<br>
                </em>
                Tente coletar mais informações interrogando outros suspeitos, isso fará voê descobrir novas 
                informações<br><br>
            </h3>

            <a href="./index.html">
                <button>
                     Retorne ao início
                 </button>
            </a>
        </div>
        `)
    }
}

ganharOuPerder(resultado);