import leaflet from 'leaflet';
const Marker = leaflet.Marker;

export const leafletMock = {
  icon: () => {},
  map: () => ({
    setView: () => {},
    addTo: () => {},
  }),
  tileLayer: () => ({
    addTo: () => {},
  }),
  marker: () => ({
    addTo: () => {},
  }),
  layerGroup: () => ({
    addTo: () => {},
  }),
  Marker,
};
