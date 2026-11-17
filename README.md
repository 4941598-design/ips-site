npx create-next-app@latest temp-app \
--typescript \
--tailwind \
--app

cp -R temp-app/* .
cp -R temp-app/.* . 2>/dev/null || true
