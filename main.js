function creatElement(){
    var elementIds = [
        "ftitulo",
        "fdesc",
        "fquartos",
        "fvagasG",
        "fareat",
        "fareaC",
        "flocal",
        "fprice",
    ]
    var list = document.createElement("ul");
    if(!isFirstList()) createTitle(list)

    var elements = getElementsByIds(elementIds);
    addElementsToList(list, elements);
    
    addImageToList(list, "fname")
    document.querySelector(".second-content").appendChild(list);

    return false;
}

function isFirstList() {
    return document.getElementsByTagName("ul")[0]
}

function createTitle(list){
    var anuncios = document.createElement("h2");
    anuncios.innerHTML = "Lista de anúncios";
    list.appendChild(anuncios);
}

function getElementsByIds(elementIds){
    return elementIds.map( id => {
       var element = document.getElementById(id)
        return {
            name: element.placeholder,
            value:  element.value,
            type:  element.type
        }
    })
}

function addElementsToList(list, elements){
    elements.forEach( element => {
        var item = document.createElement( "li" );
        item.innerHTML = `${element.name}: ${element.value}`;
        list.appendChild(item);
    })
}

function addImageToList(list, elementId){
    var x_url = document.getElementById(elementId).value;
    var tagImage = document.createElement( "img" );
    tagImage.src = x_url;
    list.appendChild(tagImage);
}

function salvarPessoa(){
    var x_titulo = document.getElementById("ftitulo").value;
    var x_descricao = document.getElementById("fdesc").value;
    var x_quartos = document.getElementById("fquartos").value;
    var x_vagasGaragem = document.getElementById("fvagasG").value;
    var x_ÁreaTerreno = document.getElementById("fareat").value;
    var x_ÁreaConst = document.getElementById("fareaC").value;
    var x_localidade = document.getElementById("flocal").value;
    var x_preco = document.getElementById("fprice").value;
    var x_url = document.getElementById("fname").value;

    // Pega a lista já cadastrada, se não houver vira um array vazio
    var lista_pessoas = JSON.parse(localStorage.getItem('lista-pessoas') || '[]');
    // Adiciona pessoa ao cadastro
    lista_pessoas.push({
        titulo: x_titulo,
        descricao: x_descricao,
        quartos:x_quartos,
        vagasGaragem:x_vagasGaragem,
        areaTerreno:x_ÁreaTerreno,
        areaConstruida:x_ÁreaConst,
        localidade:x_localidade,
        preco:x_preco,
        urlImage:x_url
    });

    // Salva a lista alterada
    localStorage.setItem("lista-pessoas", JSON.stringify(lista_pessoas));

    console.log('Salva com sucesso.');
}