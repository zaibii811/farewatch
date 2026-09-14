# LordOftheWings24/7 (FareWatch)

Cheap flights find you. A single-page app where anyone — from first-time bookers to WhatsApp-native travellers — can set a flight-deal alert in about a minute.

**Live demo:** open `index.html` in any browser (no build step).

## What it does
- Feed of error fares, flash sales and mistake fares, each linking straight to a Google Flights search to book
- One-question-at-a-time alert builder: from, to (a city, country, or region like "Europe"), dates, seat class, airline, and a "message me below $X" price
- Delivery choices: WhatsApp, Telegram, device pop-ups, email, SMS
- Live "deals that match right now" as you type
- Saved alerts with pause/delete, message previews, bigger-text mode, light/dark

## Going live
The backend lives in [Flight-bot](https://github.com/zaibii811/Flight-bot) (Telegram bot + API + scrapers, runs free on Render).
Set the API address in `index.html`:

```html
<meta name="farewatch-api" content="https://your-app.onrender.com">
```

With it blank the page runs in **sample mode**: demo deals, alerts saved on this device only, nothing sent.
With it set: live deals from the forums, alerts saved to the shared database, real Telegram/email/pop-up delivery, and only the channels the server has configured are enabled.

`sw.js` must be served from the same folder as `index.html` for device pop-ups (Web Push) to work.

## Stack
Plain HTML/CSS/JS, Google Fonts (Plus Jakarta Sans, DM Mono). No dependencies.
