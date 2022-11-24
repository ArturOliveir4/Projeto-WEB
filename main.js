function login() {
    const login = "artur";
    const password = "1234";

    let loginDig = document.getElementById("username").value;
    let senhaDig = document.getElementById("userpassword").value;

    if (loginDig == login && senhaDig == password) {
        window.location.href = "index.html";
        let continuarLogado = document.getElementById("lembre-me");

        if (continuarLogado) {
            document.cookie = "logado=1";

        }

        window.location.href = "index.html"

    } else {
        alert("Login inexistente");
    }
}

function register() {
    let userName = document.getElementById("nomeUsuario").value;
    let email = document.getElementById("emailUsuario").value;
    let senha = document.getElementById("senhaUsuario").value;
    let repetirSenha = document.getElementById("repetirSenhausuario").value;

    if (senha != repetirSenha) {
        alert("Digite as senhas iguais...");
    }


}

function loginPath() {
    window.location.href = "login.html";
}
function esqueceuPath() {
    window.location.href = "esqueceuSenha.html";
}

function recuperarSenha() {
    alert("E-mail enviado");
}



$(document).ready(function () {
    $('#tabela').DataTable({
        "ordering": true,
        "paging": true,
        "searching": true,
        "oLanguage": {
            "sEmptyTable": "Nenhum registro encontrado na tabela",
            "sInfo": "Mostrar _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrar 0 até 0 de 0 Registros",
            "sInfoFiltered": "(Filtrar de _MAX_ total registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "Mostrar _MENU_ registros por pagina",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Proximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Ultimo"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });
});

$(document).ready(function () {
    $('#tabela').DataTable();
});