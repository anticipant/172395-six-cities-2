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
    this.offers = this.props.offers.filter((it) => it.city.name === this.props.name);
    this.cityInfo = this.offers[0] ? this.offers[0].city : null;
  }

  componentDidMount() {
    const {
      icon, offers, cityInfo
    } = this;

    const zoom = cityInfo.location.zoom;
    const city = [cityInfo.location.latitude, cityInfo.location.longitude];
    const map = this.props.leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    this.props.leaflet
      .tileLayer(this.LAYER_URL, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => [offer.location.latitude, offer.location.longitude]).forEach((it) => {
      this.props.leaflet
        .marker(it, {icon})
        .addTo(map);
    });
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
