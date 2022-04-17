Blockly.defineBlocksWithJsonArray(
  [{
    "type": "airri_set_value",
    "message0": "Set %1 to %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "field_name",
        "options": [
          [ "Temperature (°C)", "temp" ],
          [ "Humidity (%RH)", "humi" ],
          [ "Pressure (hPa)", "pressure" ],
          [ "Illuminance (lx)", "light" ],
          [ "UV Index", "uv" ],
          [ "PM1.0 (ug/m3)", "pm010" ],
          [ "PM2.5 (ug/m3)", "pm025" ],
          [ "PM10 (ug/m3)", "pm100" ],
          [ "Wind Speed (m/s)", "wind_speed" ],
          [ "Wind Direction (°)", "wind_dir" ],
          [ "Rain Volume (cm)", "rain" ],
          [ "CO2 (ppm)", "co2"
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
    "message0": "Push data",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
