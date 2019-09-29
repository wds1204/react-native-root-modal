import React, { Component } from 'react';
import RootSiblings from 'react-native-root-siblings';

import ModalContainer, { AnimatedModalContainer } from './ModalContainer';

class Modal extends Component {
    static displayName = 'Modal';

    static defaultProps = {
        visible: false
    };

    componentDidMount() {
        this._modal = new RootSiblings(
          this._getContent(ModalContainer, this.props)
        );
    };

    componentDidUpdate() {
        this._modal.update(
          this._getContent(ModalContainer, this.props)
        );
    };

    componentWillUnmount() {
        this._modal.destroy();
    };

    _getContent(Container, props) {
        return (
          <Container
            {...props}
          />
        );
    }

    render() {
        return null;
    }
}

class AnimatedModal extends Modal {
    componentDidMount() {
        this._modal = new RootSiblings(
            this._getContent(AnimatedModalContainer, this.props)
        );
    };

    componentDidUpdate()  {
        this._modal.update(
            this._getContent(AnimatedModalContainer, this.props)
        );
    };
}

export {
  RootSiblings as ModalManager,
  AnimatedModal
}
export default Modal;