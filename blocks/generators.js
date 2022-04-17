Blockly.Python['airri_setup'] = function(block) {
  Blockly.Python.definitions_['import_Airri'] = 'import Airri';

  var value_wifi_name = Blockly.Python.valueToCode(block, 'wifi_name', Blockly.Python.ORDER_ATOMIC);
  var value_wifi_password = Blockly.Python.valueToCode(block, 'wifi_password', Blockly.Python.ORDER_ATOMIC);
  var value_token = Blockly.Python.valueToCode(block, 'token', Blockly.Python.ORDER_ATOMIC);

  var code = `Airri.begin(${value_wifi_name}, ${value_wifi_password}, ${value_token})\n`;
  return code;
};

Blockly.Python['airri_set_station_name'] = function(block) {
  Blockly.Python.definitions_['import_Airri'] = 'import Airri';

  var value_name = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);

  var code = `Airri.setStationName(${value_name})\n`;
  return code;
};

Blockly.Python['airri_set_station_location'] = function(block) {
  Blockly.Python.definitions_['import_Airri'] = 'import Airri';

  var value_lat = Blockly.Python.valueToCode(block, 'lat', Blockly.Python.ORDER_ATOMIC);
  var value_lng = Blockly.Python.valueToCode(block, 'lng', Blockly.Python.ORDER_ATOMIC);

  var code = `Airri.setLocation(${value_lat}, ${value_lng}\n`;
  return code;
};

Blockly.Python['airri_set_value'] = function(block) {
  Blockly.Python.definitions_['import_Airri'] = 'import Airri';

  var dropdown_field_name = block.getFieldValue('field_name');
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `Airri.setField("${dropdown_field_name}", ${value_value})\n`;
  return code;
};

Blockly.Python['airri_push'] = function(block) {
  Blockly.Python.definitions_['import_Airri'] = 'import Airri';

  var code = 'Airri.push()\n';
  return code;
};
