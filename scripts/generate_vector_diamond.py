import json

# Let's define the viewBox as 0 0 320 250
# Based on the exact points from diamond_exact_crop.png (321 x 249):
# Outer Points:
# Top Left Table: (55, 10)
# Top Right Table: (265, 10)
# Left Girdle: (2, 98)
# Right Girdle: (318, 98)
# Bottom Culet: (168, 246)

# Crown Internal Points:
# Center Top Table: (160, 10)
# Table Left Inner: (95, 10)
# Table Right Inner: (225, 10)
# Center Crown Rhombus Center: (160, 98)
# Center Crown Rhombus Left: (123, 54)
# Center Crown Rhombus Right: (197, 54)
# Girdle Left Inner: (87, 98)
# Girdle Right Inner: (233, 98)
# Girdle Outer Left: (38, 98)
# Girdle Outer Right: (282, 98)

# Pavilion Internal Points:
# Culet Point: (168, 246)
# Center Needle Left: (145, 196)
# Center Needle Right: (180, 196)
# Center Needle Inner Tip: (168, 236)

# Lines list:
lines = [
    # Table top
    ((55, 10), (265, 10)),
    # Upper left
    ((55, 10), (2, 98)),
    # Upper right
    ((265, 10), (318, 98)),
    # Girdle
    ((2, 98), (318, 98)),
    # Lower left
    ((2, 98), (168, 246)),
    # Lower right
    ((318, 98), (168, 246)),
    
    # Crown Center Rhombus
    ((160, 10), (123, 54)),
    ((123, 54), (160, 98)),
    ((160, 98), (197, 54)),
    ((197, 54), (160, 10)),
    
    # Crown Left Facets
    ((95, 10), (123, 54)),
    ((123, 54), (87, 98)),
    ((95, 10), (38, 98)),
    ((55, 10), (38, 98)),
    ((38, 98), (2, 98)), # on girdle
    
    # Crown Right Facets
    ((225, 10), (197, 54)),
    ((197, 54), (233, 98)),
    ((225, 10), (282, 98)),
    ((265, 10), (282, 98)),
    
    # Pavilion Center Needle Kite
    ((160, 98), (145, 196)),
    ((160, 98), (180, 196)),
    ((145, 196), (168, 236)),
    ((180, 196), (168, 236)),
    ((168, 236), (168, 246)),
    
    # Pavilion Diagonal Rays
    ((87, 98), (145, 196)),
    ((233, 98), (180, 196)),
    
    # Pavilion Outer Rays
    ((38, 98), (145, 196)),
    ((282, 98), (180, 196)),
    
    # Pavilion Rays to Culet
    ((145, 196), (168, 246)),
    ((180, 196), (168, 246)),
]

print(f"Total lines: {len(lines)}")
