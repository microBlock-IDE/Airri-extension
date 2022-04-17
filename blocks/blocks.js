Blockly.defineBlocksWithJsonArray(
  [{
    "type": "airri_set_value",
    "message0": "%1 to Set %2 °C",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "field_name",
        "options": [
          [
            "Temperature", "temp" ],
          [ "Humidity", "humi" ],
          [ "Pressure", "pressure" ],
          [ "Illuminance", "light" ],
          [ "UV", "uv" ],
          [ "PM1.0", "pm010" ],
          [ "PM2.5", "pm025" ],
          [ "PM10", "pm100" ],
          [ "Wind Speed", "wind_speed" ],
          [ "Wind Direction", "wind_dir" ],
          [ "Rain Volume", "rain" ],
          [ "CO2", "co2"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "value",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "airri_setup",
    "message0": "Airri begin with  %1 WiFi Name: %2 WiFi Password: %3 Airri Token: %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "wifi_name",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "wifi_password",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "token",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "airri_set_station_name",
    "message0": "Change station name to %1",
    "args0": [
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "airri_set_station_location",
    "message0": "Change station location to  %1 , %2",
    "args0": [
      {
        "type": "input_value",
        "name": "lat",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "lng",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "airri_push",
    "message0": "Airri push data",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
