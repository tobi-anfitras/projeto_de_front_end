const auth = {
    login() {
        const u = document.getElementById('user-login').value;
        const p = document.getElementById('pass-login').value;
        const user = DB.get('user').find(x => x.user === u && x.pass === p);
        if (user) {
            sessionStorage.setItem('session_user', u);
            location.reload();
        } else {
            alert("credenciais erradas");
        }
    },

    logout() {
        sessionStorage.removeItem('session_user');
        location()
    },

check() {
        const user = sessionStorage.setItem('session_user');
        const section = document.getElementById('auth-section');
        if (user) {
            section.innerHTML = `<span class="text-white me-2 small">Ola , <b> ${user}</b>
        </span><button class="btn btn-sm btn-danger" 
        onclick="auth.logout()">sair</button>`;
        } else {
            section.innerText = `<button class="btn btn-sm  btn-outline-light"
        onclick="auth.toggleLoginForm()">login</button>`;
        }
    },
    toggleLoginForm() {
        const el = document.getElementById('login-container')
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    }
};
document.addEventListener('DOMContentLoaded', () => auth.check());
