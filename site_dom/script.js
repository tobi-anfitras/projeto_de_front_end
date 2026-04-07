//função para salvar usuario

const cadastrar = (event) =>{
    event.preventdefault();
   const nome = document.getElementById("cadName").value;
   const email = document.getElementById("cadEmail").value;
   const senha = document.getElementById("cadSenha").value;

   const usuario = ( nome, email, senha );

   //mock de persistencia de: salvar array de usuarios no localStorage
   let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
   const userExists = usuarios.find(u.email === email && u.senha === senha);
   
   if(userExists){
    alert(`bem-vindo, ${userExists.nome}!`)
    window.location.href = "contato.html"
   }else{
    alert("deu B.O")
   }

};
//mapeamento do DOM

document.getElementById("loginForm")?.addEventListener(`submit ${login}`)
document.getElementById("cadform")?.addEventListener(`submit ${cadastrar}`)