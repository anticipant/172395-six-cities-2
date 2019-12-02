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
            blockClassName = {this.props.blockClassName}
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
