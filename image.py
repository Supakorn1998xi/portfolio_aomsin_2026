from rembg import remove
from PIL import Image

input_path = "0V6A3627.jpg"
output_path = "profile.png"

img = Image.open(input_path)
out = remove(img)

if isinstance(out, (bytes, bytearray)):
    from io import BytesIO
    out = image.open(BytsIO(out))

out.save(output_path)
print("saved:, output_path")