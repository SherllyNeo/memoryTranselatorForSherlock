
var NumToImages = {
"00":"Mother",
"01":"Father",
"02":"Sister",
"03":"Brother",
"04":"Alana",
"05":"Moriarty ",
"06":"Jaws",
"07":"Theo",
"08":"Kehau",
"09":"Blakely",
"10":"white tip",
"11":"lemon ",
"12":"sandbar",
"13":"thrasher",
"14":"nurse",
"15":"mako",
"16":"cookie cutter",
"17":"tiger ",
"18":"bull",
"19":"dogfish",
"20":"circular saw",
"21":"leveler",
"22":"wrench",
"23":"weed whacker",
"24":"spade",
"25":"measuring tape",
"26":"saw",
"27":"pick axe",
"28":"dry wall knife",
"29":"screw driver",
"30-:stick (very formidable weapon)",
"31":"lance",
"32":"sword",
"33":"throwing star",
"34":"katana",
"35":"axe",
"36":"halberd",
"37":"dagger",
"38":"mace",
"39":"nunchucks",
"40":"grate",
"41":"ladle",
"42":"spoon",
"43":"Tupperware ",
"44":"air fryer",
"45":"microwave",
"46":"sink",
"47":"siv",
"48":"blender",
"49":"grinder",
"50":"couch",
"51":"lamp",
"52":"laundry basket",
"53":"towel",
"54":"curtain",
"55":"shower mat",
"56":"rug",
"57":"desk",
"58":"duvet ",
"59":"coffee table",
"60":"centaur ",
"61":"unicorn (duh)",
"62":"siren",
"63":"mermaid",
"64":"jackelope",
"65":"wyrm",
"66":"gargoyle",
"67":"werewolf ",
"68":"basilisk ",
"69":"chimera",
"70":"hard boiled egg",
"71":"sardines",
"72":"salad",
"73":"tea",
"74":"fettuccine ",
"75":"tomatoes ",
"76":"spaghetti ",
"77":"trout",
"78":"coconut ",
"79":"pineapple",
"80":"Irene Adler",
"81":"Charles Magnussen ",
"82":"Sherlock ",
"83":"Mary morstan",
"84":"mycroft holmes",
"85":"professor moriarty",
"86":"John watson",
"87":"lestrade ",
"88":"William Morris ",
"89":"Sebastia Moran",
"90":"donkey ",
"91":"cassowary ",
"92":"snake",
"93":"jellyfish",
"94":"harpy eagle",
"95":"walrus",
"96":"honey badger",
"97":"orca",
"98":"beluga",
"99":"great white shark",

}


function Trans() {
    var numberStr = document.getElementById('numbers').value;
    while (numberStr.length % 4 != 0) {
        numberStr += "0";
    }
    OutputHtml = "";
    count = 0;
    console.log(numberStr)
    for (var i = 0; i < numberStr.length; ++i) {
        count += 1;
        FirstTwoDigits = numberStr.substring(i,i+2);
        LastTwoDigits = numberStr.substring(i+2,i+4);
        FirstImage = NumToImages[FirstTwoDigits];
        SecondImage = NumToImages[LastTwoDigits];
        OutputHtml += `${count}. (${FirstTwoDigits}, ${LastTwoDigits}) -> (${FirstImage}, ${SecondImage})<br>`
        i+= 3;
    }
    document.getElementById('result').innerHTML = OutputHtml;


}

