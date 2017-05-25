import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'cerebro-ui';
import Stories from './Stories';
import hnService from './hnService';

class ContainerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      loading: true
    };
  }
  componentWillMount() {
    hnService.getPopular().then((result) => result.json().then((json) => {
      this.setState({ loading: false, stories: json.hits });
    }));
  }

  render() {
    return (
      this.state.loading
        ? <Loading />
        : <Stories stories={this.state.stories} openUrl={this.props.openUrl} />
    );
  }
}

ContainerView.propTypes = {
  openUrl: PropTypes.func.isRequired
};

module.exports = ContainerView;
