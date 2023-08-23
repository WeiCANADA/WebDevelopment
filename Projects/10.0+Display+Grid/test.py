import math

def to_radians(degrees):
    return degrees * math.pi / 180

def distance(lat1, lon1, lat2, lon2):
    R = 6371000  # in meters
    lat1_rad = to_radians(lat1)
    lon1_rad = to_radians(lon1)
    lat2_rad = to_radians(lat2)
    lon2_rad = to_radians(lon2)
    
    delta_lon = lon2_rad - lon1_rad

    a = math.sin(lat1_rad) * math.sin(lat2_rad) + math.cos(lat1_rad) * math.cos(lat2_rad) * math.cos(delta_lon)
    c = math.acos(a)
    
    return R * c

NW_lat = 45.950209
NW_lon = -66.664119
NE_lat = 45.950104
NE_lon = -66.663951

d = distance(NW_lat, NW_lon, NE_lat, NE_lon)

print(d)
