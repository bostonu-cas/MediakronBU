// Marker list
define(['../vendor/lunr.min'], function(lunr) {
    function init(callback) {
      console.log('loading filters');
      var data = {
            "name": "MapkeyIcons",
            "version": "1.2.0",
            "license": "CC0 1.0 Universal",
            "author": "Filip Zavadil",
            "organisation": "mapshakers",
            "types": ["sport", "brand", "gastronomy", "service", "industrial", "religion", "tourism", "freetime", "transport", "symbol", "building", "architecture", "urbanism"],
            "icons": [{
                "name": "mapshakers",
                "unicode": "e000",
                "decimal": 57344,
                "lang": {
                    "cs": "mapshakers",
                    "en": "mapshakers",
                    "de": "mapshakers"
                },
                "type": "brand",
                "keywords": "logo,mapshakers",
                "version": "1.0.0"
            }, {
                "name": "mapkey",
                "unicode": "e001",
                "decimal": 57345,
                "lang": {
                    "cs": "mapkey",
                    "en": "mapkey",
                    "de": "mapkey"
                },
                "type": "brand",
                "keywords": "mapkey,monkey",
                "version": "1.0.0"
            }, {
                "name": "bar",
                "unicode": "e003",
                "decimal": 57347,
                "lang": {
                    "cs": "bar",
                    "en": "bar",
                    "de": "bar"
                },
                "type": "service",
                "keywords": "drink,glass,bar,gastronomy,alcohol",
                "version": "1.0.0"
            }, {
                "name": "traffic_signal",
                "unicode": "e004",
                "decimal": 57348,
                "lang": {
                    "cs": "semafor",
                    "en": "traffic signal",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "semaphore,stoplight,traffic",
                "version": "1.0.0"
            }, {
                "name": "playground_alt",
                "unicode": "e005",
                "decimal": 57349,
                "lang": {
                    "cs": "dětské hřiště",
                    "en": "playground",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "pitch,jungle gym,slipway,child park,bech ball",
                "version": "1.0.0"
            }, {
                "name": "dentist",
                "unicode": "e006",
                "decimal": 57350,
                "lang": {
                    "cs": "zubní ordinace",
                    "en": "dentist",
                    "de": "---"
                },
                "type": "service",
                "keywords": "tooth,dental,back teeth,zub",
                "version": "1.0.0"
            }, {
                "name": "fishing",
                "unicode": "e007",
                "decimal": 57351,
                "lang": {
                    "cs": "rybaření",
                    "en": "fishing",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "fish,angler,fishing pole",
                "version": "1.0.0"
            }, {
                "name": "wind_generator",
                "unicode": "e008",
                "decimal": 57352,
                "lang": {
                    "cs": "větrná elektrárna",
                    "en": "wind generator",
                    "de": "---"
                },
                "type": "industrial",
                "keywords": "power,generator",
                "version": "1.0.0"
            }, {
                "name": "crucifix",
                "unicode": "e009",
                "decimal": 57353,
                "lang": {
                    "cs": "krucifix",
                    "en": "crucifix",
                    "de": "---"
                },
                "type": "religion",
                "keywords": "cross,religion,christian",
                "version": "1.0.0"
            }, {
                "name": "cave_entrance",
                "unicode": "e00a",
                "decimal": 57354,
                "lang": {
                    "cs": "jeskyně",
                    "en": "cave",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "cave,cavern,speleology",
                "version": "1.0.0"
            }, {
                "name": "castle_defensive",
                "unicode": "e00b",
                "decimal": 57355,
                "lang": {
                    "cs": "hrad",
                    "en": "castle defensive",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "architecture,history,building",
                "version": "1.0.0"
            }, {
                "name": "cinema",
                "unicode": "e00c",
                "decimal": 57356,
                "lang": {
                    "cs": "kino",
                    "en": "cinema",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "film,movie,screen",
                "version": "1.0.0"
            }, {
                "name": "water_tower",
                "unicode": "e00d",
                "decimal": 57357,
                "lang": {
                    "cs": "vodárenská věž",
                    "en": "water tower",
                    "de": "---"
                },
                "type": "industrial",
                "keywords": "water tank,duct",
                "version": "1.0.0"
            }, {
                "name": "boundary_stone",
                "unicode": "e00e",
                "decimal": 57358,
                "lang": {
                    "cs": "hraniční kámen",
                    "en": "boundary stone",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": ",",
                "version": "1.0.0"
            }, {
                "name": "zoo",
                "unicode": "e00f",
                "decimal": 57359,
                "lang": {
                    "cs": "zoo",
                    "en": "zoo",
                    "de": "zoo"
                },
                "type": "freetime",
                "keywords": "zoological,monkey,entertainment,animal",
                "version": "1.0.0"
            }, {
                "name": "cinema_alt",
                "unicode": "e010",
                "decimal": 57360,
                "lang": {
                    "cs": "kino",
                    "en": "cinema",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "film,movie,screen",
                "version": "1.0.0"
            }, {
                "name": "court_house",
                "unicode": "e011",
                "decimal": 57361,
                "lang": {
                    "cs": "soud",
                    "en": "courthouse",
                    "de": "---"
                },
                "type": "service",
                "keywords": "justice,scale,layer,building",
                "version": "1.0.0"
            }, {
                "name": "fort",
                "unicode": "e012",
                "decimal": 57362,
                "lang": {
                    "cs": "pevnost",
                    "en": "fort",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "history,architecture,castle,defensive,building",
                "version": "1.0.0"
            }, {
                "name": "fountain",
                "unicode": "e013",
                "decimal": 57363,
                "lang": {
                    "cs": "kašna",
                    "en": "fountain",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "water, refreshment",
                "version": "1.0.0"
            }, {
                "name": "library",
                "unicode": "e014",
                "decimal": 57364,
                "lang": {
                    "cs": "knihovna",
                    "en": "library",
                    "de": "---"
                },
                "type": "service",
                "keywords": "book,education",
                "version": "1.0.0"
            }, {
                "name": "rocks",
                "unicode": "e015",
                "decimal": 57365,
                "lang": {
                    "cs": "skála",
                    "en": "rocks",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "stone,geology",
                "version": "1.0.0"
            }, {
                "name": "cemetery",
                "unicode": "e016",
                "decimal": 57366,
                "lang": {
                    "cs": "hřbitov",
                    "en": "cemetery",
                    "de": "---"
                },
                "type": "urbanism",
                "keywords": "graves,zombies",
                "version": "1.0.0"
            }, {
                "name": "pub",
                "unicode": "e017",
                "decimal": 57367,
                "lang": {
                    "cs": "hospoda",
                    "en": "pub",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "gastronomy,beer,draft,drinks,alcohol",
                "version": "1.0.0"
            }, {
                "name": "buddhism",
                "unicode": "e018",
                "decimal": 57368,
                "lang": {
                    "cs": "budhismus",
                    "en": "buddhism",
                    "de": "---"
                },
                "type": "religion",
                "keywords": "worship,temple",
                "version": "1.0.0"
            }, {
                "name": "triangle",
                "unicode": "e019",
                "decimal": 57369,
                "lang": {
                    "cs": "výškový bod",
                    "en": "triangle",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "altitude,mountain,elevetion",
                "version": "1.0.0"
            }, {
                "name": "police",
                "unicode": "e01a",
                "decimal": 57370,
                "lang": {
                    "cs": "policie",
                    "en": "police station",
                    "de": "---"
                },
                "type": "service",
                "keywords": "cop,security,sheriff",
                "version": "1.0.0"
            }, {
                "name": "ice_ring",
                "unicode": "e01b",
                "decimal": 57371,
                "lang": {
                    "cs": "bruslení",
                    "en": "ice ring",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "ice skate",
                "version": "1.0.0"
            }, {
                "name": "marina",
                "unicode": "e01c",
                "decimal": 57372,
                "lang": {
                    "cs": "přístaviště",
                    "en": "marina",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "ship,landing,port,haven,harbor,anchor,grapnel,vessel,sea",
                "version": "1.0.0"
            }, {
                "name": "playground",
                "unicode": "e01d",
                "decimal": 57373,
                "lang": {
                    "cs": "dětské hřistě",
                    "en": "playground",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "pitch,jungle gym,slipway,child park",
                "version": "1.0.0"
            }, {
                "name": "ruins",
                "unicode": "e01e",
                "decimal": 57374,
                "lang": {
                    "cs": "zřícenina",
                    "en": "ruins",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "history,architecture,castle,building",
                "version": "1.0.0"
            }, {
                "name": "internet",
                "unicode": "e01f",
                "decimal": 57375,
                "lang": {
                    "cs": "internet",
                    "en": "internet",
                    "de": "---"
                },
                "type": "service",
                "keywords": "mail,at sign,connection,communication",
                "version": "1.0.0"
            }, {
                "name": "airport",
                "unicode": "e020",
                "decimal": 57376,
                "lang": {
                    "cs": "letiště",
                    "en": "airport",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "airfield,aerodrome,jet plane",
                "version": "1.0.0"
            }, {
                "name": "chapel",
                "unicode": "e021",
                "decimal": 57377,
                "lang": {
                    "cs": "kaple",
                    "en": "chapel",
                    "de": "---"
                },
                "type": "religion",
                "keywords": "christian,worship,church,cathedral,building",
                "version": "1.0.0"
            }, {
                "name": "museum",
                "unicode": "e022",
                "decimal": 57378,
                "lang": {
                    "cs": "muzeum",
                    "en": "museum",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "history,nature,building,architecture",
                "version": "1.0.0"
            }, {
                "name": "monument",
                "unicode": "e023",
                "decimal": 57379,
                "lang": {
                    "cs": "památníkk",
                    "en": "memorial",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "memorial,grave,commemorative panel",
                "version": "1.0.0"
            }, {
                "name": "sport_centre",
                "unicode": "e024",
                "decimal": 57380,
                "lang": {
                    "cs": "sportovní centrum",
                    "en": "sport centre",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "tennis,squash,health,sport areal,soccker ball",
                "version": "1.0.0"
            }, {
                "name": "information",
                "unicode": "e025",
                "decimal": 57381,
                "lang": {
                    "cs": "inforamce",
                    "en": "information",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "information office, information panel",
                "version": "1.0.0"
            }, {
                "name": "hospital",
                "unicode": "e026",
                "decimal": 57382,
                "lang": {
                    "cs": "nemocnice",
                    "en": "hospital",
                    "de": "---"
                },
                "type": "service",
                "keywords": "health,doctors,medic",
                "version": "1.0.0"
            }, {
                "name": "golf",
                "unicode": "e027",
                "decimal": 57383,
                "lang": {
                    "cs": "golf",
                    "en": "golf",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "freetime,flag",
                "version": "1.0.0"
            }, {
                "name": "picnic_site",
                "unicode": "e028",
                "decimal": 57384,
                "lang": {
                    "cs": "piknik",
                    "en": "picnic site",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "gastronomy",
                "version": "1.0.0"
            }, {
                "name": "drag_lift",
                "unicode": "e029",
                "decimal": 57385,
                "lang": {
                    "cs": "kotva",
                    "en": "drag lift",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "skiing,snowboarding,winter holiday,anchor",
                "version": "1.0.0"
            }, {
                "name": "construction",
                "unicode": "e02a",
                "decimal": 57386,
                "lang": {
                    "cs": "výstavba",
                    "en": "construction",
                    "de": "---"
                },
                "type": "industrial",
                "keywords": "hammer,building-up,editing",
                "version": "1.0.0"
            }, {
                "name": "islamism",
                "unicode": "e02b",
                "decimal": 57387,
                "lang": {
                    "cs": "islám",
                    "en": "islamism",
                    "de": "---"
                },
                "type": "religion",
                "keywords": "mosque,minaret,worship",
                "version": "1.0.0"
            }, {
                "name": "vineyard",
                "unicode": "e02c",
                "decimal": 57388,
                "lang": {
                    "cs": "vinohrad",
                    "en": "vineyard",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "grapes,vinery",
                "version": "1.0.0"
            }, {
                "name": "lighthouse",
                "unicode": "e02d",
                "decimal": 57389,
                "lang": {
                    "cs": "maják",
                    "en": "lighthouse",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "beacon,pharos",
                "version": "1.0.0"
            }, {
                "name": "tower",
                "unicode": "e02e",
                "decimal": 57390,
                "lang": {
                    "cs": "věž",
                    "en": "tower",
                    "de": "---"
                },
                "type": "architecture",
                "keywords": "building,historical",
                "version": "1.0.0"
            }, {
                "name": "wayside_cross",
                "unicode": "e02f",
                "decimal": 57391,
                "lang": {
                    "cs": "boží muka",
                    "en": "wayside_cross",
                    "de": "---"
                },
                "type": "religion",
                "keywords": "worship,christian,calvary",
                "version": "1.0.0"
            }, {
                "name": "theatre",
                "unicode": "e030",
                "decimal": 57392,
                "lang": {
                    "cs": "divadlo",
                    "en": "theatre",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "amphitheare,drama,mask,play,comedy,tragedy,entertainment,building",
                "version": "1.0.0"
            }, {
                "name": "train",
                "unicode": "e031",
                "decimal": 57393,
                "lang": {
                    "cs": "železnice",
                    "en": "train",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "rail,railway,station",
                "version": "1.0.0"
            }, {
                "name": "viewpoint",
                "unicode": "e032",
                "decimal": 57394,
                "lang": {
                    "cs": "vyhlídka",
                    "en": "viewpoint",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "lookout,telescope,binoculars",
                "version": "1.0.0"
            }, {
                "name": "tram",
                "unicode": "e033",
                "decimal": 57395,
                "lang": {
                    "cs": "tramvaj",
                    "en": "tram",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "public transport,lightrail,trolley",
                "version": "1.0.0"
            }, {
                "name": "tree_cinofer",
                "unicode": "e034",
                "decimal": 57396,
                "lang": {
                    "cs": "jehličnatý strom",
                    "en": "tree conifer",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "spruce,pine,forest",
                "version": "1.0.0"
            }, {
                "name": "university",
                "unicode": "e035",
                "decimal": 57397,
                "lang": {
                    "cs": "univerzita",
                    "en": "university",
                    "de": "---"
                },
                "type": "service",
                "keywords": "education,college,school,campus,building",
                "version": "1.0.0"
            }, {
                "name": "tram_stop",
                "unicode": "e036",
                "decimal": 57398,
                "lang": {
                    "cs": "zastávka tramvaj",
                    "en": "tram stop",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "tramway,public transport",
                "version": "1.0.0"
            }, {
                "name": "underground",
                "unicode": "e037",
                "decimal": 57399,
                "lang": {
                    "cs": "metro",
                    "en": "underground",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "metro,tube,public transport,station",
                "version": "1.0.0"
            }, {
                "name": "adit",
                "unicode": "e038",
                "decimal": 57400,
                "lang": {
                    "cs": "důl",
                    "en": "adit",
                    "de": "---"
                },
                "type": "industrial",
                "keywords": "mine, quarry,hammers, extraction, shaft",
                "version": "1.0.0"
            }, {
                "name": "post_office",
                "unicode": "e039",
                "decimal": 57401,
                "lang": {
                    "cs": "pošta",
                    "en": "post office",
                    "de": "---"
                },
                "type": "service",
                "keywords": "mail,communication",
                "version": "1.0.0"
            }, {
                "name": "spring",
                "unicode": "e03a",
                "decimal": 57402,
                "lang": {
                    "cs": "voda",
                    "en": "spring",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "drop,lake,pond",
                "version": "1.0.0"
            }, {
                "name": "stadium",
                "unicode": "e03b",
                "decimal": 57403,
                "lang": {
                    "cs": "stadión",
                    "en": "stadium",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "football,soccer,baseball,games",
                "version": "1.0.0"
            }, {
                "name": "swimming_pool",
                "unicode": "e03c",
                "decimal": 57404,
                "lang": {
                    "cs": "bazén",
                    "en": "swimming pool",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "water,bath,basin",
                "version": "1.0.0"
            }, {
                "name": "cityhall",
                "unicode": "e03d",
                "decimal": 57405,
                "lang": {
                    "cs": "radnice",
                    "en": "city hall",
                    "de": "---"
                },
                "type": "service",
                "keywords": "town hall,guildhall,building",
                "version": "1.0.0"
            }, {
                "name": "bus",
                "unicode": "e03e",
                "decimal": 57406,
                "lang": {
                    "cs": "městský autobus",
                    "en": "bus",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "public transport,single-decker",
                "version": "1.0.0"
            }, {
                "name": "volcano",
                "unicode": "e03f",
                "decimal": 57407,
                "lang": {
                    "cs": "sopka",
                    "en": "volcano",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "magma,lava,mouintain",
                "version": "1.0.0"
            }, {
                "name": "architecture",
                "unicode": "e040",
                "decimal": 57408,
                "lang": {
                    "cs": "architektura",
                    "en": "architecture",
                    "de": "---"
                },
                "type": "architecture",
                "keywords": "pillar,column,pole,building",
                "version": "1.0.0"
            }, {
                "name": "arrow_up",
                "unicode": "e041",
                "decimal": 57409,
                "lang": {
                    "cs": "šipka nahoru",
                    "en": "arrow up",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "sign,direction,north",
                "version": "1.0.0"
            }, {
                "name": "archaeological",
                "unicode": "e042",
                "decimal": 57410,
                "lang": {
                    "cs": "archeologie",
                    "en": "archaeology",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "habitat,civilization",
                "version": "1.0.0"
            }, {
                "name": "arrow_up_double",
                "unicode": "e043",
                "decimal": 57411,
                "lang": {
                    "cs": "šipka nahoru zdvojená",
                    "en": "double arrow up",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "sign,direction,north",
                "version": "1.0.0"
            }, {
                "name": "building",
                "unicode": "e044",
                "decimal": 57412,
                "lang": {
                    "cs": "budova",
                    "en": "building",
                    "de": "---"
                },
                "type": "architecture",
                "keywords": "skyscraper,high-rise",
                "version": "1.0.0"
            }, {
                "name": "toilet",
                "unicode": "e045",
                "decimal": 57413,
                "lang": {
                    "cs": "WC",
                    "en": "toilet",
                    "de": "---"
                },
                "type": "service",
                "keywords": "WC,closet,toilette",
                "version": "1.0.0"
            }, {
                "name": "watermill",
                "unicode": "e046",
                "decimal": 57414,
                "lang": {
                    "cs": "vodní mlýn",
                    "en": "watermill",
                    "de": "---"
                },
                "type": "building",
                "keywords": "flour,outdoor museum",
                "version": "1.0.0"
            }, {
                "name": "pharmacy",
                "unicode": "e047",
                "decimal": 57415,
                "lang": {
                    "cs": "lékárna",
                    "en": "pharmacy",
                    "de": "---"
                },
                "type": "service",
                "keywords": "health,drugs,chemist,apotheca",
                "version": "1.0.0"
            }, {
                "name": "waterpark",
                "unicode": "e048",
                "decimal": 57416,
                "lang": {
                    "cs": " aquapark",
                    "en": "water park",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "swimming pool,entertainment",
                "version": "1.0.0"
            }, {
                "name": "viewtower",
                "unicode": "e049",
                "decimal": 57417,
                "lang": {
                    "cs": "rozhledna",
                    "en": "viewtower",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "viewpoint,building",
                "version": "1.0.0"
            }, {
                "name": "city",
                "unicode": "e04a",
                "decimal": 57418,
                "lang": {
                    "cs": "velkoměsto",
                    "en": "city",
                    "de": "---"
                },
                "type": "urbanism",
                "keywords": "houses,skyscraper,building",
                "version": "1.0.0"
            }, {
                "name": "battlefield",
                "unicode": "e04b",
                "decimal": 57419,
                "lang": {
                    "cs": "bojiště",
                    "en": "battlefield",
                    "de": "---"
                },
                "type": "memorial",
                "keywords": "sword,war",
                "version": "1.0.0"
            }, {
                "name": "clean",
                "unicode": "e04c",
                "decimal": 57420,
                "lang": {
                    "cs": "uklidit",
                    "en": "clean",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "remove,brush,whisk broom",
                "version": "1.0.0"
            }, {
                "name": "judaism",
                "unicode": "e04d",
                "decimal": 57421,
                "lang": {
                    "cs": "židovství",
                    "en": "judaism",
                    "de": "---"
                },
                "type": "religion",
                "keywords": "worship,synagogue,star",
                "version": "1.0.0"
            }, {
                "name": "christianism",
                "unicode": "e04e",
                "decimal": 57422,
                "lang": {
                    "cs": "křesťanství",
                    "en": "christianism",
                    "de": "---"
                },
                "type": "religion",
                "keywords": "crucifix,worship",
                "version": "1.0.0"
            }, {
                "name": "crown",
                "unicode": "e04f",
                "decimal": 57423,
                "lang": {
                    "cs": "koruna",
                    "en": "crown",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "kingdom,queen",
                "version": "1.0.0"
            }, {
                "name": "restaurant",
                "unicode": "e050",
                "decimal": 57424,
                "lang": {
                    "cs": "restaurace",
                    "en": "restaurant",
                    "de": "---"
                },
                "type": "gastronomy",
                "keywords": "inn,tavern,meal,cutlery,fork,knife,dinner",
                "version": "1.0.0"
            }, {
                "name": "windmill",
                "unicode": "e051",
                "decimal": 57425,
                "lang": {
                    "cs": "větrný mlýn",
                    "en": "windmill",
                    "de": "---"
                },
                "type": "building",
                "keywords": "outdoor museum,flour,mill",
                "version": "1.0.0"
            }, {
                "name": "caravan_site",
                "unicode": "e052",
                "decimal": 57426,
                "lang": {
                    "cs": "karavan",
                    "en": "caravan site",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "camp,accommodation",
                "version": "1.0.0"
            }, {
                "name": "castle",
                "unicode": "e053",
                "decimal": 57427,
                "lang": {
                    "cs": "zámek",
                    "en": "castle",
                    "de": "---"
                },
                "type": "tourims",
                "keywords": "building,architecture,stately",
                "version": "1.0.0"
            }, {
                "name": "camp_site",
                "unicode": "e054",
                "decimal": 57428,
                "lang": {
                    "cs": "tábořistě",
                    "en": "campsite",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "accommodation",
                "version": "1.0.0"
            }, {
                "name": "cable_car",
                "unicode": "e055",
                "decimal": 57429,
                "lang": {
                    "cs": "lanová dráha",
                    "en": "cable car",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "transport,lift,funicular",
                "version": "1.0.0"
            }, {
                "name": "bus_stop",
                "unicode": "e056",
                "decimal": 57430,
                "lang": {
                    "cs": "autobusová zastávka",
                    "en": "bus stop",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "school bus,public transport",
                "version": "1.0.0"
            }, {
                "name": "bicycle",
                "unicode": "e057",
                "decimal": 57431,
                "lang": {
                    "cs": "cyklistika",
                    "en": "bicycle",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "bike,velocipede,cycling,biking",
                "version": "1.0.0"
            }, {
                "name": "drop",
                "unicode": "e058",
                "decimal": 57432,
                "lang": {
                    "cs": "kapka",
                    "en": "drop",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "lake,sea,pond,pool,water",
                "version": "1.0.0"
            }, {
                "name": "beach",
                "unicode": "e059",
                "decimal": 57433,
                "lang": {
                    "cs": "pláž",
                    "en": "beach",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "sun bathing,swimming,umbrella",
                "version": "1.0.0"
            }, {
                "name": "water_well",
                "unicode": "e05a",
                "decimal": 57434,
                "lang": {
                    "cs": "studna",
                    "en": "water well",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "drinking water",
                "version": "1.0.0"
            }, {
                "name": "tree_leaf",
                "unicode": "e05b",
                "decimal": 57435,
                "lang": {
                    "cs": "listnáč",
                    "en": "tree leaf",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "forest,wood,",
                "version": "1.0.0"
            }, {
                "name": "bag",
                "unicode": "e05c",
                "decimal": 57436,
                "lang": {
                    "cs": "batoh",
                    "en": "bag",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "backpack,knapsack,rucksack ",
                "version": "1.0.0"
            }, {
                "name": "barracks",
                "unicode": "e05d",
                "decimal": 57437,
                "lang": {
                    "cs": "kasárna",
                    "en": "barracks",
                    "de": "---"
                },
                "type": "building",
                "keywords": "army",
                "version": "1.0.0"
            }, {
                "name": "laptop",
                "unicode": "e05e",
                "decimal": 57438,
                "lang": {
                    "cs": "notebook",
                    "en": "laptop",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "notebook,computer",
                "version": "1.0.0"
            }, {
                "name": "waterwork",
                "unicode": "e05f",
                "decimal": 57439,
                "lang": {
                    "cs": "vodní dílo",
                    "en": "waterwork",
                    "de": "---"
                },
                "type": "industry",
                "keywords": "dam,reservoir",
                "version": "1.0.0"
            }, {
                "name": "mountain",
                "unicode": "e060",
                "decimal": 57440,
                "lang": {
                    "cs": "hora",
                    "en": "mountain",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "peak,promontory,hill",
                "version": "1.0.0"
            }, {
                "name": "home",
                "unicode": "e061",
                "decimal": 57441,
                "lang": {
                    "cs": "domov",
                    "en": "home",
                    "de": "---"
                },
                "type": "building",
                "keywords": "house,symbol",
                "version": "1.0.0"
            }, {
                "name": "hostel",
                "unicode": "e062",
                "decimal": 57442,
                "lang": {
                    "cs": "hostel",
                    "en": "hostel",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "accommodation,bed,housing",
                "version": "1.0.0"
            }, {
                "name": "hotel",
                "unicode": "e063",
                "decimal": 57443,
                "lang": {
                    "cs": "hotel",
                    "en": "hotel",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "accommodation,bed,housing",
                "version": "1.0.0"
            }, {
                "name": "hotel_alt",
                "unicode": "e064",
                "decimal": 57444,
                "lang": {
                    "cs": "hotel",
                    "en": "hotel",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "accommodation,bed,housing",
                "version": "1.0.0"
            }, {
                "name": "mall",
                "unicode": "e065",
                "decimal": 57445,
                "lang": {
                    "cs": "obchodní dům",
                    "en": "mall",
                    "de": "---"
                },
                "type": "service",
                "keywords": "trade,commerce,merchant",
                "version": "1.0.0"
            }, {
                "name": "market_place",
                "unicode": "e066",
                "decimal": 57446,
                "lang": {
                    "cs": "tržnice",
                    "en": "market place",
                    "de": "---"
                },
                "type": "service",
                "keywords": "trade,commerce,merchant",
                "version": "1.0.0"
            }, {
                "name": "cartography",
                "unicode": "e067",
                "decimal": 57447,
                "lang": {
                    "cs": "kartografie",
                    "en": "cartography",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "street,area",
                "version": "1.0.0"
            }, {
                "name": "pitch",
                "unicode": "e068",
                "decimal": 57448,
                "lang": {
                    "cs": "hřbitov",
                    "en": "pitch",
                    "de": "---"
                },
                "type": "sport",
                "keywords": "playgorund,field,soccer",
                "version": "1.0.0"
            }, {
                "name": "shelter",
                "unicode": "e069",
                "decimal": 57449,
                "lang": {
                    "cs": "přístřešek",
                    "en": "shelter",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "shed,porch",
                "version": "1.0.0"
            }, {
                "name": "saddle",
                "unicode": "e06a",
                "decimal": 57450,
                "lang": {
                    "cs": "horské sedlo",
                    "en": "saddle",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "landform,geology",
                "version": "1.0.0"
            }, {
                "name": "sinkhole",
                "unicode": "e06b",
                "decimal": 57451,
                "lang": {
                    "cs": "závrt",
                    "en": "sinkhole",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "landform,cenote,doline,geology",
                "version": "1.0.0"
            }, {
                "name": "supermarket",
                "unicode": "e06c",
                "decimal": 57452,
                "lang": {
                    "cs": "supermarket",
                    "en": "supermarket",
                    "de": "---"
                },
                "type": "service",
                "keywords": "trade,commerce,merchant",
                "version": "1.0.0"
            }, {
                "name": "telephone",
                "unicode": "e06d",
                "decimal": 57453,
                "lang": {
                    "cs": "telefon",
                    "en": "telephone",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "phone booth,blower,communication",
                "version": "1.0.0"
            }, {
                "name": "stupa",
                "unicode": "e06e",
                "decimal": 57454,
                "lang": {
                    "cs": "stupa",
                    "en": "stupa",
                    "de": "---"
                },
                "type": "religion",
                "keywords": "buddhismm,worship",
                "version": "1.0.0"
            }, {
                "name": "magnifier",
                "unicode": "e06f",
                "decimal": 57455,
                "lang": {
                    "cs": "lupa",
                    "en": "magnifier",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "zoom,find,eyeglass ,sun glass,loupe",
                "version": "1.0.0"
            }, {
                "name": "flag",
                "unicode": "e070",
                "decimal": 57456,
                "lang": {
                    "cs": "prapor",
                    "en": "flag",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "banner",
                "version": "1.0.0"
            }, {
                "name": "eye",
                "unicode": "e071",
                "decimal": 57457,
                "lang": {
                    "cs": "oko",
                    "en": "eye",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "visible",
                "version": "1.0.0"
            }, {
                "name": "gallery",
                "unicode": "e072",
                "decimal": 57458,
                "lang": {
                    "cs": "galerie",
                    "en": "gallery",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "paintings,art,photo,frame",
                "version": "1.0.0"
            }, {
                "name": "gear",
                "unicode": "e073",
                "decimal": 57459,
                "lang": {
                    "cs": "převod",
                    "en": "gear",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "settings,",
                "version": "1.0.0"
            }, {
                "name": "map",
                "unicode": "e074",
                "decimal": 57460,
                "lang": {
                    "cs": "mapa",
                    "en": "map",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "cartography",
                "version": "1.0.0"
            }, {
                "name": "island",
                "unicode": "e075",
                "decimal": 57461,
                "lang": {
                    "cs": "ostrov",
                    "en": "island",
                    "de": "---"
                },
                "type": "urbanism",
                "keywords": "",
                "version": "1.0.0"
            }, {
                "name": "marker",
                "unicode": "e076",
                "decimal": 57462,
                "lang": {
                    "cs": "znak",
                    "en": "marker",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "map,here you are",
                "version": "1.0.0"
            }, {
                "name": "nature",
                "unicode": "e077",
                "decimal": 57463,
                "lang": {
                    "cs": "příroda",
                    "en": "nature",
                    "de": "---"
                },
                "type": "nature",
                "keywords": "leaf,reservation,",
                "version": "1.0.0"
            }, {
                "name": "square",
                "unicode": "e078",
                "decimal": 57464,
                "lang": {
                    "cs": "náměstí",
                    "en": "square",
                    "de": "---"
                },
                "type": "urbanism",
                "keywords": "city centre,downtown",
                "version": "1.0.0"
            }, {
                "name": "ticket",
                "unicode": "e079",
                "decimal": 57465,
                "lang": {
                    "cs": "lístek",
                    "en": "ticket",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "box-office,ticket office",
                "version": "1.0.0"
            }, {
                "name": "star",
                "unicode": "e07a",
                "decimal": 57466,
                "lang": {
                    "cs": "hvězda",
                    "en": "star",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "favorite",
                "version": "1.0.0"
            }, {
                "name": "town",
                "unicode": "e07b",
                "decimal": 57467,
                "lang": {
                    "cs": "město",
                    "en": "town",
                    "de": "---"
                },
                "type": "urbanism",
                "keywords": "building,houses",
                "version": "1.0.0"
            }, {
                "name": "village",
                "unicode": "e07c",
                "decimal": 57468,
                "lang": {
                    "cs": "vesnice",
                    "en": "village",
                    "de": "---"
                },
                "type": "urbanism",
                "keywords": "building,houses",
                "version": "1.0.0"
            }, {
                "name": "unesco",
                "unicode": "e07d",
                "decimal": 57469,
                "lang": {
                    "cs": "unesco",
                    "en": "unesco",
                    "de": "---"
                },
                "type": "tourism",
                "keywords": "symbol,heritage,natural,cultural",
                "version": "1.0.0"
            }, {
                "name": "facebook",
                "unicode": "e07e",
                "decimal": 57470,
                "lang": {
                    "cs": "facebook",
                    "en": "facebook",
                    "de": "---"
                },
                "type": "brand",
                "keywords": "social,company",
                "version": "1.0.0"
            }, {
                "name": "github",
                "unicode": "e07f",
                "decimal": 57471,
                "lang": {
                    "cs": "github",
                    "en": "github",
                    "de": "---"
                },
                "type": "brand",
                "keywords": "social,company",
                "version": "1.0.0"
            }, {
                "name": "linkedin",
                "unicode": "e080",
                "decimal": 57472,
                "lang": {
                    "cs": "linkedin",
                    "en": "linkedin",
                    "de": "---"
                },
                "type": "brand",
                "keywords": "social,company",
                "version": "1.0.0"
            }, {
                "name": "skype",
                "unicode": "e081",
                "decimal": 57473,
                "lang": {
                    "cs": "skype",
                    "en": "skype",
                    "de": "---"
                },
                "type": "brand",
                "keywords": "communication,company",
                "version": "1.0.0"
            }, {
                "name": "data",
                "unicode": "e082",
                "decimal": 57474,
                "lang": {
                    "cs": "data",
                    "en": "data",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "database,harddisc",
                "version": "1.0.0"
            }, {
                "name": "database",
                "unicode": "e083",
                "decimal": 57475,
                "lang": {
                    "cs": "databáze",
                    "en": "database",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "data,security",
                "version": "1.0.0"
            }, {
                "name": "analyse",
                "unicode": "e084",
                "decimal": 57476,
                "lang": {
                    "cs": "analýza",
                    "en": "analyse",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "settings",
                "version": "1.0.0"
            }, {
                "name": "atm",
                "unicode": "e085",
                "decimal": 57477,
                "lang": {
                    "cs": "bankomat",
                    "en": "atm",
                    "de": "---"
                },
                "type": "service",
                "keywords": "notes,bank,cash,money,credit card,automatic teller machine",
                "version": "1.0.0"
            }, {
                "name": "avatar",
                "unicode": "e086",
                "decimal": 57478,
                "lang": {
                    "cs": "avatar",
                    "en": "avatar",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "person,user,man,client",
                "version": "1.0.0"
            }, {
                "name": "burger",
                "unicode": "e087",
                "decimal": 57479,
                "lang": {
                    "cs": "hamburger",
                    "en": "hamburger",
                    "de": "---"
                },
                "type": "gastronomy",
                "keywords": "fast food,meal",
                "version": "1.0.0"
            }, {
                "name": "cash",
                "unicode": "e088",
                "decimal": 57480,
                "lang": {
                    "cs": "hotovost",
                    "en": "cash",
                    "de": "---"
                },
                "type": "service",
                "keywords": "notes,money,dollar,euro",
                "version": "1.0.0"
            }, {
                "name": "contour",
                "unicode": "e089",
                "decimal": 57481,
                "lang": {
                    "cs": "vrstevnice",
                    "en": "contour line",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "elevation,contour line,isoline,isopleth,isarithm",
                "version": "1.0.0"
            }, {
                "name": "download",
                "unicode": "e08a",
                "decimal": 57482,
                "lang": {
                    "cs": "download",
                    "en": "download",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "download",
                "version": "1.0.0"
            }, {
                "name": "upload",
                "unicode": "e08b",
                "decimal": 57483,
                "lang": {
                    "cs": "upload",
                    "en": "upload",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "upload",
                "version": "1.0.0"
            }, {
                "name": "heart",
                "unicode": "e08c",
                "decimal": 57484,
                "lang": {
                    "cs": "srdce",
                    "en": "heart",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "love,like,favourite,health",
                "version": "1.0.0"
            }, {
                "name": "invisible",
                "unicode": "e08d",
                "decimal": 57485,
                "lang": {
                    "cs": "neviditelný",
                    "en": "invisible",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "closed eye,hide,non-eye",
                "version": "1.0.0"
            }, {
                "name": "school",
                "unicode": "e08e",
                "decimal": 57486,
                "lang": {
                    "cs": "škola",
                    "en": "school",
                    "de": "---"
                },
                "type": "service",
                "keywords": "owl,wisdom,education,animal,bird",
                "version": "1.0.0"
            }, {
                "name": "mine",
                "unicode": "e08f",
                "decimal": 57487,
                "lang": {
                    "cs": "lom",
                    "en": "mine",
                    "de": "---"
                },
                "type": "industrial",
                "keywords": "pick,hammer,adit,mine shaft,quarry,extraction,ore",
                "version": "1.0.0"
            }, {
                "name": "smartphone",
                "unicode": "e090",
                "decimal": 57488,
                "lang": {
                    "cs": "chytrý telefon",
                    "en": "smartphone",
                    "de": "---"
                },
                "type": "industrial",
                "keywords": "smart phone,cell phone,communication",
                "version": "1.0.0"
            }, {
                "name": "oppositeway",
                "unicode": "e091",
                "decimal": 57489,
                "lang": {
                    "cs": "protisměrka",
                    "en": "opposite way",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "road signs",
                "version": "1.1.0"
            }, {
                "name": "seal",
                "unicode": "e092",
                "decimal": 57490,
                "lang": {
                    "cs": "lachtan",
                    "en": "seal",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "amusement park,zoo,dolphinarium,animal",
                "version": "1.1.0"
            }, {
                "name": "lock",
                "unicode": "e093",
                "decimal": 57491,
                "lang": {
                    "cs": "visací zámek",
                    "en": "lock",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "padlock,security",
                "version": "1.1.0"
            }, {
                "name": "car",
                "unicode": "e094",
                "decimal": 57492,
                "lang": {
                    "cs": "automobil",
                    "en": "car",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "auto, automobil",
                "version": "1.1.0"
            }, {
                "name": "music",
                "unicode": "e095",
                "decimal": 57493,
                "lang": {
                    "cs": "hudba",
                    "en": "music",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "dance,song,note,sheet,symbol",
                "version": "1.1.0"
            }, {
                "name": "disabled",
                "unicode": "e096",
                "decimal": 57494,
                "lang": {
                    "cs": "postižený",
                    "en": "disabled",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "wheelchair,immobile",
                "version": "1.1.0"
            }, {
                "name": "parking",
                "unicode": "e097",
                "decimal": 57495,
                "lang": {
                    "cs": "parking",
                    "en": "parkoviště",
                    "de": "---"
                },
                "type": "urbanism",
                "keywords": "parking lot,car park,transport,road signs",
                "version": "1.1.0"
            }, {
                "name": "fuel",
                "unicode": "e098",
                "decimal": 57496,
                "lang": {
                    "cs": "čerpací stanice",
                    "en": "fuel",
                    "de": "---"
                },
                "type": "service",
                "keywords": "gas,pump station,gas station,petrol station,filling station, ",
                "version": "1.1.0"
            }, {
                "name": "fuel_alt",
                "unicode": "e099",
                "decimal": 57497,
                "lang": {
                    "cs": "čerpací stanice",
                    "en": "fuel",
                    "de": "---"
                },
                "type": "service",
                "keywords": "gas,pump station,gas station,petrol station,filling station, ",
                "version": "1.1.0"
            }, {
                "name": "nonsmoking",
                "unicode": "e09a",
                "decimal": 57498,
                "lang": {
                    "cs": "nekuřáctví",
                    "en": "nonsmoking",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "no smoking,cigarette,fag,gasper",
                "version": "1.1.0"
            }, {
                "name": "smoking",
                "unicode": "e09b",
                "decimal": 57499,
                "lang": {
                    "cs": "kuřáctví",
                    "en": "smoking",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "cigarette,fag,gasper",
                "version": "1.1.0"
            }, {
                "name": "fire",
                "unicode": "e09c",
                "decimal": 57500,
                "lang": {
                    "cs": "oheň",
                    "en": "fire",
                    "de": "---"
                },
                "type": "service",
                "keywords": "fire department,firemen,gas,hearth",
                "version": "1.1.0"
            }, {
                "name": "helicopter",
                "unicode": "e09d",
                "decimal": 57501,
                "lang": {
                    "cs": "vrtulník",
                    "en": "helicopter",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "chopper,copter,whirlybird,helipad,heliport",
                "version": "1.1.0"
            }, {
                "name": "dislike",
                "unicode": "e09e",
                "decimal": 57502,
                "lang": {
                    "cs": "dislike",
                    "en": "dislike",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "dislike",
                "version": "1.1.0"
            }, {
                "name": "like",
                "unicode": "e09f",
                "decimal": 57503,
                "lang": {
                    "cs": "like",
                    "en": "like",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "like,facebook,favourite",
                "version": "1.1.0"
            }, {
                "name": "north",
                "unicode": "e0a0",
                "decimal": 57504,
                "lang": {
                    "cs": "north",
                    "en": "north",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "Cardinal direction,north,indicator,pointer",
                "version": "1.1.0"
            }, {
                "name": "north_alt",
                "unicode": "e0a1",
                "decimal": 57505,
                "lang": {
                    "cs": "north",
                    "en": "north",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "Cardinal direction,north,indicator,pointer",
                "version": "1.1.0"
            }, {
                "name": "north_alt_II",
                "unicode": "e0a2",
                "decimal": 57506,
                "lang": {
                    "cs": "north",
                    "en": "north",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "Cardinal direction,north,indicator,pointer",
                "version": "1.1.0"
            }, {
                "name": "north_alt_III",
                "unicode": "e0a3",
                "decimal": 57507,
                "lang": {
                    "cs": "north",
                    "en": "north",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "Cardinal direction,north,indicator,pointer",
                "version": "1.1.0"
            }, {
                "name": "compass",
                "unicode": "e0a4",
                "decimal": 57508,
                "lang": {
                    "cs": "kompas",
                    "en": "compass",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "Cardinal direction,north,west,east,south",
                "version": "1.1.0"
            }, {
                "name": "compass_alt",
                "unicode": "e0a5",
                "decimal": 57509,
                "lang": {
                    "cs": "kompas",
                    "en": "compass",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "Cardinal direction,north,west,east,south",
                "version": "1.1.0"
            }, {
                "name": "nocamera",
                "unicode": "e0a6",
                "decimal": 57510,
                "lang": {
                    "cs": "zákaz fotografování",
                    "en": "no camera",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "no photo,No Photography",
                "version": "1.1.0"
            }, {
                "name": "camera",
                "unicode": "e0a7",
                "decimal": 57511,
                "lang": {
                    "cs": "fotoaparát",
                    "en": "camera",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "free time, photo",
                "version": "1.1.0"
            }, {
                "name": "lion",
                "unicode": "e0a8",
                "decimal": 57512,
                "lang": {
                    "cs": "lev",
                    "en": "lion",
                    "de": "---"
                },
                "type": "freetime",
                "keywords": "zoo,animal,sahara",
                "version": "1.1.0"
            }, {
                "name": "forbidden",
                "unicode": "e0a9",
                "decimal": 57513,
                "lang": {
                    "cs": "zakázano",
                    "en": "forbidden",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "ban,prohibition,veto,impossibility",
                "version": "1.1.0"
            }, {
                "name": "stop",
                "unicode": "e0aa",
                "decimal": 57514,
                "lang": {
                    "cs": "stop",
                    "en": "stop",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "traffic signs",
                "version": "1.1.0"
            }, {
                "name": "go",
                "unicode": "e0ab",
                "decimal": 57515,
                "lang": {
                    "cs": "volno",
                    "en": "go",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "play",
                "version": "1.1.0"
            }, {
                "name": "sailboat",
                "unicode": "e0ac",
                "decimal": 57516,
                "lang": {
                    "cs": "plachetnice",
                    "en": "sail boat",
                    "de": "---"
                },
                "type": "transport",
                "keywords": "ship,boat",
                "version": "1.1.0"
            }, {
                "name": "bars",
                "unicode": "e0ad",
                "decimal": 57517,
                "lang": {
                    "cs": "bars",
                    "en": "bars",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "menu",
                "version": "1.2.0"
            }, {
                "name": "pinterest",
                "unicode": "e0ae",
                "decimal": 57518,
                "lang": {
                    "cs": "pinterest",
                    "en": "pinterest",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "brand",
                "version": "1.2.0"
            }, {
                "name": "magic_portal",
                "unicode": "e0af",
                "decimal": 57519,
                "lang": {
                    "cs": "portál",
                    "en": "magic portal",
                    "de": "---"
                },
                "type": "architecture",
                "keywords": "symbol,magic,gate",
                "version": "1.2.0"
            }, {
                "name": "pyramid",
                "unicode": "e0b0",
                "decimal": 57520,
                "lang": {
                    "cs": "pyramida",
                    "en": "pyramid",
                    "de": "---"
                },
                "type": "architecture",
                "keywords": "egypt,desert,tomb,crypt",
                "version": "1.2.0"
            }, {
                "name": "pdf",
                "unicode": "e0b1",
                "decimal": 57521,
                "lang": {
                    "cs": "pdf",
                    "en": "pdf",
                    "de": "---"
                },
                "type": "symbol",
                "keywords": "pdf,file,export,",
                "version": "1.2.0"
            }]
        };
    
        var icons = data.icons;
        var span = $('#admin-edit-layer #icon');
        var searchinput = $('#admin-edit-layer #search_input');
        console.log(searchinput);
        var search = $('#admin-edit-layer #search');
        var types = $('#admin-edit-layer #types');
        var overlay = $('#admin-edit-layer #overlay');
        var overlayContent = $('#admin-edit-layer #overlay_content');
        $('#admin-edit-layer #version').html(data.version)
        $('#admin-edit-layer #count').html(icons.length)
        searchinput.on('focus', function() {
            search.addClass('focus')
        });
        searchinput.on('blur', function() {
            search.removeClass('focus')
        });
        setInterval(function() {
            var index = Math.floor((Math.random() * icons.length - 1) + 1);
            var name = icons[index].name
            span.fadeOut(500, function() {
                span.removeClass();
                span.addClass('mki mki-' + name)
                span.fadeIn()
            });
        }, 2000);
        var iconsWrapper = $('#admin-edit-layer #icons-wrapper')
        showAllIcons()

            function showAllIcons() {
                iconsWrapper.empty();
                for (var i = 0; i < icons.length; i++) {
                    addIcon(icons[i])
                }
            }

        function addIcon(icondata) {
            var iconItem = $('<div>', {
                class: 'icon-item'
            }).appendTo(iconsWrapper);
            $('<span>', {
                class: 'mki mki-' + icondata.name
            }).on('click', function() {
              $('.icon-item').removeClass('highlight-icon');
              $(this).addClass('highlight-icon');
              callback('mki mki-' + icondata.name);
            }).appendTo(iconItem);
        }

        function returnLast(element) {
            if (!element.next().length) {
                return element;
            }
            if (element.position().left > element.next().position().left) {
                return element
            } else {
                return returnLast(element.next())
            }
        }

        function addTypeButton(type) {
            var btn = $('<button>', {
                class: ''
            }).html(type).on('click', function() {
                searchinput.val(type);
                searchQuery(type)
            }).appendTo(types);
        }
        var btnAll = $('<button>', {
            class: ''
        }).html('all').on('click', function() {
            searchinput.val(null)
            showAllIcons()
        }).appendTo(types);
        
        for (var i = 0; i < data.types.length; i++) {
            addTypeButton(data.types[i])
        }
        var index = lunr(function() {
            this.field('name', {
                boost: 10
            });
            this.field('keywords');
            this.field('type', {
                boost: 5
            });
            this.field('lang2');
            this.field('version');
            this.ref('index');
        });
        for (var i = 0; i < icons.length; i++) {
            var data = icons[i];
            data.lang2 = [data.lang.cs, data.lang.en, data.lang.de].join(';');
            data.keywords = data.keywords.split(',').join(' ');
            data.version = 'new in ' + data.version;
            data.index = i;
            index.add(data)
        }

        function searchQuery(query) {
            var result = index.search(query)
            iconsWrapper.empty();
            if (query == '') {
                showAllIcons();
                return
            }
            if (result.length == 0) {
                $('<div>', {
                    class: 'no-icon'
                }).html('NO ICONS FOUND').appendTo(iconsWrapper);
            };
            $.each(result, function(index, value) {
                var icondata = icons[value.ref];
                addIcon(icondata);
            })
        }
        searchinput.on('keyup', function(e) {
            searchQuery(e.target.value)
        });

        function iconSreen(icondata) {
            var content = $('<div>', {});
            var iconHeader = $('<div>', {
                class: 'icon-header'
            }).appendTo(content);
            var iconName = $('<div>', {
                class: 'iconName'
            }).html(icondata.lang.en).appendTo(iconHeader);
            var close = $('<div>', {
                class: 'closebutton'
            }).html('&times;').on('click', function() {
                $('#divFrame').slideUp(function() {
                    this.remove()
                })
            }).appendTo(iconHeader);
            var icon = $('<div>', {
                class: 'icon-show'
            }).appendTo(content);
            var iconSpan = $('<span>', {
                class: 'mki mki-' + icondata.name
            }).appendTo(icon);
            var iconInfo = $('<div>', {
                class: 'icon-info'
            }).appendTo(content);
            var metadata = $('<div>', {
                id: 'metadata'
            }).appendTo(iconInfo);
            var id = $('<div>', {
                class: ''
            }).html("<span>id: </span><span class='value'>" + icondata.name + "</span>").appendTo(metadata);
            var type = $('<div>', {
                class: ''
            }).html("<span>type: </span> <span class='value'>" + icondata.type + "</span>").appendTo(metadata);
            var version = $('<div>', {
                class: ''
            }).html("<span>version: </span> <span class='value'>" + icondata.version.replace('new in ', '') + "</span>").appendTo(metadata);
            var metadata2 = $('<div>', {
                id: 'metadata'
            }).appendTo(iconInfo);
            var unicode = $('<div>', {
                class: ''
            }).html("<span>unicode: </span> <span class='value'>U+" + icondata.unicode + "</span>").appendTo(metadata2);
            var html = $('<div>', {
                class: ''
            }).html("<span>html: </span><span class='value' style='font-family: \"Lucida Console\", Monaco, monospace';>&amp;#" + icondata.decimal + ";  &amp;#x" + icondata.unicode + ";</span>").appendTo(metadata2);
            var sizes = $('<div>', {
                class: 'sizes'
            }).appendTo(iconInfo);
            var code = "<span style='font-family: \"Lucida Console\", Monaco, monospace'> <span style='color:darkseagreen;'>&lt;span</span> <span style='color:#1e86ab'> class=</span><span style='color:#ffc4b1'>'mki mki-" + icondata.name + "'</span><span style='color:darkseagreen;'>&gt;&lt;/span&gt;</span></span>";
            var codebox = $('<div>', {
                class: 'codebox'
            }).html(code).appendTo(iconInfo);
            var buttons = $('<div>', {
                class: 'buttons'
            }).appendTo(iconInfo);
            var buttonSVG = $('<a>', {
                class: 'btn',
                href: 'dist/svg/' + icondata.name + ".svg",
                download: icondata.name + ".svg",
                target: '_blank'
            }).html('<span class="mki mki-download"></span>' + " svg").appendTo(buttons);
            var buttonPNG = $('<a>', {
                class: 'btn',
                href: 'dist/png/' + icondata.name + ".png",
                download: icondata.name + ".png",
                target: '_blank'
            }).html('<span class="mki mki-download"></span>' + " png").appendTo(buttons);
            for (var i = 6; i < 38; true) {
                var num = 10 + i * 2
                i += 8;
                $('<span>', {
                    class: 'mki mki-' + icondata.name,
                    style: 'font-size:' + num + 'px'
                }).appendTo(sizes);
            }
            return content;
        };
    }
    return init;
});