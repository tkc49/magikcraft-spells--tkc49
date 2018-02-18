const magik = magikcraft.io;

function zombie(target: string){
    const EntityType = magik.type("entity.EntityType");
    const aZombie = EntityType['ZOMBIE'];
    
    const where = magik.aspecto();
    const world = where.getWorld();

    const aaa = world.spawnEntity(where, aZombie); 

    if (target) {
        aaa.setTarget(magik.getPlugin().getServer().getPlayer(target));
        magik.dixit("te");
    }
    magik.dixit("Behold!");
}