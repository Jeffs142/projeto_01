const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", function() {
    if(tarefa.value == "") {
        alert("digite uma tarefa valida!")
    } else {
        lista.innerHTML += `<li>
                                <li><i class="check"><span></i>${ tarefa.value}<i class="close"></i></span></li>
                            </li>`    
    }
    tarefa.value = "";
    
    lista.addEventListener("click", function(e){
        e.target.parentElement.querySelector(".span").style.textDecoration = "line-through"
    })
})

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});