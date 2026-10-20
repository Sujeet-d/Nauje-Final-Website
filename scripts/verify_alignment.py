import subprocess

draw_commands = [
    # Polygons and lines
    "polygon 55,10 265,10 318,98 168,246 2,98",
    "line 2,98 318,98",
    "polygon 160,10 123,54 160,98 197,54",
    "line 95,10 123,54",
    "line 123,54 87,98",
    "line 95,10 38,98",
    "line 55,10 38,98",
    "line 225,10 197,54",
    "line 197,54 233,98",
    "line 225,10 282,98",
    "line 265,10 282,98",
    "polygon 160,98 145,196 168,236 180,196",
    "line 168,236 168,246",
    "line 87,98 145,196",
    "line 233,98 180,196",
    "line 38,98 145,196",
    "line 282,98 180,196",
    "line 145,196 168,246",
    "line 180,196 168,246"
]

draw_str = " ".join([f"-draw '{cmd}'" for cmd in draw_commands])

# Draw in bright cyan or red over the original crop
cmd = f"convert public/assets/branding/diamond_exact_crop.png -stroke 'rgba(0,255,255,0.7)' -strokewidth 2 -fill none {draw_str} public/assets/branding/alignment_check.png"
subprocess.run(cmd, shell=True, check=True)
print("Saved public/assets/branding/alignment_check.png")
