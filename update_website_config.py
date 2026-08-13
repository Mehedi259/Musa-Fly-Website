import os

filepath = '/Users/mehedihasanmridul/website/Musafly-website/next.config.ts'
with open(filepath, 'r') as f:
    content = f.read()

# Add media rewrite if not present
if '/media/:path*' not in content:
    content = content.replace(
        "source: '/api/:path*',",
        "source: '/api/:path*',\n        destination: 'http://46.225.103.236:8001/api/:path*/',\n      },\n      {\n        source: '/media/:path*', \n        destination: 'http://46.225.103.236:8001/media/:path*',\n      },\n      {\n        source: '/api_dummy/:path*',"
    )
    
with open(filepath, 'w') as f:
    f.write(content)
