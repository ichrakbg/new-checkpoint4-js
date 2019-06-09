var para =document.getElementById("para")
    function changeSize(){
    /*para.setAttribute("style", "fontSize:Bold")*/
        if(para.style.fontWeight=="bold"){
            para.style.fontWeight="normal"
        }
        else{
            para.style.fontWeight="bold"
        }
    }
var para =document.getElementById("para")
    function changeStyle(){
        if(para.style.fontStyle=="italic"){
            para.style.fontStyle="normal"
        }
        else{
            para.style.fontStyle="italic"
        }
    }
var para =document.getElementById("para")
    function changeUnderline(){
        if(para.style.textDecoration=="underline"){
            para.style.textDecoration="normal"
        }
        else{
            para.style.textDecoration="underline"
        }
    }
dropbutton=document.getElementById("dropbtn")
    function myFunction(){
        para.style.fontFamily=dropbutton.value;
    }
dropbutton2=document.getElementById("dropbtn2")
    function myFunction2(){
        para.style.fontSize=dropbutton2.value;
}