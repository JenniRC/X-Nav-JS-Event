window.onload=function(){
var radioChosen = document.getElementById("caja");
	

    function checkInput(e) {
        
        var color=e.target.value;
        var micaja=document.getElementById("micaja");
        micaja.style.background=color;
    }

  
radioChosen.addEventListener("input",checkInput,false);
    


}




