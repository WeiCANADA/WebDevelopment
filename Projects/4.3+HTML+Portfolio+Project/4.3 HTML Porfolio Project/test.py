import numpy as np

# 地球半径，单位为米
R = 6371000

# 定义函数将经纬度转换为笛卡尔坐标
def to_cartesian(lat, lng):
    lat_rad = np.deg2rad(lat)
    lng_rad = np.deg2rad(lng)
    x = R * np.cos(lat_rad) * np.cos(lng_rad)
    y = R * np.cos(lat_rad) * np.sin(lng_rad)
    z = R * np.sin(lat_rad)
    return np.array([x, y, z])

# 定义函数计算由两个向量形成的三角形的面积
def triangle_area(v1, v2, v3):
    return np.linalg.norm(np.cross(v2-v1, v3-v1))/2

# 获取四个点的笛卡尔坐标
NW = to_cartesian(45.876108, -66.632857)
NE = to_cartesian(45.875244, -66.630952)
SW = to_cartesian(45.865803, -66.641059)
SE = to_cartesian(45.865176, -66.639517)

# 计算由两个三角形形成的四边形的面积
area = triangle_area(NW, NE, SE) + triangle_area(NW, SE, SW)

# 将面积转换为平方米

print(area/4046.86)
