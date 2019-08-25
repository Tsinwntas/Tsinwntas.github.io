convert();
document.getElementById("loading").innerText="Done.";

var expChart = [10,200,450,700,1100,1800,2300,2900,3900,5000,5900,7200,8400,10000,11500,13000,15000,18000,20000,22000,25000,33000,41000,50000,62000,75000,90000,105000,120000,135000,155000]
expChart["1/8"] = 25;
expChart["1/4"] = 50;
expChart["1/2"] = 100;

markdown("Abjurer")
function markdown(monster){
    let currMon = monsters.find(m=>m.name==monster);
    let out = "___<br>";
    out+= addLine("## "+currMon.name);
    out+= addLine("*"+getSize(currMon.size)+" "+currMon.type+", "+currMon.alignment+"*")
    out+= addLine("- **Armor Class** "+currMon.ac)
    out+= addLine("- **Hit Points** " + currMon.hp)
    out+= addLine("- **Speed** " + currMon.speed)
    out+= ">___<br>"
    out+= ">|STR|DEX|CON|INT|WIS|CHA|<br>"
    out+= ">|:---:|:---:|:---:|:---:|:---:|:---:|<br>"
    out+= ">|"+currMon.str+" ("+getAbilityScore(currMon.str)+")|"
    +currMon.dex+" ("+getAbilityScore(currMon.dex)+")|"
    +currMon.con+" ("+getAbilityScore(currMon.con)+")|"
    +currMon.int+" ("+getAbilityScore(currMon.int)+")|"
    +currMon.wis+" ("+getAbilityScore(currMon.wis)+")|"
    +currMon.cha+" ("+getAbilityScore(currMon.cha)+")|<br>";
    out+= ">___<br>"
    if(currMon.save.length > 0)
    out+= addLine("- **Saving Throws** "+appendArray(currMon.save))
    if(currMon.skill.length > 0)
    out+= addLine("- **Skills** "+appendArray(currMon.skill))
    if(currMon.resist)
    out+= addLine("- **Damage Resistances** "+currMon.resist)
    if(currMon.immune)
    out+= addLine("- **Damage Immunities** "+currMon.immune)
    if(currMon.conditionImmune)
    out+= addLine("- **Condition Immunities** "+currMon.conditionImmune)
    out+= ">___<br>"
    out+= addLine("- **Senses** "+(currMon.senses?currMon.senses+",":"")+"passive Perception "+currMon.passive)
    out+= addLine("- **Languages** "+(currMon.languages?currMon.languages:"---"))
    out+= addLine("- **Challenge** "+currMon.cr+" "+getExp(currMon.cr))
    out+= ">___<br>";
    for(let t in currMon.trait){
        if(t==0)continue;
        out+= addLine("***"+currMon.trait[t].name+"*** : "+currMon.trait[t].text);
        out+= addLine("");
    }
    if(currMon.action.length > 0){
        out+= addLine("### Actions")
        for(let a in currMon.action){
            out+= addLine("***"+currMon.action[a].name+"*** : "+currMon.action[a].text);
            out+= addLine("");
        }
    }
    for(let l in currMon.legendary){
        out+= addLine("***"+currMon.legendary[l].name+"*** : "+currMon.legendary[l].text);
        out+= addLine("");
    }
    
    document.getElementById("main").innerHTML = out;
    console.log(currMon)
}
function addLine(string){
    return "> "+string+"<br>";
}
function getSize(s){
    switch(s){
        case "T": return "Tiny";
        case "S": return "Small";
        case "M": return "Medium";
        case "L": return "Large";
        case "H": return "Huge";
        case "G": return "Gargantuan";
    }
}
function getAbilityScore(v){
    return v >= 10 ? Math.floor((v-10)/2) : -1*Math.ceil((10-v)/2);
}
function appendArray(arr){
    let toReturn = "";
    for(let i = 0; i < arr.length; i++){
        if(i>0){
            toReturn+=", "
        }
        toReturn+=arr[i].replace(/"[ ]"/," +");
    }
    return toReturn;
}
function getExp(v){
    let exp = expChart[v.toString()];
    let toReturn = "";
    while(exp>=1){
        toReturn = (exp%10) + (toReturn.length==3?",":"") + toReturn;
        exp= Math.floor(exp/10);
    }
    return toReturn
}