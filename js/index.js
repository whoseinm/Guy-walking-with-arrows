function myPrank(){
    var demo = document.getElementById('demo').value;

    var rashid = document.getElementById('rashid');

    rashid.setAttribute("class", demo);
}

var left = 20
var topik = 20

onkeydown = function(e){

    var a = document.getElementById('Ups')

        if(e.key == "ArrowRight"){
            a.style.left = left + "px"
            console.log(a)
            left += 20
            a.style.transform = 'scaleX(1)';
            a.style.rotate = '0deg'; 
        }
        
        if(e.key == "ArrowLeft"){
            a.style.left = left + "px"
            left -= 20
            // a.style.rotate = '-90deg';
           a.style.transform = 'scaleX(-1)';
        }

        if(e.key == "ArrowDown"){
            
            a.style.top = topik + "px"
            topik += 20
        }

        if(e.key == "ArrowUp"){
            a.style.top = topik + "px"
            topik -= 20
        }

}