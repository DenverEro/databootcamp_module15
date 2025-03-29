# Earthquake Visualization with Leaflet

## 📍 Project Overview

This project is a web-based interactive map that visualizes recent earthquake activity using real-time data from the United States Geological Survey (USGS). It was developed as part of Homework 15 to demonstrate skills in working with geospatial data, Leaflet.js, and D3.js.

## 🧠 Goal

The goal was to create an interactive map that:
- Displays earthquake events from the past 7 days
- Represents magnitude and depth using visual indicators
- Helps users understand the spatial distribution and intensity of recent earthquakes

## 🌍 Features Implemented

✅ **Live Earthquake Data**  
- Pulled from USGS GeoJSON feed  
- Data updated every 5 minutes

✅ **Map Setup with Leaflet**  
- Base map using OpenStreetMap tiles  
- Centered globally with zoom level appropriate for viewing worldwide activity

✅ **Dynamic Circle Markers**  
- Each earthquake displayed as a circle marker
- Circle size is based on magnitude
- Color is based on depth

✅ **Interactive Popups**  
- Each marker displays a popup with:
  - Location
  - Magnitude
  - Depth

✅ **Legend**  
- Color-coded legend added to the bottom-right
- Shows depth intervals and corresponding colors for quick reference

## 🛠️ Technologies Used

- [Leaflet.js](https://leafletjs.com/) for map rendering
- [D3.js](https://d3js.org/) for fetching and handling GeoJSON data
- HTML, CSS, and JavaScript

## 📚 Source

- Earthquake data: [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
