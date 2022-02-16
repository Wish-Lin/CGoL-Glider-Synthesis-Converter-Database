//format:[RLE,from,to,pop-change,g-cost,reserved_notes = null]

const database = [
//BobShemyakin's 
  //------2G +0
  ["16$16bo$14b2o$15b2o$10bobo$11b2o$11bo2$15b2o19b2o$15bo2bo16bo2bo$16b3o17b3o2$16b3o17b3o$16bo2bo16bo2bo$17b2o18b2o","bookend","bun",0,2,null],  //BobShemyakin's 2G Database
  ["21$15bobo$15b2o$11bo4bo$12b2o$11b2o7b2o18b2o$16b2obobo14b2obobo$15bobobo17bobo$15bobob2o14bobob2o$16bo18b2o","bun","bookend",0,2,null],
  ["21$17bobo$18b2o3bo$18bo2b2o$22b2o3$16b2o18bo$11b2o3bo14b2o2bobo$11bo2bobo14bo2bobo$13b2obobo14b2obobo$17b2o18b2o","tail","tub",0,2,null],
  ["26$13bo$13bobo$8bobo2b2o$9b2o$9bo3$14b2o$14bo19b2o$16bo17bobo$15b2o18b2o","carrier","ship",0,2,null],
  ["20$14bobo$11bo2b2o$9bobo3bo$10b2o2$35bo$14b2o3b2o13bobo2b2o$14bo2bo2bo14bo4bo$16b4o16b4o2$18b2o18b2o$18b2o18b2o","carrier","tub",0,2,null],
  //------2G +1
  ["20$23bo$21bobo$22b2o2$20b2o$16bo3bobo$15bobo2bo14bo2bo$15b2o18b4o2$15b2o18b2o$14bobo17bobo$13bobo17bobo$14bo19bo","boat","table",1,2,null],
  ["23$10bobo$11b2o2bo$11bo3bobo$15b2o$19bo17b2o$18bobo16bobo$19bobo16bobo$20b2o17b2o","long-boat","long-ship",1,2,null],
  ["22$18bo$17bo$11bo5b3o$12bo$10b3o$17bo19bo$16bobo17bobo$17bobo16bo2bo$18b2o17bobo$38bo","long-boat","mango",1,2,null],
  ["20$15bo$13b2o$14b2o$10bo$11b2o$10b2o$15bo$14bobo18b2o$15bobo16bo2bo$16b2o16bo2bo$35b2o","long-boat","pond",1,2,null],
  ["19$9bobo$10b2o2bobo$10bo3b2o$15bo4$15b2o18bo$15bo18bobo$17bo17bobo$16b2o18b2o","carrier","long-boat",1,2,null],
  ["19$12bo$11bo$11b3o2$8b2o$9b2o22b2o$8bo4b2o3b2o13bobo2b2o$13bo2bo2bo14bo4bo$15b4o16b4o2$17b2o18b2o$17b2o18b2o","carrier","boat",1,2,null],
  //------2G +2
  ["16$17bobo$14bo2b2o$12bobo3bo$13b2o2$37b2o$17b2o17bo2bo$15bo2bo16bo2bo$15b3o17b3o2$15b3o17b3o$14bo2bo16bo2bo$15b2o18b2o","bookend","dove",2,2,null],
  ["21$14bo$14bobo$11b2ob2o$10bobo$12bo23bo$16b2o17bobo$16bobo16b2obo$18bo19bo$18bobo17bobo$19b2o18b2o","pre-block","boat",2,2,null],
  ["18$11bo$12bo$10b3o$15bo$14bo$14b3o3$13b2o17b2ob2o$12bo2bo16bo3bo$13b3o17b3o2$13b3o17b3o$13bo2bo16bo2bo$15b2o18b2o","bun","house",2,2,null],
  ["23$17bo$16bo$16b3o15bo$13bo19bobo$12bobo4b2o11bobo$13bo5bobo11bo$19bo","tub","barge",2,2,null],
  ["22$13bobo$9bo3b2o$10b2o2bo$9b2o23b2o$16b2o16bobo$16bo2bo17bobo$18b2o18b2o","carrier","long2-snake",2,2,null],
  ["21$15bo$14bo$11bo2b3o$9bobo$10b2o23b2o$17b2o16bobo$17bo20bo$19bo19bo$18b2o18b2o","carrier","canoe",2,2,null],
  ["21$13bo$12bo$12b3o4b2o18b2o$19bo16bo2bo$10bo5b2obo15bobobo$11b2o3b2ob2o14bobob2o$10b2o24bo","block","beehive",2,2,null],
  ["20$15bo$14bo$14b3o2$11b2o$12b2o22b2o$11bo4b2o18bobo$16bo2bo17bobo$18b2o18b2o","carrier","long-ship",2,2,null],
  ["21$14bo$14bobo$14b2o2b2o$17b2o$19bo15bo$14bo19bobo$13bobo17bo2bo$13bobo17bobo$12b2obobo14b2obobo$16bobo17bobo$17bo19bo","hat","11-loop",2,2,null],
  //------2G +3
  ["24$13b2ob2o17b2ob2o$12bobob2o16bobob2o$13bo20bobo$35b2o2$9bo$9b2o$8bobo2$11b3o$11bo$12bo","boat","cap",3,2,null],
  ["22$11bo$12bo$10b3o2bo$15bobo$15b2o$36b2o$36bobo$17b2o19bo$17bo19bo$18b3o17b3o$20bo19bo","pre-block","claw",3,2,null],
  ["21$16b2o18b2o$16bo19bo$18bo2bo16bo2bo$17b5o15b5o2$10bo8bo17b3o$11bo6bobo16bo2bo$9b3o7bo18b2o2$13bo$13b2o$12bobo","tub","bun",3,2,null],
  ["21$7bo$8bo$6b3o$31b2o$30bo2bo$5b2o4b2o3b2o13bobo2b2o$4bobo4bo2bo2bo14bo4bo$6bo6b4o16b4o2$15b2o18b2o$15b2o18b2o","carrier","loaf",3,2,null],
  //------2G +4
  ["21$10bo$11bo$9b3o$6b2o$5bobo20b2o$7bo19bo2bo$13b2o12bobobo$13bobo12bo2bo$15bo15b2o$15b2o","pre-block","loaf",4,2,null],
  ["21$10bo$8b2o$5bo3b2o$3bobo$4b2o22b2o$28bobo$10bo19bo$10b3o17b3o$13bo19bo$12b2o18b2o","tail","pre-block",4,2,null],
  ["22$12bobo$13b2o3bo$13bo2b2o$17b2o$34bo$33bobo$17bo16b2o$16bobo17b2o$17bobo16bobo$18b2o17b2o","long-boat","ship-tie-boat",4,2,null],
  //------2G +5
  ["20$10bo$11bo$9b3o2bo$14bobo$14b2o19b2o$34bo2bo$17b2o16bo2bo$17bobo16b2obo$19bo19bo$19b2o18b2o","pre-block","mango",5,2,null],
  ["21$12bo$13b2o2bo$12b2o3bobo17bo$17b2o17bobo$35bobo$15bo19bo$13b3o17b3o$12bo19bo$12b2o18b2o","tail","tub",6,2,null],
  //------2G +6
  ["22$11bo$12bo19b2o$10b3o19bobo$33bobo$15b2o17bobo$10b2o3bobo17bobo$9b2o6bo19bo$11bo5b2o18b2o","pre-block","long-long-boat",6,2,null], 
  
];










function Search() {
  input = document.getElementById("from").value;
  output = document.getElementById("to").value;
  pop_change = document.getElementById("pop-change").value;
  g_cost = document.getElementById("g-cost").value;
  Result = "";
  resultcount = 0;
for (let i = 0; i < database.length; i++) {
  if(input == database[i][1] || input == "unspecified"){
	  if(output == database[i][2] || output == "unspecified"){
			if(pop_change == database[i][3] || pop_change == "unspecified"){
				if(g_cost == database[i][4] || g_cost == "unspecified"){
					Result += database[i][0];
					resultcount+=50;
				}	
			}	
		}	
	}	  
}
  resultnum = resultcount/50;
  document.getElementById('lv-text').innerHTML = "x = 50, y = " + resultcount.toString() + ", rule = B3/S23\n" + Result + "!"; 
  document.getElementById('display').innerHTML = "<b>" + resultnum + "</b> matching results found";
}

function SetCounter() {
  document.getElementById('counter').innerHTML = "(<b>" + database.length + "</b> converters currently documented)";
}

function Clear() {
  document.getElementById('lv-text').innerHTML='';
  document.getElementById("from").value="bookend";
  document.getElementById("to").value="bun";
  document.getElementById("pop-change").value=0;
  document.getElementById("g-cost").value=2;
  document.getElementById('display').innerHTML ='';
}