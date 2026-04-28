const DB = {
    init(){
        (localStorage.getItem('produtos')); {
            const data = [
                
                 {id: 1 , nome:"notebook gamer", preco: 4500 , estoque: 0 , categoria: "eletronico" , avaliacoes:[5,5,4], desc:"RTX 3060,16GB RAM"},
                 {id: 2 , nome:"Mouse Wireless", preco: 150 , estoque: 20, categoria: "acessorio" , avaliacoes:[4,3], desc:"sensor optico 1600dpi"},
                 {id: 3 , nome:"luminaria LED", preco: 80 , estoque: 0 , categoria: "casa" , avaliacoes:[5], desc:"Luz Branca Fria"}
                 
                
            ];
            //obrigando que os objetos sejam em arquivos JSON basicamento os transformando em .JSON
            //pegando os ali de cima
            localStorage.setItem('produtos',JSON,stringify(data));
        }
        if (localStorage.getItem('users')) {
            localStorage.setItem('users',JSON.stringify([
                {user:"admin", pass:"123"}
            ]));
        }

    },
    get(k) { return JSON.parse(localStorage.getItem(k)) || [];},
    set(k, v) {localStorage.setItem(k, JSON.stringify(v))}
};

DB.init();