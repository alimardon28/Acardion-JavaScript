let box=document.querySelectorAll(".box");
let block=document.querySelector(".block");


box.forEach(item =>{

    let block = item.nextElementSibling;


    item.addEventListener("click", () =>{

      item.classList.toggle('active');

        if(block.style.maxHeight){

        block.style.maxHeight = null;

    }else{
        block.style.maxHeight = block.scrollHeight + "px";

    }
  })

})
