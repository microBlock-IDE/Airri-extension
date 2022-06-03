from time import sleep
import network
import usocket
import ujson
import ussl
import ubinascii

HOST = "airri.microblock.app"
PORT = const(443)

_owner_email = ""
_field = { }
_mac_address = ""

def begin(ssid, passw, owner_email):
    global _owner_email
    global _mac_address
    _owner_email = owner_email

    wlan = network.WLAN(network.STA_IF)
    _mac_address = ubinascii.hexlify(wlan.config('mac'),':').decode().upper()
    wlan.active(True)
    wlan.connect(ssid, passw)
    while not wlan.isconnected():
        print("WiFi Connecting")
        sleep(0.1)
    print("WiFi Connected")

def setStationName(name):
    global _field
    _field["name"] = name.encode('utf8')

def setLocation(lat, lng):
    global _field
    _field["location"] = "{.8f}, {.8f}".format(lat, lng)

def setField(name, value):
    global _field
    if not "data" in _field:
        _field["data"] = { };
    _field["data"][name] = float(value)

def push():
    global _field
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
                    b"\r\n").format(_mac_address, HOST, PORT, len(payload))
        dataReq = dataReq + payload
        s.write(dataReq)
        print("Res: {}".format(s.read()))
        s.close()
    except OSError:
        s.close()

    _field = { }
    return None
