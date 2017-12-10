const magik = magikcraft.io;

function lightning() {

    var there = magik.aspecto();
    magik.dixit(there.getX);
    magik.dixit(there.getY);
    magik.dixit(there.getZ);

    magik.doNTimes(
        function(){
            magik.shakti(there);
        }, 5, 1000
    );
    
    

}

