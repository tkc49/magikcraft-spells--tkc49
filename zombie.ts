const magik = magikcraft.io;
 
function zombie(target: string){
    const EntityType = magik.type("entity.EntityType");

    EntityType.forEach(function($value){
        magik.dixit($value);
    });

    const aZombie = EntityType['ZOMBIE'];

    
     
    const where = magik.aspecto();
    const world = where.getWorld();
 
    const zombie = world.spawnEntity(where, aZombie); 
 
    if (target) {
        zombie.setTarget(magik.getPlugin().getServer().getPlayer(target));
    }
    magik.dixit("Behold!");
