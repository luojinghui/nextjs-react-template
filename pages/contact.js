/**
 * Created Date: 2017/12/25
 * Author: luojinghui
 */

import React, {Component} from 'react';
import Head from '../components/Layout/head'
import PropTypes from 'prop-types';
import Layout from '../components/Layout'

class contact extends Component {
  render() {
    return (
      <Layout title="About">
        <div>
          <h1>this is Contact page</h1>
        </div>
      </Layout>
    );
  }
}

contact.propTypes = {};
contact.defaultProps = {};

export default contact;
