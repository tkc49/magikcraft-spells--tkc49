const magik = magikcraft.io;

function fireworks() {
    // 見てる先を取得
    var there = magik.aspecto();
    magik.doNTimes(
        function () { 
            // fireworkをローンチする
            magik.stella(there);
            //magik.iacta(name);
        }, 1000, 300
    );
    
    //magik.iacta(name);
    // magik.stella(there);
}