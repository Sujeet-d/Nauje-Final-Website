import subprocess

# On white background
subprocess.run([
    'convert', '-size', '200x160', 'xc:white',
    '(', 'public/assets/branding/nauje-diamond-clean.png', '-resize', '120x96', ')',
    '-gravity', 'center', '-composite',
    'public/assets/branding/test_on_white.png'
], check=True)

# On plum background
subprocess.run([
    'convert', '-size', '200x160', 'xc:#350B36',
    '(', 'public/assets/branding/nauje-diamond-clean.png', '-resize', '120x96', ')',
    '-gravity', 'center', '-composite',
    'public/assets/branding/test_on_plum.png'
], check=True)

print("Rendered test images")
