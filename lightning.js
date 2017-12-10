const magik = magikcraft.io;

function lightning() {
    var x;
    var y;
    var z;

    var there = magik.aspecto();
    x = there.getX();
    y = there.getY();
    z = there.getZ();
    magik.dixit(there.getX());
    magik.dixit(there.getY());
    magik.dixit(there.getZ());



    magik.doNTimes(
        function(){

            there.setX(x);
            there.setY(y);
            there.setZ(z);

            magik.shakti(there);

            x++;
            z++;

            

        }, 5, 1000
    );

}

