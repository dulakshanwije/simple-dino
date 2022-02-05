var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    character.classList.add("jump");
    setTimeout(function(){
        character.classList.remove("jump");
    },800);
}

setInterval(function(){
    // var blocker_top = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
    var blocker_left = block.offsetLeft;
    var blocker_top = block.offsetTop;
    var character_left = character.offsetLeft;
    var character_top = character.offsetTop;
    // var character_top = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
    // console.log(blocker_top);
    // console.log(character_top);
    
    // if((character_left - blocker_left) > 5 && character_top >= 390){
    //     console.log("Done");
    // }
    if(Math.abs(character_left - blocker_left) < 30){
        if(Math.abs(character_top - blocker_top) > 80){
            console.log(Math.abs(character_top - blocker_top));
        }
        else{
           block.style.display = "none";
            alert("Failed");
        }
    }
    // console.log(blocker_left);
},10);

