#!/bin/bash
set -e
echo "Starting DDBot → Dopra rename..."

sed -i 's/DDBot/Dopra/gi; s/ddbot/dopra/gi' package.json
[ -f "public/manifest.json" ] && sed -i 's/DDBot/Dopra/gi; s/ddbot/dopra/gi' public/manifest.json
[ -f "public/index.html" ] && sed -i 's/DDBot/Dopra/gi; s/ddbot/dopra/gi' public/index.html
[ -f "index.html" ] && sed -i 's/DDBot/Dopra/gi; s/ddbot/dopra/gi' index.html
[ -f "README.md" ] && sed -i 's/DDBot/Dopra/gi; s/ddbot/dopra/gi' README.md

find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" -o -name "*.json" \) \
  -exec sed -i 's/DDBot/Dopra/g; s/ddbot/dopra/g' {} +

for f in babel.config.js jest.config.ts rsbuild.config.ts tsconfig.json vercel.json; do
  [ -f "$f" ] && sed -i 's/DDBot/Dopra/gi; s/ddbot/dopra/gi' "$f"
done

[ -d ".github" ] && find .github -name "*.yml" -exec sed -i 's/DDBot/Dopra/gi' {} +

echo "Done! DDBot → Dopra complete."
