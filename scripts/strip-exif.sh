#!/bin/bash
# Strip EXIF metadata from all images in content/posts
# Usage: ./scripts/strip-exif.sh
# Useful for cleaning images that were committed before the pre-commit hook was in place.

if ! command -v exiftool >/dev/null 2>&1; then
  echo "Error: exiftool not found. Install with: brew install exiftool"
  exit 1
fi

find content/posts -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" | \
  xargs exiftool -all= -overwrite_original

echo "Done."
