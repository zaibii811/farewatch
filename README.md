# FareWatch

Cheap flights find you. A single-page app where anyone — from first-time bookers to WhatsApp-native travellers — can set a flight-deal alert in about a minute.

**Live demo:** open `index.html` in any browser (no build step).

## What it does
- Departures-board style feed of error fares, flash sales and mistake fares, tagged with the forum they were spotted on (FlyerTalk, Secret Flying, BusinessClassDeals, r/flightdeals…)
- Boarding-pass alert builder: from / to (or "Anywhere"), dates, seat class, airline, and a "message me below $X" price
- Delivery choices: WhatsApp, Telegram, device pop-ups, email, SMS
- Live "deals that match right now" as you type
- Saved alerts with pause/delete, message previews, bigger-text mode, light/dark

## Status
The deal feed is sample data and alert delivery is a front-end prototype. To go live you need a backend that:
1. Scrapes / ingests deal sources on a schedule and normalises them into the `DEALS` shape in `index.html`
2. Stores alerts (the page posts the object built by `currentAlert()`)
3. Matches new deals against alerts and sends via WhatsApp Business API, a Telegram bot, Web Push, email (SendGrid/SES) and SMS (Twilio)

## Stack
Plain HTML/CSS/JS, Google Fonts (Plus Jakarta Sans, DM Mono). No dependencies.
