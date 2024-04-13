export function interpolateGreatCircle(start, end, numPoints = 100) {
  let coordinates = [];

  // Convert degrees to radians
  const lat1 = (start[1] * Math.PI) / 180;
  const lon1 = (start[0] * Math.PI) / 180;
  const lat2 = (end[1] * Math.PI) / 180;
  const lon2 = (end[0] * Math.PI) / 180;

  // Calculate the total arc (angular distance) between the points
  const deltaLat = lat2 - lat1;
  const deltaLon = lon2 - lon1;
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const A = Math.sin((1 - t) * c) / Math.sin(c);
    const B = Math.sin(t * c) / Math.sin(c);
    const x =
      A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
    const y =
      A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
    const z = A * Math.sin(lat1) + B * Math.sin(lat2);
    const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    const lon = Math.atan2(y, x);
    coordinates.push([(lon * 180) / Math.PI, (lat * 180) / Math.PI]);
  }

  return coordinates;
}

export function haversineDistance(coords1, coords2, isMiles = false) {
  // Earth radius in kilometers or miles
  const R = isMiles ? 3958.8 : 6371.0;

  const lat1 = (coords1[1] * Math.PI) / 180;
  const lon1 = (coords1[0] * Math.PI) / 180;
  const lat2 = (coords2[1] * Math.PI) / 180;
  const lon2 = (coords2[0] * Math.PI) / 180;

  const deltaLat = lat2 - lat1;
  const deltaLon = lon2 - lon1;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
}

export function convertKmToMiles(kilometers) {
  const miles = kilometers * 0.621371;
  return miles;
}

export function calculateFlightDuration(distanceKm, speedKmH = 600) {
  const durationHours = distanceKm / speedKmH;
  return durationHours;
}
