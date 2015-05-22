# react-swiper

## Installation

```bash
npm install react-swiper
```

## Usage

```javascript
var React = require('react')
var ReactSwiper = require('react-swiper')

var Carousel = React.createClass({
    render: function () {
        return (
            <ReactSwiper
                simulateTouch={true}
            >
                <div>'PANE 1'</div>
                <div>'PANE 2'</div>
                <div>'PANE 3'</div>
            </ReactSwipe>
        );
    }
});

React.render(<Carousel />, document.body)
```

**MIT Licensed**
