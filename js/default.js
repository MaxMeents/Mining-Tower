$(document).ready(function(){
	$.fn.duplicate = function(count, cloneEvents) {
       var tmp = [];
       for ( var i = 0; i < count; i++ ) {
               $.merge( tmp, this.clone( cloneEvents ).get() );
       }
       return this.pushStack( tmp );
};
function Center(){
		ww = $(window).width();
		wh = $(window).height();
		$('.Tower,.AreaName').css({marginLeft:ww/2-200})
		$('.Tower,.AreaName').css({marginTop:wh/2-180})
	}
	Center();
	$(window).resize(function(){Center()})
	$('.Floor').duplicate(15).appendTo('.Tower');
	z = 1;
	FloorTop = 0;
	FloorTopAddAmount = 23;
	for(var i = 0; i < 15; i++){
		$($('.Floor')[i]).addClass('Floor_'+z).css({top:FloorTop,zIndex: 99-z})
		z++;
		FloorTop+= FloorTopAddAmount;
	}

	$('.Floor').last().empty().remove();
	constantDamage = 1000000;  
	constantDamageR = constantDamage;
	
	startingHP = 10;
	BlockHP = startingHP;
	BlockNum = 1;
	clickDamage = 1;
	clickDamageR  = clickDamage;
	setInterval(function(){
		
		constantDamageR -= BlockHP;
		BlockHP -= constantDamage;
		while(BlockHP <= 0){
			NewBlock();	
			constantDamageR -= BlockHP;
			if(constantDamageR > 0){
			BlockHP -= constantDamageR;	
			}				
		}
		if(constantDamageR > 0){
			BlockHP -= constantDamageR;
		}
		constantDamageR = constantDamage;
		
	}, 10)

	$('.Tower').click(function(){
		
		clickDamageR -= BlockHP;
		BlockHP -= clickDamage;
		while(BlockHP <= 0){
			NewBlock();	
			clickDamageR -= BlockHP;
			if(clickDamageR > 0){
			BlockHP -= clickDamageR;	
			}				
		}
		if(clickDamageR > 0){
			BlockHP -= clickDamageR;
		}
		clickDamageR = clickDamage;
	})
	setInterval(function(){$('.BlockHP').html(shortenNumber(BlockHP));$('.startingHP').html('/'+shortenNumber(startingHP))}, 100)
	function NewBlock(){
		startingHP = startingHP * 1.01 
		BlockHP = startingHP;
		CalculateIceRiver();	
		GenerateNextBlock();
		NewBlockImg = Block_Name;
		
		for(var i = 1; i <= 15; i++){
			$('.Floor_'+i).find('img').attr('src', $('.Floor_'+(i+1)).find('img').attr('src'))
		}
		$('.Floor_15').find('img').attr('src', 'img/'+NewBlockImg+'.png');
		BlockNum++;
		$('.BlockNum').html(BlockNum)

	}
	function CalculateOldShaft() {
        CalculateArea( /*Ugly_Bricks*/ 0, /*Old_Box*/ 0, /*Valunite*/ 0, /*Wood*/ 0, /*Sandstone*/ 100 / 1000, /*Sand*/ 0, /*Rich_Soil*/ 0, /*Blood_Crystal*/ 0, /*Ice*/ 0, /*Malachite*/ 0, /*Grass*/ 0, /*Packed_Sand*/ 0, /*Blue_Key*/ 0, /*Red_Key*/ 0, /*Extra_Coins*/ 0, /*Explosion*/ 8 / 1000, /*Green_Key*/ 0, /*Yellow_Key*/ 0, /*Bonus_Coins*/ 0, /*Huge_Explosion*/ 2 / 1000, /*Steel*/ 0, /*Refined_Steel*/ 0, /*Stone*/ 10 / 1000, /*Ruby*/ 50 / 1000, /*Diamond*/ 25 / 1000, /*Gold*/ 0, /*Silver*/ 20 / 1000, /*Calcite*/ 0, /*Coal*/ 250 / 1000, /*Aquamarine*/ 150 / 1000, /*Pixie_Dust*/ 0, /*Emerald*/ 25 / 1000, /*Fossils*/ 10 / 1000, /*Boxes*/ 0, /*Unknown*/ 25 / 1000, /*Stone_Bricks*/ 0, /*Brick*/ 0, /*Bamboo*/ 0, /*Sand_Crystal*/ 0, /*Ice_Crystal*/ 0, /*Snow_Crystal*/ 0, /*Big_Explosion*/ 0, /*Packed_Snow*/ 0, /*Dirt*/ 0)
    }

    function CalculateIceRiver() {
        CalculateArea( /*Ugly_Bricks*/ 0, /*Old_Box*/ 0, /*Valunite*/ 0, /*Wood*/ 0, /*Sandstone*/ 0, /*Sand*/ 0, /*Rich_Soil*/ 0, /*Blood_Crystal*/ 0, /*Ice*/ 8 / 10, /*Malachite*/ 0, /*Grass*/ 0, /*Packed_Sand*/ 0, /*Blue_Key*/ 0, /*Red_Key*/ 0, /*Extra_Coins*/ 0, /*Explosion*/ 0, /*Green_Key*/ 0, /*Yellow_Key*/ 0, /*Bonus_Coins*/ 0, /*Huge_Explosion*/ 0, /*Steel*/ 0, /*Refined_Steel*/ 0, /*Stone*/ 0, /*Ruby*/ 0, /*Diamond*/ 1 / 10, /*Gold*/ 0, /*Silver*/ 0, /*Calcite*/ 0, /*Coal*/ 0, /*Aquamarine*/ 0, /*Pixie_Dust*/ 0, /*Emerald*/ 0, /*Fossils*/ 0, /*Boxes*/ 0, /*Unknown*/ 0, /*Stone_Bricks*/ 0, /*Brick*/ 0, /*Bamboo*/ 0, /*Sand_Crystal*/ 0, /*Ice_Crystal*/ 25 / 1000, /*Snow_Crystal*/ 75 / 1000, /*Big_Explosion*/ 0, /*Packed_Snow*/ 0, /*Dirt*/ 0)
    }
    function CalculateLucky() {
        CalculateArea( /*Ugly_Bricks*/ 0, /*Old_Box*/ 0, /*Valunite*/ 0, /*Wood*/ 0, /*Sandstone*/ 0, /*Sand*/ 0, /*Rich_Soil*/ 1/10, /*Blood_Crystal*/ 0, /*Ice*/ 0, /*Malachite*/ 0, /*Grass*/ 75/100, /*Packed_Sand*/ 0, /*Blue_Key*/ 1/500, /*Red_Key*/ 1/25, /*Extra_Coins*/ 1/200, /*Explosion*/ 0, /*Green_Key*/ 1/10, /*Yellow_Key*/ 1/100, /*Bonus_Coins*/ 1/500, /*Huge_Explosion*/ 0, /*Steel*/ 0, /*Refined_Steel*/ 0, /*Stone*/ 0, /*Ruby*/ 1/100, /*Diamond*/ 1 / 1000, /*Gold*/ 1/50, /*Silver*/ 1/25, /*Calcite*/ 0, /*Coal*/ 0, /*Aquamarine*/ 0, /*Pixie_Dust*/ 0, /*Emerald*/ 1/750, /*Fossils*/ 1/5000, /*Boxes*/ 0, /*Unknown*/ 0, /*Stone_Bricks*/ 0, /*Brick*/ 0, /*Bamboo*/ 0, /*Sand_Crystal*/ 1/500, /*Ice_Crystal*/ 1/500, /*Snow_Crystal*/ 1/500, /*Big_Explosion*/ 0, /*Packed_Snow*/ 0, /*Dirt*/ 0)
    }
	function CalculateArea(Ugly_Bricks, Old_Box, Valunite, Wood, Sandstone, Sand, Rich_Soil, Blood_Crystal, Ice, Malachite, Grass, Packed_Sand, Blue_Key, Red_Key, Extra_Coins, Explosion, Green_Key, Yellow_Key, Bonus_Coins, Huge_Explosion, Steel, Refined_Steel, Stone, Ruby, Diamond, Gold, Silver, Calcite, Coal, Aquamarine, Pixie_Dust, Emerald, Fossils, Boxes, Unknown, Stone_Bricks, Brick, Bamboo, Sand_Crystal, Ice_Crystal, Snow_Crystal, Big_Explosion, Packed_Snow, Dirt) {
        R_Ugly_Bricks = 1 - Ugly_Bricks;
        R_Old_Box = R_Ugly_Bricks - Old_Box;
        R_Valunite = R_Old_Box - Valunite;
        R_Wood = R_Valunite - Wood;
        R_Sandstone = R_Wood - Sandstone;
        R_Sand = R_Sandstone - Sand;
        R_Rich_Soil = R_Sand - Rich_Soil;
        R_Blood_Crystal = R_Rich_Soil - Blood_Crystal;
        R_Ice = R_Blood_Crystal - Ice;
        R_Malachite = R_Ice - Malachite;
        R_Grass = R_Malachite - Grass;
        R_Packed_Sand = R_Grass - Packed_Sand;
        R_Blue_Key = R_Packed_Sand - Blue_Key;
        R_Red_Key = R_Blue_Key - Red_Key;
        R_Extra_Coins = R_Red_Key - Extra_Coins;
        R_Explosion = R_Extra_Coins - Explosion;
        R_Green_Key = R_Explosion - Green_Key;
        R_Yellow_Key = R_Green_Key - Yellow_Key;
        R_Bonus_Coins = R_Yellow_Key - Bonus_Coins;
        R_Huge_Explosion = R_Bonus_Coins - Huge_Explosion;
        R_Steel = R_Huge_Explosion - Steel;
        R_Refined_Steel = R_Steel - Refined_Steel;
        R_Stone = R_Refined_Steel - Stone;
        R_Ruby = R_Stone - Ruby;
        R_Diamond = R_Ruby - Diamond;
        R_Gold = R_Diamond - Gold;
        R_Silver = R_Gold - Silver;
        R_Calcite = R_Silver - Calcite;
        R_Coal = R_Calcite - Coal;
        R_Aquamarine = R_Coal - Aquamarine;
        R_Pixie_Dust = R_Aquamarine - Pixie_Dust;
        R_Emerald = R_Pixie_Dust - Emerald;
        R_Fossils = R_Emerald - Fossils;
        R_Boxes = R_Fossils - Boxes;
        R_Unknown = R_Boxes - Unknown;
        R_Stone_Bricks = R_Unknown - Stone_Bricks;
        R_Brick = R_Stone_Bricks - Brick;
        R_Bamboo = R_Brick - Bamboo;
        R_Sand_Crystal = R_Bamboo - Sand_Crystal;
        R_Ice_Crystal = R_Sand_Crystal - Ice_Crystal;
        R_Snow_Crystal = R_Ice_Crystal - Snow_Crystal;
        R_Big_Explosion = R_Snow_Crystal - Big_Explosion;
        R_Packed_Snow = R_Big_Explosion - Packed_Snow;
        R_Dirt = 0;
        console.log()
    }

    
	function GenerateNextBlock() {
        R = Math.random();
        if (R > R_Ugly_Bricks) {
            Block_Name = "Ugly Bricks";
        } else if (R > R_Old_Box) {
            Block_Name = "Old Box";
        } else if (R > R_Valunite) {
            Block_Name = "Valunite";
        } else if (R > R_Wood) {
            Block_Name = "Wood";
        } else if (R > R_Sandstone) {
            Block_Name = "Sandstone";
        } else if (R > R_Sand) {
            Block_Name = "Sand";
        } else if (R > R_Rich_Soil) {
            Block_Name = "Rich Soil";
        } else if (R > R_Blood_Crystal) {
            Block_Name = "Blood Crystal";
        } else if (R > R_Ice) {
            Block_Name = "Ice";
        } else if (R > R_Malachite) {
            Block_Name = "Malachite";
        } else if (R > R_Grass) {
            Block_Name = "Grass";
        } else if (R > R_Packed_Sand) {
            Block_Name = "Packed Sand";
        } else if (R > R_Blue_Key) {
            Block_Name = "Blue Key";
        } else if (R > R_Red_Key) {
            Block_Name = "Red Key";
        } else if (R > R_Extra_Coins) {
            Block_Name = "Extra Coins";
        } else if (R > R_Explosion) {
            Block_Name = "Explosion";
        } else if (R > R_Green_Key) {
            Block_Name = "Green Key";
        } else if (R > R_Yellow_Key) {
            Block_Name = "Yellow Key";
        } else if (R > R_Bonus_Coins) {
            Block_Name = "Bonus Coins";
        } else if (R > R_Huge_Explosion) {
            Block_Name = "Huge Explosion";
        } else if (R > R_Steel) {
            Block_Name = "Steel";
        } else if (R > R_Refined_Steel) {
            Block_Name = "Refined Steel";
        } else if (R > R_Stone) {
            Block_Name = "Stone";
        } else if (R > R_Ruby) {
            Block_Name = "Ruby";
        } else if (R > R_Diamond) {
            Block_Name = "Diamond";
        } else if (R > R_Gold) {
            Block_Name = "Gold";
        } else if (R > R_Silver) {
            Block_Name = "Silver";
        } else if (R > R_Calcite) {
            Block_Name = "Calcite";
        } else if (R > R_Coal) {
            Block_Name = "Coal";
        } else if (R > R_Aquamarine) {
            Block_Name = "Aquamarine";
        } else if (R > R_Pixie_Dust) {
            Block_Name = "Pixie Dust";
        } else if (R > R_Emerald) {
            Block_Name = "Emerald";
        } else if (R > R_Fossils) {
            Block_Name = "Fossils";
        } else if (R > R_Boxes) {
            Block_Name = "Boxes";
        } else if (R > R_Unknown) {
            Block_Name = "Unknown";
        } else if (R > R_Stone_Bricks) {
            Block_Name = "Stone Bricks";
        } else if (R > R_Brick) {
            Block_Name = "Brick";
        } else if (R > R_Bamboo) {
            Block_Name = "Bamboo";
        } else if (R > R_Sand_Crystal) {
            Block_Name = "Sand Crystal";
        } else if (R > R_Ice_Crystal) {
            Block_Name = "Ice Crystal";
        } else if (R > R_Snow_Crystal) {
            Block_Name = "Snow Crystal";
        } else if (R > R_Big_Explosion) {
            Block_Name = "Big Explosion";
        } else if (R > R_Packed_Snow) {
            Block_Name = "Packed Snow";
        } else if (R > R_Dirt) {
            Block_Name = "Dirt";
        }

    }
    function shortenNumber(num, digits) {
      var si = [
          { value: 1, symbol: "" },
          { value: 1E3, symbol: "K" },
          { value: 1E6, symbol: "M" },
          { value: 1E9, symbol: "B" },
          { value: 1E12, symbol: "T" },
          { value: 1E15, symbol: "P" },
          { value: 1E18, symbol: "E" }
      ];
      var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var i;
      for (i = si.length - 1; i > 0; i--) {
          if (num >= si[i].value) {
              break;
          }
      }
      return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }
})