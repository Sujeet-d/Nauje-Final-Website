import subprocess

# Fixed convert draw command
master_draw = """
convert -size 320x320 xc:transparent \
  -fill "#350B36" -draw "roundrectangle 0,0 320,320 72,72" \
  -stroke "#D4AF37" -strokewidth 4 -fill none -draw "roundrectangle 8,8 312,312 64,64" \
  -stroke "#F3DC9B" -strokewidth 9 -fill none \
  -draw "stroke-linecap round stroke-linejoin round polygon 55,46 264,46 311,111 168,275 9,111" \
  -draw "stroke-linecap round line 9,111 311,111" \
  -draw "stroke-linecap round stroke-linejoin round polygon 160,46 123,78 160,111 197,78" \
  -draw "stroke-linecap round line 95,46 123,78" \
  -draw "stroke-linecap round line 123,78 95,111" \
  -draw "stroke-linecap round line 95,46 48,111" \
  -draw "stroke-linecap round line 55,46 48,111" \
  -draw "stroke-linecap round line 225,46 197,78" \
  -draw "stroke-linecap round line 197,78 225,111" \
  -draw "stroke-linecap round line 225,46 272,111" \
  -draw "stroke-linecap round line 264,46 272,111" \
  -draw "stroke-linecap round stroke-linejoin round polygon 160,111 144,220 168,275 176,220" \
  -draw "stroke-linecap round line 95,111 144,220" \
  -draw "stroke-linecap round line 225,111 176,220" \
  -draw "stroke-linecap round line 48,111 144,220" \
  -draw "stroke-linecap round line 272,111 176,220" \
  -draw "stroke-linecap round line 48,111 130,205" \
  -draw "stroke-linecap round line 130,205 152,251" \
  -draw "stroke-linecap round line 272,111 190,205" \
  -draw "stroke-linecap round line 190,205 174,251" \
  /tmp/master_favicon.png
"""
subprocess.run(master_draw, shell=True, check=True)

# Generate 180x180, 48x48, 32x32, 16x16:
subprocess.run(['convert', '/tmp/master_favicon.png', '-resize', '180x180', 'public/apple-touch-icon.png'], check=True)
subprocess.run(['convert', '/tmp/master_favicon.png', '-resize', '48x48', '/tmp/fav-48.png'], check=True)
subprocess.run(['convert', '/tmp/master_favicon.png', '-resize', '32x32', 'public/favicon-32x32.png'], check=True)
subprocess.run(['convert', '/tmp/master_favicon.png', '-resize', '16x16', 'public/favicon-16x16.png'], check=True)

# Combine into multi-resolution favicon.ico
subprocess.run(['convert', '/tmp/fav-48.png', 'public/favicon-32x32.png', 'public/favicon-16x16.png', 'public/favicon.ico'], check=True)

print("Generated all favicon assets successfully!")
