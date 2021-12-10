var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.4572673320639673,
        "pitch": 0.08162436982381038,
        "fov": 1.566717244256129
      },
      "linkHotspots": [
        {
          "yaw": -0.07027903432603111,
          "pitch": -0.3711029133536723,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7431522611848003,
          "pitch": 0.12141666154031938,
          "title": "Faculty of Engineering",
          "text": "Welcome to the Faculty of Engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.5110666985274719,
        "pitch": 0.08399688121267701,
        "fov": 1.566717244256129
      },
      "linkHotspots": [
        {
          "yaw": -3.1338834212056597,
          "pitch": 0.038837215520601376,
          "rotation": 3.141592653589793,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0103594476583595,
          "pitch": -0.10074439662158952,
          "title": "Food",
          "text": "Grab a bite!"
        },
        {
          "yaw": 1.2024666942082707,
          "pitch": -0.07316105476722967,
          "title": "Study Areas",
          "text": "For discussion or self-study"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
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
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1454441043328636,
        "pitch": 0.005045788226262005,
        "fov": 1.566717244256129
      },
      "linkHotspots": [
        {
          "yaw": -1.4689568212345563,
          "pitch": -0.09967833439464258,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.04664526905137656,
          "pitch": -0.019391299968054554,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1415489722254488,
          "pitch": 0.01119912681971158,
          "title": "Structure",
          "text": "&lt;insert background info here&gt;"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
