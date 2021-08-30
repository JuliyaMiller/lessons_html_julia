const btn_show_accept = document.querySelector('#btn_show_accept');
const btn_close_accept = document.querySelector('.btn_close_accept');
const btn_send_data = document.querySelector(".btn_send_data");

const modal = document.querySelector(".modal_wrapper_accept");

const name = {
    input: document.querySelector("#modal1_text"),
    value: "" 
}

document.addEventListener("click", (event) => {

    switch(event.target)
    {
        case modal:
            modal.classList.remove("show");
            break;
        case btn_show_accept:
            modal.classList.add("show");
            break;
        case btn_close_accept:
            modal.classList.remove("show");
            break;
        case btn_send_data:
            sendData();
            break;
        default:
            break;
    }
})

document.addEventListener("input", e => {
    name.value = name.input.value;  
})

document.addEventListener("keypress", e => {
        if(e.keyCode === 13){
            sendData();
        }
})

function sendData(){
    if(name.value !== ""){
        console.log("data =", name.value);
        name.value = "";
        name.input.value = "";
        modal.classList.remove("show");
    }else{
        alert("Заполните пожалуйста поле");
    }
    
    //fetch ---> server
}