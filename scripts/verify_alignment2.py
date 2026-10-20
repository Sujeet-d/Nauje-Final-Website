import subprocess

# Precise measurements:
# Top table: y = 11. x = 55 to 264.
# Girdle horizontal: y = 80.
# Left girdle tip: (13, 80)
# Right girdle tip: (307, 80)
# Culet bottom tip: (168, 244)

# Table vertices:
# Top left corner: (55, 11)
# Top right corner: (264, 11)
# Center table: (160, 11)
# Table left inner: (95, 11)
# Table right inner: (224, 11)

# Girdle vertices (y=80):
# Leftmost: (13, 80)
# Left outer: (50, 80)
# Left inner: (95, 80)
# Center girdle: (160, 80)
# Right inner: (225, 80)
# Right outer: (270, 80)
# Rightmost: (307, 80)

# Crown mid vertices:
# Rhombus left: (123, 45)
# Rhombus right: (197, 45)

# Pavilion needle:
# Top: (160, 80)
# Needle left: (145, 180)
# Needle right: (175, 180)
# Bottom culet: (168, 244)

draw_commands = [
    # Outer contour
    "polygon 55,11 264,11 307,80 168,244 13,80",
    # Girdle horizontal line
    "line 13,80 307,80",
    
    # Crown center rhombus
    "polygon 160,11 123,45 160,80 197,45",
    
    # Crown left facets
    "line 95,11 123,45",
    "line 123,45 95,80",
    "line 95,11 50,80",
    "line 55,11 50,80",
    "line 55,11 13,80", # already outer contour
    
    # Crown right facets
    "line 224,11 197,45",
    "line 197,45 225,80",
    "line 224,11 270,80",
    "line 264,11 270,80",
    
    # Pavilion center needle
    "polygon 160,80 145,180 168,244 175,180",
    
    # Pavilion rays to needle
    "line 95,80 145,180",
    "line 225,80 175,180",
    "line 50,80 145,180",
    "line 270,80 175,180",
]

draw_str = " ".join([f"-draw '{cmd}'" for cmd in draw_commands])

cmd = f"convert public/assets/branding/diamond_exact_crop.png -stroke 'rgba(0,255,255,0.85)' -strokewidth 2.2 -fill none {draw_str} public/assets/branding/alignment_check2.png"
subprocess.run(cmd, shell=True, check=True)
print("Saved public/assets/branding/alignment_check2.png")
