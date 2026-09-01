Simple RSVP server

This is a minimal Express server to accept RSVP submissions from the frontend.

Install and run:

```bash
cd server
npm install
npm start
```

The server exposes:
- POST /api/rsvp  — accepts JSON body and appends to `rsvps.json`
- GET  /api/rsvp  — returns stored RSVPs

CORS is enabled for local development. For production, secure and validate inputs and consider moving data to a proper database.
