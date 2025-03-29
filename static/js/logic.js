// Create the 'basemap' tile layer that will be the background of our map.
const baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
});

// OPTIONAL: Step 2
// Create the 'street' tile layer as a second background of the map


// Create the map object with center and zoom options.
const map = L.map('map', {
  center: [20, 0], // Center the map roughly over the equator
  zoom: 2,
  layers: [baseMap] // Set the tile layer as the default layer
});

// URL for USGS Earthquake data from the past 7 days
const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Return a color based on earthquake depth
function getDepthColor(depth) {
  return depth > 90 ? "#d73027" :
         depth > 70 ? "#fc8d59" :
         depth > 50 ? "#fee08b" :
         depth > 30 ? "#d9ef8b" :
         depth > 10 ? "#91cf60" :
                      "#1a9850";
}

// Return a circle size based on magnitude
function getMagnitudeSize(mag) {
  return mag ? mag * 4 : 1;  // fallback size if mag is null
}

// Fetch earthquake data and plot it
d3.json(earthquakeUrl).then(data => {
  // Create a GeoJSON layer
  L.geoJson(data, {
    // Convert each point feature into a circle marker
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    // Style each circle
    style: function (feature) {
      const depth = feature.geometry.coordinates[2];
      const mag = feature.properties.mag;

      return {
        fillColor: getDepthColor(depth),
        radius: getMagnitudeSize(mag),
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.75,
        color: "#333"
      };
    },
    // Add popups
    onEachFeature: function (feature, layer) {
      const props = feature.properties;
      const depth = feature.geometry.coordinates[2];
      layer.bindPopup(
        `<strong>${props.place}</strong><br>
         Magnitude: ${props.mag}<br>
         Depth: ${depth} km`
      );
    }
  }).addTo(map);
});

// Create a Leaflet control for the legend
const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");
  const depths = [-10, 10, 30, 50, 70, 90];
  const labels = [];

  for (let i = 0; i < depths.length; i++) {
    const from = depths[i];
    const to = depths[i + 1];

    const color = getDepthColor(from + 1); // pick color from inside the range
    const rangeLabel = to ? `${from}–${to}` : `${from}+`;

    labels.push(
      `<i style="background:${color}"></i> ${rangeLabel}`
    );
  }

  div.innerHTML = "<strong>Depth (km)</strong><br>" + labels.join("<br>");
  return div;
};

// Add the legend to the map
legend.addTo(map);

















// Then add the 'basemap' tile layer to the map.

// OPTIONAL: Step 2
// Create the layer groups, base maps, and overlays for our two sets of data, earthquakes and tectonic_plates.
// Add a control to the map that will allow the user to change which layers are visible.


// Make a request that retrieves the earthquake geoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {

  // This function returns the style data for each of the earthquakes we plot on
  // the map. Pass the magnitude and depth of the earthquake into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {

  }

  // This function determines the color of the marker based on the depth of the earthquake.
  function getColor(depth) {

  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  function getRadius(magnitude) {

  }

  // Add a GeoJSON layer to the map once the file is loaded.
  L.geoJson(data, {
    // Turn each feature into a circleMarker on the map.
    pointToLayer: function (feature, latlng) {

    },
    // Set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // Create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
    onEachFeature: function (feature, layer) {

    }
  // OPTIONAL: Step 2
  // Add the data to the earthquake layer instead of directly to the map.
  }).addTo(map);

  // Create a legend control object.
  let legend = L.control({
    position: "bottomright"
  });

  // Then add all the details for the legend
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    // Initialize depth intervals and colors for the legend


    // Loop through our depth intervals to generate a label with a colored square for each interval.


    return div;
  };

  // Finally, add the legend to the map.


  // OPTIONAL: Step 2
  // Make a request to get our Tectonic Plate geoJSON data.
  d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function (plate_data) {
    // Save the geoJSON data, along with style information, to the tectonic_plates layer.


    // Then add the tectonic_plates layer to the map.

  });
});
