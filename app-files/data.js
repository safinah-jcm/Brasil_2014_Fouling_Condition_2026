var APP_DATA = {
  "scenes": [
    {
      "id": "0-bow_top",
      "name": "bow_top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5452514391410206
      },
      "linkHotspots": [
        {
          "yaw": 0.6874887106773375,
          "pitch": -0.013145373741014765,
          "rotation": 4.71238898038469,
          "target": "1-bow_top_port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bow_top_port",
      "name": "bow_top_port",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6004572372047488,
          "pitch": 0.018929647536690908,
          "rotation": 1.5707963267948966,
          "target": "0-bow_top"
        },
        {
          "yaw": 0.613080409008397,
          "pitch": 0.5837447507659519,
          "rotation": 11.780972450961727,
          "target": "3-midship_bottom_port_2"
        },
        {
          "yaw": 1.21189541305597,
          "pitch": 0.011165534424522505,
          "rotation": 10.995574287564278,
          "target": "15-stern_top_port"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.34554232661350603,
          "pitch": 0.2861960666663528,
          "title": "Thruster Tunnels",
          "text": "Minor traces of macrofouling",
          "description": "Both thruster tunnels present light fouling conditions overall. Slime forms the dominant coverage across tunnel walls and internal surfaces, with soft macrofouling concentrated mainly around the openings and lower areas exposed to higher water flow. Hard macrofouling, primarily barnacles, is limited to isolated spots in sheltered recesses. The condition is consistent with the vessel's last dry-dock cycle and does not represent a significant drag or performance penalty at this stage.",
          "image": "info/bow_thrusters_i.jpg",
          "chartData": {
            "Slime": 60,
            "Soft-macrofouling": 30,
            "Hard-macrofouling": 10
          },
          "tableData": {
            "headers": ["Zone", "Slime %", "Soft %", "Hard %"],
            "rows": [
              ["Port tunnel",      "65", "25", "10"],
              ["Starboard tunnel", "55", "35", "10"],
              ["Openings",         "70", "20", "10"],
              ["Average",          "63", "27", "10"]
            ]
          }
        }
      ]
    },
    {
      "id": "2-midship_bottom_starboard_0",
      "name": "midship_bottom_starboard_0",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1790595369490422,
          "pitch": -0.09634846405610276,
          "rotation": 0,
          "target": "17-flatbottom_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-midship_bottom_port_2",
      "name": "midship_bottom_port_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -2.4517339231323287,
        "pitch": -0.34876659389449927,
        "fov": 1.5452514391410206
      },
      "linkHotspots": [
        {
          "yaw": 3.0465792597929466,
          "pitch": -0.5787054014345294,
          "rotation": 1.5707963267948966,
          "target": "1-bow_top_port"
        },
        {
          "yaw": 0.6264439873940226,
          "pitch": -0.010991120821907785,
          "rotation": 5.497787143782138,
          "target": "12-stern_bottom_port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-midship_bottom_starboard_1",
      "name": "midship_bottom_starboard_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.532540328564889,
          "pitch": -0.19195079785366076,
          "rotation": 5.497787143782138,
          "target": "0-bow_top"
        },
        {
          "yaw": -1.374853889227822,
          "pitch": -0.02128169877096653,
          "rotation": 1.5707963267948966,
          "target": "5-midship_bottom_starboard_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-midship_bottom_starboard_2",
      "name": "midship_bottom_starboard_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.980630058343289,
          "pitch": 0.037388714167242654,
          "rotation": 4.71238898038469,
          "target": "4-midship_bottom_starboard_1"
        },
        {
          "yaw": -1.1088752499565047,
          "pitch": -0.07066118230674512,
          "rotation": 1.5707963267948966,
          "target": "6-midship_bottom_starboard_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-midship_bottom_starboard_3",
      "name": "midship_bottom_starboard_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9339342039943368,
          "pitch": -0.02844914553540079,
          "rotation": 10.995574287564278,
          "target": "5-midship_bottom_starboard_2"
        },
        {
          "yaw": -1.980988545219521,
          "pitch": -0.13111398658444706,
          "rotation": 1.5707963267948966,
          "target": "14-stern_top"
        },
        {
          "yaw": -2.1678362173268866,
          "pitch": 0.05584589625848402,
          "rotation": 0.7853981633974483,
          "target": "13-stern_bottom_starboard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-midship_top_port_1",
      "name": "midship_top_port_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-midship_top_port_2",
      "name": "midship_top_port_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-midship_top_starboard_1",
      "name": "midship_top_starboard_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-midship_top_starboard_2",
      "name": "midship_top_starboard_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-midship_top_starboard_3",
      "name": "midship_top_starboard_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "12-stern_bottom_port",
      "name": "stern_bottom_port",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.889079095068091,
          "pitch": -0.21626934836034195,
          "rotation": 6.283185307179586,
          "target": "14-stern_top"
        },
        {
          "yaw": -0.965191151687101,
          "pitch": -0.04827239903040592,
          "rotation": 0.7853981633974483,
          "target": "3-midship_bottom_port_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-stern_bottom_starboard",
      "name": "stern_bottom_starboard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.183904127896959,
          "pitch": -0.17807029653103257,
          "rotation": 1.5707963267948966,
          "target": "14-stern_top"
        },
        {
          "yaw": 0.7211704884761065,
          "pitch": -0.04432566280134331,
          "rotation": 5.497787143782138,
          "target": "6-midship_bottom_starboard_3"
        },
        {
          "yaw": 0.41031216272214976,
          "pitch": -0.017024384729612763,
          "rotation": 0,
          "target": "20-flatbottom_4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-stern_top",
      "name": "stern_top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5235214597676645,
          "pitch": -0.04266423490877358,
          "rotation": 7.853981633974483,
          "target": "15-stern_top_port"
        },
        {
          "yaw": 0.6514605925114108,
          "pitch": -0.052703791040588754,
          "rotation": 4.71238898038469,
          "target": "16-stern_top_starboard"
        },
        {
          "yaw": 0.2368433636388474,
          "pitch": 0.1560047963969673,
          "rotation": 5.497787143782138,
          "target": "13-stern_bottom_starboard"
        },
        {
          "yaw": -0.2691611774156044,
          "pitch": 0.13469777490625923,
          "rotation": 0.7853981633974483,
          "target": "12-stern_bottom_port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-stern_top_port",
      "name": "stern_top_port",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5965276991734898,
          "pitch": 0.022744579964845357,
          "rotation": 4.71238898038469,
          "target": "14-stern_top"
        },
        {
          "yaw": 0.03724962370109708,
          "pitch": 0.5224886187340143,
          "rotation": 6.283185307179586,
          "target": "12-stern_bottom_port"
        },
        {
          "yaw": -1.071291901737773,
          "pitch": -0.044970228726278094,
          "rotation": 1.5707963267948966,
          "target": "1-bow_top_port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-stern_top_starboard",
      "name": "stern_top_starboard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8177649432711842,
          "pitch": -0.005082218363218871,
          "rotation": 7.853981633974483,
          "target": "14-stern_top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-flatbottom_1",
      "name": "flatbottom_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5237221304373936,
          "pitch": -0.02947452323899391,
          "rotation": 5.497787143782138,
          "target": "2-midship_bottom_starboard_0"
        },
        {
          "yaw": 0.4062384754982684,
          "pitch": 0.034123368430208245,
          "rotation": 0,
          "target": "18-flatbottom_2"
        },
        {
          "yaw": -0.9318344607649838,
          "pitch": -0.006504748072462263,
          "rotation": 0,
          "target": "19-flatbottom_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-flatbottom_2",
      "name": "flatbottom_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5632402421906288,
          "pitch": -0.054796243197571926,
          "rotation": 0,
          "target": "17-flatbottom_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-flatbottom_3",
      "name": "flatbottom_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7551009485462403,
          "pitch": 0.0905739783562094,
          "rotation": 0,
          "target": "17-flatbottom_1"
        },
        {
          "yaw": -1.4034457720968216,
          "pitch": -0.012309407577230758,
          "rotation": 0,
          "target": "20-flatbottom_4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-flatbottom_4",
      "name": "flatbottom_4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.607907232321221,
          "pitch": 0.049874402207379376,
          "rotation": 0,
          "target": "19-flatbottom_3"
        },
        {
          "yaw": -1.4106947706409905,
          "pitch": -0.0697257363903585,
          "rotation": 0.7853981633974483,
          "target": "13-stern_bottom_starboard"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Brasil 2014",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
