var magik = magikcraft.io;

function z(typ='ZOMBIE', n = 50, times = 5, baseloc){
    const EntityType = magik.type("entity.EntityType");
    const sender = magik.getSender();

    if (typ == '.') {
        typ = undefined;
    }

    if (!baseloc) {
        baseloc = create_spawn_point(magik.aspecto());
    }

    for (let i = 0; i < n; i++) {
        const loc = rndBlock(baseloc.getBlock().getRelative(0, 0, 0).location, 4,0).location;
        const typ2 = typ || rnd_monster_type();
        const mob = loc.getWorld().spawnEntity(loc, EntityType[typ2]); 
        const v = sender.getEyeLocation().getDirection().multiply(2);
        
        const dir = Math.PI*2*Math.random();
        const scale = 0.45;
        v.setX(scale*Math.sin(dir));
        v.setY(scale*2);
        v.setZ(scale*Math.cos(dir));
        mob.setVelocity(v);
    }
    
    times -= 1;
    if (times > 0) {
        const task = magik.setTimeout(
            () => {
                spawnz(typ, n, times, baseloc);
            }, 
            200
        );
    } 
    
       
}