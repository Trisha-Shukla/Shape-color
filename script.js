let btn1=document.getElementById("button1");
let btn2=document.getElementById("button2");
let container1=document.getElementById("container1");
let arr=["triangle","square","circle","diamond","rectangle"];

btn1.addEventListener("click",()=>{
    let color1=`rgb(${changecolor()},${changecolor()},${changecolor()})`;
    // console.log(color1);
    container1.style.backgroundColor=color1;
})

function changecolor(){
    let rn=Math.floor(Math.random()*256);
    return rn;
}

btn2.addEventListener("click",()=>{
    container1.children[0].id=changeshape();
    console.log(container1.children[0].id);
})

function changeshape(){
    let index=Math.floor(Math.random()*arr.length);
    return arr[index];
}