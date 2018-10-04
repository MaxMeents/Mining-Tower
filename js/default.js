$(document).ready(function() {
    Num_Of_Floors = 15;
Dirt_Amount = 0;
Rich_Soil_Amount = 0;
Very_Rich_Soil_Amount = 0;
Extremly_rich_soil_Amount = 0;
Grass_Amount = 0;
Valunite_Amount = 0;
Dark_Valunite_Amount = 0;
Bamboo_Amount = 0;
Wood_Amount = 0;
Sandstone_Amount = 0;
Sand_Amount = 0;
Packed_Sand_Amount = 0;
Extra_Coins_Amount = 0;
Bonus_Coins_Amount = 0;
Orange_Box_Amount = 0;
Green_Box_Amount = 0;
Cyan_Box_Amount = 0;
Red_Box_Amount = 0;
Magenta_Box_Amount = 0;
Purple_Box_Amount = 0;
Blue_Box_Amount = 0;
Explosion_Amount = 0;
Huge_Explosion_Amount = 0;
Big_Explosion_Amount = 0;
Timed_Explosion_Amount = 0;
Enormous_Explosion_Amount = 0;
Blue_Key_Amount = 0;
Red_Key_Amount = 0;
Green_Key_Amount = 0;
Yellow_Key_Amount = 0;
Steel_Amount = 0;
Refined_Steel_Amount = 0;
Mystery_Steel_Amount = 0;
Stone_Amount = 0;
Ruby_Amount = 0;
Diamond_Amount = 0;
Gold_Amount = 0;
Silver_Amount = 0;
Calcite_Amount = 0;
Coal_Amount = 0;
Aquamarine_Amount = 0;
Pixie_Dust_Amount = 0;
Emerald_Amount = 0;
Fossils_Amount = 0;
Boxes_Amount = 0;
Old_Box_Amount = 0;
Unknown_Amount = 0;
Stone_Bricks_Amount = 0;
Ugly_Bricks_Amount = 0;
Brick_Amount = 0;
Forest_Crystal_Amount = 0;
Blood_Crystal_Amount = 0;
Sand_Crystal_Amount = 0;
Ice_Crystal_Amount = 0;
Snow_Crystal_Amount = 0;
Ice_Amount = 0;
Packed_Snow_Amount = 0;
Hardened_Ice_Amount = 0;
Compressed_Ice_Amount = 0;
    


    Ugly_Bricks_Amount = getCookie("Ugly_Bricks", Ugly_Bricks_Amount, 365);
    Old_Box_Amount = getCookie("Old_Box", Old_Box_Amount, 365);
    Valunite_Amount = getCookie("Valunite", Valunite_Amount, 365);
    Wood_Amount = getCookie("Wood", Wood_Amount, 365);
    Sandstone_Amount = getCookie("Sandstone", Sandstone_Amount, 365);
    Sand_Amount = getCookie("Sand", Sand_Amount, 365);
    Rich_Soil_Amount = getCookie("Rich_Soil", Rich_Soil_Amount, 365);
    Blood_Crystal_Amount = getCookie("Blood_Crystal", Blood_Crystal_Amount, 365);
    Ice_Amount = getCookie("Ice", Ice_Amount, 365);
    Forest_Crystal = getCookie("Forest_Crystal", Forest_Crystal_Amount, 365);
    Grass_Amount = getCookie("Grass", Grass_Amount, 365);
    Packed_Sand_Amount = getCookie("Packed_Sand", Packed_Sand_Amount, 365);
    Blue_Key_Amount = getCookie("Blue_Key", Blue_Key_Amount, 365);
    Red_Key_Amount = getCookie("Red_Key", Red_Key_Amount, 365);
    Extra_Coins_Amount = getCookie("Extra_Coins", Extra_Coins_Amount, 365);
    Explosion_Amount = getCookie("Explosion", Explosion_Amount, 365);
    Green_Key_Amount = getCookie("Green_Key", Green_Key_Amount, 365);
    Yellow_Key_Amount = getCookie("Yellow_Key", Yellow_Key_Amount, 365);
    Bonus_Coins_Amount = getCookie("Bonus_Coins", Bonus_Coins_Amount, 365);
    Huge_Explosion_Amount = getCookie("Huge_Explosion", Huge_Explosion_Amount, 365);
    Steel_Amount = getCookie("Steel", Steel_Amount, 365);
    Refined_Steel_Amount = getCookie("Refined_Steel", Refined_Steel_Amount, 365);
    Stone_Amount = getCookie("Stone", Stone_Amount, 365);
    Ruby_Amount = getCookie("Ruby", Ruby_Amount, 365);
    Diamond_Amount = getCookie("Diamond", Diamond_Amount, 365);
    Gold_Amount = getCookie("Gold", Gold_Amount, 365);
    Silver_Amount = getCookie("Silver", Silver_Amount, 365);
    Calcite_Amount = getCookie("Calcite", Calcite_Amount, 365);
    Coal_Amount = getCookie("Coal", Coal_Amount, 365);
    Aquamarine_Amount = getCookie("Aquamarine", Aquamarine_Amount, 365);
    Pixie_Dust_Amount = getCookie("Pixie_Dust", Pixie_Dust_Amount, 365);
    Emerald_Amount = getCookie("Emerald", Emerald_Amount, 365);
    Fossils_Amount = getCookie("Fossils", Fossils_Amount, 365);
    Boxes_Amount = getCookie("Boxes", Boxes_Amount, 365);
    Unknown_Amount = getCookie("Unknown", Unknown_Amount, 365);
    Stone_Bricks_Amount = getCookie("Stone_Bricks", Stone_Bricks_Amount, 365);
    Brick_Amount = getCookie("Brick", Brick_Amount, 365);
    Bamboo_Amount = getCookie("Bamboo", Bamboo_Amount, 365);
    Sand_Crystal_Amount = getCookie("Sand_Crystal", Sand_Crystal_Amount, 365);
    Ice_Crystal_Amount = getCookie("Ice_Crystal", Ice_Crystal_Amount, 365);
    Snow_Crystal_Amount = getCookie("Snow_Crystal", Snow_Crystal_Amount, 365);
    Big_Explosion_Amount = getCookie("Big_Explosion", Big_Explosion_Amount, 365);
    Packed_Snow_Amount = getCookie("Packed_Snow", Packed_Snow_Amount, 365);
    Dirt_Amount = getCookie("Dirt", Dirt_Amount, 365);

    function saveState() {
        setCookie("Ugly_Bricks", Ugly_Bricks_Amount, 365);
        setCookie("Old_Box", Old_Box_Amount, 365);
        setCookie("Valunite", Valunite_Amount, 365);
        setCookie("Wood", Wood_Amount, 365);
        setCookie("Sandstone", Sandstone_Amount, 365);
        setCookie("Sand", Sand_Amount, 365);
        setCookie("Rich_Soil", Rich_Soil_Amount, 365);
        setCookie("Blood_Crystal", Blood_Crystal_Amount, 365);
        setCookie("Ice", Ice_Amount, 365);
        setCookie("Forest_Crystal", Forest_Crystal_Amount, 365);
        setCookie("Grass", Grass_Amount, 365);
        setCookie("Packed_Sand", Packed_Sand_Amount, 365);
        setCookie("Blue_Key", Blue_Key_Amount, 365);
        setCookie("Red_Key", Red_Key_Amount, 365);
        setCookie("Extra_Coins", Extra_Coins_Amount, 365);
        setCookie("Explosion", Explosion_Amount, 365);
        setCookie("Green_Key", Green_Key_Amount, 365);
        setCookie("Yellow_Key", Yellow_Key_Amount, 365);
        setCookie("Bonus_Coins", Bonus_Coins_Amount, 365);
        setCookie("Huge_Explosion", Huge_Explosion_Amount, 365);
        setCookie("Steel", Steel_Amount, 365);
        setCookie("Refined_Steel", Refined_Steel_Amount, 365);
        setCookie("Stone", Stone_Amount, 365);
        setCookie("Ruby", Ruby_Amount, 365);
        setCookie("Diamond", Diamond_Amount, 365);
        setCookie("Gold", Gold_Amount, 365);
        setCookie("Silver", Silver_Amount, 365);
        setCookie("Calcite", Calcite_Amount, 365);
        setCookie("Coal", Coal_Amount, 365);
        setCookie("Aquamarine", Aquamarine_Amount, 365);
        setCookie("Pixie_Dust", Pixie_Dust_Amount, 365);
        setCookie("Emerald", Emerald_Amount, 365);
        setCookie("Fossils", Fossils_Amount, 365);
        setCookie("Boxes", Boxes_Amount, 365);
        setCookie("Unknown", Unknown_Amount, 365);
        setCookie("Stone_Bricks", Stone_Bricks_Amount, 365);
        setCookie("Brick", Brick_Amount, 365);
        setCookie("Bamboo", Bamboo_Amount, 365);
        setCookie("Sand_Crystal", Sand_Crystal_Amount, 365);
        setCookie("Ice_Crystal", Ice_Crystal_Amount, 365);
        setCookie("Snow_Crystal", Snow_Crystal_Amount, 365);
        setCookie("Big_Explosion", Big_Explosion_Amount, 365);
        setCookie("Packed_Snow", Packed_Snow_Amount, 365);
        setCookie("Dirt", Dirt_Amount, 365);
    }
    setInterval(function() { saveState() }, 1000)
    $.fn.duplicate = function(count, cloneEvents) {
        var tmp = [];
        for (var i = 0; i < count; i++) {
            $.merge(tmp, this.clone(cloneEvents).get());
        }
        return this.pushStack(tmp);
    };

    function Center() {
        ww = $(window).width();
        wh = $(window).height();
        $('.Tower,.AreaName').css({ marginLeft: ww / 2 - 200 })
        //$('.Tower').css({ marginTop: wh / 2 - 100 })
    }
    Center();
    $(window).resize(function() { Center() })
    $('.CloseWindow').click(function() {
        $('.Resources,.Resource,.CloseWindow,.HCIs,.HCItemSelected').css({ display: 'none' })
    })
    $('.ResourcesClick').click(function(){
    	$('.Resources,.Resource,.CloseWindow').fadeIn();
    })
    $('.PlantClick').click(function(){
    	$('.HCIs,.HCItemSelected,.CloseWindow').fadeIn();
    })
    $('.Floor').duplicate(Num_Of_Floors).appendTo('.Tower');
    z = 1;
    FloorTop = 0;
    FloorTopAddAmount = 48;
    for (var i = 0; i < Num_Of_Floors; i++) {
        $($('.Floor')[i]).addClass('Floor_' + z).css({ top: FloorTop, zIndex: 99 - z })
        z++;
        FloorTop += FloorTopAddAmount;
    }
    $('.Block').find('img').data('Name', 'Wood')

    $('.Floor').last().empty().remove();
    constantDamage = 10;
    constantDamageR = constantDamage;

    startingHP = 10;
    BlockHP = startingHP;
    BlockNum = 1;
    clickDamage = 10;
    clickDamageR = clickDamage;
    setInterval(function() {

        constantDamageR -= BlockHP;
        BlockHP -= constantDamage;
        while (BlockHP <= 0) {
            NewBlock();
            constantDamageR -= BlockHP;
            if (constantDamageR > 0) {
                BlockHP -= constantDamageR;
            }
        }
        if (constantDamageR > 0) {
            BlockHP -= constantDamageR;
        }
        constantDamageR = constantDamage;

    }, 10)

    setInterval(function() {
        $('.Floor_1').find('img').each(function() {
            if ($(this).attr('src') == 'img/Fire.png') {
                BlockHP -= startingHP * 1 / 128;
            }
        })
    }, 100)
    $('.Tower').click(function() {

        clickDamageR -= BlockHP;
        BlockHP -= clickDamage;
        while (BlockHP <= 0) {
            NewBlock();
            clickDamageR -= BlockHP;
            if (clickDamageR > 0) {
                BlockHP -= clickDamageR;
            }
        }
        if (clickDamageR > 0) {
            BlockHP -= clickDamageR;
        }
        clickDamageR = clickDamage;
    })
    setInterval(function() {
        if (BlockHP > 0) {
            $('.BlockHP').html(shortenNumber(BlockHP));
        } else { $('.BlockHP').html(shortenNumber(startingHP)); }

        $('.startingHP').html('/' + shortenNumber(startingHP))
    }, 100)

    function NewBlock() {
        startingHP = startingHP * 1.01
        constantDamage = constantDamage * 1.01;
        clickDamage = clickDamage * 1.01;
        BlockHP = startingHP;

        for (var i = 0; i < 10; i++) {
            if (BlockNum > 4500 + (i * 5000)) {
                CalculateLucky()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 2000 + (i * 5000)) {
                CalculateOldCiv()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 1750 + (i * 5000)) {
                CalculateIce_LvL_4()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 1500 + (i * 5000)) {
                CalculateIce_LvL_3()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 1250 + (i * 5000)) {
                CalculateIce_LvL_2()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 1000 + (i * 5000)) {
                CalculateIce_LvL_1()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 750 + (i * 5000)) {
                CalculateDirt_LvL_4()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 500 + (i * 5000)) {
                CalculateDirt_LvL_3()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 200 + (i * 5000)) {
                CalculateDirt_LvL_2()
                //AreaName = AreaName + ' LvL '+(i+1);
            } else if (BlockNum > 0 + (i * 50000)) {
                CalculateDirt_LvL_1()
                //AreaName = AreaName + ' LvL '+(i+1);
            }
        }

        $('.AreaName').html(AreaName)
        //$('.AreaName').css({background:AreaName_BGC,color:AreaName_TC})
        for (var i = 1; i <= Num_Of_Floors; i++) {
            $('.Floor_' + i).find('img').each(function(v, e) {

                if (v == 5 || v == 6 || v == 13 || v == 14 || v == 15 || v == 10 || v == 11) {
                    $(this).attr('src', $($('.Floor_' + (i + 1)).find('img')[v]).attr('src'))
                } else if (i == 1) {
                    $(this).attr('src', 'img/' + $($('.Floor_' + (i + 1)).find('img')[v]).data('Name').replace(/_/g, " ") + '.png')
                }
                $(this).data('Name', $($('.Floor_' + (i + 1)).find('img')[v]).data('Name'))
            })


        }
        $('.Floor_' + Num_Of_Floors).find('img').each(function() {
            GenerateNextBlock();
            NewBlockImg = Block_Name;

            $(this).attr('src', 'img/' + NewBlockImg + '.png').data("Name", Block_Name.replace(/ /g, "_"));
        })

        BlockNum++;
        $('.BlockNum').html(BlockNum)
        $('.Floor_1').find('img').each(function(v, e) {
            window[$(this).data('Name') + "_Amount"]++;
            Floor_1_Block_Name = $(this).data('Name');
            console.log(Floor_1_Block_Name)
            $('.' + Floor_1_Block_Name).find('.Amount').html(shortenNumber(window[Floor_1_Block_Name + "_Amount"]))
            if ($(this).data('Name') == 'Explosion') {

                $($('.Floor_1').find('img')[v]).attr('src', 'img/Fire.png')


                //setTimeout(function(){$($('.Floor_1').find('img')[v+1]).animate({opacity: 0}, 1000);;$($('.Floor_1').find('img')[v+1]).css('display','block').animate({opacity: 1}, 1000);;BlockHP = BlockHP * 60/64;},100)
            }

            if ($(this).data('Name') == 'Extra_Coins') {

                $($('.Floor_1').find('img')[v]).attr('src', 'img/Extra Coins.gif')
                //Add Currrency Here

                //setTimeout(function(){$($('.Floor_1').find('img')[v+1]).animate({opacity: 0}, 1000);;$($('.Floor_1').find('img')[v+1]).css('display','block').animate({opacity: 1}, 1000);;BlockHP = BlockHP * 60/64;},100)
            }
        })



    }

    function CalculateDirt_LvL_1() {
CA_Dirt = 0;
CA_Rich_Soil = 0;
CA_Very_Rich_Soil = 0;
CA_Extremly_rich_soil = 0;
CA_Grass = 0;
CA_Valunite = 0;
CA_Dark_Valunite = 0;
CA_Bamboo = 0;
CA_Wood = 0;
CA_Sandstone = 0;
CA_Sand = 0;
CA_Packed_Sand = 0;
CA_Extra_Coins = 0;
CA_Bonus_Coins = 0;
CA_Orange_Box = 0;
CA_Green_Box = 0;
CA_Cyan_Box = 0;
CA_Red_Box = 0;
CA_Magenta_Box = 0;
CA_Purple_Box = 0;
CA_Blue_Box = 0;
CA_Explosion = 0;
CA_Huge_Explosion = 0;
CA_Big_Explosion = 0;
CA_Timed_Explosion = 0;
CA_Enormous_Explosion = 0;
CA_Blue_Key = 0;
CA_Red_Key = 0;
CA_Green_Key = 0;
CA_Yellow_Key = 0;
CA_Steel = 0;
CA_Refined_Steel = 0;
CA_Mystery_Steel = 0;
CA_Stone = 0;
CA_Ruby = 0;
CA_Diamond = 0;
CA_Gold = 0;
CA_Silver = 0;
CA_Calcite = 0;
CA_Coal = 1/1000;
CA_Aquamarine = 0;
CA_Pixie_Dust = 0;
CA_Emerald = 0;
CA_Fossils = 0;
CA_Boxes = 0;
CA_Old_Box = 0;
CA_Unknown = 0;
CA_Stone_Bricks = 0;
CA_Ugly_Bricks = 0;
CA_Brick = 0;
CA_Forest_Crystal = 0;
CA_Blood_Crystal = 0;
CA_Sand_Crystal = 0;
CA_Ice_Crystal = 0;
CA_Snow_Crystal = 0;
CA_Ice = 0;
CA_Packed_Snow = 0;
CA_Hardened_Ice = 0;
CA_Compressed_Ice = 0;
SetMain = 1 - ( CA_Dirt + CA_Rich_Soil + CA_Very_Rich_Soil + CA_Extremly_rich_soil + CA_Grass + CA_Valunite + CA_Dark_Valunite + CA_Bamboo + CA_Wood + CA_Sandstone + CA_Sand + CA_Packed_Sand + CA_Extra_Coins + CA_Bonus_Coins + CA_Orange_Box + CA_Green_Box + CA_Cyan_Box + CA_Red_Box + CA_Magenta_Box + CA_Purple_Box + CA_Blue_Box + CA_Explosion + CA_Huge_Explosion + CA_Big_Explosion + CA_Timed_Explosion + CA_Enormous_Explosion + CA_Blue_Key + CA_Red_Key + CA_Green_Key + CA_Yellow_Key + CA_Steel + CA_Refined_Steel + CA_Mystery_Steel + CA_Stone + CA_Ruby + CA_Diamond + CA_Gold + CA_Silver + CA_Calcite + CA_Coal + CA_Aquamarine + CA_Pixie_Dust + CA_Emerald + CA_Fossils + CA_Boxes + CA_Old_Box + CA_Unknown + CA_Stone_Bricks + CA_Ugly_Bricks + CA_Brick + CA_Forest_Crystal + CA_Blood_Crystal + CA_Sand_Crystal + CA_Ice_Crystal + CA_Snow_Crystal + CA_Ice + CA_Packed_Snow + CA_Hardened_Ice + CA_Compressed_Ice)
    CA_Dirt = SetMain;
    CalculateArea('Dirt Deposit', '#a97b4f','black', /*Dirt*/CA_Dirt, /*Rich_Soil*/CA_Rich_Soil, /*Very_Rich_Soil*/CA_Very_Rich_Soil, /*Extremly_rich_soil*/CA_Extremly_rich_soil, /*Grass*/CA_Grass, /*Valunite*/CA_Valunite, /*Dark_Valunite*/CA_Dark_Valunite, /*Bamboo*/CA_Bamboo, /*Wood*/CA_Wood, /*Sandstone*/CA_Sandstone, /*Sand*/CA_Sand, /*Packed_Sand*/CA_Packed_Sand, /*Extra_Coins*/CA_Extra_Coins, /*Bonus_Coins*/CA_Bonus_Coins, /*Orange_Box*/CA_Orange_Box, /*Green_Box*/CA_Green_Box, /*Cyan_Box*/CA_Cyan_Box, /*Red_Box*/CA_Red_Box, /*Magenta_Box*/CA_Magenta_Box, /*Purple_Box*/CA_Purple_Box, /*Blue_Box*/CA_Blue_Box, /*Explosion*/CA_Explosion, /*Huge_Explosion*/CA_Huge_Explosion, /*Big_Explosion*/CA_Big_Explosion, /*Timed_Explosion*/CA_Timed_Explosion, /*Enormous_Explosion*/CA_Enormous_Explosion, /*Blue_Key*/CA_Blue_Key, /*Red_Key*/CA_Red_Key, /*Green_Key*/CA_Green_Key, /*Yellow_Key*/CA_Yellow_Key, /*Steel*/CA_Steel, /*Refined_Steel*/CA_Refined_Steel, /*Mystery_Steel*/CA_Mystery_Steel, /*Stone*/CA_Stone, /*Ruby*/CA_Ruby, /*Diamond*/CA_Diamond, /*Gold*/CA_Gold, /*Silver*/CA_Silver, /*Calcite*/CA_Calcite, /*Coal*/CA_Coal, /*Aquamarine*/CA_Aquamarine, /*Pixie_Dust*/CA_Pixie_Dust, /*Emerald*/CA_Emerald, /*Fossils*/CA_Fossils, /*Boxes*/CA_Boxes, /*Old_Box*/CA_Old_Box, /*Unknown*/CA_Unknown, /*Stone_Bricks*/CA_Stone_Bricks, /*Ugly_Bricks*/CA_Ugly_Bricks, /*Brick*/CA_Brick, /*Forest_Crystal*/CA_Forest_Crystal, /*Blood_Crystal*/CA_Blood_Crystal, /*Sand_Crystal*/CA_Sand_Crystal, /*Ice_Crystal*/CA_Ice_Crystal, /*Snow_Crystal*/CA_Snow_Crystal, /*Ice*/CA_Ice, /*Packed_Snow*/CA_Packed_Snow, /*Hardened_Ice*/CA_Hardened_Ice, /*Compressed_Ice*/CA_Compressed_Ice)    
    
    }
function CalculateDirt_LvL_2() {
CA_Dirt = 0;
CA_Rich_Soil = 0;
CA_Very_Rich_Soil = 0;
CA_Extremly_rich_soil = 0;
CA_Grass = 0;
CA_Valunite = 0;
CA_Dark_Valunite = 0;
CA_Bamboo = 0;
CA_Wood = 0;
CA_Sandstone = 0;
CA_Sand = 0;
CA_Packed_Sand = 0;
CA_Extra_Coins = 0;
CA_Bonus_Coins = 0;
CA_Orange_Box = 0;
CA_Green_Box = 0;
CA_Cyan_Box = 0;
CA_Red_Box = 0;
CA_Magenta_Box = 0;
CA_Purple_Box = 0;
CA_Blue_Box = 0;
CA_Explosion = 0;
CA_Huge_Explosion = 0;
CA_Big_Explosion = 0;
CA_Timed_Explosion = 0;
CA_Enormous_Explosion = 0;
CA_Blue_Key = 0;
CA_Red_Key = 0;
CA_Green_Key = 0;
CA_Yellow_Key = 0;
CA_Steel = 0;
CA_Refined_Steel = 0;
CA_Mystery_Steel = 0;
CA_Stone = 0;
CA_Ruby = 0;
CA_Diamond = 0;
CA_Gold = 0;
CA_Silver = 0;
CA_Calcite = 0;
CA_Coal = 1/1000;
CA_Aquamarine = 0;
CA_Pixie_Dust = 0;
CA_Emerald = 0;
CA_Fossils = 0;
CA_Boxes = 0;
CA_Old_Box = 0;
CA_Unknown = 0;
CA_Stone_Bricks = 0;
CA_Ugly_Bricks = 0;
CA_Brick = 0;
CA_Forest_Crystal = 0;
CA_Blood_Crystal = 0;
CA_Sand_Crystal = 0;
CA_Ice_Crystal = 0;
CA_Snow_Crystal = 0;
CA_Ice = 0;
CA_Packed_Snow = 0;
CA_Hardened_Ice = 0;
CA_Compressed_Ice = 0;
SetMain = 1 - ( CA_Dirt + CA_Rich_Soil + CA_Very_Rich_Soil + CA_Extremly_rich_soil + CA_Grass + CA_Valunite + CA_Dark_Valunite + CA_Bamboo + CA_Wood + CA_Sandstone + CA_Sand + CA_Packed_Sand + CA_Extra_Coins + CA_Bonus_Coins + CA_Orange_Box + CA_Green_Box + CA_Cyan_Box + CA_Red_Box + CA_Magenta_Box + CA_Purple_Box + CA_Blue_Box + CA_Explosion + CA_Huge_Explosion + CA_Big_Explosion + CA_Timed_Explosion + CA_Enormous_Explosion + CA_Blue_Key + CA_Red_Key + CA_Green_Key + CA_Yellow_Key + CA_Steel + CA_Refined_Steel + CA_Mystery_Steel + CA_Stone + CA_Ruby + CA_Diamond + CA_Gold + CA_Silver + CA_Calcite + CA_Coal + CA_Aquamarine + CA_Pixie_Dust + CA_Emerald + CA_Fossils + CA_Boxes + CA_Old_Box + CA_Unknown + CA_Stone_Bricks + CA_Ugly_Bricks + CA_Brick + CA_Forest_Crystal + CA_Blood_Crystal + CA_Sand_Crystal + CA_Ice_Crystal + CA_Snow_Crystal + CA_Ice + CA_Packed_Snow + CA_Hardened_Ice + CA_Compressed_Ice)
    CA_Rich_Soil = SetMain;
    CalculateArea('Dirt Deposit', '#9c7e63','black', /*Dirt*/CA_Dirt, /*Rich_Soil*/CA_Rich_Soil, /*Very_Rich_Soil*/CA_Very_Rich_Soil, /*Extremly_rich_soil*/CA_Extremly_rich_soil, /*Grass*/CA_Grass, /*Valunite*/CA_Valunite, /*Dark_Valunite*/CA_Dark_Valunite, /*Bamboo*/CA_Bamboo, /*Wood*/CA_Wood, /*Sandstone*/CA_Sandstone, /*Sand*/CA_Sand, /*Packed_Sand*/CA_Packed_Sand, /*Extra_Coins*/CA_Extra_Coins, /*Bonus_Coins*/CA_Bonus_Coins, /*Orange_Box*/CA_Orange_Box, /*Green_Box*/CA_Green_Box, /*Cyan_Box*/CA_Cyan_Box, /*Red_Box*/CA_Red_Box, /*Magenta_Box*/CA_Magenta_Box, /*Purple_Box*/CA_Purple_Box, /*Blue_Box*/CA_Blue_Box, /*Explosion*/CA_Explosion, /*Huge_Explosion*/CA_Huge_Explosion, /*Big_Explosion*/CA_Big_Explosion, /*Timed_Explosion*/CA_Timed_Explosion, /*Enormous_Explosion*/CA_Enormous_Explosion, /*Blue_Key*/CA_Blue_Key, /*Red_Key*/CA_Red_Key, /*Green_Key*/CA_Green_Key, /*Yellow_Key*/CA_Yellow_Key, /*Steel*/CA_Steel, /*Refined_Steel*/CA_Refined_Steel, /*Mystery_Steel*/CA_Mystery_Steel, /*Stone*/CA_Stone, /*Ruby*/CA_Ruby, /*Diamond*/CA_Diamond, /*Gold*/CA_Gold, /*Silver*/CA_Silver, /*Calcite*/CA_Calcite, /*Coal*/CA_Coal, /*Aquamarine*/CA_Aquamarine, /*Pixie_Dust*/CA_Pixie_Dust, /*Emerald*/CA_Emerald, /*Fossils*/CA_Fossils, /*Boxes*/CA_Boxes, /*Old_Box*/CA_Old_Box, /*Unknown*/CA_Unknown, /*Stone_Bricks*/CA_Stone_Bricks, /*Ugly_Bricks*/CA_Ugly_Bricks, /*Brick*/CA_Brick, /*Forest_Crystal*/CA_Forest_Crystal, /*Blood_Crystal*/CA_Blood_Crystal, /*Sand_Crystal*/CA_Sand_Crystal, /*Ice_Crystal*/CA_Ice_Crystal, /*Snow_Crystal*/CA_Snow_Crystal, /*Ice*/CA_Ice, /*Packed_Snow*/CA_Packed_Snow, /*Hardened_Ice*/CA_Hardened_Ice, /*Compressed_Ice*/CA_Compressed_Ice)    
    
    }
function CalculateDirt_LvL_3() {
CA_Dirt = 0;
CA_Rich_Soil = 0;
CA_Very_Rich_Soil = 0;
CA_Extremly_rich_soil = 0;
CA_Grass = 0;
CA_Valunite = 0;
CA_Dark_Valunite = 0;
CA_Bamboo = 0;
CA_Wood = 0;
CA_Sandstone = 0;
CA_Sand = 0;
CA_Packed_Sand = 0;
CA_Extra_Coins = 0;
CA_Bonus_Coins = 0;
CA_Orange_Box = 0;
CA_Green_Box = 0;
CA_Cyan_Box = 0;
CA_Red_Box = 0;
CA_Magenta_Box = 0;
CA_Purple_Box = 0;
CA_Blue_Box = 0;
CA_Explosion = 0;
CA_Huge_Explosion = 0;
CA_Big_Explosion = 0;
CA_Timed_Explosion = 0;
CA_Enormous_Explosion = 0;
CA_Blue_Key = 0;
CA_Red_Key = 0;
CA_Green_Key = 0;
CA_Yellow_Key = 0;
CA_Steel = 0;
CA_Refined_Steel = 0;
CA_Mystery_Steel = 0;
CA_Stone = 0;
CA_Ruby = 0;
CA_Diamond = 0;
CA_Gold = 0;
CA_Silver = 0;
CA_Calcite = 0;
CA_Coal = 1/1000;
CA_Aquamarine = 0;
CA_Pixie_Dust = 0;
CA_Emerald = 0;
CA_Fossils = 0;
CA_Boxes = 0;
CA_Old_Box = 0;
CA_Unknown = 0;
CA_Stone_Bricks = 0;
CA_Ugly_Bricks = 0;
CA_Brick = 0;
CA_Forest_Crystal = 0;
CA_Blood_Crystal = 0;
CA_Sand_Crystal = 0;
CA_Ice_Crystal = 0;
CA_Snow_Crystal = 0;
CA_Ice = 0;
CA_Packed_Snow = 0;
CA_Hardened_Ice = 0;
CA_Compressed_Ice = 0;
SetMain = 1 - ( CA_Dirt + CA_Rich_Soil + CA_Very_Rich_Soil + CA_Extremly_rich_soil + CA_Grass + CA_Valunite + CA_Dark_Valunite + CA_Bamboo + CA_Wood + CA_Sandstone + CA_Sand + CA_Packed_Sand + CA_Extra_Coins + CA_Bonus_Coins + CA_Orange_Box + CA_Green_Box + CA_Cyan_Box + CA_Red_Box + CA_Magenta_Box + CA_Purple_Box + CA_Blue_Box + CA_Explosion + CA_Huge_Explosion + CA_Big_Explosion + CA_Timed_Explosion + CA_Enormous_Explosion + CA_Blue_Key + CA_Red_Key + CA_Green_Key + CA_Yellow_Key + CA_Steel + CA_Refined_Steel + CA_Mystery_Steel + CA_Stone + CA_Ruby + CA_Diamond + CA_Gold + CA_Silver + CA_Calcite + CA_Coal + CA_Aquamarine + CA_Pixie_Dust + CA_Emerald + CA_Fossils + CA_Boxes + CA_Old_Box + CA_Unknown + CA_Stone_Bricks + CA_Ugly_Bricks + CA_Brick + CA_Forest_Crystal + CA_Blood_Crystal + CA_Sand_Crystal + CA_Ice_Crystal + CA_Snow_Crystal + CA_Ice + CA_Packed_Snow + CA_Hardened_Ice + CA_Compressed_Ice)
    CA_Very_Rich_Soil = SetMain;
    CalculateArea('Dirt Deposit', '#6c5e4f','white', /*Dirt*/CA_Dirt, /*Rich_Soil*/CA_Rich_Soil, /*Very_Rich_Soil*/CA_Very_Rich_Soil, /*Extremly_rich_soil*/CA_Extremly_rich_soil, /*Grass*/CA_Grass, /*Valunite*/CA_Valunite, /*Dark_Valunite*/CA_Dark_Valunite, /*Bamboo*/CA_Bamboo, /*Wood*/CA_Wood, /*Sandstone*/CA_Sandstone, /*Sand*/CA_Sand, /*Packed_Sand*/CA_Packed_Sand, /*Extra_Coins*/CA_Extra_Coins, /*Bonus_Coins*/CA_Bonus_Coins, /*Orange_Box*/CA_Orange_Box, /*Green_Box*/CA_Green_Box, /*Cyan_Box*/CA_Cyan_Box, /*Red_Box*/CA_Red_Box, /*Magenta_Box*/CA_Magenta_Box, /*Purple_Box*/CA_Purple_Box, /*Blue_Box*/CA_Blue_Box, /*Explosion*/CA_Explosion, /*Huge_Explosion*/CA_Huge_Explosion, /*Big_Explosion*/CA_Big_Explosion, /*Timed_Explosion*/CA_Timed_Explosion, /*Enormous_Explosion*/CA_Enormous_Explosion, /*Blue_Key*/CA_Blue_Key, /*Red_Key*/CA_Red_Key, /*Green_Key*/CA_Green_Key, /*Yellow_Key*/CA_Yellow_Key, /*Steel*/CA_Steel, /*Refined_Steel*/CA_Refined_Steel, /*Mystery_Steel*/CA_Mystery_Steel, /*Stone*/CA_Stone, /*Ruby*/CA_Ruby, /*Diamond*/CA_Diamond, /*Gold*/CA_Gold, /*Silver*/CA_Silver, /*Calcite*/CA_Calcite, /*Coal*/CA_Coal, /*Aquamarine*/CA_Aquamarine, /*Pixie_Dust*/CA_Pixie_Dust, /*Emerald*/CA_Emerald, /*Fossils*/CA_Fossils, /*Boxes*/CA_Boxes, /*Old_Box*/CA_Old_Box, /*Unknown*/CA_Unknown, /*Stone_Bricks*/CA_Stone_Bricks, /*Ugly_Bricks*/CA_Ugly_Bricks, /*Brick*/CA_Brick, /*Forest_Crystal*/CA_Forest_Crystal, /*Blood_Crystal*/CA_Blood_Crystal, /*Sand_Crystal*/CA_Sand_Crystal, /*Ice_Crystal*/CA_Ice_Crystal, /*Snow_Crystal*/CA_Snow_Crystal, /*Ice*/CA_Ice, /*Packed_Snow*/CA_Packed_Snow, /*Hardened_Ice*/CA_Hardened_Ice, /*Compressed_Ice*/CA_Compressed_Ice)    
    
    }
    function CalculateDirt_LvL_4() {
CA_Dirt = 0;
CA_Rich_Soil = 0;
CA_Very_Rich_Soil = 0;
CA_Extremly_rich_soil = 0;
CA_Grass = 0;
CA_Valunite = 0;
CA_Dark_Valunite = 0;
CA_Bamboo = 0;
CA_Wood = 0;
CA_Sandstone = 0;
CA_Sand = 0;
CA_Packed_Sand = 0;
CA_Extra_Coins = 0;
CA_Bonus_Coins = 0;
CA_Orange_Box = 0;
CA_Green_Box = 0;
CA_Cyan_Box = 0;
CA_Red_Box = 0;
CA_Magenta_Box = 0;
CA_Purple_Box = 0;
CA_Blue_Box = 0;
CA_Explosion = 0;
CA_Huge_Explosion = 0;
CA_Big_Explosion = 0;
CA_Timed_Explosion = 0;
CA_Enormous_Explosion = 0;
CA_Blue_Key = 0;
CA_Red_Key = 0;
CA_Green_Key = 0;
CA_Yellow_Key = 0;
CA_Steel = 0;
CA_Refined_Steel = 0;
CA_Mystery_Steel = 0;
CA_Stone = 0;
CA_Ruby = 0;
CA_Diamond = 0;
CA_Gold = 0;
CA_Silver = 0;
CA_Calcite = 0;
CA_Coal = 1/1000;
CA_Aquamarine = 0;
CA_Pixie_Dust = 0;
CA_Emerald = 0;
CA_Fossils = 0;
CA_Boxes = 0;
CA_Old_Box = 0;
CA_Unknown = 0;
CA_Stone_Bricks = 0;
CA_Ugly_Bricks = 0;
CA_Brick = 0;
CA_Forest_Crystal = 0;
CA_Blood_Crystal = 0;
CA_Sand_Crystal = 0;
CA_Ice_Crystal = 0;
CA_Snow_Crystal = 0;
CA_Ice = 1/5;
CA_Packed_Snow = 1/5;
CA_Hardened_Ice = 1/5;
CA_Compressed_Ice = 1/5;
SetMain = 1 - ( CA_Dirt + CA_Rich_Soil + CA_Very_Rich_Soil + CA_Extremly_rich_soil + CA_Grass + CA_Valunite + CA_Dark_Valunite + CA_Bamboo + CA_Wood + CA_Sandstone + CA_Sand + CA_Packed_Sand + CA_Extra_Coins + CA_Bonus_Coins + CA_Orange_Box + CA_Green_Box + CA_Cyan_Box + CA_Red_Box + CA_Magenta_Box + CA_Purple_Box + CA_Blue_Box + CA_Explosion + CA_Huge_Explosion + CA_Big_Explosion + CA_Timed_Explosion + CA_Enormous_Explosion + CA_Blue_Key + CA_Red_Key + CA_Green_Key + CA_Yellow_Key + CA_Steel + CA_Refined_Steel + CA_Mystery_Steel + CA_Stone + CA_Ruby + CA_Diamond + CA_Gold + CA_Silver + CA_Calcite + CA_Coal + CA_Aquamarine + CA_Pixie_Dust + CA_Emerald + CA_Fossils + CA_Boxes + CA_Old_Box + CA_Unknown + CA_Stone_Bricks + CA_Ugly_Bricks + CA_Brick + CA_Forest_Crystal + CA_Blood_Crystal + CA_Sand_Crystal + CA_Ice_Crystal + CA_Snow_Crystal + CA_Ice + CA_Packed_Snow + CA_Hardened_Ice + CA_Compressed_Ice)
    CA_Extremly_rich_soil = SetMain;
    CalculateArea('Dirt Deposit', '#40382f','white', /*Dirt*/CA_Dirt, /*Rich_Soil*/CA_Rich_Soil, /*Very_Rich_Soil*/CA_Very_Rich_Soil, /*Extremly_rich_soil*/CA_Extremly_rich_soil, /*Grass*/CA_Grass, /*Valunite*/CA_Valunite, /*Dark_Valunite*/CA_Dark_Valunite, /*Bamboo*/CA_Bamboo, /*Wood*/CA_Wood, /*Sandstone*/CA_Sandstone, /*Sand*/CA_Sand, /*Packed_Sand*/CA_Packed_Sand, /*Extra_Coins*/CA_Extra_Coins, /*Bonus_Coins*/CA_Bonus_Coins, /*Orange_Box*/CA_Orange_Box, /*Green_Box*/CA_Green_Box, /*Cyan_Box*/CA_Cyan_Box, /*Red_Box*/CA_Red_Box, /*Magenta_Box*/CA_Magenta_Box, /*Purple_Box*/CA_Purple_Box, /*Blue_Box*/CA_Blue_Box, /*Explosion*/CA_Explosion, /*Huge_Explosion*/CA_Huge_Explosion, /*Big_Explosion*/CA_Big_Explosion, /*Timed_Explosion*/CA_Timed_Explosion, /*Enormous_Explosion*/CA_Enormous_Explosion, /*Blue_Key*/CA_Blue_Key, /*Red_Key*/CA_Red_Key, /*Green_Key*/CA_Green_Key, /*Yellow_Key*/CA_Yellow_Key, /*Steel*/CA_Steel, /*Refined_Steel*/CA_Refined_Steel, /*Mystery_Steel*/CA_Mystery_Steel, /*Stone*/CA_Stone, /*Ruby*/CA_Ruby, /*Diamond*/CA_Diamond, /*Gold*/CA_Gold, /*Silver*/CA_Silver, /*Calcite*/CA_Calcite, /*Coal*/CA_Coal, /*Aquamarine*/CA_Aquamarine, /*Pixie_Dust*/CA_Pixie_Dust, /*Emerald*/CA_Emerald, /*Fossils*/CA_Fossils, /*Boxes*/CA_Boxes, /*Old_Box*/CA_Old_Box, /*Unknown*/CA_Unknown, /*Stone_Bricks*/CA_Stone_Bricks, /*Ugly_Bricks*/CA_Ugly_Bricks, /*Brick*/CA_Brick, /*Forest_Crystal*/CA_Forest_Crystal, /*Blood_Crystal*/CA_Blood_Crystal, /*Sand_Crystal*/CA_Sand_Crystal, /*Ice_Crystal*/CA_Ice_Crystal, /*Snow_Crystal*/CA_Snow_Crystal, /*Ice*/CA_Ice, /*Packed_Snow*/CA_Packed_Snow, /*Hardened_Ice*/CA_Hardened_Ice, /*Compressed_Ice*/CA_Compressed_Ice)    
    
    }
    function CalculateIce_LvL_1() {
CA_Dirt = 0;
CA_Rich_Soil = 0;
CA_Very_Rich_Soil = 0;
CA_Extremly_rich_soil = 0;
CA_Grass = 0;
CA_Valunite = 0;
CA_Dark_Valunite = 0;
CA_Bamboo = 0;
CA_Wood = 0;
CA_Sandstone = 0;
CA_Sand = 0;
CA_Packed_Sand = 0;
CA_Extra_Coins = 0;
CA_Bonus_Coins = 0;
CA_Orange_Box = 0;
CA_Green_Box = 0;
CA_Cyan_Box = 0;
CA_Red_Box = 0;
CA_Magenta_Box = 0;
CA_Purple_Box = 0;
CA_Blue_Box = 0;
CA_Explosion = 0;
CA_Huge_Explosion = 0;
CA_Big_Explosion = 0;
CA_Timed_Explosion = 0;
CA_Enormous_Explosion = 0;
CA_Blue_Key = 0;
CA_Red_Key = 0;
CA_Green_Key = 0;
CA_Yellow_Key = 0;
CA_Steel = 0;
CA_Refined_Steel = 0;
CA_Mystery_Steel = 0;
CA_Stone = 0;
CA_Ruby = 0;
CA_Diamond = 0;
CA_Gold = 0;
CA_Silver = 0;
CA_Calcite = 0;
CA_Coal = 0;
CA_Aquamarine = 0;
CA_Pixie_Dust = 0;
CA_Emerald = 0;
CA_Fossils = 0;
CA_Boxes = 0;
CA_Old_Box = 0;
CA_Unknown = 0;
CA_Stone_Bricks = 0;
CA_Ugly_Bricks = 0;
CA_Brick = 0;
CA_Forest_Crystal = 0;
CA_Blood_Crystal = 0;
CA_Sand_Crystal = 0;
CA_Ice_Crystal = 0;
CA_Snow_Crystal = 0;
CA_Ice = 0;
CA_Packed_Snow = 0;
CA_Hardened_Ice = 0;
CA_Compressed_Ice = 0;
SetMain = 1 - ( CA_Dirt + CA_Rich_Soil + CA_Very_Rich_Soil + CA_Extremly_rich_soil + CA_Grass + CA_Valunite + CA_Dark_Valunite + CA_Bamboo + CA_Wood + CA_Sandstone + CA_Sand + CA_Packed_Sand + CA_Extra_Coins + CA_Bonus_Coins + CA_Orange_Box + CA_Green_Box + CA_Cyan_Box + CA_Red_Box + CA_Magenta_Box + CA_Purple_Box + CA_Blue_Box + CA_Explosion + CA_Huge_Explosion + CA_Big_Explosion + CA_Timed_Explosion + CA_Enormous_Explosion + CA_Blue_Key + CA_Red_Key + CA_Green_Key + CA_Yellow_Key + CA_Steel + CA_Refined_Steel + CA_Mystery_Steel + CA_Stone + CA_Ruby + CA_Diamond + CA_Gold + CA_Silver + CA_Calcite + CA_Coal + CA_Aquamarine + CA_Pixie_Dust + CA_Emerald + CA_Fossils + CA_Boxes + CA_Old_Box + CA_Unknown + CA_Stone_Bricks + CA_Ugly_Bricks + CA_Brick + CA_Forest_Crystal + CA_Blood_Crystal + CA_Sand_Crystal + CA_Ice_Crystal + CA_Snow_Crystal + CA_Ice + CA_Packed_Snow + CA_Hardened_Ice + CA_Compressed_Ice)
    CA_Packed_Snow = SetMain;
    CalculateArea('Frozen Aquifer', '#ceeef1','black', /*Dirt*/CA_Dirt, /*Rich_Soil*/CA_Rich_Soil, /*Very_Rich_Soil*/CA_Very_Rich_Soil, /*Extremly_rich_soil*/CA_Extremly_rich_soil, /*Grass*/CA_Grass, /*Valunite*/CA_Valunite, /*Dark_Valunite*/CA_Dark_Valunite, /*Bamboo*/CA_Bamboo, /*Wood*/CA_Wood, /*Sandstone*/CA_Sandstone, /*Sand*/CA_Sand, /*Packed_Sand*/CA_Packed_Sand, /*Extra_Coins*/CA_Extra_Coins, /*Bonus_Coins*/CA_Bonus_Coins, /*Orange_Box*/CA_Orange_Box, /*Green_Box*/CA_Green_Box, /*Cyan_Box*/CA_Cyan_Box, /*Red_Box*/CA_Red_Box, /*Magenta_Box*/CA_Magenta_Box, /*Purple_Box*/CA_Purple_Box, /*Blue_Box*/CA_Blue_Box, /*Explosion*/CA_Explosion, /*Huge_Explosion*/CA_Huge_Explosion, /*Big_Explosion*/CA_Big_Explosion, /*Timed_Explosion*/CA_Timed_Explosion, /*Enormous_Explosion*/CA_Enormous_Explosion, /*Blue_Key*/CA_Blue_Key, /*Red_Key*/CA_Red_Key, /*Green_Key*/CA_Green_Key, /*Yellow_Key*/CA_Yellow_Key, /*Steel*/CA_Steel, /*Refined_Steel*/CA_Refined_Steel, /*Mystery_Steel*/CA_Mystery_Steel, /*Stone*/CA_Stone, /*Ruby*/CA_Ruby, /*Diamond*/CA_Diamond, /*Gold*/CA_Gold, /*Silver*/CA_Silver, /*Calcite*/CA_Calcite, /*Coal*/CA_Coal, /*Aquamarine*/CA_Aquamarine, /*Pixie_Dust*/CA_Pixie_Dust, /*Emerald*/CA_Emerald, /*Fossils*/CA_Fossils, /*Boxes*/CA_Boxes, /*Old_Box*/CA_Old_Box, /*Unknown*/CA_Unknown, /*Stone_Bricks*/CA_Stone_Bricks, /*Ugly_Bricks*/CA_Ugly_Bricks, /*Brick*/CA_Brick, /*Forest_Crystal*/CA_Forest_Crystal, /*Blood_Crystal*/CA_Blood_Crystal, /*Sand_Crystal*/CA_Sand_Crystal, /*Ice_Crystal*/CA_Ice_Crystal, /*Snow_Crystal*/CA_Snow_Crystal, /*Ice*/CA_Ice, /*Packed_Snow*/CA_Packed_Snow, /*Hardened_Ice*/CA_Hardened_Ice, /*Compressed_Ice*/CA_Compressed_Ice)    
    
    }
    function CalculateIce_LvL_2() {
CA_Dirt = 0;
CA_Rich_Soil = 0;
CA_Very_Rich_Soil = 0;
CA_Extremly_rich_soil = 0;
CA_Grass = 0;
CA_Valunite = 0;
CA_Dark_Valunite = 0;
CA_Bamboo = 0;
CA_Wood = 0;
CA_Sandstone = 0;
CA_Sand = 0;
CA_Packed_Sand = 0;
CA_Extra_Coins = 0;
CA_Bonus_Coins = 0;
CA_Orange_Box = 0;
CA_Green_Box = 0;
CA_Cyan_Box = 0;
CA_Red_Box = 0;
CA_Magenta_Box = 0;
CA_Purple_Box = 0;
CA_Blue_Box = 0;
CA_Explosion = 0;
CA_Huge_Explosion = 0;
CA_Big_Explosion = 0;
CA_Timed_Explosion = 0;
CA_Enormous_Explosion = 0;
CA_Blue_Key = 0;
CA_Red_Key = 0;
CA_Green_Key = 0;
CA_Yellow_Key = 0;
CA_Steel = 0;
CA_Refined_Steel = 0;
CA_Mystery_Steel = 0;
CA_Stone = 0;
CA_Ruby = 0;
CA_Diamond = 0;
CA_Gold = 0;
CA_Silver = 0;
CA_Calcite = 0;
CA_Coal = 0;
CA_Aquamarine = 0;
CA_Pixie_Dust = 0;
CA_Emerald = 0;
CA_Fossils = 0;
CA_Boxes = 0;
CA_Old_Box = 0;
CA_Unknown = 0;
CA_Stone_Bricks = 0;
CA_Ugly_Bricks = 0;
CA_Brick = 0;
CA_Forest_Crystal = 0;
CA_Blood_Crystal = 0;
CA_Sand_Crystal = 0;
CA_Ice_Crystal = 0;
CA_Snow_Crystal = 0;
CA_Ice = 0;
CA_Packed_Snow = 0;
CA_Hardened_Ice = 0;
CA_Compressed_Ice = 0;
SetMain = 1 - ( CA_Dirt + CA_Rich_Soil + CA_Very_Rich_Soil + CA_Extremly_rich_soil + CA_Grass + CA_Valunite + CA_Dark_Valunite + CA_Bamboo + CA_Wood + CA_Sandstone + CA_Sand + CA_Packed_Sand + CA_Extra_Coins + CA_Bonus_Coins + CA_Orange_Box + CA_Green_Box + CA_Cyan_Box + CA_Red_Box + CA_Magenta_Box + CA_Purple_Box + CA_Blue_Box + CA_Explosion + CA_Huge_Explosion + CA_Big_Explosion + CA_Timed_Explosion + CA_Enormous_Explosion + CA_Blue_Key + CA_Red_Key + CA_Green_Key + CA_Yellow_Key + CA_Steel + CA_Refined_Steel + CA_Mystery_Steel + CA_Stone + CA_Ruby + CA_Diamond + CA_Gold + CA_Silver + CA_Calcite + CA_Coal + CA_Aquamarine + CA_Pixie_Dust + CA_Emerald + CA_Fossils + CA_Boxes + CA_Old_Box + CA_Unknown + CA_Stone_Bricks + CA_Ugly_Bricks + CA_Brick + CA_Forest_Crystal + CA_Blood_Crystal + CA_Sand_Crystal + CA_Ice_Crystal + CA_Snow_Crystal + CA_Ice + CA_Packed_Snow + CA_Hardened_Ice + CA_Compressed_Ice)
    CA_Ice = SetMain;
    CalculateArea('Frozen Aquifer', '#bfedfc','black', /*Dirt*/CA_Dirt, /*Rich_Soil*/CA_Rich_Soil, /*Very_Rich_Soil*/CA_Very_Rich_Soil, /*Extremly_rich_soil*/CA_Extremly_rich_soil, /*Grass*/CA_Grass, /*Valunite*/CA_Valunite, /*Dark_Valunite*/CA_Dark_Valunite, /*Bamboo*/CA_Bamboo, /*Wood*/CA_Wood, /*Sandstone*/CA_Sandstone, /*Sand*/CA_Sand, /*Packed_Sand*/CA_Packed_Sand, /*Extra_Coins*/CA_Extra_Coins, /*Bonus_Coins*/CA_Bonus_Coins, /*Orange_Box*/CA_Orange_Box, /*Green_Box*/CA_Green_Box, /*Cyan_Box*/CA_Cyan_Box, /*Red_Box*/CA_Red_Box, /*Magenta_Box*/CA_Magenta_Box, /*Purple_Box*/CA_Purple_Box, /*Blue_Box*/CA_Blue_Box, /*Explosion*/CA_Explosion, /*Huge_Explosion*/CA_Huge_Explosion, /*Big_Explosion*/CA_Big_Explosion, /*Timed_Explosion*/CA_Timed_Explosion, /*Enormous_Explosion*/CA_Enormous_Explosion, /*Blue_Key*/CA_Blue_Key, /*Red_Key*/CA_Red_Key, /*Green_Key*/CA_Green_Key, /*Yellow_Key*/CA_Yellow_Key, /*Steel*/CA_Steel, /*Refined_Steel*/CA_Refined_Steel, /*Mystery_Steel*/CA_Mystery_Steel, /*Stone*/CA_Stone, /*Ruby*/CA_Ruby, /*Diamond*/CA_Diamond, /*Gold*/CA_Gold, /*Silver*/CA_Silver, /*Calcite*/CA_Calcite, /*Coal*/CA_Coal, /*Aquamarine*/CA_Aquamarine, /*Pixie_Dust*/CA_Pixie_Dust, /*Emerald*/CA_Emerald, /*Fossils*/CA_Fossils, /*Boxes*/CA_Boxes, /*Old_Box*/CA_Old_Box, /*Unknown*/CA_Unknown, /*Stone_Bricks*/CA_Stone_Bricks, /*Ugly_Bricks*/CA_Ugly_Bricks, /*Brick*/CA_Brick, /*Forest_Crystal*/CA_Forest_Crystal, /*Blood_Crystal*/CA_Blood_Crystal, /*Sand_Crystal*/CA_Sand_Crystal, /*Ice_Crystal*/CA_Ice_Crystal, /*Snow_Crystal*/CA_Snow_Crystal, /*Ice*/CA_Ice, /*Packed_Snow*/CA_Packed_Snow, /*Hardened_Ice*/CA_Hardened_Ice, /*Compressed_Ice*/CA_Compressed_Ice)    
    
    }
    function CalculateIce_LvL_3() {
CA_Dirt = 0;
CA_Rich_Soil = 0;
CA_Very_Rich_Soil = 0;
CA_Extremly_rich_soil = 0;
CA_Grass = 0;
CA_Valunite = 0;
CA_Dark_Valunite = 0;
CA_Bamboo = 0;
CA_Wood = 0;
CA_Sandstone = 0;
CA_Sand = 0;
CA_Packed_Sand = 0;
CA_Extra_Coins = 0;
CA_Bonus_Coins = 0;
CA_Orange_Box = 0;
CA_Green_Box = 0;
CA_Cyan_Box = 0;
CA_Red_Box = 0;
CA_Magenta_Box = 0;
CA_Purple_Box = 0;
CA_Blue_Box = 0;
CA_Explosion = 0;
CA_Huge_Explosion = 0;
CA_Big_Explosion = 0;
CA_Timed_Explosion = 0;
CA_Enormous_Explosion = 0;
CA_Blue_Key = 0;
CA_Red_Key = 0;
CA_Green_Key = 0;
CA_Yellow_Key = 0;
CA_Steel = 0;
CA_Refined_Steel = 0;
CA_Mystery_Steel = 0;
CA_Stone = 0;
CA_Ruby = 0;
CA_Diamond = 0;
CA_Gold = 0;
CA_Silver = 0;
CA_Calcite = 0;
CA_Coal = 0;
CA_Aquamarine = 0;
CA_Pixie_Dust = 0;
CA_Emerald = 0;
CA_Fossils = 0;
CA_Boxes = 0;
CA_Old_Box = 0;
CA_Unknown = 0;
CA_Stone_Bricks = 0;
CA_Ugly_Bricks = 0;
CA_Brick = 0;
CA_Forest_Crystal = 0;
CA_Blood_Crystal = 0;
CA_Sand_Crystal = 0;
CA_Ice_Crystal = 0;
CA_Snow_Crystal = 0;
CA_Ice = 0;
CA_Packed_Snow = 0;
CA_Hardened_Ice = 0;
CA_Compressed_Ice = 0;
SetMain = 1 - ( CA_Dirt + CA_Rich_Soil + CA_Very_Rich_Soil + CA_Extremly_rich_soil + CA_Grass + CA_Valunite + CA_Dark_Valunite + CA_Bamboo + CA_Wood + CA_Sandstone + CA_Sand + CA_Packed_Sand + CA_Extra_Coins + CA_Bonus_Coins + CA_Orange_Box + CA_Green_Box + CA_Cyan_Box + CA_Red_Box + CA_Magenta_Box + CA_Purple_Box + CA_Blue_Box + CA_Explosion + CA_Huge_Explosion + CA_Big_Explosion + CA_Timed_Explosion + CA_Enormous_Explosion + CA_Blue_Key + CA_Red_Key + CA_Green_Key + CA_Yellow_Key + CA_Steel + CA_Refined_Steel + CA_Mystery_Steel + CA_Stone + CA_Ruby + CA_Diamond + CA_Gold + CA_Silver + CA_Calcite + CA_Coal + CA_Aquamarine + CA_Pixie_Dust + CA_Emerald + CA_Fossils + CA_Boxes + CA_Old_Box + CA_Unknown + CA_Stone_Bricks + CA_Ugly_Bricks + CA_Brick + CA_Forest_Crystal + CA_Blood_Crystal + CA_Sand_Crystal + CA_Ice_Crystal + CA_Snow_Crystal + CA_Ice + CA_Packed_Snow + CA_Hardened_Ice + CA_Compressed_Ice)
    CA_Hardened_Ice = SetMain;
    CalculateArea('Frozen Aquifer', '#abe9ef','black', /*Dirt*/CA_Dirt, /*Rich_Soil*/CA_Rich_Soil, /*Very_Rich_Soil*/CA_Very_Rich_Soil, /*Extremly_rich_soil*/CA_Extremly_rich_soil, /*Grass*/CA_Grass, /*Valunite*/CA_Valunite, /*Dark_Valunite*/CA_Dark_Valunite, /*Bamboo*/CA_Bamboo, /*Wood*/CA_Wood, /*Sandstone*/CA_Sandstone, /*Sand*/CA_Sand, /*Packed_Sand*/CA_Packed_Sand, /*Extra_Coins*/CA_Extra_Coins, /*Bonus_Coins*/CA_Bonus_Coins, /*Orange_Box*/CA_Orange_Box, /*Green_Box*/CA_Green_Box, /*Cyan_Box*/CA_Cyan_Box, /*Red_Box*/CA_Red_Box, /*Magenta_Box*/CA_Magenta_Box, /*Purple_Box*/CA_Purple_Box, /*Blue_Box*/CA_Blue_Box, /*Explosion*/CA_Explosion, /*Huge_Explosion*/CA_Huge_Explosion, /*Big_Explosion*/CA_Big_Explosion, /*Timed_Explosion*/CA_Timed_Explosion, /*Enormous_Explosion*/CA_Enormous_Explosion, /*Blue_Key*/CA_Blue_Key, /*Red_Key*/CA_Red_Key, /*Green_Key*/CA_Green_Key, /*Yellow_Key*/CA_Yellow_Key, /*Steel*/CA_Steel, /*Refined_Steel*/CA_Refined_Steel, /*Mystery_Steel*/CA_Mystery_Steel, /*Stone*/CA_Stone, /*Ruby*/CA_Ruby, /*Diamond*/CA_Diamond, /*Gold*/CA_Gold, /*Silver*/CA_Silver, /*Calcite*/CA_Calcite, /*Coal*/CA_Coal, /*Aquamarine*/CA_Aquamarine, /*Pixie_Dust*/CA_Pixie_Dust, /*Emerald*/CA_Emerald, /*Fossils*/CA_Fossils, /*Boxes*/CA_Boxes, /*Old_Box*/CA_Old_Box, /*Unknown*/CA_Unknown, /*Stone_Bricks*/CA_Stone_Bricks, /*Ugly_Bricks*/CA_Ugly_Bricks, /*Brick*/CA_Brick, /*Forest_Crystal*/CA_Forest_Crystal, /*Blood_Crystal*/CA_Blood_Crystal, /*Sand_Crystal*/CA_Sand_Crystal, /*Ice_Crystal*/CA_Ice_Crystal, /*Snow_Crystal*/CA_Snow_Crystal, /*Ice*/CA_Ice, /*Packed_Snow*/CA_Packed_Snow, /*Hardened_Ice*/CA_Hardened_Ice, /*Compressed_Ice*/CA_Compressed_Ice)    
    
    }
    function CalculateIce_LvL_4() {
CA_Dirt = 0;
CA_Rich_Soil = 0;
CA_Very_Rich_Soil = 0;
CA_Extremly_rich_soil = 0;
CA_Grass = 0;
CA_Valunite = 0;
CA_Dark_Valunite = 0;
CA_Bamboo = 0;
CA_Wood = 0;
CA_Sandstone = 0;
CA_Sand = 0;
CA_Packed_Sand = 0;
CA_Extra_Coins = 0;
CA_Bonus_Coins = 0;
CA_Orange_Box = 0;
CA_Green_Box = 0;
CA_Cyan_Box = 0;
CA_Red_Box = 0;
CA_Magenta_Box = 0;
CA_Purple_Box = 0;
CA_Blue_Box = 0;
CA_Explosion = 0;
CA_Huge_Explosion = 0;
CA_Big_Explosion = 0;
CA_Timed_Explosion = 0;
CA_Enormous_Explosion = 0;
CA_Blue_Key = 0;
CA_Red_Key = 0;
CA_Green_Key = 0;
CA_Yellow_Key = 0;
CA_Steel = 0;
CA_Refined_Steel = 0;
CA_Mystery_Steel = 0;
CA_Stone = 0;
CA_Ruby = 0;
CA_Diamond = 0;
CA_Gold = 0;
CA_Silver = 0;
CA_Calcite = 0;
CA_Coal = 0;
CA_Aquamarine = 0;
CA_Pixie_Dust = 0;
CA_Emerald = 0;
CA_Fossils = 0;
CA_Boxes = 0;
CA_Old_Box = 0;
CA_Unknown = 0;
CA_Stone_Bricks = 0;
CA_Ugly_Bricks = 0;
CA_Brick = 0;
CA_Forest_Crystal = 0;
CA_Blood_Crystal = 0;
CA_Sand_Crystal = 0;
CA_Ice_Crystal = 0;
CA_Snow_Crystal = 0;
CA_Ice = 0;
CA_Packed_Snow = 0;
CA_Hardened_Ice = 0;
CA_Compressed_Ice = 0;
SetMain = 1 - ( CA_Dirt + CA_Rich_Soil + CA_Very_Rich_Soil + CA_Extremly_rich_soil + CA_Grass + CA_Valunite + CA_Dark_Valunite + CA_Bamboo + CA_Wood + CA_Sandstone + CA_Sand + CA_Packed_Sand + CA_Extra_Coins + CA_Bonus_Coins + CA_Orange_Box + CA_Green_Box + CA_Cyan_Box + CA_Red_Box + CA_Magenta_Box + CA_Purple_Box + CA_Blue_Box + CA_Explosion + CA_Huge_Explosion + CA_Big_Explosion + CA_Timed_Explosion + CA_Enormous_Explosion + CA_Blue_Key + CA_Red_Key + CA_Green_Key + CA_Yellow_Key + CA_Steel + CA_Refined_Steel + CA_Mystery_Steel + CA_Stone + CA_Ruby + CA_Diamond + CA_Gold + CA_Silver + CA_Calcite + CA_Coal + CA_Aquamarine + CA_Pixie_Dust + CA_Emerald + CA_Fossils + CA_Boxes + CA_Old_Box + CA_Unknown + CA_Stone_Bricks + CA_Ugly_Bricks + CA_Brick + CA_Forest_Crystal + CA_Blood_Crystal + CA_Sand_Crystal + CA_Ice_Crystal + CA_Snow_Crystal + CA_Ice + CA_Packed_Snow + CA_Hardened_Ice + CA_Compressed_Ice)
    CA_Compressed_Ice = SetMain;
    CalculateArea('Frozen Aquifer', '#668cff','white', /*Dirt*/CA_Dirt, /*Rich_Soil*/CA_Rich_Soil, /*Very_Rich_Soil*/CA_Very_Rich_Soil, /*Extremly_rich_soil*/CA_Extremly_rich_soil, /*Grass*/CA_Grass, /*Valunite*/CA_Valunite, /*Dark_Valunite*/CA_Dark_Valunite, /*Bamboo*/CA_Bamboo, /*Wood*/CA_Wood, /*Sandstone*/CA_Sandstone, /*Sand*/CA_Sand, /*Packed_Sand*/CA_Packed_Sand, /*Extra_Coins*/CA_Extra_Coins, /*Bonus_Coins*/CA_Bonus_Coins, /*Orange_Box*/CA_Orange_Box, /*Green_Box*/CA_Green_Box, /*Cyan_Box*/CA_Cyan_Box, /*Red_Box*/CA_Red_Box, /*Magenta_Box*/CA_Magenta_Box, /*Purple_Box*/CA_Purple_Box, /*Blue_Box*/CA_Blue_Box, /*Explosion*/CA_Explosion, /*Huge_Explosion*/CA_Huge_Explosion, /*Big_Explosion*/CA_Big_Explosion, /*Timed_Explosion*/CA_Timed_Explosion, /*Enormous_Explosion*/CA_Enormous_Explosion, /*Blue_Key*/CA_Blue_Key, /*Red_Key*/CA_Red_Key, /*Green_Key*/CA_Green_Key, /*Yellow_Key*/CA_Yellow_Key, /*Steel*/CA_Steel, /*Refined_Steel*/CA_Refined_Steel, /*Mystery_Steel*/CA_Mystery_Steel, /*Stone*/CA_Stone, /*Ruby*/CA_Ruby, /*Diamond*/CA_Diamond, /*Gold*/CA_Gold, /*Silver*/CA_Silver, /*Calcite*/CA_Calcite, /*Coal*/CA_Coal, /*Aquamarine*/CA_Aquamarine, /*Pixie_Dust*/CA_Pixie_Dust, /*Emerald*/CA_Emerald, /*Fossils*/CA_Fossils, /*Boxes*/CA_Boxes, /*Old_Box*/CA_Old_Box, /*Unknown*/CA_Unknown, /*Stone_Bricks*/CA_Stone_Bricks, /*Ugly_Bricks*/CA_Ugly_Bricks, /*Brick*/CA_Brick, /*Forest_Crystal*/CA_Forest_Crystal, /*Blood_Crystal*/CA_Blood_Crystal, /*Sand_Crystal*/CA_Sand_Crystal, /*Ice_Crystal*/CA_Ice_Crystal, /*Snow_Crystal*/CA_Snow_Crystal, /*Ice*/CA_Ice, /*Packed_Snow*/CA_Packed_Snow, /*Hardened_Ice*/CA_Hardened_Ice, /*Compressed_Ice*/CA_Compressed_Ice)    
    
    }
    function CalculateArea(AreaN, AreaN_BGC, AreaN_TC, Dirt, Rich_Soil, Very_Rich_Soil, Extremly_rich_soil, Grass, Valunite, Dark_Valunite, Bamboo, Wood, Sandstone, Sand, Packed_Sand, Extra_Coins, Bonus_Coins, Orange_Box, Green_Box, Cyan_Box, Red_Box, Magenta_Box, Purple_Box, Blue_Box, Explosion, Huge_Explosion, Big_Explosion, Timed_Explosion, Enormous_Explosion, Blue_Key, Red_Key, Green_Key, Yellow_Key, Steel, Refined_Steel, Mystery_Steel, Stone, Ruby, Diamond, Gold, Silver, Calcite, Coal, Aquamarine, Pixie_Dust, Emerald, Fossils, Boxes, Old_Box, Unknown, Stone_Bricks, Ugly_Bricks, Brick, Forest_Crystal, Blood_Crystal, Sand_Crystal, Ice_Crystal, Snow_Crystal, Ice, Packed_Snow, Hardened_Ice, Compressed_Ice) {
        AreaName = AreaN;
        AreaName_BGC = AreaN_BGC;
        AreaName_TC = AreaN_TC;

        R_Dirt = 1 - Dirt;
        R_Rich_Soil = R_Dirt - Rich_Soil;
        R_Very_Rich_Soil = R_Rich_Soil - Very_Rich_Soil;
        R_Extremly_rich_soil = R_Very_Rich_Soil - Extremly_rich_soil;
        R_Grass = R_Extremly_rich_soil - Grass;
        R_Valunite = R_Grass - Valunite;
        R_Dark_Valunite = R_Valunite - Dark_Valunite;
        R_Bamboo = R_Dark_Valunite - Bamboo;
        R_Wood = R_Bamboo - Wood;
        R_Sandstone = R_Wood - Sandstone;
        R_Sand = R_Sandstone - Sand;
        R_Packed_Sand = R_Sand - Packed_Sand;
        R_Extra_Coins = R_Packed_Sand - Extra_Coins;
        R_Bonus_Coins = R_Extra_Coins - Bonus_Coins;
        R_Orange_Box = R_Bonus_Coins - Orange_Box;
        R_Green_Box = R_Orange_Box - Green_Box;
        R_Cyan_Box = R_Green_Box - Cyan_Box;
        R_Red_Box = R_Cyan_Box - Red_Box;
        R_Magenta_Box = R_Red_Box - Magenta_Box;
        R_Purple_Box = R_Magenta_Box - Purple_Box;
        R_Blue_Box = R_Purple_Box - Blue_Box;
        R_Explosion = R_Blue_Box - Explosion;
        R_Huge_Explosion = R_Explosion - Huge_Explosion;
        R_Big_Explosion = R_Huge_Explosion - Big_Explosion;
        R_Timed_Explosion = R_Big_Explosion - Timed_Explosion;
        R_Enormous_Explosion = R_Timed_Explosion - Enormous_Explosion;
        R_Blue_Key = R_Enormous_Explosion - Blue_Key;
        R_Red_Key = R_Blue_Key - Red_Key;
        R_Green_Key = R_Red_Key - Green_Key;
        R_Yellow_Key = R_Green_Key - Yellow_Key;
        R_Steel = R_Yellow_Key - Steel;
        R_Refined_Steel = R_Steel - Refined_Steel;
        R_Mystery_Steel = R_Refined_Steel - Mystery_Steel;
        R_Stone = R_Mystery_Steel - Stone;
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
        R_Old_Box = R_Boxes - Old_Box;
        R_Unknown = R_Old_Box - Unknown;
        R_Stone_Bricks = R_Unknown - Stone_Bricks;
        R_Ugly_Bricks = R_Stone_Bricks - Ugly_Bricks;
        R_Brick = R_Ugly_Bricks - Brick;
        R_Forest_Crystal = R_Brick - Forest_Crystal;
        R_Blood_Crystal = R_Forest_Crystal - Blood_Crystal;
        R_Sand_Crystal = R_Blood_Crystal - Sand_Crystal;
        R_Ice_Crystal = R_Sand_Crystal - Ice_Crystal;
        R_Snow_Crystal = R_Ice_Crystal - Snow_Crystal;
        R_Ice = R_Snow_Crystal - Ice;
        R_Packed_Snow = R_Ice - Packed_Snow;
        R_Hardened_Ice = R_Packed_Snow - Hardened_Ice;
        R_Compressed_Ice = R_Hardened_Ice - Compressed_Ice;
        $('.AreaName').css({background:AreaN_BGC,color:AreaN_TC})
    }

    function GenerateNextBlock() {
        R = Math.random();
        if (R > R_Dirt) { Block_Name = "Dirt"; } else if (R > R_Rich_Soil) { Block_Name = "Rich Soil"; } else if (R > R_Very_Rich_Soil) { Block_Name = "Very Rich Soil"; } else if (R > R_Extremly_rich_soil) { Block_Name = "Extremly rich soil"; } else if (R > R_Grass) { Block_Name = "Grass"; } else if (R > R_Valunite) { Block_Name = "Valunite"; } else if (R > R_Dark_Valunite) { Block_Name = "Dark Valunite"; } else if (R > R_Bamboo) { Block_Name = "Bamboo"; } else if (R > R_Wood) { Block_Name = "Wood"; } else if (R > R_Sandstone) { Block_Name = "Sandstone"; } else if (R > R_Sand) { Block_Name = "Sand"; } else if (R > R_Packed_Sand) { Block_Name = "Packed Sand"; } else if (R > R_Extra_Coins) { Block_Name = "Extra Coins"; } else if (R > R_Bonus_Coins) { Block_Name = "Bonus Coins"; } else if (R > R_Orange_Box) { Block_Name = "Orange Box"; } else if (R > R_Green_Box) { Block_Name = "Green Box"; } else if (R > R_Cyan_Box) { Block_Name = "Cyan Box"; } else if (R > R_Red_Box) { Block_Name = "Red Box"; } else if (R > R_Magenta_Box) { Block_Name = "Magenta Box"; } else if (R > R_Purple_Box) { Block_Name = "Purple Box"; } else if (R > R_Blue_Box) { Block_Name = "Blue Box"; } else if (R > R_Explosion) { Block_Name = "Explosion"; } else if (R > R_Huge_Explosion) { Block_Name = "Huge Explosion"; } else if (R > R_Big_Explosion) { Block_Name = "Big Explosion"; } else if (R > R_Timed_Explosion) { Block_Name = "Timed Explosion"; } else if (R > R_Enormous_Explosion) { Block_Name = "Enormous Explosion"; } else if (R > R_Blue_Key) { Block_Name = "Blue Key"; } else if (R > R_Red_Key) { Block_Name = "Red Key"; } else if (R > R_Green_Key) { Block_Name = "Green Key"; } else if (R > R_Yellow_Key) { Block_Name = "Yellow Key"; } else if (R > R_Steel) { Block_Name = "Steel"; } else if (R > R_Refined_Steel) { Block_Name = "Refined Steel"; } else if (R > R_Mystery_Steel) { Block_Name = "Mystery Steel"; } else if (R > R_Stone) { Block_Name = "Stone"; } else if (R > R_Ruby) { Block_Name = "Ruby"; } else if (R > R_Diamond) { Block_Name = "Diamond"; } else if (R > R_Gold) { Block_Name = "Gold"; } else if (R > R_Silver) { Block_Name = "Silver"; } else if (R > R_Calcite) { Block_Name = "Calcite"; } else if (R > R_Coal) { Block_Name = "Coal"; } else if (R > R_Aquamarine) { Block_Name = "Aquamarine"; } else if (R > R_Pixie_Dust) { Block_Name = "Pixie Dust"; } else if (R > R_Emerald) { Block_Name = "Emerald"; } else if (R > R_Fossils) { Block_Name = "Fossils"; } else if (R > R_Boxes) { Block_Name = "Boxes"; } else if (R > R_Old_Box) { Block_Name = "Old Box"; } else if (R > R_Unknown) { Block_Name = "Unknown"; } else if (R > R_Stone_Bricks) { Block_Name = "Stone Bricks"; } else if (R > R_Ugly_Bricks) { Block_Name = "Ugly Bricks"; } else if (R > R_Brick) { Block_Name = "Brick"; } else if (R > R_Forest_Crystal) { Block_Name = "Forest Crystal"; } else if (R > R_Blood_Crystal) { Block_Name = "Blood Crystal"; } else if (R > R_Sand_Crystal) { Block_Name = "Sand Crystal"; } else if (R > R_Ice_Crystal) { Block_Name = "Ice Crystal"; } else if (R > R_Snow_Crystal) { Block_Name = "Snow Crystal"; } else if (R > R_Ice) { Block_Name = "Ice"; } else if (R > R_Packed_Snow) { Block_Name = "Packed Snow"; } else if (R > R_Hardened_Ice) { Block_Name = "Hardened Ice"; } else if (R > R_Compressed_Ice) { Block_Name = "Compressed Ice"; }
    }

    function shortenNumber(num, digits) {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "A" },
            { value: 1E6, symbol: "B" },
            { value: 1E9, symbol: "C" },
            { value: 1E12, symbol: "D" },
            { value: 1E15, symbol: "E" },
            { value: 1E18, symbol: "F" },
            { value: 1E21, symbol: "G" },
            { value: 1E24, symbol: "H" },
            { value: 1E27, symbol: "I" },
            { value: 1E30, symbol: "J" },
            { value: 1E33, symbol: "K" },
            { value: 1E36, symbol: "L" },
            { value: 1E39, symbol: "M" },
            { value: 1E42, symbol: "N" },
            { value: 1E45, symbol: "O" },
            { value: 1E48, symbol: "P" },
            { value: 1E51, symbol: "Q" },
            { value: 1E54, symbol: "R" },
            { value: 1E57, symbol: "S" },
            { value: 1E60, symbol: "T" },
            { value: 1E63, symbol: "U" },
            { value: 1E66, symbol: "V" },
            { value: 1E69, symbol: "W" },
            { value: 1E72, symbol: "X" },
            { value: 1E75, symbol: "Y" },
            { value: 1E78, symbol: "Z" },

            { value: 1E81, symbol: "A2" },
            { value: 1E84, symbol: "B2" },
            { value: 1E87, symbol: "C2" },
            { value: 1E90, symbol: "D2" },
            { value: 1E93, symbol: "E2" },
            { value: 1E96, symbol: "F2" },
            { value: 1E99, symbol: "G2" },
            { value: 1E102, symbol: "H2" },
            { value: 1E105, symbol: "I2" },
            { value: 1E108, symbol: "J2" },
            { value: 1E111, symbol: "K2" },
            { value: 1E114, symbol: "L2" },
            { value: 1E117, symbol: "M2" },
            { value: 1E120, symbol: "N2" },
            { value: 1E123, symbol: "O2" },
            { value: 1E126, symbol: "P2" },
            { value: 1E129, symbol: "Q2" },
            { value: 1E132, symbol: "R2" },
            { value: 1E135, symbol: "S2" },
            { value: 1E138, symbol: "T2" },
            { value: 1E141, symbol: "U2" },
            { value: 1E144, symbol: "V2" },
            { value: 1E147, symbol: "W2" },
            { value: 1E150, symbol: "X2" },
            { value: 1E153, symbol: "Y2" },
            { value: 1E156, symbol: "Z2" },
            { value: 1E159, symbol: "A2" },
            { value: 1E162, symbol: "B3" },
            { value: 1E165, symbol: "C3" },
            { value: 1E168, symbol: "D3" },
            { value: 1E171, symbol: "E3" },
            { value: 1E174, symbol: "F3" },
            { value: 1E177, symbol: "G3" },
            { value: 1E180, symbol: "H3" },
            { value: 1E183, symbol: "I3" },
            { value: 1E186, symbol: "J3" },
            { value: 1E189, symbol: "K3" },
            { value: 1E192, symbol: "L3" },
            { value: 1E195, symbol: "M3" },
            { value: 1E198, symbol: "N3" },
            { value: 1E201, symbol: "O3" },
            { value: 1E204, symbol: "P3" },
            { value: 1E207, symbol: "Q3" },
            { value: 1E210, symbol: "R3" },
            { value: 1E213, symbol: "S3" },
            { value: 1E216, symbol: "T3" },
            { value: 1E219, symbol: "U3" },
            { value: 1E222, symbol: "V3" },
            { value: 1E225, symbol: "W3" },
            { value: 1E228, symbol: "X3" },
            { value: 1E231, symbol: "Y3" },
            { value: 1E234, symbol: "Z3" },

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


    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";domain=localhost;" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
})