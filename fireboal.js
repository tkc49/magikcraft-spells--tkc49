const magik = magikcraft.io;

count = 0;
function fireboal() {    

    
    fire();
   
}

function fire(){

    magik.setTimeout(function(){        
        magik.infierno();
    }, 2000);        
    

    count++;
    if(count <= 3){
        fire();
    }
}