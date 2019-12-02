import React from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return this.props.list.map((it) => {
        return (
          <Component
            key={it.id}
            item={it}
            onItemClick={this.props.onItemClick}
            // при созании для OfferCard докидываем blockClassName
            blockClassName = {this.props.blockClassName}

            // при созании для CityItem
            // isActive={it.name === this.props.name}
            activeCity={this.props.activeCity}
          />
        );
      });
    }
  }

  WithActiveItem.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
      ]),
      name: PropTypes.string,
    })).isRequired,
    onItemClick: PropTypes.func.isRequired,
    activeCity: PropTypes.string,
    blockClassName: PropTypes.string,
  };

  return WithActiveItem;
};

export default withActiveItem;
