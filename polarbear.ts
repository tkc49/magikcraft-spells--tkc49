const magik = magikcraft.io;
 
function polarbear() {
    const player = magik.getSender();
    const loc = player.getEyeLocation()
                     .toVector()
                     .add(player.getLocation().getDirection().multiply(10))
                     .toLocation(player.getWorld(), player.getLocation().getYaw(), player.getLocation().getPitch());
    const polarbear = org.bukkit.entity.PolarBear;
    player.getWorld().spawn(loc, polarbear.class);
}