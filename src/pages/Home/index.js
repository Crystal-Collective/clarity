import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleSheets } from 'react-db-google-sheets';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="Home">
      {this.props.db['Charged Officers'].map((data, index) => (
        <div key={index}>{data["Officer Name"]}</div>
      ))}
      </div>
    );
  }
}

Home.propTypes = {
  db: PropTypes.shape({
    'Charged Officers': PropTypes.arrayOf(PropTypes.object)
  })
};

export default withGoogleSheets('Charged Officers')(Home);
