import subprocess

# Precise measurements:
# Table: y = 11. (55, 11) to (264, 11)
# Girdle: y = 76. (9, 76) to (311, 76)
# Culet: (168, 240)

draw_commands = [
    # Outer contour
    "polygon 55,11 264,11 311,76 168,240 9,76",
    # Girdle horizontal line
    "line 9,76 311,76",
    
    # Crown center rhombus
    "polygon 160,11 123,43 160,76 197,43",
    
    # Crown left facets
    "line 95,11 123,43",
    "line 123,43 95,76",
    "line 95,11 48,76",
    "line 55,11 48,76",
    
    # Crown right facets
    "line 225,11 197,43",
    "line 197,43 225,76",
    "line 225,11 272,76",
    "line 264,11 272,76",
    
    # Pavilion center needle
    "polygon 160,76 144,185 168,240 176,185",
    
    # Pavilion main rays to needle
    "line 95,76 144,185",
    "line 225,76 176,185",
    "line 48,76 144,185",
    "line 272,76 176,185",
    
    # Pavilion outer border inner ribs
    "line 48,76 130,170",
    "line 130,170 152,216",
    "line 272,76 190,170",
    "line 190,170 174,216",
]

draw_str = " ".join([f"-draw '{cmd}'" for cmd in draw_commands])

cmd = f"convert public/assets/branding/diamond_exact_crop.png -stroke 'rgba(0,255,255,0.9)' -strokewidth 2.2 -fill none {draw_str} public/assets/branding/alignment_check3.png"
subprocess.run(cmd, shell=True, check=True)
print("Saved alignment_check3.png")
