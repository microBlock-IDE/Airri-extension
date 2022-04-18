from time import sleep
import network
import usocket
import ujson
import ussl

HOST = "airri.microblock.app"
PORT = 443

_token = None
_field = None

def begin(ssid, passw, token):
    global _token
    _token = token

    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(ssid, passw)
    while not wlan.isconnected():
        print("WiFi Connecting")
        sleep(0.1)
    print("WiFi Connected")

def setStationName(name):
    global _field
    _field["station"] = name

def setLocation(lat, lng):
    global _field
    _field["location"] = "{.8f}, {.8f}".format(lat, lng)

def setField(name, value):
    global _field
    _field[name] = float(value)

def push():
    global _field
    payload = ujson.dumps(_field)

    s = usocket.socket()
    ai = usocket.getaddrinfo(HOST, PORT)
    try:
        s.connect(ai[0][-1])
        if PORT == 443:
            s = ussl.wrap_socket(s, server_hostname=HOST)
        s.write(b"POST /data HTTP/1.1\r\n")
        s.write(b"Host: {}:{}\r\n".format(HOST, PORT))
        s.write(b"Authorization: {}\r\n".format(_token))
        s.write(b"Content-Type: application/json\r\n")
        s.write(b"Content-Length: {}\r\n".format(payload))
        s.write(b"Connection: close\r\n")
        s.write(b"\r\n")
        s.write(bytes(payload))
        print("Res: {}".format(s.read()))
        s.close()
    except OSError:
        s.close()

    _field = { }
    return None

