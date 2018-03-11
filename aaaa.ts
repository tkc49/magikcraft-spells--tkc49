const magik = magikcraft.io;

function aaaa(){


    const sender = magik.getSender();
    const EntityType = magik.type("entity.EntityType");
    const Zombie = EntityType['ZOMBIE'];

    
    magik.dixit('bbb');
    
    for (var i = 0; i < 50; i++) {


        magik.dixit('aaa');
        // var arrow = sender.getWorld().spawnEntity(sender.getEyeLocation(), Zombie);
        var arrow = sender.getWorld().spawnEntity(magik.aspecto(), Zombie);


    }
        
}
