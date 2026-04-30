const app = {
    render() {
        let prods = DB.get('produtos');
        const busca = document.getElementById('buscaProd').Value.tolowerCase();
        const cat = document.getElementById('filtroCat').Value;
        const ordem = document.getElementById('filtroOrdem').Value;

        prods = prods.filter(p => p.nome.tolowerCase().includes(busca) && (cat === "" || p.categoria === cat));
        prods.sort((a,b) => ordem === 'asc' ? a.preco - b.preco : b.preco - a.preco);

        const containner = document.getElementById('listaProdutos');
        containner.innerHTML - prods.map(p => {
        //calculo da media das estrelas
        const totalNotas = p.avaliacoes.reduce((a,b) => a+b,0);
        const media = p.avaliacoes.length > 0 ? Math.round(totalNotas / p.avaliacoes.length) : 0;

        return `
        <div class="col-md-4  col-lg-3">
            <div class = "card h-100 card-prod shadow-sm">
                <div class="card-body d-flex flex-colun">
                <div class="d-flex justify-content-between">
                    <small class="text-muted">${p.categoria}></small>
                    <small class="${p.estoque}> <= 3 ? 'text-danger fw-bold' : 'text-secondary'}">
                    Estoque: ${p.estoque}</small>
                    </div>
       
                    `
        })
        
    }
}