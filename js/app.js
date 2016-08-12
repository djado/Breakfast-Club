//object constructor
var brunchtracker = function (title, address, nhd, opentime, website, lat, lng) {
  this.title = title;
  this.address = address;
  this.nhd = nhd;
  this.opentime = opentime;
  this.website = website;
  this.lat = lat;
  this.lng = lng;
};

var brunchArr = [
    new brunchtracker("Original Hotcake House", "1002 SE Powell", "SE", "12:00 AM", "http://www.hotcakehouse.com/", 45.50114,  -122.65558),
    new brunchtracker("My Father's Place", "523 SE Grand", "SE", "6:00 AM", "http://myfathersplacepdx.com/", 45.519033,  -122.660868),
    new brunchtracker("Cameo Cafe", "8111 NE Sandy", "NE", "6:30 AM", "http://www.cameocafe.com/", 45.55226,  -122.579407),
    new brunchtracker("Bottle + Kitchen", "50 SW Morrison", "SW", "7:00 AM", "http://www.bottlekitchen.com/", 45.517373,  -122.673259),
    new brunchtracker("Cadillac Cafe", "1801 NE Broadway", "NE", "7:00 AM", "http://cadillaccafepdx.com/", 45.535249,  -122.647447),
    new brunchtracker("Cup & Saucer Cafe", "3566 SE Hawthorne", "SE", "7:00 AM", "http://www.cupandsaucercafe.com/#!map/clav", 45.511915,  -122.627226),
    new brunchtracker("Doug Fir Lounge", "830 E Burnside", "NE", "7:00 AM", "http://www.dougfirlounge.com/", 45.522641,  -122.656824),
    new brunchtracker("Petite Provence", "4834 SE Division", "SE", "7:00 AM", "http://www.provencepdx.com/#!blank-1/xp4en", 45.505084,  -122.612473),
    new brunchtracker("Pine State Biscuits", "1100 SE Division", "SE", "7:00 AM", "http://www.pinestatebiscuits.com/", 45.504642,  -122.654428),
    new brunchtracker("Rain or Shine Coffeehouse", "5941 SE Division", "SE", "7:00 AM", "http://www.pinestatebiscuits.com/", 45.505491,  -122.601835),
    new brunchtracker("Spielman Coffee Roaster & Bagels", "2128 SE Division", "SE", "7:00 AM", "http://www.spielmanbagels.com/", 45.504654,  -122.643945),
    new brunchtracker("St. Honore ", "3333 SE Division", "SE", "7:00 AM", "http://www.cricketcafe.pdx", 45.504943,  -122.630794),
    new brunchtracker("Tom's Restaurant", "3871 SE Division", "SE", "7:00 AM", "http://www.tomsrestaurant.net", 45.505019,  -122.622889),
    new brunchtracker("Spielman Coffee Roaster & Bagels", "2200 NE Broadway", "NE", "7:00 AM", "http://www.spielmanbagels.com/", 45.534779,  -122.642674),
    new brunchtracker("Cricket Cafe", "3159 SE 32nd", "SE", "7:30 AM", "http://www.cricketcafe.pdx", 45.501961,  -122.632574),
    new brunchtracker("Jam", "2239 SE Hawthorne", "SE", "7:30 AM", "http://www.jamonhawthorne.com", 45.512245,  -122.642719),
    new brunchtracker("Milo's City Cafe", "1325 NE Broadway", "NE", "7:30 AM", "http://www.miloscitycafe.com", 45.535211,  -122.651847),
    new brunchtracker("Original, the", "300 SW 6th", "SW", "7:30 AM", "https://originaldinerant.com/", 45.521436,  -122.676916),
    new brunchtracker("Utopia Cafe", "3308 SE Belmont", "SE", "7:30 AM", "https://www.yelp.com/biz/utopia-cafe-portland", 45.516325,  -122.630689),
    new brunchtracker("Batter Griddle & Drinkery", "4425 NE Fremont", "NE", "8:00 AM", "http://www.batterpdx.com", 45.548422,  -122.617843),
    new brunchtracker("Bread and Ink Cafe", "3610 SE Hawthorne", "SE", "8:00 AM", "http://www.breadandinkcafe.com", 45.511934,  -122.626527),
    new brunchtracker("Bridges Cafe", "2316 NE MLK", "NE", "8:00 AM", "http://www.bridgescafeandcatering.net", 45.539832,  -122.66116),
    new brunchtracker("Casa Maria", "3035 SE Division ", "SE", "8:00 AM", "http://casamiaondivision.com/", 45.504988,  -122.633949),
    new brunchtracker("Cheese & Crack Shop", "22 SE 28th", "SE", "8:00 AM", "http://www.cheeseandcrack.com", 45.522443,  -122.637143),
    new brunchtracker("City State Diner", "128 NE 28th", "NE", "8:00 AM", "http://www.citystatediner.com", 45.52405,  -122.637063),
    new brunchtracker("Coquine", "6839 SE Belmont", "SE", "8:00 AM", "http://www.coquinepdx.com", 45.517096,  -122.592392),
    new brunchtracker("Costello's Travel Caffe", "2222 NE Broadway", "NE", "8:00 AM", "http://www.costellostravelcaffe.com", 45.534779,  -122.64243),
    new brunchtracker("Genie's Cafe", "1101 SE Division", "SE", "8:00 AM", "http://www.geniesdivision.com", 45.505,  -122.654581),
    new brunchtracker("Genie's Too", "4800 SE Hawthorne", "SE", "8:00 AM", "http://www.spaceroomlounge.com", 45.511851,  -122.612884),
    new brunchtracker("Happy Sparrow", "3001 SE Belmont", "SE", "8:00 AM", "http://wwwhappysparrowcafe.com", 45.516649,  -122.63462),
    new brunchtracker("Harlow", "3632 SE Hawthorne", "SE", "8:00 AM", "http://www.harlowpdx.com/", 45.5119,  -122.62609),
    new brunchtracker("Hazel Room", "3279 SE Hawthrone", "SE", "8:00 AM", "http://www.thehazelroom.com", 45.512275,  -122.631044),
    new brunchtracker("Holman's", "15 SE 28th", "SE", "8:00 AM", "http://www.holmanspdx.com", 45.522573,  -122.637506),
    new brunchtracker("Imperial", "410 SW Broadway", "SE", "8:00 AM", "http://www.imperialpdx.com", 45.521064,  -122.678349),
    new brunchtracker("Junior's Cafe", "1742 SE 12th", "SE", "8:00 AM", "http://www.juniorscafepdx.com", 45.510207,  -122.653519),
    new brunchtracker("Laurelhurst Cafe", "4611 E Burnside", "NE", "8:00 AM", "http://www.laurelhurstcafe.com", 45.523238,  -122.615272),
    new brunchtracker("Lauretta Jean's", "3402 SE Division", "SE", "8:00 AM", "http://www.laurettajeans.com/", 45.504606,  -122.629434),
    new brunchtracker("Little T American Baker", "2600 SE Division", "SE", "8:00 AM", "http://littletbaker.com/division", 45.504668,  -122.639392),
    new brunchtracker("Midpoint Food & Drink", "3524 SE 52nd", "SE", "8:00 AM", "https://www.yelp.com/biz/midpoint-food-and-drink-portland", 45.497085,  -122.608647),
    new brunchtracker("Muscadine", "1465 NE Prescott", "NE", "8:00 AM", "http://www.apizzascholls.com/", 45.555655,  -122.650411),
    new brunchtracker("Off the Waffle", "2601 SE Clinton", "SE", "8:00 AM", "http://offthewaffle.com/", 45.503733,  -122.639479),
    new brunchtracker("Paradox Cafe", "3439 SE Belmont", "SE", "8:00 AM", "http://paradoxorganiccafe.com/", 45.516631,  -122.628676),
    new brunchtracker("Red Square Cafe", "4505 SE Belmont", "SE", "8:00 AM", "http://redsquarecafe.com/", 45.516729,  -122.615956),
    new brunchtracker("Rocking Frog Cafe", "2511 SE Belmont", "SE", "8:00 AM", "http://rockingfrogpdx.com/", 45.516628,  -122.639782),
    new brunchtracker("Sanborns", "3200 SE Milwaukie", "SE", "8:00 AM", "http://www.sanbornsbreakfast.com/", 45.500164,  -122.653984),
    new brunchtracker("Sckavone's", "4100 SE Division", "SE", "8:00 AM", "http://www.sckavones.com/", 45.504599,  -122.620232),
    new brunchtracker("Slappy Cakes", "4246 SE Belmont", "SE", "8:00 AM", "http://slappycakes.com/", 45.51635,  -122.618531),
    new brunchtracker("Tabor Bread", "5051 SE Hawthorne", "SE", "8:00 AM", "http://www.taborbread.com/", 45.512257,  -122.610575),
    new brunchtracker("Toast", "5222 SE 52nd", "SE", "8:00 AM", "http://www.toastpdx.com/", 45.485147,  -122.608612),
    new brunchtracker("Trinket", "2035 SE Cesar E Chavez", "SE", "8:00 AM", "http://trinketpdx.com/", 45.508241,  -122.622933),
    new brunchtracker("Waffle Window", "3610 SE Hawthorne", "SE", "8:00 AM", "http://wafflewindow.com/", 45.511934,  -122.626527),
    new brunchtracker("Whisky Soda Lounge", "3131 SE Division", "SE", "8:00 AM", "http://whiskeysodalounge.com/", 45.505011,  -122.632857),
    new brunchtracker("Zell's Cafe", "1300 SE Morrison", "SE", "8:00 AM", "http://www.zellscafe.com/", 45.517043,  -122.652403),
    new brunchtracker("Pepper Box", "932 SE Morrison", "SE", "8:30 AM", "http://www.pepperboxpdx.com/", 45.517011,  -122.655966),
    new brunchtracker("Americano", "2605 E Burnside", "NE", "9:00 AM", "http://americanopdx.com/", 45.523118,  -122.639129),
    new brunchtracker("Bare Bones Cafe", "2908 SE Belmont", "SE", "9:00 AM", "http://www.barebonescafe.net/", 45.516322,  -122.635814),
    new brunchtracker("Cafe Broder", "2508 SE Clinton", "SE", "9:00 AM", "http://broderpdx.com/", 45.50318,  -122.64015),
    new brunchtracker("Chez Machin", "3553 SE Hawthorne", "SE", "9:00 AM", "http://www.chezmachin.com/", 45.512208,  -122.627581),
    new brunchtracker("Country Cat", "7937 SE Stark", "SE", "9:00 AM", "http://thecountrycat.net/#about", 45.519311,  -122.581655),
    new brunchtracker("Delta Cafe", "4607 SE Woodstock", "SE", "9:00 AM", "http://www.deltacafepdx.com/", 45.479384,  -122.615186),
    new brunchtracker("Hobnob Grill", "3350 SE Morrison", "SE", "9:00 AM", "http://www.hobnobgrille.com/", 45.517017,  -122.629747),
    new brunchtracker("Iconic Lounge", "2226 NE Broadway", "NE", "9:00 AM", "http://www.iconiclounge.com/#refresh-relax", 45.534779,  -122.642324),
    new brunchtracker("La Panza Cafe", "2425 SE 26th", "SE", "9:00 AM", "http://www.lapanzacafe.com/", 45.505023,  -122.63989),
    new brunchtracker("Pambiche", "2811 NE Glisan", "NE", "9:00 AM", "http://www.pambiche.com/", 45.526632,  -122.636827),
    new brunchtracker("Petisco", "1411 NE Broadway", "NE", "9:00 AM", "http://petiscopdx.com/", 45.535217,  -122.651077),
    new brunchtracker("Pho Corner", "6120 NE Sandy", "NE", "9:00 AM", "http://phocorner.com/", 45.543855,  -122.599685),
    new brunchtracker("Podnah's Pit", "1625 NE Killingsworth", "NE", "9:00 AM", "http://www.podnahspit.com/", 45.56288,  -122.648366),
    new brunchtracker("Redwood", "7915 SE Stark", "SE", "9:00 AM", "http://www.redwoodpdx.com/", 45.519306,  -122.582058),
    new brunchtracker("Roman Candle", "3377 SE Division", "SE", "9:00 AM", "http://www.romancandlebaking.com/", 45.505015,  -122.629875),
    new brunchtracker("Saint Honore Bakery", "3333 SE Division", "SE", "9:00 AM", "http://www.sainthonorebakery.com/view-our-division-location--locations-division", 45.504943,  -122.630794),
    new brunchtracker("Screen Door", "2337 E Burnside", "NE", "9:00 AM", "http://www.screendoorrestaurant.com/", 45.523105,  -122.641648),
    new brunchtracker("Suzette", "3342 SE Belmont", "SE", "9:00 AM", "http://www.suzettepdx.com/", 45.516313,  -122.630009),
    new brunchtracker("Tannery Bar", "5425 E Burnside", "NE", "9:00 AM", "http://www.tannerybarpdx.com/", 45.52304,  -122.607664),
    new brunchtracker("Tapalaya", "28 NE 28th", "NE", "9:00 AM", "http://www.tapalaya.com/", 45.523387,  -122.637052),
    new brunchtracker("Wild Abandon", "2411 SE Belmont", "SE", "9:00 AM", "http://www.wildabandonrestaurant.com/", 45.516674,  -122.641096),
    new brunchtracker("Woodsman Tavern", "4537 SE Division", "SE", "9:00 AM", "http://woodsmantavern.com/", 45.505515,  -122.615469),
    new brunchtracker("Ya Hala", "8005 SE Stark", "SE", "9:00 AM", "http://yahalarestaurant.com/", 45.51931,  -122.581254),
    new brunchtracker("Navarre", "10 NE 28th", "NE", "9:30 AM", "http://www.navarreportland.com/", 45.523128,  -122.63701),
    new brunchtracker("HK Cafe", "4410 SE 82nd", "SE", "9:30 AM", "http://www.hkcafeportland.com/", 45.490505,  -122.577961),
    new brunchtracker("Slide Inn", "2348 SE Ankeny", "SE", "9:30 AM", "http://www.slideinnpdx.com/", 45.521967,  -122.641668),
    new brunchtracker("Accanto", "2838 SE Belmont", "SE", "10:00 AM", "http://accantopdx.com/", 45.516269,  -122.636227),
    new brunchtracker("Ankeny Tap & Table", "2724 SE Ankeny", "SE", "10:00 AM", "http://www.ankenypdx.com/#welcome", 45.521993,  -122.637737),
    new brunchtracker("C Bar", "2880 SE Gladstone", "SE", "10:00 AM", "http://cbarportland.com/", 45.493205,  -122.635934),
    new brunchtracker("Dot's", "2521 SE Clinton", "SE", "10:00 AM", "http://dotscafeportland.com/", 45.503465,  -122.639862),
    new brunchtracker("EastBurn", "1800 E Burnside", "NE", "10:00 AM", "http://eastburn.pagecloud.com/", 45.522706,  -122.647316),
    new brunchtracker("Hale Pele", "2733 NE Broadway", "NE", "10:00 AM", "http://halepele.com/", 45.535379,  -122.637307),
    new brunchtracker("Hawthorne Hophouse", "4111 SE Hawthorne", "SE", "10:00 AM", "http://oregonhophouse.com/", 45.512159,  -122.619617),
    new brunchtracker("La Calaca Comelona", "2304 SE Belmont", "SE", "10:00 AM", "http://www.lacalacacomelona.com/", 45.51625,  -122.642176),
    new brunchtracker("Lamp", "3023 SE Milwaukie", "SE", "10:00 AM", "Yelp- wbst too slow to open- gives error msg", 45.500716,  -122.654527),
    new brunchtracker("Le Bistro Montage", "301 SE Morrison", "SE", "10:00 AM", "http://www.montageportland.com/", 45.51776,  -122.662654),
    new brunchtracker("Night Light Lounge", "2100 SE Clinton", "SE", "10:00 AM", "http://www.nightlightlounge.net/", 45.503251,  -122.644453),
    new brunchtracker("Olympic Provisions", "107 SE Washington", "SE", "10:00 AM", "http://www.olympiaprovisions.com/", 45.519022,  -122.664279),
    new brunchtracker("Oso Market + Bar", "726 SE Grand", "SE", "10:00 AM", "http://osomarket.com/", 45.517505,  -122.66041),
    new brunchtracker("Pono Farm Soul Kitchen", "4118 NE Sandy", "NE", "10:00 AM", "http://www.soulkitchenpdx.com/", 45.53538,  -122.621133),
    new brunchtracker("Roost", "1403 SE Belmont", "SE", "10:00 AM", "http://www.roostpdx.com/", 45.516673,  -122.651438),
    new brunchtracker("Smokehouse Tavern", "1401 SE Morrison St., Ste. 117", "SE", "10:00 AM", "http://www.smokehouse21.com/", 45.517773,  -122.651101),
    new brunchtracker("Tabor Tavern", "5325 E Burnside", "NE", "10:00 AM", "http://tabortavern.com/", 45.522865,  -122.608428),
    new brunchtracker("Sandy Hut", "1430 NE Sandy", "NE", "10:30 AM", "https://www.yelp.com/biz/the-sandy-hut-portland", 45.523766,  -122.650834),
    new brunchtracker("Circa 33", "3348 SE Belmont", "SE", "11:00 AM", "http://circa33.com/", 45.516313,  -122.62994),
    new brunchtracker("Horse Brass Pub", "4534 SE Belmont", "SE", "11:00 AM", "http://www.horsebrass.com/", 45.516411,  -122.615661),
    new brunchtracker("Ringside Grill", "14021 NE Glisan", "NE", "11:00 AM", "http://www.ringsidegrill.com/", 45.527038,  -122.51842),
    new brunchtracker("Apizza Scholls", "4741 SE Hawthorne", "SE", "11:30 AM", "http://www.apizzascholls.com/", 45.512267,  -122.613116)
];
