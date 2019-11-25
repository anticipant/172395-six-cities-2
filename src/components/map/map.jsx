import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.LAYER_URL = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
    this.icon = props.leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    this.getPins = this.getPins.bind(this);
  }

  getPins(offers) {
    const {icon} = this;
    const {leaflet} = this.props;
    return offers.map((offer) => new leaflet.Marker([offer.location.latitude, offer.location.longitude], {icon}));
  }

  componentDidMount() {
    const {offers, leaflet} = this.props;

    const cityInfo = offers[0] ? offers[0].city : null;
    const zoom = cityInfo ? cityInfo.location.zoom : 8;
    const latitude = cityInfo ? cityInfo.location.latitude : undefined;
    const longitude = cityInfo ? cityInfo.location.longitude : undefined;
    const city = latitude && longitude ? [latitude, longitude] : [52.3909, 4.8530];
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(this.LAYER_URL, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    let marker = this.getPins(offers);

    const markerGroup = leaflet.layerGroup(marker);
    markerGroup.addTo(map);
    this.setState({
      map,
      markerGroup,
    });
  }

  componentDidUpdate(prevProps) {

    const {
      state: {map, markerGroup},
      props: {name, leaflet, offers}
    } = this;

    if (prevProps.name !== name) {
      map.removeLayer(markerGroup);

      let marker = this.getPins(offers);

      const newMarkerGroup = leaflet.layerGroup(marker);
      newMarkerGroup.addTo(map);
      this.setState({
        map,
        markerGroup: newMarkerGroup,
      });
    }
  }


  render() {
    return (
      <div id="map" style={{
        width: `100%`,
        height: this.props.height ? `${this.props.height}px` : undefined,
      }}/>
    );
  }
}
Map.propTypes = {
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  leaflet: PropTypes.object,
};

export default Map;
