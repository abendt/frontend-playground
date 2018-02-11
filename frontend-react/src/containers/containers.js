import React from "react";

import _ from 'lodash'

// https://reactjs.org/docs/higher-order-components.html
// https://gist.github.com/cpsubrian/79e97b6116ab68bd189eb4917203242c#file-tojs-js

const toJs = (WrappedComponent) => {
    return class extends React.Component {
        toJs() {
            // unwrap immutableJS types to plainJS
            return _.mapValues(this.props, value => (typeof value.toJS === 'function') ? value.toJS() : value)
        }

        render() {
            return <WrappedComponent {...this.toJs() } />;
        }
    }
};

export default toJs;