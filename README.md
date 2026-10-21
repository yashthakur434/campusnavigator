# Axis Campus Navigator

Static outdoor-navigation project for Axis Knowledge City, Rooma, Kanpur.

Run `python server.py` and open `http://127.0.0.1:8000` in a browser. The app uses Google Maps satellite/hybrid imagery when configured, with the existing Esri satellite imagery as a fallback. It includes the campus landmark list, start/destination route selection, approximate distance/time, Google Maps directions handoff, and browser geolocation.

## Configure Google Maps

1. In Google Cloud Console, enable **Maps JavaScript API** and **Directions API**, and configure billing for the project.
2. Create a browser key restricted to the **Maps JavaScript API** and **Directions API**. Add HTTP referrer restrictions for `http://127.0.0.1:8000/*`, `http://localhost:8000/*`, and the production website origin.
3. Put the key in `config.local.js` as the value of `window.AXIS_GOOGLE_MAPS_API_KEY`. This local file is ignored by Git; never commit it or share the key in chat.
4. Restart or refresh the app. Use the **Map view** menu to switch between satellite + labels, satellite, and roadmap.

When Google Maps is configured, route requests use Google's walking directions and display its step instructions and route distance. Google can only route along paths present in its map data; if it has no route for an internal campus path, the app reports that and offers the Google Maps handoff rather than presenting the estimated path as authoritative. Without a Google key, the offline campus graph remains available and is labeled as an estimate.

Individual campus pin positions and offline route lines are estimated from the supplied satellite screenshots. Before production use, verify gates, student entrances, restricted paths, and indoor rooms on campus. Edit `places` in `app.js` when validated data is available.
