const inp = document.getElementById("input");
const preview =document.getElementById("preview");
// console.log(inp);

inp.onchange=function(){
preview.src=URL.createObjectURL(inp.files[0]);
const reader = new FileReader();
reader.readAsDataURL(inp.files[0]);
reader.addEventListener("load",()=>
localStorage.setItem("url", reader.result)
)

}

// localStorage.setItem(JSON.stringify("src" ,"imgs"));



// localStorage.setItem





































// inp.onchange = function(){
//   preview.src = URL.createObjectURL(inp.files[0]);
// }

