#!/bin/bash

echo "Starting Dopra rebrand..."

find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" \) \
-exec sed -i 's/Deriv Bot/Dopra Bot/g' {} +

echo "Finished."
