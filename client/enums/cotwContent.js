export const Items = {
  Weapon : {
    BrokenSword:                  {name:'Broken Sword',                  weight: 1000, bulk: 5000,  buy: NaN,  sell: 25,   weaponClass: 0,                                                                    css:'BrokenSword'},
    Club:                         {name:'Club',                         weight: 1500, bulk: 3000,  buy: 105,  sell: 60,   weaponClass: 1,                                                                     css:'Club'},
    Dagger:                       {name:'Dagger',                       weight: 500,  bulk: 500,   buy: 420,  sell: 240,  weaponClass: 2,                                                                     css:'Sword'},
    Hammer:                       {name:'Hammer',                       weight: 2000, bulk: 3000,  buy: 420,  sell: 240,  weaponClass: 2,                                                                     css:'Hammer'},
    HandAxe:                      {name:'Hand Axe',                      weight: 1000, bulk: 3000,  buy: 472,  sell: 270,  weaponClass: 3,                                                                    css:'Axe'},
    Quarterstaff:                 {name:'Quarterstaff',                 weight: 750,  bulk: 5000,  buy: 648,  sell: 360,  weaponClass: 3,                                                                     css:'Spear'},
    Spear:                        {name:'Spear',                        weight: 1500, bulk: 5000,  buy: 840,  sell: 480,  weaponClass: 4,                                                                     css:'Spear'},
    ShortSword:                   {name:'Short Sword',                   weight: 1000, bulk: 5000,  buy: 1470, sell: 840,  weaponClass: 5,                                                                    css:'Sword'},
    Mace:                         {name:'Mace',                         weight: 2500, bulk: 4375,  buy: 1728, sell: 960,  weaponClass: 5,                                                                     css:'Mace'},
    Flail:                        {name:'Flail',                        weight: 2000, bulk: 3250,  buy: 1512, sell: 840,  weaponClass: 6,                                                                     css:'Flail'},
    Axe:                          {name:'Axe',                          weight: 2000, bulk: 5000,  buy: 1944, sell: 1080, weaponClass: 6,                                                                     css:'Axe'},
    WarHammer:                    {name:'War Hammer',                    weight: 1400, bulk: 7500,  buy: 2160, sell: 1200, weaponClass: 7,                                                                    css:'Hammer'},
    LongSword:                    {name:'Long Sword',                    weight: 1500, bulk: 8000,  buy: 3240, sell: 1800, weaponClass: 8,                                                                    css:'Sword'},
    BattleAxe:                    {name:'Battle Axe',                    weight: 3000, bulk: 6000,  buy: 2160, sell: 1200, weaponClass: 8,                                                                    css:'Axe'},
    BroadSword:                   {name:'Broad Sword',                   weight: 1600, bulk: 9000,  buy: 3240, sell: 1800, weaponClass: 9,                                                                    css:'Sword'},
    MorningStar:                  {name:'Morning Star',                  weight: 3000, bulk: 9000,  buy: 2160, sell: 1200, weaponClass: 10,                                                                   css:'MorningStar'},
    BastardSword:                 {name:'Bastard Sword',                 weight: 3000, bulk: 10000, buy: 4320, sell: 2400, weaponClass: 11,                                                                   css:'Sword'},
    TwoHandedSword:               {name:'Two Handed Sword',               weight: 5000, bulk: 12000, buy: 6360, sell: 3600, weaponClass: 12,                                                                  css:'Sword'}
  },
  Armour : {
    RustyArmour:                  {name:'Rusty Armour',                  weight:10000, bulk:30000,  buy:NaN,      sell:25,     ac:0,                                                                          css:'BrokenArmour'},
    LeatherArmour:                {name:'Leather Armour',                weight:5000,  bulk:2400,   buy:1080,     sell:600,    ac:6,                                                                          css:'LeatherArmour'},
    StuddedLeatherArmour:         {name:'Studded Leather Armour',         weight:7000,  bulk:25000,  buy:3150,     sell:1800,   ac:12,                                                                        css:'LeatherArmour'},
    RingMail:                     {name:'Ring Mail',                     weight:8000,  bulk:30000,  buy:6300,     sell:3600,   ac:18,                                                                         css:'MetalArmour'},
    ScaleMail:                    {name:'Scale Mail',                    weight:9000,  bulk:30000,  buy:10800,    sell:6000,   ac:24,                                                                         css:'MetalArmour'},
    ChainMail:                    {name:'Chain Mail',                    weight:10000, bulk:30000,  buy:16200,    sell:9000,   ac:30,                                                                         css:'MetalArmour'},
    SplintMail:                   {name:'Splint Mail',                   weight:12000, bulk:40000,  buy:27000,    sell:15000,  ac:36,                                                                         css:'MetalArmour'},
    PlateMail:                    {name:'Plate Mail',                    weight:15000, bulk:40000,  buy:42000,    sell:24000,  ac:42,                                                                         css:'MetalArmour'},
    PlateArmour:                  {name:'Plate Armour',                  weight:15000, bulk:60000,  buy:42000,    sell:24000,  ac:48,                                                                         css:'MetalArmour'},
    MeteoricSteelPlate:           {name:'Meteoric Steel Plate',           weight:5000,  bulk:30000,  buy:105000,   sell:60000,  ac:54,                                                                        css:'MetalArmour'},
    ElvenChainMail:               {name:'Elven Chain Mail',               weight:50000, bulk:24000,  buy:162000,   sell:90000,  ac:52,                                                                        css:'MetalArmour'}
  },
  Shield : {
    BrokenShield:                 {name:'Broken Shield',                 weight:4000,  bulk:35000,  buy:NaN,      sell:25,     ac:0,                                                                          css:'BrokenShield'},
    SmallWoodenShield:            {name:'Small Wooden Shield',            weight:3000,  bulk:15000,  buy:525,      sell:300,    ac:3,                                                                         css:'WoodShield'},
    MediumWoodenShield:           {name:'Medium Wooden Shield',           weight:4000,  bulk:35000,  buy:1050,     sell:600,    ac:6,                                                                         css:'WoodShield'},
    LargeWoodenShield:            {name:'Large Wooden Shield',            weight:5000,  bulk:50000,  buy:2100,     sell:1200,   ac:9,                                                                         css:'WoodShield'},
    SmallIronShield:              {name:'Small Iron Shield',              weight:4000,  bulk:15000,  buy:1260,     sell:720,    ac:6,                                                                         css:'MetalShield'},
    MediumIronShield:             {name:'Medium Iron Shield',             weight:5000,  bulk:35000,  buy:2592,     sell:1440,   ac:9,                                                                         css:'MetalShield'},
    LargeIronShield:              {name:'Large Iron Shield',              weight:6000,  bulk:50000,  buy:3150,     sell:1800,   ac:12,                                                                        css:'MetalShield'},
    SmallSteelShield:             {name:'Small Steel Shield',             weight:4000,  bulk:15000,  buy:2730,     sell:1560,   ac:9,                                                                         css:'MetalShield'},
    MediumSteelShield:            {name:'Medium Steel Shield',            weight:5000,  bulk:35000,  buy:3360,     sell:1920,   ac:12,                                                                        css:'MetalShield'},
    LargeSteelShield:             {name:'Large Steel Shield',             weight:6000,  bulk:50000,  buy:4200,     sell:2400,   ac:15,                                                                        css:'MetalShield'},
    SmallMeteoricSteelShield:     {name:'Small Meteoric Steel Shield',     weight:2500,  bulk:10000,  buy:4620,     sell:2640,   ac:15,                                                                       css:'MetalShield'},
    MediumMeteoricSteelShield:    {name:'Medium Meteoric Steel Shield',    weight:3500,  bulk:25000,  buy:5940,     sell:3300,   ac:18,                                                                       css:'MetalShield'},
    LargeMeteoricSteelShield:     {name:'Large Meteoric Steel Shield',     weight:4500,  bulk:35000,  buy:7560,     sell:4200,   ac:21,                                                                       css:'MetalShield'}
  },
  Helmet : {
    BrokenHelmet:                 {name:'Broken Helmet',                 weight:1000,  bulk:1000,   buy:NaN,      sell:25,     ac:0,                                                                          css:'BrokenHelmet'},
    LeatherHelmet:                {name:'Leather Helmet',                weight:500,   bulk:500,    buy:525,      sell:300,    ac:3,                                                                          css:'LeatherHelmet'},
    IronHelmet:                   {name:'Iron Helmet',                   weight:2000,  bulk:2000,   buy:1050,     sell:600,    ac:6,                                                                          css:'MetalHelmet'},
    SteelHelmet:                  {name:'Steel Helmet',                  weight:2500,  bulk:2000,   buy:3150,     sell:1800,   ac:9,                                                                          css:'MetalHelmet'},
    MeteoricSteelHelmet:          {name:'Meteoric Steel Helmet',          weight:1000,  bulk:2000,   buy:10500,    sell:6000,   ac:15,                                                                        css:'MetalHelmet'},
    HelmetOfDetectMonsters:       {name:'Helmet Of Detect Monsters',       weight:2500,  bulk:2000,   buy:42000,    sell:24000,  ac:9,                                                                        css:'HelmetOfDetectMonsters'},
    EnchantedHelmOfStorms:        {name:'Enchanted Helm Of Storms',        weight:1000,  bulk:2000,   buy:1050000,  sell:600000, ac:25,                                                                       css:'EnchantedHelmOfStorms'}
  },
  Bracer : {
    Bracers:                      {name:'Bracers',                      weight:500,   bulk:2000,   buy:108,      sell:60,     ac:3,                                                                           css:'Bracers'},
    BracersOfDefenseNormal:       {name:'Bracers Of Defense Normal',       weight:500,   bulk:2000,   buy:1836,     sell:1020,   ac:8,                                                                        css:'BracersEnchanted'},
    BracersOfDefenseS:            {name:'Bracers Of Defense Strong',            weight:500,   bulk:2000,   buy:5616,     sell:3120,   ac:13,                                                                  css:'BracersEnchanted'},
    BracersOfDefenseVS:           {name:'Bracers Of Defense Very Strong',           weight:500,   bulk:2000,   buy:11556,    sell:6420,   ac:18,                                                              css:'BracersEnchanted'}
  },
  Gauntlet : {
    Gauntlet:                     {name:'Gauntlet',                     weight:500,   bulk:2000,   buy:105,      sell:60,     ac:5,                                                                           css:'Gauntlet'},
    GauntletOfProtection:         {name:'Gauntlet Of Protection',         weight:500,   bulk:2000,   buy:2625,     sell:1500,   ac:10,                                                                        css:'GauntletEnchanted'},
    GauntletOfProtectionS:        {name:'Gauntlet Of Protection Strong',        weight:500,   bulk:2000,   buy:6300,     sell:3600,   ac:15,                                                                  css:'GauntletEnchanted'},
    GauntletOfProtectionVS:       {name:'Gauntlet Of Protection Very Strong',       weight:500,   bulk:2000,   buy:12420,    sell:6900,   ac:20,                                                              css:'GauntletEnchanted'},
    GauntletOfSlaying:            {name:'Gauntlet Of Slaying',            weight:500,   bulk:2000,   buy:3780,     sell:2100,   ac:0,                                                                         css:'GauntletOfSlaying'},
    GauntletOfSlayingS_S:         {name:'Gauntlet Of Slaying Strong',         weight:500,   bulk:2000,   buy:7560,     sell:4200,   ac:0,                                                                     css:'GauntletOfSlaying'},
    GauntletOfSlayingVS_VS:       {name:'Gauntlet Of Slaying Very Strong',       weight:500,   bulk:2000,   buy:13125,    sell:7500,   ac:0,                                                                  css:'GauntletOfSlaying'},
    GauntletOfDexterity:          {name:'Gauntlet Of Dexterity',          weight:500,   bulk:2000,   buy:3240,     sell:1800,   ac:5,                                                                         css:'GauntletEnchanted'},
    GauntletOfDexterityS:         {name:'Gauntlet Of Dexterity Strong',         weight:500,   bulk:2000,   buy:7020,     sell:3900,   ac:5,                                                                   css:'GauntletEnchanted'},
    GauntletOfDexterityVS:        {name:'Gauntlet Of Dexterity Very Strong',        weight:500,   bulk:2000,   buy:12960,    sell:7200,   ac:5,                                                               css:'GauntletEnchanted'},
    GauntletOfStrength:           {name:'Gauntlet Of Strength',           weight:500,   bulk:2000,   buy:3240,     sell:1800,   ac:5,                                                                         css:'GauntletEnchanted'},
    GauntletOfStrengthS:          {name:'Gauntlet Of Strength Strong',          weight:500,   bulk:2000,   buy:0,        sell:0,      ac:5,                                                                   css:'GauntletEnchanted'},
    GauntletOfStrengthVS:         {name:'Gauntlet Of Strength Very Strong',         weight:500,   bulk:2000,   buy:12960,    sell:7200,   ac:5,                                                               css:'GauntletEnchanted'}
  },
  Belt : {
    TwoSlotBelt:                  {name:'Two Slot Belt',                  weight:300,   bulk:300,    buy:NaN,      sell:NaN,    level:NaN, weightCap:2100,   bulkCap:3100, slot:2,                            css:'SlotBelt'},
    ThreeSlotBelt:                {name:'Three Slot Belt',                weight:300,   bulk:300,    buy:NaN,      sell:NaN,    level:NaN, weightCap:2600,   bulkCap:3600, slot:3,                            css:'SlotBelt'},
    FourSlotBelt:                 {name:'Four Slot Belt',                 weight:300,   bulk:300,    buy:NaN,      sell:NaN,    level:NaN, weightCap:3100,   bulkCap:4100, slot:4,                            css:'SlotBelt'},
    UtilityBelt:                  {name:'Utility Belt',                  weight:1350,  bulk:1800,   buy:NaN,      sell:NaN,    level:NaN, weightCap:3100,   bulkCap:4100, slot:2, slotScroll:4, slotPotion:4, css:'UtilityBelt'},
    WandQuiverBelt:               {name:'Wand Quiver Belt',               weight:300,   bulk:300,    buy:NaN,      sell:NaN,    level:NaN, weightCap:3100,   bulkCap:4100, slot:2, slotWand:4,                css:'WandQuiverBelt'}
  },
  Purse : {
    Purse:                        {name:'Purse',                        weight:300,   bulk:300,    buy:NaN,      sell:NaN,    level:NaN, weightCap:100300, bulkCap:100300,                                    css:'Purse'}
  },
  Bag : {
    SmallBag:                     {name:'Small Bag',                     weight:300,   bulk:500,    buy:NaN,      sell:NaN,    level:NaN, weightCap:5000,   bulkCap:6000,                                     css:'Bag'},
    MediumBag:                    {name:'Medium Bag',                    weight:500,   bulk:700,    buy:NaN,      sell:NaN,    level:NaN, weightCap:10000,  bulkCap:12000,                                    css:'Bag'},
    LargeBag:                     {name:'Large Bag',                     weight:900,   bulk:900,    buy:NaN,      sell:NaN,    level:NaN, weightCap:15000,  bulkCap:18000,                                    css:'Bag'}
  },
  Pack : {
    SmallPack:                    {name:'Small Pack',                    weight:1000,  bulk:1000,   buy:NaN,      sell:NaN,    level:NaN, weightCap:12000,  bulkCap:50000,                                    css:'Pack'},
    MediumPack:                   {name:'Medium Pack',                   weight:2000,  bulk:1500,   buy:NaN,      sell:NaN,    level:NaN, weightCap:22000,  bulkCap:75000,                                    css:'Pack'},
    LargePack:                    {name:'Large Pack',                    weight:4000,  bulk:100000, buy:NaN,      sell:NaN,    level:NaN, weightCap:35000,  bulkCap:100000,                                   css:'Pack'}
  },
  Chest : {
    SmallChest:                   {name:'Small Chest',                   weight:5000,  bulk:100000, buy:NaN,      sell:NaN,    level:NaN, weightCap:100000, bulkCap:50000,                                    css:'Chest'},
    MediumChest:                  {name:'Medium Chest',                  weight:15000, bulk:150000, buy:NaN,      sell:NaN,    level:NaN, weightCap:100000, bulkCap:150000,                                   css:'Chest'},
    LargeChest:                   {name:'Large Chest',                   weight:25000, bulk:250000, buy:NaN,      sell:NaN,    level:NaN, weightCap:100000, bulkCap:250000,                                   css:'Chest'}
  },
  PackOfHolding : {
    EnchantedSmallPackOfHolding:  {name:'Enchanted Small Pack Of Holding',  weight:5000,  bulk:75000,  buy:NaN,      sell:NaN,    level:NaN, weightCap:50000,  bulkCap:150000,                                css:'EnchantedPack'},
    EnchantedMediumPackOfHolding: {name:'Enchanted Medium Pack Of Holding', weight:7500,  bulk:100000, buy:NaN,      sell:NaN,    level:NaN, weightCap:75000,  bulkCap:200000,                                css:'EnchantedPack'},
    EnchantedLargePackOfHolding:  {name:'Enchanted Large Pack Of Holding',  weight:10000, bulk:125000, buy:NaN,      sell:NaN,    level:NaN, weightCap:100000, bulkCap:250000,                                css:'EnchantedPack'}
  },
  Neckwear: {
    OrdinaryAmulet: {name: 'Decorative Broch', weight: 300, bulk: 300, buy: 100, sell: 50, css:'Amulet'}
  }
};


export const BuildingTypes = {
  Gate_NS           : {
    name      : 'Gate_NS',
    sprite    : {x: 0, y: 0},
    size      : {w: 96, h: 32},
    entryPoint: {x: 1, y: 0}
  },
  Hut_EF            : {
    name      : 'Hut_EF',
    sprite    : {x: 96, y: 0},
    size      : {w: 64, h: 64},
    entryPoint: {x: 1, y: 0}
  },
  StrawHouse_EF     : {
    name      : 'StrawHouse_EF',
    sprite    : {x: 0, y: 64},
    size      : {w: 96, h: 96},
    entryPoint: {x: 2, y: 1}
  },
  StrawHouse_WF     : {
    name      : 'StrawHouse_WF',
    sprite    : {x: 192, y: 64},
    size      : {w: 96, h: 96},
    entryPoint: {x: 0, y: 1}
  },
  BurntStrawHouse_WF: {
    name      : 'BurntStrawHouse_WF',
    sprite    : {x: 288, y: 64},
    size      : {w: 96, h: 96},
    entryPoint: {x: 0, y: 1}
  },
  HutTemple_NF      : {
    name      : 'HutTemple_NF',
    sprite    : {x: 0, y: 288},
    size      : {w: 160, h: 160},
    entryPoint: {x: 2, y: 1}
  },
  MineEntrance      : {name: 'MineEntrance', sprite:{x:32, y:0}, size:{w:32, h:32}, isTile: true},
  Fountain          : {name: 'Fountain'},
  Sign              : {name: 'Sign'},
  Well              : {name: 'Well'},
  VegePatch         : {name: 'VegePatch'},
  Wagon             : {name: 'Wagon'},
  StairsDown        : {name: 'StairsDown'},
  StairsUp          : {name: 'StairsUp'},
  DoorClosed        : {name: 'DoorClosed'},
  DoorOpen          : {name: 'DoorOpen'}
  //MineEntrance:       {                            sprite:{file:ResourceFile.Tiles, offset: {x: 64, y: 0}}},
  //Fountain:           {                            sprite:{file:ResourceFile.Tiles, offset: {x: 96, y: 96}}},
  //Sign:               {                            sprite:{file:ResourceFile.Tiles, offset: {x: 160, y: 0}}},
  //Well:               {                            sprite:{file:ResourceFile.Tiles, offset: {x: 160, y: 32}}},
  //VegePatch:          {                            sprite:{file:ResourceFile.Tiles, offset: {x: 128, y: 32}}},
  //Wagon:              {                            sprite:{file:ResourceFile.Tiles, offset: {x: 192, y: 32}}},
  //StairsDown:         {                            sprite:{file:ResourceFile.Tiles, offset: {x: 96, y: 128}}},
  //StairsUp:           {                            sprite:{file:ResourceFile.Tiles, offset: {x: 64, y: 128}}},
  //DoorClosed:         {                            sprite:{file:ResourceFile.Tiles, offset: {x: 64, y: 160}}},
  //DoorOpen:           {                            sprite:{file:ResourceFile.Tiles, offset: {x: 96, y: 160}}}
};

export const Tiles = {
  Rock         : {
    solid : true,
    name  : 'Rock',
    sprite: {x: 0, y: 0}
  },
  Grass        : {solid: false, name: 'Grass', sprite: {x: 0, y: 32}},
  DarkDgn      : {solid: false, name: 'DarkDgn', sprite: {x: 0, y: 64}},
  Water        : {solid: false, name: 'Water', sprite: {x: 0, y: 96}},
  Path         : {solid: false, name: 'Path', sprite: {x: 0, y: 128}},
  LitDgn       : {solid: false, name: 'LitDgn', sprite: {x: 0, y: 160}},
  PathRock     : {solid: true, name: 'PathRock', sprite: {x: 32, y: 0}},
  PathGrass    : {solid: false, name: 'PathGrass', sprite: {x: 32, y: 32}},
  WallDarkDgn  : {solid: true, name: 'WallDarkDgn', sprite: {x: 32, y: 64}},
  WaterGrass   : {solid: false, name: 'WaterGrass', sprite: {x: 32, y: 96}},
  WaterPath    : {solid: false, name: 'WaterPath', sprite: {x: 32, y: 128}},
  WallLitDgn   : {solid: true, name: 'WallLitDgn', sprite: {x: 32, y: 160}},
  Grass50Cave50: {solid: true, name: 'Grass50Cave50', sprite: {x: 0, y: 192}},
  Grass10Cave90: {solid: true, name: 'Grass10Cave90', sprite: {x: 32, y: 192}},
  White50Cave50: {solid: true, name: 'White50Cave50', sprite: {x: 0, y: 224}},
  White90Cave10: {solid: true, name: 'White90Cave10', sprite: {x: 32, y: 224}},
  Crop         : {solid: true, name: 'Crop', sprite: {x: 64, y: 32}},
  MineEntrance        : {
    solid : false,
    name  : 'MineEntrance',
    sprite: {x: 0, y: 32}
  },
  Well         : {solid: true, name: 'Well', sprite: {x: 160, y: 32}},
  Building     : {solid: true, name: 'Building', sprite: {x: 0, y: 32}},
  TreasurePile : {solid: false, name: 'TreasurePile', sprite: {x: 128, y: 640}}
};

export const ASCIITiles = {
  '^': Tiles.Rock,
  ',': Tiles.Grass,
  'o': Tiles.DarkDgn,
  '~': Tiles.Water,
  '.': Tiles.Path,
  'O': Tiles.LitDgn,
  '_': Tiles.PathRock,
  ';': Tiles.PathGrass,
  'd': Tiles.WallDarkDgn,
  'w': Tiles.WaterGrass,
  'W': Tiles.WaterPath,
  'D': Tiles.WallLitDgn,
  'g': Tiles.Grass50Cave50,
  'G': Tiles.Grass10Cave90,
  'c': Tiles.White50Cave50,
  'C': Tiles.White90Cave10,
  '=': Tiles.Crop,
  'M': Tiles.MineEntrance,
  '#': Tiles.Building,
  'e': Tiles.Well,
  '[': BuildingTypes.DoorClosed,
  '/': BuildingTypes.DoorOpen,
  '!': BuildingTypes.Sign
};

export default ASCIITiles;