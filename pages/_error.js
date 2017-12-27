/**
 * Created Date: 2017/12/26
 * Author: luojinghui
 */
import {Component} from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'

export default class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    console.log(Router);
    return { statusCode }
  }

  render() {
    return (
      <Layout>
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </Layout>
    )
  }
}