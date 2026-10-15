import os
import subprocess

os.makedirs('public/videos', exist_ok=True)
os.makedirs('public/thumbnails', exist_ok=True)

font_serif = '/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf'
font_sans = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'

videos = [
    {
        'num': 1,
        'title': 'DISCIPLINE I: PARAMETRIC CAD BLUEPRINTING',
        'sub': 'Micron Precision & 3D Gemstone Topology',
        'badge': 'NAUJE ATELIER CINEMATOGRAPHY',
        'color': '#081220',
        'accent': '#38BDF8',
        'freq': 220,
    },
    {
        'num': 2,
        'title': 'DISCIPLINE II: MASTER GOLDSMITHING & 22K CASTING',
        'sub': 'Generational Hand Filing & Micro-Prong Claw Setting',
        'badge': 'NAUJE ATELIER CINEMATOGRAPHY',
        'color': '#220B04',
        'accent': '#F59E0B',
        'freq': 277,
    },
    {
        'num': 3,
        'title': 'DISCIPLINE III: VITREOUS ROYAL MEENAKARI ENAMELING',
        'sub': 'Crushed Mineral Glass Pigments Fired at 800 C',
        'badge': 'NAUJE ATELIER CINEMATOGRAPHY',
        'color': '#061D24',
        'accent': '#10B981',
        'freq': 330,
    },
    {
        'num': 4,
        'title': 'DISCIPLINE IV: THE FINAL POLISH & SCINTILLATION',
        'sub': 'Mirror Rouge Buffing & 40x Loupe Certification',
        'badge': 'NAUJE ATELIER CINEMATOGRAPHY',
        'color': '#16081B',
        'accent': '#E2C974',
        'freq': 440,
    }
]

for v in videos:
    num = v['num']
    out_name = f'public/Jewels Video {num}.mp4'
    poster_name = f'public/thumbnails/video{num}-poster.jpg'
    
    print(f"Rendering Video {num}: {out_name}...")
    
    filter_complex = (
        f"color=c={v['color']}:s=1280x720:d=6 [bg]; "
        f"[bg] drawgrid=w=64:h=64:t=1:c={v['accent']}@0.15 [grid]; "
        f"[grid] drawbox=x=60:y=40:w=1160:h=640:c={v['accent']}@0.4:t=2 [border]; "
        f"[border] drawbox=x=80:y=60:w=1120:h=600:c={v['accent']}@0.2:t=1 [inner]; "
        f"[inner] drawbox=x='640 - 150 + 80*sin(t*2)':y='360 - 80':w=300:h=160:c={v['accent']}@0.3:t=2 [cadbox]; "
        f"[cadbox] drawtext=fontfile='{font_sans}':text='{v['badge']}':fontcolor=#F8D2D0:fontsize=18:x=(w-text_w)/2:y=100:shadowcolor=black:shadowx=2:shadowy=2 [t1]; "
        f"[t1] drawtext=fontfile='{font_serif}':text='{v['title']}':fontcolor=#FFFFFF:fontsize=30:x=(w-text_w)/2:y=480:shadowcolor=black:shadowx=3:shadowy=3 [t2]; "
        f"[t2] drawtext=fontfile='{font_serif}':text='{v['sub']}':fontcolor=#D4AF37:fontsize=20:x=(w-text_w)/2:y=526:shadowcolor=black:shadowx=2:shadowy=2 [t3]; "
        f"[t3] drawtext=fontfile='{font_sans}':text='PRECISION TIMECODE: 00\\:00\\:%{{pts\\:hms}}':fontcolor={v['accent']}:fontsize=14:x=100:y=610 [v_out]"
    )
    
    cmd = [
        'ffmpeg', '-y',
        '-f', 'lavfi', '-i', f"sine=frequency={v['freq']}:duration=6",
        '-filter_complex', filter_complex,
        '-map', '[v_out]',
        '-map', '0:a',
        '-c:v', 'libx264', '-profile:v', 'high', '-level', '4.0', '-pix_fmt', 'yuv420p',
        '-c:a', 'aac', '-b:a', '128k',
        '-movflags', '+faststart',
        out_name
    ]
    
    subprocess.run(cmd, check=True)
    
    # Extract crisp poster thumbnail at 1.5s
    poster_cmd = [
        'ffmpeg', '-y',
        '-ss', '1.5',
        '-i', out_name,
        '-vframes', '1',
        '-q:v', '2',
        poster_name
    ]
    subprocess.run(poster_cmd, check=True)
    
    # Also create aliases
    subprocess.run(['cp', out_name, f'public/Jewels_Video_{num}.mp4'], check=True)
    subprocess.run(['cp', out_name, f'public/videos/Jewels Video {num}.mp4'], check=True)
    subprocess.run(['cp', out_name, f'public/videos/Jewels_Video_{num}.mp4'], check=True)

print("All 4 Craftsmanship Videos and Thumbnails successfully generated!")
