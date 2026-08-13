import os
import re

files_to_check = [
    '/Users/mehedihasanmridul/website/Musafly-website/sections/ToursSection.tsx',
    '/Users/mehedihasanmridul/website/Musafly-website/sections/TestimonialSection.tsx',
    '/Users/mehedihasanmridul/website/Musafly-website/sections/TestimonialsSection.tsx'
]

for filepath in files_to_check:
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()

        # Replace (item.image || item.image_url) with ((item.image || item.image_url) || '').replace('http://46.225.103.236:8001', '')
        # Be careful not to replace it multiple times if run multiple times
        if ".replace('http://46.225.103.236:8001'" not in content:
            content = re.sub(
                r'\((\w+)\.image \|\| (\w+)\.image_url\)',
                r'((\1.image || \2.image_url) || "").replace("http://46.225.103.236:8001", "")',
                content
            )

        with open(filepath, 'w') as f:
            f.write(content)

print("Updated website components to strip domain from image URLs")
