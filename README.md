# PWA start development

[**Straight to Full Documentation**](https://docs.pwabuilder.com/#/starter/quick-start)
[https://docs.pwabuilder.com/#/starter/quick-start](https://docs.pwabuilder.com/#/starter/quick-start)

## Introduction
This is a starter codebase, just like create-react-app or the Angular CLI can generate, that uses the PWABuilder team's preferred front-end tech stack. We also have a CLI tool to allow you to create a PWA template from the command line.

## Jump Right In
change directory to the pwa-starter-main folder:
```bash
cd pwa-starter-main
```

Install the PWABuilder CLI:
```bash
npm install
```

Preview the app locally:
```bash
npm start
```

Start server db.json:
```bash
json-server --watch db.json --port 3001
```
Open the browser on **mobile**
Add the PWA to your home screen:
- Open the browser menu
- Open the https://your-ipaddress:8000
- Click "Add to Home Screen"

Edit url fetch IP address in
- utils/cookie-utils.ts
```typescript
const url = 'http://your-ipaddress:3001';
```