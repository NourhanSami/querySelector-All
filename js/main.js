document.querySelector("#btn1").addEventListener("click", function(){
    document.querySelector("h1").style.color= "aqua"
    document.querySelector("h1").style.fontFamily= "cursive"
    document.querySelector("h1").style.fontSize= "35px"
    const x = document.querySelectorAll("p");

    x.forEach(item => {
        item.style.fontSize= "20px"
        item.style.color= "grey"
        item.style.fontStyle= "italic"
    })
})


document.querySelector("#btn2").addEventListener("click", function(){
    document.querySelector("h1").style.color= "unset"
    document.querySelector("h1").style.fontFamily= "unset"
    document.querySelector("h1").style.fontSize= "unset"
    const x = document.querySelectorAll("p");

    x.forEach(item => {
        item.style.fontSize= "unset"
        item.style.color= "unset"
        item.style.fontStyle= "unset"
    })
})


