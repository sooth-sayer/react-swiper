"use strict";

(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
      require("react/addons"),
      require("swiper")
    );
  } else {
    root.ReactSwiper = factory(
      root.React,
      root.Swiper
    );
  }
})(this, function (React, Swiper) {
  var styles = {
    container: {
    },

    wrapper: {
      alignItems: "center"
    },

    child: {
    }
  };

  var ReactSwiper = React.createClass({
    // http://www.idangero.us/swiper/api
    propTypes: {
      simulateTouch: React.PropTypes.bool,
      initialSlide: React.PropTypes.number,
      preloadImages: React.PropTypes.bool,
      lazyLoading: React.PropTypes.bool
    },

    componentDidMount: function () {
      if (this.isMounted()) {
        this.swiper = Swiper(this.getDOMNode(), this.props);
      }
    },

    componentDidUpdate: function () {
    },

    componentWillUnmount: function () {
      this.swiper.destroy();
      delete this.swiper;
    },

    shouldComponentUpdate: function (nextProps) {
      return (typeof this.props.shouldUpdate !== "undefined") && this.props.shouldUpdate(nextProps);
    },

    render: function() {
      return React.createElement("div", React.__spread({}, this.props, {style: styles.container, className: "swiper-container"}),
        React.createElement("div", {style: styles.wrapper, className: "swiper-wrapper"},
          React.Children.map(this.props.children, function (child) {
            return React.addons.cloneWithProps(child, { style: styles.child, className: "swiper-slide" });
          })
        )
      );
    }
  });

  return ReactSwiper;
});
