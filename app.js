const places = [
  { id: 'main-gate', name: 'Main Gate', type: 'Campus entrance', category: 'campus-entrance', lat: 26.34418, lng: 80.45162 },
  { id: 'hospital', name: 'Axis Hospital & Research Center', type: 'Health', category: 'health', lat: 26.34513, lng: 80.45123 },
  { id: 'architecture', name: 'Axis Institute of Architecture', type: 'Academic', category: 'academic', lat: 26.34554, lng: 80.45178 },
  { id: 'park', name: 'Axis Park', type: 'Open space', category: 'open-space', lat: 26.34593, lng: 80.45212 },
  { id: 'fashion', name: 'Axis Institute of Fashion Technology', type: 'Academic', category: 'academic', lat: 26.34553, lng: 80.45249 },
  { id: 'canteen', name: 'Axis Colleges Canteen/Cafeteria', type: 'Food', category: 'food', lat: 26.3448578, lng: 80.4527173 },
  { id: 'colleges', name: 'Axis Colleges', type: 'Academic', category: 'academic', lat: 26.34424, lng: 80.45220 },
  { id: 'diploma', name: 'Axis Institute of Diploma Engineering', type: 'Academic', category: 'academic', lat: 26.34397, lng: 80.45325 },
  { id: 'sports', name: 'Sports Courts', type: 'Sports', category: 'sports', lat: 26.34355, lng: 80.45365 },
  { id: 'pharmacy', name: 'Axis Institute of Pharmacy', type: 'Academic', category: 'academic', lat: 26.34412, lng: 80.45403 },
  { id: 'bus-yard', name: 'Bus Parking Yard', type: 'Transport', category: 'transport', lat: 26.34556, lng: 80.45373 },
  { id: 'workshop', name: 'Axis College Workshop', type: 'Workshop', category: 'workshop', lat: 26.34610, lng: 80.45088 },
  { id: 'library', name: 'Central Library', type: 'Academic', category: 'academic', lat: 26.34468, lng: 80.45295 },
  { id: 'admin-block', name: 'Administrative Block', type: 'Administrative', category: 'administrative', lat: 26.34448, lng: 80.45198 },
  { id: 'auditorium', name: 'Auditorium and Seminar Hall', type: 'Event', category: 'event', lat: 26.34438, lng: 80.45353 },
  { id: 'hostel', name: 'Student Hostel', type: 'Residential', category: 'residential', lat: 26.34362, lng: 80.45233 },
  { id: 'computer-center', name: 'Computer Center and Labs', type: 'Academic', category: 'academic', lat: 26.34404, lng: 80.45395 },
  { id: 'security-office', name: 'Security Office', type: 'Security', category: 'security', lat: 26.34401, lng: 80.45162 },
  { id: 'parking-zone', name: 'Visitor Parking Zone', type: 'Transport', category: 'transport', lat: 26.34390, lng: 80.45154 },
  { id: 'medical-room', name: 'Medical Room / First Aid Center', type: 'Health', category: 'health', lat: 26.34452, lng: 80.45210 }
];

// Coordinates for the added junctions are estimates placed against the
// existing campus pins; the annotated oblique image does not include map
// bounds/control points for exact georeferencing.
const routeNodes = {
  'main-gate': [26.34418, 80.45162],
  'west-road': [26.34475, 80.45172],
  'central-road': [26.34467, 80.45245],
  'south-road': [26.34408, 80.45288],
  'east-road': [26.34413, 80.45339],
  'north-road': [26.34540, 80.45235],
  'west-entry-junction': [26.34472, 80.45105],
  'west-north-junction': [26.34532, 80.45098],
  'northwest-junction': [26.34582, 80.45125],
  'north-center-junction': [26.34602, 80.45210],
  'park-junction': [26.34574, 80.45248],
  'northeast-junction': [26.34582, 80.45324],
  'east-north-junction': [26.34520, 80.45372],
  'east-center-junction': [26.34463, 80.45356],
  'southeast-junction': [26.34402, 80.45375],
  'south-center-junction': [26.34372, 80.45288],
  'southwest-junction': [26.34392, 80.45192],
  'central-west-junction': [26.34502, 80.45172],
  'central-junction': [26.34505, 80.45230],
  'central-east-junction': [26.34492, 80.45306],
  'colleges': [26.34424, 80.45220],
  'canteen': [26.3448578, 80.4527173],
  'diploma': [26.34397, 80.45325],
  'sports': [26.34355, 80.45365],
  'pharmacy': [26.34412, 80.45403],
  'architecture': [26.34554, 80.45178],
  'fashion': [26.34553, 80.45249],
  'park': [26.34593, 80.45212],
  'hospital': [26.34513, 80.45123],
  'bus-yard': [26.34556, 80.45373],
  'workshop': [26.34610, 80.45088],
  'library': [26.34468, 80.45295],
  'admin-block': [26.34448, 80.45198],
  'auditorium': [26.34438, 80.45353],
  'hostel': [26.34362, 80.45233],
  'computer-center': [26.34404, 80.45395],
  'security-office': [26.34401, 80.45162],
  'parking-zone': [26.34390, 80.45154],
  'medical-room': [26.34452, 80.45210]
};

const routeGraph = {
  // Junctions and connections transcribed from the user's blue-marked campus
  // paths. Edges are undirected because the image shows walkable two-way paths.
  'main-gate': ['west-entry-junction', 'security-office'],
  'west-entry-junction': ['main-gate', 'west-road', 'southwest-junction'],
  'west-road': ['west-entry-junction', 'central-west-junction', 'admin-block'],
  'southwest-junction': ['west-entry-junction', 'south-center-junction', 'parking-zone'],
  'west-north-junction': ['central-west-junction', 'northwest-junction', 'hospital'],
  'northwest-junction': ['west-north-junction', 'north-center-junction', 'hospital', 'architecture'],
  'north-center-junction': ['northwest-junction', 'park-junction', 'park', 'north-road'],
  'park-junction': ['north-center-junction', 'northeast-junction', 'park', 'architecture'],
  'northeast-junction': ['park-junction', 'east-north-junction', 'bus-yard'],
  'east-north-junction': ['northeast-junction', 'east-center-junction', 'bus-yard', 'fashion'],
  'east-center-junction': ['east-north-junction', 'southeast-junction', 'central-east-junction', 'canteen'],
  'southeast-junction': ['east-center-junction', 'south-center-junction', 'pharmacy', 'sports'],
  'south-center-junction': ['southeast-junction', 'southwest-junction', 'colleges', 'diploma'],
  'central-west-junction': ['west-road', 'west-north-junction', 'central-junction', 'medical-room'],
  'central-junction': ['central-west-junction', 'central-road', 'central-east-junction', 'architecture', 'fashion'],
  'central-east-junction': ['central-junction', 'central-road', 'east-center-junction', 'canteen', 'auditorium'],
  'central-road': ['central-junction', 'central-east-junction', 'library', 'medical-room'],
  'south-road': ['south-center-junction', 'east-road', 'colleges', 'diploma'],
  'east-road': ['south-road', 'southeast-junction', 'diploma', 'sports', 'pharmacy'],
  'hospital': ['west-north-junction', 'northwest-junction', 'architecture'],
  'architecture': ['northwest-junction', 'park-junction', 'central-junction', 'fashion', 'hospital'],
  'fashion': ['central-junction', 'east-north-junction', 'canteen', 'architecture'],
  'park': ['north-center-junction', 'park-junction'],
  'bus-yard': ['northeast-junction', 'east-north-junction'],
  'canteen': ['central-east-junction', 'east-center-junction', 'library', 'fashion'],
  'colleges': ['south-center-junction', 'south-road', 'diploma', 'library'],
  'diploma': ['south-center-junction', 'south-road', 'east-road', 'sports', 'auditorium', 'computer-center'],
  'sports': ['southeast-junction', 'east-road', 'diploma', 'pharmacy', 'computer-center'],
  'pharmacy': ['southeast-junction', 'east-road', 'sports'],
  'library': ['central-road', 'canteen', 'colleges'],
  'admin-block': ['west-road', 'medical-room'],
  'medical-room': ['central-west-junction', 'central-road', 'admin-block'],
  'auditorium': ['central-east-junction', 'diploma', 'computer-center'],
  'computer-center': ['diploma', 'sports', 'auditorium'],
  'hostel': ['south-center-junction', 'parking-zone'],
  'parking-zone': ['southwest-junction', 'hostel', 'security-office'],
  'security-office': ['main-gate', 'parking-zone']
};

Object.entries(routeGraph).forEach(([node, neighbors]) => {
  neighbors.forEach(neighbor => {
    if (!routeGraph[neighbor]) routeGraph[neighbor] = [];
    if (!routeGraph[neighbor].includes(node)) routeGraph[neighbor].push(node);
  });
});

const fieldNames = new Intl.DisplayNames(['en'], { type: 'region' });

const map = L.map('map', { zoomControl: false, minZoom: 15, maxZoom: 20 }).setView([26.34485, 80.45265], 17);
L.control.zoom({ position: 'topleft' }).addTo(map);

const satelliteTiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 20,
  maxNativeZoom: 17,
  attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
});

const labelTiles = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 20,
  maxNativeZoom: 17,
  attribution: 'Labels © Esri'
});

satelliteTiles.addTo(map);
labelTiles.addTo(map);

const bounds = L.latLngBounds([26.34322, 80.45053], [26.34625, 80.45427]);
let line = null;
const markers = new Map();
const obstacleLayer = L.featureGroup().addTo(map);
const mapTypeSelector = document.querySelector('#mapType');
const mapStatus = document.querySelector('#mapStatus');
let googleMap = null;
let googleDirectionsService = null;
let googleDirectionsRenderer = null;
let googleRouteResult = null;
let routeRequestId = 0;

function syncGoogleMapViewport() {
  if (!googleMap) return;
  const center = map.getCenter();
  googleMap.setOptions({
    center: { lat: center.lat, lng: center.lng },
    zoom: map.getZoom()
  });
}

function initializeGoogleMap() {
  if (!window.google?.maps?.Map) {
    mapStatus.textContent = 'Google Maps could not load; showing satellite fallback. Check the browser console.';
    return;
  }

  googleMap = new window.google.maps.Map(document.querySelector('#googleMap'), {
    center: { lat: 26.34485, lng: 80.45265 },
    zoom: 17,
    minZoom: 15,
    maxZoom: 20,
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
    gestureHandling: 'none',
    keyboardShortcuts: false,
    clickableIcons: false
  });
  googleDirectionsService = new window.google.maps.DirectionsService();
  googleDirectionsRenderer = new window.google.maps.DirectionsRenderer({
    map: googleMap,
    suppressMarkers: true,
    preserveViewport: true,
    polylineOptions: {
      strokeColor: '#e9683b',
      strokeOpacity: 0.95,
      strokeWeight: 6
    }
  });
  satelliteTiles.remove();
  labelTiles.remove();
  mapTypeSelector.disabled = false;
  mapStatus.textContent = 'Google Maps · Axis Knowledge City';
  map.on('moveend zoomend', syncGoogleMapViewport);
  mapTypeSelector.addEventListener('change', () => {
    if (googleMap) googleMap.setMapTypeId(mapTypeSelector.value);
  });
  syncGoogleMapViewport();
}

window.axisGoogleMapsReady.then(available => {
  if (available) {
    initializeGoogleMap();
  } else if (!window.AXIS_GOOGLE_MAPS_API_KEY) {
    mapStatus.textContent = 'Add your restricted Google Maps key to config.local.js to enable Google Maps; satellite fallback is active.';
  } else {
    mapStatus.textContent = 'Google Maps could not load; showing satellite fallback. Check the key, API restrictions, and billing.';
  }
});

const start = document.querySelector('#start');
const destination = document.querySelector('#destination');
const placeSearch = document.querySelector('#placeSearch');
const filterChips = document.querySelector('#filterChips');
const routeStepsList = document.querySelector('#routeSteps');
const quickRoutes = document.querySelector('#quickRoutes');
const placesList = document.querySelector('#placesList');

let activeCategory = 'all';
let searchQuery = '';

function formatCategory(category) {
  return category
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getFilteredPlaces() {
  return places.filter(place => {
    const matchesCategory = activeCategory === 'all' || place.category === activeCategory;
    const matchesSearch = !searchQuery || [place.name, place.type, place.category].join(' ').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function renderFilterChips() {
  const categories = ['all', ...new Set(places.map(place => place.category))];
  filterChips.innerHTML = categories.map(category => {
    const label = category === 'all' ? 'All' : formatCategory(category);
    return `<button type="button" class="chip ${activeCategory === category ? 'active' : ''}" data-category="${category}">${label}</button>`;
  }).join('');

  filterChips.querySelectorAll('.chip').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderFilterChips();
      syncPlaceOptions();
      renderPlaceList();
    });
  });
}

function syncPlaceOptions() {
  const options = getFilteredPlaces();
  if (!options.length) {
    start.innerHTML = '<option value="">No matching places</option>';
    destination.innerHTML = '<option value="">No matching places</option>';
    return;
  }

  const optionMarkup = options.map(place => `<option value="${place.id}">${place.name}</option>`).join('');
  start.innerHTML = optionMarkup;
  destination.innerHTML = optionMarkup;

  if (!options.some(place => place.id === start.value)) {
    start.value = options[0].id;
  }
  if (!options.some(place => place.id === destination.value)) {
    destination.value = options[1] ? options[1].id : options[0].id;
  }
  if (destination.value === start.value && options.length > 1) {
    destination.value = options.find(place => place.id !== start.value).id;
  }
}

function renderPlaceList() {
  const visiblePlaces = getFilteredPlaces();
  placesList.innerHTML = visiblePlaces.map(place => `<li><strong>${place.name}</strong> — ${place.type}</li>`).join('');
}

function renderQuickRoutes() {
  const presets = [
    { from: 'main-gate', to: 'canteen', label: 'Gate to Canteen' },
    { from: 'architecture', to: 'park', label: 'Architecture to Park' },
    { from: 'colleges', to: 'sports', label: 'College to Courts' },
    { from: 'canteen', to: 'pharmacy', label: 'Canteen to Pharmacy' },
    { from: 'main-gate', to: 'library', label: 'Gate to Library' },
    { from: 'parking-zone', to: 'medical-room', label: 'Parking to Clinic' }
  ];

  quickRoutes.innerHTML = presets.slice(0, 4).map(route => `
    <button type="button" class="quick-route" data-from="${route.from}" data-to="${route.to}">
      <strong>${route.label}</strong>
      <span>${getPlaceName(route.from)} → ${getPlaceName(route.to)}</span>
    </button>
  `).join('');

  quickRoutes.querySelectorAll('.quick-route').forEach(button => {
    button.addEventListener('click', () => {
      start.value = button.dataset.from;
      destination.value = button.dataset.to;
      draw();
    });
  });
}

function getPlaceName(id) {
  const match = places.find(place => place.id === id);
  return match ? match.name : id;
}

function shuffleRoute() {
  const visible = getFilteredPlaces();
  if (visible.length < 2) {
    toast('Try another filter to see more routes.');
    return;
  }
  const startPick = visible[Math.floor(Math.random() * visible.length)];
  const destPick = visible.filter(place => place.id !== startPick.id)[Math.floor(Math.random() * (visible.length - 1))];
  start.value = startPick.id;
  destination.value = destPick.id;
  draw();
}

function saveObstacles() {
  try {
    const geo = obstacleLayer.toGeoJSON();
    localStorage.setItem('axis_obstacles', JSON.stringify(geo));
  } catch (error) {
    console.error('saveObstacles', error);
  }
}

function loadObstacles() {
  try {
    const raw = localStorage.getItem('axis_obstacles');
    if (!raw) return;
    const geo = JSON.parse(raw);
    L.geoJSON(geo).eachLayer(layer => obstacleLayer.addLayer(layer));
  } catch (error) {
    console.error('loadObstacles', error);
  }
}

function isAdmin() {
  return sessionStorage.getItem('axis_admin') === '1';
}

async function sha256Str(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const hex = [];
  const view = new DataView(digest);
  for (let i = 0; i < view.byteLength; i += 4) {
    hex.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
  }
  return hex.join('');
}

async function setAdminPassword(password) {
  try {
    const hash = await sha256Str(password);
    localStorage.setItem('axis_admin_hash', hash);
    sessionStorage.setItem('axis_admin', '1');
    updateAdminUI();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function verifyAdminPassword(password) {
  try {
    const hash = await sha256Str(password);
    return hash === localStorage.getItem('axis_admin_hash');
  } catch (error) {
    return false;
  }
}

function updateAdminUI() {
  const adminToggle = document.getElementById('adminToggle');
  const adminLogout = document.getElementById('adminLogout');
  const badge = document.getElementById('modeBadge');

  if (isAdmin()) {
    adminToggle.style.display = 'none';
    adminLogout.style.display = 'inline-block';
    badge.textContent = 'Mode: Administrator';
    badge.classList.add('admin');
  } else {
    adminToggle.style.display = 'inline-block';
    adminLogout.style.display = 'none';
    badge.textContent = 'Mode: Student';
    badge.classList.remove('admin');
  }
}

let drawControl = null;
function enableDrawControls() {
  if (drawControl) return;
  drawControl = new L.Control.Draw({
    edit: { featureGroup: obstacleLayer, remove: true },
    draw: {
      polyline: false,
      rectangle: true,
      circle: false,
      circlemarker: false,
      marker: false,
      polygon: { allowIntersection: false, showArea: true }
    }
  });
  map.addControl(drawControl);
  map.on(L.Draw.Event.CREATED, event => {
    obstacleLayer.addLayer(event.layer);
    saveObstacles();
  });
  map.on(L.Draw.Event.EDITED, saveObstacles);
  map.on(L.Draw.Event.DELETED, saveObstacles);
}

function disableDrawControls() {
  if (!drawControl) return;
  try {
    map.removeControl(drawControl);
  } catch (error) {
    console.error(error);
  }
  drawControl = null;
}

function pointInPolygon(point, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].lng;
    const yi = polygon[i].lat;
    const xj = polygon[j].lng;
    const yj = polygon[j].lat;
    const intersect = ((yi > point.y) !== (yj > point.y)) && (point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function orient(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

function segmentsIntersect(a, b, c, d) {
  const p = { x: a.lng, y: a.lat };
  const q = { x: b.lng, y: b.lat };
  const r = { x: c.lng, y: c.lat };
  const s = { x: d.lng, y: d.lat };

  const o1 = orient(p, q, r);
  const o2 = orient(p, q, s);
  const o3 = orient(r, s, p);
  const o4 = orient(r, s, q);

  if (o1 === 0 && Math.min(p.x, q.x) <= r.x && r.x <= Math.max(p.x, q.x) && Math.min(p.y, q.y) <= r.y && r.y <= Math.max(p.y, q.y)) return true;
  if (o2 === 0 && Math.min(p.x, q.x) <= s.x && s.x <= Math.max(p.x, q.x) && Math.min(p.y, q.y) <= s.y && s.y <= Math.max(p.y, q.y)) return true;
  if (o3 === 0 && Math.min(r.x, s.x) <= p.x && p.x <= Math.max(r.x, s.x) && Math.min(r.y, s.y) <= p.y && p.y <= Math.max(r.y, s.y)) return true;
  if (o4 === 0 && Math.min(r.x, s.x) <= q.x && q.x <= Math.max(r.x, s.x) && Math.min(r.y, s.y) <= q.y && q.y <= Math.max(r.y, s.y)) return true;

  return (o1 > 0) !== (o2 > 0) && (o3 > 0) !== (o4 > 0);
}

function segmentIntersectsObstacles(startLat, startLng, endLat, endLng) {
  const start = { lat: startLat, lng: startLng };
  const end = { lat: endLat, lng: endLng };

  let blocked = false;
  obstacleLayer.eachLayer(layer => {
    if (blocked) return;
    let latlngs = layer.getLatLngs ? layer.getLatLngs() : [];
    if (!latlngs || !latlngs.length) return;
    if (Array.isArray(latlngs[0])) latlngs = latlngs[0];

    if (pointInPolygon({ x: start.lng, y: start.lat }, latlngs) || pointInPolygon({ x: end.lng, y: end.lat }, latlngs)) {
      blocked = true;
      return;
    }

    for (let i = 0; i < latlngs.length; i++) {
      const a = latlngs[i];
      const b = latlngs[(i + 1) % latlngs.length];
      if (segmentsIntersect(start, end, a, b)) {
        blocked = true;
        return;
      }
    }
  });

  return blocked;
}

function edgeBlocked(id1, id2) {
  if (!routeNodes[id1] || !routeNodes[id2]) return false;
  const a = routeNodes[id1];
  const b = routeNodes[id2];
  return segmentIntersectsObstacles(a[0], a[1], b[0], b[1]);
}

const liveLocation = {
  watchId: null,
  marker: null,
  active: false,
  lastLat: null,
  lastLng: null,
  heading: 0,
  orientationHandler: null,
  orientationEvent: null
};

function icon(place, active = false) {
  return L.divIcon({
    className: '',
    iconSize: [30, 38],
    iconAnchor: [15, 36],
    html: `<div class="place-marker ${active ? 'destination' : ''}"><span>${place.name.split(' ').map(word => word[0]).join('').slice(0, 2)}</span></div>`
  });
}

function userLocationIcon() {
  return L.divIcon({
    className: '',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    html: '<div class="live-location-marker" aria-label="Your direction"><svg viewBox="0 0 36 36" aria-hidden="true"><path d="M18 2 31 33 18 26 5 33Z" /></svg></div>'
  });
}

function ensureUserMarker() {
  if (!liveLocation.marker) {
    liveLocation.marker = L.marker([26.34485, 80.45265], { icon: userLocationIcon(), interactive: false }).addTo(map);
    liveLocation.marker.bindPopup('You are here');
  }
  return liveLocation.marker;
}

function updateUserMarker(lat, lng) {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

  const marker = ensureUserMarker();
  liveLocation.lastLat = lat;
  liveLocation.lastLng = lng;
  marker.setLatLng([lat, lng]);
  marker.bindPopup('You are here');
  if (!marker.isPopupOpen()) {
    marker.openPopup();
  }
}

function updateDeviceHeading(event) {
  let heading;
  if (Number.isFinite(event.webkitCompassHeading)) {
    heading = event.webkitCompassHeading;
  } else if (Number.isFinite(event.alpha)) {
    const screenAngle = window.screen?.orientation?.angle ?? window.orientation ?? 0;
    heading = 360 - event.alpha + screenAngle;
  } else {
    return;
  }

  liveLocation.heading = ((heading % 360) + 360) % 360;
  const arrow = liveLocation.marker?.getElement()?.querySelector('.live-location-marker');
  if (arrow) arrow.style.setProperty('--heading', `${liveLocation.heading}deg`);
}

async function startDeviceOrientation() {
  if (!window.DeviceOrientationEvent) return false;

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    try {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== 'granted') return false;
    } catch (error) {
      console.warn('Device orientation permission was not granted.', error);
      return false;
    }
  }

  liveLocation.orientationEvent = 'ondeviceorientationabsolute' in window ? 'deviceorientationabsolute' : 'deviceorientation';
  liveLocation.orientationHandler = updateDeviceHeading;
  window.addEventListener(liveLocation.orientationEvent, liveLocation.orientationHandler, true);
  return true;
}

function nearestCampusPlace(lat, lng) {
  return places.reduce((best, place) => {
    const distance = Math.hypot(place.lat - lat, place.lng - lng);
    return distance < best.distance ? { place, distance } : best;
  }, { place: places[0], distance: Number.POSITIVE_INFINITY }).place;
}

function stopLiveTracking() {
  if (liveLocation.watchId !== null) {
    navigator.geolocation.clearWatch(liveLocation.watchId);
    liveLocation.watchId = null;
  }
  if (liveLocation.orientationHandler && liveLocation.orientationEvent) {
    window.removeEventListener(liveLocation.orientationEvent, liveLocation.orientationHandler, true);
    liveLocation.orientationHandler = null;
    liveLocation.orientationEvent = null;
  }
  liveLocation.active = false;
  const locateBtn = document.querySelector('#locateMe');
  locateBtn.textContent = '⌖ Use my location';
  locateBtn.setAttribute('aria-pressed', 'false');
}

async function startLiveTracking() {
  if (!navigator.geolocation) {
    toast('Location is not available in this browser.');
    return;
  }

  stopLiveTracking();
  liveLocation.active = true;
  const compassAvailable = await startDeviceOrientation();
  if (!compassAvailable) {
    toast('Location is active, but device compass/orientation is unavailable or permission was denied.');
  }
  const locateBtn = document.querySelector('#locateMe');
  locateBtn.textContent = '⏹ Stop live tracking';
  locateBtn.setAttribute('aria-pressed', 'true');

  const updatePosition = position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    updateUserMarker(lat, lng);
    map.flyTo([lat, lng], Math.max(map.getZoom(), 17), { animate: true, duration: 1.2 });

    const nearest = nearestCampusPlace(lat, lng);
    if (nearest && start.value !== nearest.id) {
      start.value = nearest.id;
      draw();
    }
  };

  navigator.geolocation.getCurrentPosition(
    position => {
      updatePosition(position);
      toast('Live location tracking started.');
    },
    () => {
      toast('Location permission is blocked. Allow access to show your current position.');
      stopLiveTracking();
    },
    { enableHighAccuracy: true, timeout: 15000 }
  );

  liveLocation.watchId = navigator.geolocation.watchPosition(
    updatePosition,
    () => {
      toast('Live tracking paused. Please allow location access again.');
      stopLiveTracking();
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 5000 }
  );
}

function nearestWalkNode(placeId) {
  const place = placeById(placeId);
  // Use a place's mapped network node when available; snapping every place to
  // the geographically nearest node can attach it to the wrong side of a road.
  if (routeGraph[placeId] && routeNodes[placeId]) return placeId;

  const candidates = Object.keys(routeGraph)
    .filter(id => routeNodes[id])
    .map(id => ({ id, point: routeNodes[id] }));

  let bestNode = candidates[0]?.id || placeId;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const candidate of candidates) {
    const distance = Math.hypot(candidate.point[0] - place.lat, candidate.point[1] - place.lng);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestNode = candidate.id;
    }
  }

  return bestNode;
}

function route(from, to) {
  if (from.id === to.id) return [[from.lat, from.lng]];

  const startNode = nearestWalkNode(from.id);
  const endNode = nearestWalkNode(to.id);
  const distances = { [startNode]: 0 };
  const previous = {};
  const unvisited = new Set(Object.keys(routeGraph));

  // The old breadth-first search minimized the number of graph edges, not
  // walking distance, so a long detour could beat a much shorter route.
  while (unvisited.size) {
    let current = null;
    let currentDistance = Number.POSITIVE_INFINITY;
    for (const node of unvisited) {
      if ((distances[node] ?? Number.POSITIVE_INFINITY) < currentDistance) {
        current = node;
        currentDistance = distances[node];
      }
    }

    if (current === null || currentDistance === Number.POSITIVE_INFINITY) break;
    unvisited.delete(current);
    if (current === endNode) break;

    for (const next of routeGraph[current] || []) {
      if (!unvisited.has(next) || !routeNodes[next] || edgeBlocked(current, next)) continue;
      const nextDistance = currentDistance + map.distance(routeNodes[current], routeNodes[next]);
      if (nextDistance < (distances[next] ?? Number.POSITIVE_INFINITY)) {
        distances[next] = nextDistance;
        previous[next] = current;
      }
    }
  }

  if (startNode !== endNode && !Object.prototype.hasOwnProperty.call(previous, endNode)) return null;

  const path = [];
  let current = endNode;
  while (current !== undefined) {
    path.unshift(current);
    if (current === startNode) break;
    current = previous[current];
  }

  const points = [
    [from.lat, from.lng],
    ...path.map(id => routeNodes[id]),
    [to.lat, to.lng]
  ];

  return points.filter((point, index) => index === 0 || map.distance(points[index - 1], point) > 1);
}

function placeById(id) {
  return places.find(place => place.id === id) || places[0];
}

function metres(points) {
  return Math.round(points.slice(1).reduce((distance, point, index) => distance + map.distance(points[index], point), 0));
}

function campusPlaceQuery(place) {
  return `${place.name}, Axis Knowledge City, Rooma, Kanpur, Uttar Pradesh 209402`;
}

function googleDirectionsUrl(from, to) {
  const params = new URLSearchParams({
    api: '1',
    origin: campusPlaceQuery(from),
    destination: campusPlaceQuery(to),
    travelmode: 'walking'
  });
  return `https://www.google.com/maps/dir/?${params}`;
}

function getGoogleWalkingRoute(from, to) {
  return new Promise((resolve, reject) => {
    if (!googleDirectionsService) {
      reject(new Error('Google Directions is not available.'));
      return;
    }

    googleDirectionsService.route({
      origin: campusPlaceQuery(from),
      destination: campusPlaceQuery(to),
      travelMode: window.google.maps.TravelMode.WALKING,
      region: 'IN'
    }, (result, status) => {
      const leg = result?.routes?.[0]?.legs?.[0];
      if (status === window.google.maps.DirectionsStatus.OK && leg) {
        resolve({ result, leg });
      } else {
        reject(new Error(`Google walking directions returned ${status || 'no route'}.`));
      }
    });
  });
}

function showRouteUnavailable(startPlace, endPlace, message, requestId) {
  if (requestId !== routeRequestId) return;
  googleRouteResult = null;
  googleDirectionsRenderer?.setMap(null);
  if (line) {
    map.removeLayer(line);
    line = null;
  }
  document.querySelector('#routeTitle').textContent = `${startPlace.name} → ${endPlace.name}`;
  document.querySelector('#routeStats').textContent = message;
  routeStepsList.replaceChildren();
  const googleRoute = document.querySelector('#googleRoute');
  googleRoute.href = googleDirectionsUrl(startPlace, endPlace);
  googleRoute.style.display = 'inline-block';
}

async function draw() {
  const requestId = ++routeRequestId;
  const startPlace = placeById(start.value || 'main-gate');
  const endPlace = placeById(destination.value || 'canteen');

  if (!startPlace || !endPlace || startPlace.id === endPlace.id) {
    toast('Select two different campus places.');
    return;
  }

  let points;
  let distanceMeters;
  let walkMinutes;
  let directions = [];
  let routeSource;

  if (googleDirectionsService) {
    document.querySelector('#routeStats').textContent = 'Finding a Google Maps walking route…';
    try {
      const { result, leg } = await getGoogleWalkingRoute(startPlace, endPlace);
      if (requestId !== routeRequestId) return;
      googleRouteResult = result;
      points = leg.steps.flatMap((step, index) => {
        const path = step.path.map(point => [point.lat(), point.lng()]);
        return index === 0 ? path : path.slice(1);
      });
      if (!points.length) {
        points = result.routes[0].overview_path.map(point => [point.lat(), point.lng()]);
      }
      distanceMeters = leg.distance?.value ?? metres(points);
      walkMinutes = leg.duration ? Math.max(1, Math.ceil(leg.duration.value / 60)) : Math.max(1, Math.ceil(distanceMeters / 75));
      directions = leg.steps.map(step => step.instructions.replace(/<[^>]*>/g, '').trim()).filter(Boolean);
      routeSource = 'Google Maps walking route';
    } catch (error) {
      console.warn('Google walking directions could not be calculated.', error);
      showRouteUnavailable(
        startPlace,
        endPlace,
        'Google Maps could not find a walking route. Check that the Directions API is enabled for your key, or open the route in Google Maps.',
        requestId
      );
      toast('Google Maps could not find a walking route.');
      return;
    }
  } else {
    googleRouteResult = null;
    showRouteUnavailable(
      startPlace,
      endPlace,
      'No verified campus walking route is available offline. Use Google Maps for directions, or enable Google Directions for an in-app route.',
      requestId
    );
    toast('No verified offline walking route is available.');
    return;
  }

  if (requestId !== routeRequestId) return;
  if (line) {
    map.removeLayer(line);
    line = null;
  }
  if (googleRouteResult && googleDirectionsRenderer) {
    googleDirectionsRenderer.setMap(googleMap);
    googleDirectionsRenderer.setDirections(googleRouteResult);
  } else {
    googleDirectionsRenderer?.setMap(null);
    line = L.polyline(points, { color: '#e9683b', weight: 5, opacity: 0.9, lineJoin: 'round' }).addTo(map);
  }

  places.forEach(place => {
    const marker = markers.get(place.id);
    if (marker) marker.setIcon(icon(place, place.id === endPlace.id));
  });

  document.querySelector('#routeTitle').textContent = `${startPlace.name} → ${endPlace.name}`;
  document.querySelector('#routeStats').textContent = `${routeSource} · ${distanceMeters} m · ${walkMinutes} min walk`;
  routeStepsList.replaceChildren();
  [`Start at ${startPlace.name}.`, ...directions, `Reach ${endPlace.name}.`].forEach(text => {
    const step = document.createElement('li');
    step.textContent = text;
    routeStepsList.append(step);
  });

  const googleRoute = document.querySelector('#googleRoute');
  googleRoute.href = googleDirectionsUrl(startPlace, endPlace);
  googleRoute.style.display = 'inline-block';

  map.fitBounds(L.latLngBounds(points), { padding: [55, 55] });
  markers.get(endPlace.id)?.openPopup();
}

function toast(message) {
  const element = document.querySelector('#toast');
  element.textContent = message;
  element.classList.add('show');
  setTimeout(() => element.classList.remove('show'), 2800);
}

function initializeMapMarkers() {
  places.forEach(place => {
    const marker = L.marker([place.lat, place.lng], { icon: icon(place) }).addTo(map).bindPopup(`<b>${place.name}</b><br><small>${place.type}</small>`);
    marker.on('click', () => {
      destination.value = place.id;
      draw();
    });
    markers.set(place.id, marker);
  });
}

function attachEvents() {
  document.querySelector('#routeForm').addEventListener('submit', event => {
    event.preventDefault();
    draw();
  });

  document.querySelector('#swap').addEventListener('click', () => {
    [start.value, destination.value] = [destination.value, start.value];
    draw();
  });

  document.querySelector('#showPlaces').addEventListener('click', () => {
    document.querySelector('#placesDialog').showModal();
  });

  document.querySelector('#closeDialog').addEventListener('click', () => {
    document.querySelector('#placesDialog').close();
  });

  document.querySelector('#resetMap').addEventListener('click', () => {
    map.fitBounds(bounds, { padding: [20, 20] });
  });

  document.querySelector('#locateMe').addEventListener('click', () => {
    if (liveLocation.active) {
      stopLiveTracking();
      return;
    }
    startLiveTracking();
  });

  document.getElementById('shuffleRoute').addEventListener('click', shuffleRoute);

  placeSearch.addEventListener('input', event => {
    searchQuery = event.target.value.trim();
    syncPlaceOptions();
    renderPlaceList();
  });

  const adminBtn = document.getElementById('adminToggle');
  const adminLogoutBtn = document.getElementById('adminLogout');

  if (adminBtn) {
    adminBtn.addEventListener('click', async () => {
      if (!localStorage.getItem('axis_admin_hash')) {
        const primary = prompt('Set admin password (stored locally in this browser)');
        if (!primary) return;
        const confirmPassword = prompt('Confirm admin password');
        if (primary !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        const success = await setAdminPassword(primary);
        if (success) {
          alert('Admin password set — you are now logged in');
        }
        enableDrawControls();
        updateAdminUI();
        return;
      }

      const password = prompt('Enter admin password');
      if (!password) return;
      const verified = await verifyAdminPassword(password);
      if (verified) {
        sessionStorage.setItem('axis_admin', '1');
        alert('Admin login successful');
        enableDrawControls();
        updateAdminUI();
      } else {
        alert('Invalid password');
      }
    });
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('axis_admin');
      disableDrawControls();
      updateAdminUI();
    });
  }
}

initializeMapMarkers();
loadObstacles();
updateAdminUI();
renderFilterChips();
renderQuickRoutes();
renderPlaceList();
syncPlaceOptions();
attachEvents();
map.fitBounds(bounds, { padding: [20, 20] });
