function Monster(){
    this.name;
    this.size;
    this.type;
    this.alignment;
    this.ac;
    this.hp;
    this.speed;
    this.str;
    this.dex;
    this.con;
    this.int;
    this.wis;
    this.cha;
    this.save = [];
    this.skill = [];
    this.resist;
    this.immune;
    this.conditionImmune;
    this.senses;
    this.passive;
    this.languages;
    this.cr;
    this.trait= [];
    this.action = [];
    this.legendary = [];
}
function Trait(){
    this.name;
    this.text;
}
function convert(){
    var split = data.split("\n");
    for(var i = 0; i < split.length; i++){
        decideAction(split[i]);
        document.getElementById("loading").innerText="Loading... "+(i/split.length*100)+"%"
    }
}
ACTIONS = {
    MONSTER : 0,
    NAME: 1
}
var currentMonster;
var currentTrait;
var monsters = [];
var useTrait = false;

function decideAction(command){
    if(command.match(/^[^<]+[a-zA-Z]/))return;
    else if(command.match(/[<]monster[>]/)){
        currentMonster = new Monster();
    }else if(command.match(/[<][/]monster[>]/)){
        monsters.push({...currentMonster});
    }else if(command.match(/[<]trait[>]/)){
        currentTrait = new Trait();
        useTrait = true;
    }else if(command.match(/[<]action[>]/)){
        currentTrait = new Trait();
        useTrait = true;
    }else if(command.match(/[<]legendary[>]/)){
        currentTrait = new Trait();
        useTrait = true;
    }else if(command.match(/[<][/]trait[>]/)){
        currentMonster.trait.push({...currentTrait});
        useTrait = false;
    }else if(command.match(/[<][/]action[>]/)){
        currentMonster.action.push({...currentTrait});
        useTrait = false;
    }else if(command.match(/[<][/]legendary[>]/)){
        currentMonster.legendary.push({...currentTrait});
        useTrait = false;
    }else{
        getAttribute(command);
    }
}
function getAttribute(command){
    currAtt = command.replace(/^[^<]*[<]/,"").replace(/[>].*$/,"")
    attText = command.split(/[<][^>]+[>]/)[1]
    if(currAtt == "attack")return;
    else if(currAtt == "save"){
        currentMonster.save.push(attText)
    }else if(currAtt == "skill"){
        currentMonster.skill.push(attText)
    }else if(!useTrait){
        currentMonster[currAtt]=attText;
    }else{
        currentTrait[currAtt]=attText;
    }
}
