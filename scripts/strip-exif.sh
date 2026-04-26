#!/bin/bash
# Strip metadata from all images and videos in content/posts
# Usage: ./scripts/strip-exif.sh

if ! command -v exiftool >/dev/null 2>&1; then
  echo "Error: exiftool not found. Install with: brew install exiftool"
  exit 1
fi
if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg not found. Install with: brew install ffmpeg"
  exit 1
fi

echo "Stripping images..."
find content/posts \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | \
  xargs exiftool -all= -overwrite_original

echo "Stripping videos..."
while IFS= read -r file; do
  tmp="${file%.mp4}_tmp.mp4"
  ffmpeg -y -i "$file" -map_metadata -1 -c copy "$tmp" -loglevel error
  mv "$tmp" "$file"
  echo "  Cleaned: $file"
done < <(find content/posts -iname "*.mp4")

echo "Done."
