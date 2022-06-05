from time import sleep
import network
import usocket
import ujson
import ussl
import ubinascii
from machine import WDT

HOST = "airri.microblock.app"
PORT = const(443)

WDT_TIMEOUT = 60 * 1000 # 60 s = 1 min

_owner_email = ""
_field = { }
_ssid = ""
_passw = None
_wdt = None

wlan = network.WLAN(network.STA_IF)
mac_address = ubinascii.hexlify(wlan.config('mac'),':').decode().upper()

def connectWiFi():
    print("WiFi reconnect...")
    wlan.active(True)
    wlan.connect(_ssid, _passw)
    if _wdt:
        _wdt.feed()
    while not wlan.isconnected():
        sleep(0.1)
    print("WiFi Connected")
    if _wdt:
        _wdt.feed()

def begin(ssid, passw, owner_email):
    global _ssid, _passw, _owner_email, _wdt
    _ssid = ssid
    _passw = passw if len(passw) > 4 else None
    _owner_email = owner_email
    _wdt = WDT(timeout=WDT_TIMEOUT)
    connectWiFi()

def setStationName(name):
    global _field
    _field["name"] = name.encode('utf8')

def setLocation(lat, lng):
    global _field
    _field["location"] = "{.8f}, {.8f}".format(lat, lng)

def setField(name, value):
    global _field
    if not "data" in _field:
        _field["data"] = { }
    _field["data"][name] = float(value)

def push():
    global _field
    if _wdt:
        _wdt.feed()
    if not wlan.isconnected():
        print("Error ! WiFi not connect")
        connectWiFi()
    _field["email"] = _owner_email
    payload = str.encode(ujson.dumps(_field))
    print("Payload: ", payload)

    s = usocket.socket()
    ai = usocket.getaddrinfo(HOST, PORT)
    try:
        s.connect(ai[0][-1])
        if PORT == 443:
            s = ussl.wrap_socket(s, server_hostname=HOST)
        dataReq =  (b"POST /api/devices/{}/data HTTP/1.1\r\n"
                    b"Host: {}:{}\r\n"
                    b"Content-Type: application/json\r\n"
                    b"Content-Length: {}\r\n"
                    b"Connection: close\r\n"
                    b"\r\n").format(mac_address, HOST, PORT, len(payload))
        dataReq = dataReq + payload
        s.write(dataReq)
        print("Res: {}".format(s.read()))
        s.close()
    except OSError:
        print("Send data error !")
        s.close()

    _field = { }
    if _wdt:
        _wdt.feed()
    return None
