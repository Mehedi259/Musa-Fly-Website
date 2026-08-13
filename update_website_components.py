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

        # Add image to interface if not present
        if 'image?: string;' not in content and 'image_url: string;' in content:
            content = content.replace('image_url: string;', 'image_url: string;\n  image?: string;')

        # Replace image_url usage with (item.image || item.image_url)
        content = re.sub(
            r'\b(\w+)\.image_url\b',
            r'(\1.image || \1.image_url)',
            content
        )

        with open(filepath, 'w') as f:
            f.write(content)

print("Updated website components")
