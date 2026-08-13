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

        # Replace .replace("http://46.225.103.236:8001", "") with .replace(/^https?:\/\/[^\/]+/, "")
        content = content.replace(
            '.replace("http://46.225.103.236:8001", "")',
            '.replace(/^https?:\\/\\/[^\\/]+/, "")'
        )

        with open(filepath, 'w') as f:
            f.write(content)

print("Updated website components to use regex for domain stripping")
