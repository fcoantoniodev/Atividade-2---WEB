function creatElement(){
    var x_titulo = document.getElementById("ftitulo").value;
    var x_descricao = document.getElementById("fdesc").value;
    var x_quartos = document.getElementById("fquartos").value;
    var x_vagasGaragem = document.getElementById("fvagasG").value;
    var x_ÁreaTerreno = document.getElementById("fareat").value;
    var x_ÁreaConst = document.getElementById("fareaC").value;
    var x_localidade = document.getElementById("flocal").value;
    var x_preco = document.getElementById("fprice").value;
    var x_url = document.getElementById("fname").value;


    var divElemnt = document.querySelector(".second-content");
    var lista = document.createElement("ul");
    var linha = document.createElement("hr");


    
    if(!document.getElementsByTagName("ul")[0]){
        var anuncios = document.createElement("h2");
        anuncios.innerHTML = "Lista de anúncios";
        lista.appendChild(anuncios);
    }



    var item1 = document.createElement( "li" );
    var item2 = document.createElement( "li" );
    var item3 = document.createElement( "li" );
    var item4 = document.createElement( "li" );
    var item5 = document.createElement( "li" );
    var item6 = document.createElement( "li" );
    var item7 = document.createElement( "li" );
    var item8 = document.createElement( "li" );
    var item9 = document.createElement( "li" );
    
    var tagImage = document.createElement( "img" );
    tagImage.src = x_url;


    item1.innerHTML = "Título:" + x_titulo;
    item2.innerHTML ="Descrição:" + x_descricao;
    item3.innerHTML ="Quartos:" + x_quartos ;
    item4.innerHTML = "Vagas de garagem:" + x_vagasGaragem;
    item5.innerHTML = "Área do terreno:" + x_ÁreaTerreno;
    item6.innerHTML ="Área construída:" + x_ÁreaConst;
    item7.innerHTML ="Localidade:" + x_localidade;
    item8.innerHTML = "Preço:" + x_preco;
    item9.innerHTML =  tagImage;


    lista.appendChild(item1);
    lista.appendChild(item2);
    lista.appendChild(item3);
    lista.appendChild(item4);
    lista.appendChild(item5);
    lista.appendChild(item6);
    lista.appendChild(item7);
    lista.appendChild(item8);
    lista.appendChild(tagImage);
    lista.appendChild(linha);

    divElemnt.appendChild(lista);
}