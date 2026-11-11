#!/bin/bash
# Strip metadata from images and videos in content/posts, or in the given folders/files
# Usage: ./scripts/strip-exif.sh [folder-or-file ...]
#   e.g. ./scripts/strip-exif.sh content/posts/luxplant
#        ./scripts/strip-exif.sh content/posts/luxplant/pics/1.jpg

if [ $# -eq 0 ]; then
  targets=("content/posts")
else
  targets=("$@")
fi

for target in "${targets[@]}"; do
  if [ ! -e "$target" ]; then
    echo "Error: not found: $target"
    exit 1
  fi
done
if ! command -v exiftool >/dev/null 2>&1; then
  echo "Error: exiftool not found. Install with: brew install exiftool"
  exit 1
fi
if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg not found. Install with: brew install ffmpeg"
  exit 1
fi

echo "Stripping images..."
# -exec ... {} + passes file names safely, even with spaces or accents
# --icc_profile:all keeps the colour profile (no personal data, avoids colour shifts)
find "${targets[@]}" \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) \
  -exec exiftool -all= --icc_profile:all -overwrite_original {} +

echo "Stripping videos..."
while IFS= read -r -d '' file; do
  tmp="${file%.*}_tmp.mp4"
  ffmpeg -y -i "$file" -map_metadata -1 -c copy "$tmp" -loglevel error < /dev/null
  mv "$tmp" "$file"
  echo "  Cleaned: $file"
done < <(find "${targets[@]}" -iname "*.mp4" -print0)

echo "Done."
