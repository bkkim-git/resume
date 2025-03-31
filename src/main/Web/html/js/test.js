console.log("JavaScript gets executed automatically when the preview re-renders");

function addNum(){
    const count=document.getElementById("value");
    let num=count.innerText;
    num++;

    count.innerText=num;

}