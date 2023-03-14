let input=document.querySelector('.todo-input');
let add=document.querySelector(".btn-warning");
let list=document.querySelector("ul");
let errorMsg=document.querySelector(".text-danger");
input.addEventListener("keyup" , function(e){
    if(e.target.value.length<3 || e.target.value.trim()==""){
        errorMsg.style.display="inline";
        add.setAttribute("disabled", " ")
    }

    else{
        errorMsg.style.display="none";
        add.removeAttribute("disabled", "")
    }

});
add.addEventListener("click", function(e){
    e.preventDefault();
let newList=document.createElement("li")
newList.classList.add("d-flex");
newList.classList.add("justify-content-between");
newList.classList.add("align-items-center")
let span=document.createElement("span");
span.classList.add("lead");
span.innerText=input.value
let btn = document.createElement("button");
markBtn.textContent="Done";
markBtn.classList.add("btn")
markBtn.classList.add("btn-danger")
btn.textContent="Delete";
btn.style.marginRight="5px";
let markBtn = document.createElement("button");
markBtn.textContent="Done";
markBtn.classList.add("btn");
markBtn.classList.add("btn-info");
let btnWrapper=document.createElement("div");
btnWrapper.append(btn, markBtn);
newList.append(span, btnWrapper);
list.append(newlist);
input.value=" ";
markBtn.addEventListener("click", function(e){

})
})
let deleteButtons=document.querySelectorAll("btn-danger");
let markButtons=document.querySelectorAll("btn-info");
deleteButtons.forEach(deletBtn=> {
    deleteButtons.addEventListener("click" ,function(e){
        e.target.parentElement.parentElement.remove();
    
    });
markButtons.forEach((markBtn)=>{
    markBtn.addEventListener("click", function(e){
        let selectedTodo= e.target.parentElement.previousElementSibling;
    })
}  )  ;

})

