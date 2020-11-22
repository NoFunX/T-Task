document.querySelector(".block_2_form_email").addEventListener("click", ()=>{
    document.querySelector(".block_2_form_email").value ="";
});
let cards = document.querySelector(".cards");

let card = document.querySelectorAll(".card");

let button1 = document.querySelector("#price");

let button2 = document.querySelector("#age");

let arr = [...card];

    button1.addEventListener("click", ()=> {
        arr.sort(function(a,b) {
            return parseInt(a.children[3].innerHTML) - parseInt(b.children[3].innerHTML);
        });
        cards.innerHTML = "";

        for(let item of arr) {
            cards.appendChild(item);
        }});

    button2.addEventListener("click", ()=>{
        arr.sort(function(a,b){
            return parseInt(a.children[2].children[1].children[0].innerHTML) - parseInt(b.children[2].children[1].children[0].innerHTML);
        })
        cards.innerHTML = "";

        for(let items of arr) {
            cards.appendChild(items);
        }
    });