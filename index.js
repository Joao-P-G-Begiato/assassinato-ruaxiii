var nomeDetetive = prompt(`Olá detetive, qual seu nome? (deve ter no mínimo duas letras)`)

while (nomeDetetive==null || nomeDetetive.length < 2){
    nomeDetetive = prompt(`Olá detetive, qual seu nome?(deve ter no mínimo duas letras)`)
}


document.write(
`<section class="corpo">
    <h1>Assassinato na Rua XIII.</h1>
        <p>
        A rua XIII sempre foi conhecida por ser calma e tranquila, uma vizinhança pacata onde até mesmo as 
        crianças brincavam na rua sem causar qualquer preocupação em seus pais, porém essa paz foi quebrada pelos 
        sons de sirenes de carros de polícia que chegavam na casa de Dona Clotilde uma senhora aposentada que morava 
        na rua desde que era criança. E você caro Detetive <em><strong id="detetive"> ${nomeDetetive} </em> </strong>
        foi selecionado para investigar o assassinato que ocorreu ali.
        </p>
        <nav>
            <a href="./entroncamento.html">
                <button> Iniciar o Jogo </button>
            </a>
        </nav>
</section>`
)