var character = document.getElementById("character");
var block = document.getElementById("block");
var count = 0;
function jump(){
    character.classList.add("jump");
    setTimeout(function(){
        character.classList.remove("jump");
    },800);
}

setInterval(function(){
    var blocker_left = block.offsetLeft;
    var blocker_top = block.offsetTop;
    var character_left = character.offsetLeft;
    var character_top = character.offsetTop;

    var count_dis = document.getElementById("count");
    var pro_bar = document.getElementById("progress_bar");

    var gameover = document.getElementById("gameover");
    var gamelost = document.getElementById("gamelost");


    if(Math.abs(character_left - blocker_left) < 50){
        if(Math.abs(character_top - blocker_top) > 100){
            console.log(Math.abs(character_top - blocker_top));
            count++;
            count_dis.innerHTML = count;
            pro_bar.value = count;
            if(count >= 300){
                block.style.display = "none";
           character.style.display = "none";
            gameover.style.display = "flex";
            count = 0;
            count_dis.innerHTML = count;
            pro_bar.value = count;
            }
        }
        else{
           block.style.display = "none";
           character.style.display = "none";
            gamelost.style.display = "flex";
            count = 0;
            count_dis.innerHTML = count;
            pro_bar.value = count;
        }
    }
},10);

