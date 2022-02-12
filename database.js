//format:[RLE,from,to,pop-change,g-cost,reserved_notes = null]

const database = [
  ["16$16bo$14b2o$15b2o$10bobo$11b2o$11bo2$15b2o19b2o$15bo2bo16bo2bo$16b3o17b3o2$16b3o17b3o$16bo2bo16bo2bo$17b2o18b2o","bookend","bun",0,2,null],  //BobShemyakin's 2G Database
  ["21$15bobo$15b2o$11bo4bo$12b2o$11b2o7b2o18b2o$16b2obobo14b2obobo$15bobobo17bobo$15bobob2o14bobob2o$16bo18b2o","bun","bookend",0,2,null],
  ["21$17bobo$18b2o3bo$18bo2b2o$22b2o3$16b2o18bo$11b2o3bo14b2o2bobo$11bo2bobo14bo2bobo$13b2obobo14b2obobo$17b2o18b2o","other","other",0,2,null],
  ["26$13bo$13bobo$8bobo2b2o$9b2o$9bo3$14b2o$14bo19b2o$16bo17bobo$15b2o18b2o","carrier","ship",0,2,null],
  ["20$14bobo$11bo2b2o$9bobo3bo$10b2o2$35bo$14b2o3b2o13bobo2b2o$14bo2bo2bo14bo4bo$16b4o16b4o2$18b2o18b2o$18b2o18b2o","carrier","tub",0,2,null],
  ["20$23bo$21bobo$22b2o2$20b2o$16bo3bobo$15bobo2bo14bo2bo$15b2o18b4o2$15b2o18b2o$14bobo17bobo$13bobo17bobo$14bo19bo","boat","table",1,2,null],
  ["23$10bobo$11b2o2bo$11bo3bobo$15b2o$19bo17b2o$18bobo16bobo$19bobo16bobo$20b2o17b2o","long-boat","long-ship",1,2,null],
  ["22$18bo$17bo$11bo5b3o$12bo$10b3o$17bo19bo$16bobo17bobo$17bobo16bo2bo$18b2o17bobo$38bo","long-boat","mango",1,2,null],
  ["20$15bo$13b2o$14b2o$10bo$11b2o$10b2o$15bo$14bobo18b2o$15bobo16bo2bo$16b2o16bo2bo$35b2o","long-boat","pond",1,2,null],
  ["19$9bobo$10b2o2bobo$10bo3b2o$15bo4$15b2o18bo$15bo18bobo$17bo17bobo$16b2o18b2o","carrier","long-boat",1,2,null],
  ["19$12bo$11bo$11b3o2$8b2o$9b2o22b2o$8bo4b2o3b2o13bobo2b2o$13bo2bo2bo14bo4bo$15b4o16b4o2$17b2o18b2o$17b2o18b2o","carrier","boat",1,2,null],
  ["16$17bobo$14bo2b2o$12bobo3bo$13b2o2$37b2o$17b2o17bo2bo$15bo2bo16bo2bo$15b3o17b3o2$15b3o17b3o$14bo2bo16bo2bo$15b2o18b2o","bookend","dove",1,2,null],
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
  document.getElementById("from").value="unspecified";
  document.getElementById("to").value="unspecified";
  document.getElementById("pop-change").value="unspecified";
  document.getElementById("g-cost").value="unspecified";
   document.getElementById('display').innerHTML ='';
}