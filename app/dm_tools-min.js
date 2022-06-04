var pc_count=0,en_count=0,actor_init_count=0,initArray=[],initArrayParsed=[];function dm(){let e=page();$h(2,e,"DM Tools","","dmTitle"),ui(e)}function ui(e){$d(e,"","dm_tools");let n=pullID("dm_tools");$d(n,"","playerControl");let t=pullID("playerControl");$b(t,"Add Player",function(){playerGen()},"button",""),$d(n,"","players"),$d(n,"","enemyControl");let i=pullID("enemyControl");$b(i,"Add NPC",function(){npmGen()},"button",""),$d(n,"","enemies"),$a(n,"G20 DM Guide","https://docs.google.com/document/d/1SJQqdMNBLsuvdvN-fNe0UobYpFaskkDBKXHkjqhzugs/edit","","g20Guide"),pullID("g20Guide").target="_blank",$d(n,"","initModule");let l=pullID("initModule");$b(l,"Add actor",function(){initCreate(l)},"button",""),$b(l,"Calculate Initiative",function(){initParse(l)},"button",""),$hr(n)}function playerGen(){let e=pullID("players");$d(e,"playerDiv","player"+pc_count);let n=pullID("player"+pc_count);$h(3,n,"Player "+(pc_count+1)),$input(n,"","playerName","","","","Name"),$input(n,"","playerHP","","","","HP (base)"),$input(n,"","playerArmor","","","","Armor"),$input(n,"","playerDamage","","","","Damage taken"),$input(n,"","playerArmorDamage","","","","Armor damage taken"),$area(n,"","playerFeats","","Feats"),pc_count+=1}function npmGen(){let e=pullID("enemies");$d(e,"enemyDiv","enemy"+en_count);let n=pullID("enemy"+en_count);$h(3,n,"Enemy "+(en_count+1)),$input(n,"","enemyName","","","","Name"),$input(n,"","enemyHP","","","","HP (base)"),$input(n,"","enemySpeed","","","","Speed"),$area(n,"","enemyFeats","","Feats and abilities"),$d(n,"","enemyOffensive"+en_count);let t=pullID("enemyOffensive"+en_count);$h(3,t,"Offense V Players"),$input(t,"","enemyOf","","","","Vs parry"),$input(t,"","enemyOf","","","","Vs armor"),$input(t,"","enemyOf","","","","Vs barrier"),$input(t,"","enemyOf","","","","Vs dodge"),$input(t,"","enemyOf","","","","Forcefullness"),$d(n,"","enemyDefensive"+en_count);let i=pullID("enemyDefensive"+en_count);$h(3,i,"Defense V Players"),$d(i,"","enemyDefenseMelee"+en_count);let l=pullID("enemyDefenseMelee"+en_count);$h(3,l,"Melee"),$input(l,"","enemyDf","","","","Vs slashing"),$input(l,"","enemyDf","","","","Vs piercing"),$input(l,"","enemyDf","","","","Vs bludgeoning"),$d(i,"","enemyDefenseMagic"+en_count);let a=pullID("enemyDefenseMagic"+en_count);$h(3,a,"Magic"),$input(a,"","enemyDf","","","","Vs Lightning"),$input(a,"","enemyDf","","","","Vs fire"),$input(a,"","enemyDf","","","","Vs frost"),$input(a,"","enemyDf","","","","Vs corrosive"),$input(a,"","enemyDf","","","","Vs light"),$input(a,"","enemyDf","","","","Vs dark"),$input(a,"","enemyDf","","","","Vs poison"),$d(i,"","enemyDefenseOther"+en_count);let r=pullID("enemyDefenseOther"+en_count);$h(3,r,"Other"),$input(r,"","enemyDf","","","","Clarity"),$input(r,"","enemyDf","","","","Subtlety"),$input(r,"","enemyDf","","","","Perception"),en_count+=1}function initCreate(e){$d(e,"","playerInitDiv"+actor_init_count);let n=pullID("playerInitDiv"+actor_init_count);$input(n,"","playerName","actorName"+actor_init_count,"","","Actor Name"),$input(n,"","playerInitiative","actorInit"+actor_init_count,"","","Actor init"),actor_init_count+=1}function initParse(e){console.log("????");for(let e=0;e<actor_init_count;e++){let n={},t=pullID("actorName"+e).value,i=pullID("actorInit"+e).value;n.playerInit=i,n.playerName=t,initArray.push(n)}initArrayParsed=initArray.sort(function(e,n){return e.playerInit-n.playerInit}),pullID("initModule").remove(),initWorker()}function initWorker(){$d(dm_tools,"","initModule");let e=pullID("initModule");$b(e,"Add actor",function(){initCreate(e)},"button",""),$b(e,"Calculate Initiative",function(){initParse()},"button","");for(let n=0;n<initArrayParsed.length;n++){let t=initArrayParsed[n],i=t.playerName,l=t.playerInit;console.log(t),$d(e,"","playerInitDiv"+n);let a=pullID("playerInitDiv"+n);$input(a,"","playerName","actorName"+n,"","","Actor Name"),pullID("actorName"+n).value=i,$input(a,"","playerInitiative","actorInit"+n,"","","Actor init"),pullID("actorInit"+n).value=l}}