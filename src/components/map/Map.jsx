import React, {Component} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import LAYER_URL from "../../help/constants";

class Map extends Component {
  constructor(props) {
    super(props);
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    this.offers = this.props.offers.filter((it) => it.city.name === this.props.name);
    this.cityInfo = this.offers[0] ? this.offers[0].city : null;
  }

  componentDidMount() {
    const {
      icon, offers, cityInfo
    } = this;

    const zoom = cityInfo.location.zoom;
    const city = [cityInfo.location.latitude, cityInfo.location.longitude];
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
      .tileLayer(LAYER_URL, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => [offer.location.latitude, offer.location.longitude]).forEach((it) => {
      leaflet
        .marker(it, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <div id="map" style={{width: `100%`}}/>
    );
  }
}
Map.propTypes = {
  name: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Map;
