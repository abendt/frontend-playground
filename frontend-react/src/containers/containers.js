import React from "react";

import _ from 'lodash'

// https://reactjs.org/docs/higher-order-components.html
// https://gist.github.com/cpsubrian/79e97b6116ab68bd189eb4917203242c#file-tojs-js

const toJs = (WrappedComponent) => {
    return class extends React.Component {
        toJs() {
            return _.mapValues(this.props, value => (typeof value.toJS === 'function') ? value.toJS() : value)
        }

        render() {
            // Wraps the input component in a container, without mutating it. Good!
            return <WrappedComponent {...this.toJs() } />;
        }
    }
}

export default toJs;