let state=0,itemList=["Blades","Bludgeons","Unarmed","Throwing","Aim","Magic (Blasting)","Magic (Blighting)","Gadgetry (Destruction)","Gadgetry (Disruption)","Summon","Pilot","Fortitude","Clarity","Armor","Parry","Swiftness","Magic","Gadgetry","Summon","Pilot","Stealth","Performance","Magic","Gadgetry","Medicine","Summon","Perception (Physical)","Perception (Magical)","Perception (Insight)","Provisions","Science","Might","Sleight Of Hand"];var auxCount=30,offPoints=15;const offPointsBase=15,defPointsBase=15,supPointsBase=15;var defPoints=15,supPoints=15,auxPoints=30;let offPointMax=10,defPointMax=10,supPointMax=10,offComb=0,defComb=0,supComb=0;var offSkillID=[],defSkillID=[],supSkillID=[];function engine(e){$d(body,"","content"),$h(3,pullID("header"),"Auxilary points: "+auxCount,"","auxCounter");let t=pullID("content");$form(t,"","sheet",console.log("test?"));let l=pullID("sheet");$input(l,"Name","sheetData","charName","text","sheetName","Character Name",""),$hr(l,"",""),$input(l,"HP","sheetData","charHP","text","sheetHP","HP","true"),$input(l,"Armor","sheetData","charArmor","text","sheetArm","Armor","true"),$hr(l,"",""),$d(l,"contentGrid","stats");let o=pullID("stats");$d(o,"subGrid","offenseGrid");let s=pullID("offenseGrid");$d(o,"subGrid","defenseGrid");let a=pullID("defenseGrid");$d(o,"subGrid","supportGrid");let n=pullID("supportGrid");$h(3,a,"Points: "+defPoints,"pointCount","defPointCounter"),$h(3,s,"Points: "+offPoints,"pointCount","offPointCounter"),$h(3,n,"Points: "+supPoints,"pointCount","supPointCounter");for(let e=0;e<11;e++){$p(s,itemList[e]),$sel(s,"seler","selerOf"+e);let t=pullID("selerOf"+e);offSkillID.push("selerOf"+e);for(let e=0;e<=offPointMax;e++)$opt(t,e,"","");pullID("selerOf"+e).onchange=function(){update("off","selerOf"+e)}}for(let e=0;e<10;e++){$p(a,itemList[e+11]),$sel(a,"seler","selerDe"+e);let t=pullID("selerDe"+e);defSkillID.push("selerDe"+e);for(let e=0;e<=defPointMax;e++)$opt(t,e,"","");pullID("selerDe"+e).onchange=function(){update("def","selerDe"+e)}}for(let e=0;e<12;e++){$p(n,itemList[e+21]),$sel(n,"seler","selerSu"+e);let t=pullID("selerSu"+e);supSkillID.push("selerSu"+e),pullID("selerSu"+e).onchange=function(){update("sup","selerSu"+e)};for(let e=0;e<=supPointMax;e++)$opt(t,e,"","")}updateData(),"1"==e||"load"==e&&load(),$hr(t),$b(t,"Save Data",function(){save()})}function save(){var e=[],t=[],l=[];localStorage.setItem("name",pullID("charName").value),localStorage.setItem("hp",pullID("charHP").value),localStorage.setItem("armor",pullID("charArmor").value);for(let t=0;t<11;t++){let l=pullID("selerOf"+[t]).value;e.push(l)}for(let e=0;e<10;e++){let l=pullID("selerDe"+[e]).value;t.push(l)}for(let e=0;e<12;e++){let t=pullID("selerSu"+[e]).value;l.push(t)}localStorage.setItem("offense",JSON.stringify(e)),localStorage.setItem("defense",JSON.stringify(t)),localStorage.setItem("support",JSON.stringify(l))}function load(){let e=JSON.parse(localStorage.getItem("offense")),t=JSON.parse(localStorage.getItem("defense")),l=JSON.parse(localStorage.getItem("support"));if(null!=e){for(let t=0;t<e.length;t++)pullID("selerOf"+[t]).value=e[t];for(let e=0;e<t.length;e++)pullID("selerDe"+[e]).value=t[e];for(let e=0;e<l.length;e++)pullID("selerSu"+[e]).value=l[e];pullID("charName").value=lo("name")}updateData(),updateAssist("off"),updateAssist("def"),updateAssist("sup")}var num=0;function update(e,t){pullID("defPointCounter"),pullID("supPointCounter");"off"==e&&offPoints+auxPoints>0?updateAssist("off"):"def"==e&&defPoints+auxPoints>0?updateAssist("def"):"sup"==e&&supPoints+auxPoints>0&&updateAssist("sup"),updateData()}function updateData(){val("charHP",Math.floor(val("selerDe0")/2+5)),val("charArmor",val("selerDe2"))}let updateAssist=type=>{var typePoints=eval(type+"Points"),num=0;let data=eval(type+"SkillID");var poinTexBase=eval(type+"PointCounter");for(let e=0;e<data.length;e++){let t=parseInt(pullID(data[e]).value);t<9?num+=t:9==t?num=num+t+1:10==t&&(num=num+t+4)}let pBase=eval(type+"PointsBase");typePoints=pBase-num,poinTexBase.innerText="Points: "+typePoints};function sa(e,t){localStorage.setItem(e,t)}function lo(e){return localStorage.getItem(e)}