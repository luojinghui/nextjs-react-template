/**
 * Created Date: 2017/12/25
 * Author: luojinghui
 */

import React, {Component} from 'react';
import Layout from '../components/Layout'
import {fetch} from '../static/tools/request';

class Post extends Component {

  static async getInitialProps(context) {
    let {id} = context.query;
    let uri = `https://api.tvmaze.com/shows/${id}`;
    let res = {};

    try {
      res = await fetch.get(uri);
    } catch (err) {
      alert("have error");
    }

    console.log(res);
    return {
      show: res.body,
      firstIn: false
    };
  }

  render() {
    let props = this.props;

    return (
      <Layout title="About">
        <h1>{props.show.name}</h1>
        <div dangerouslySetInnerHTML={{__html: props.show.summary}}/>
        {
          props.show.image
            ?
            <img src={props.show.image.medium} alt=""/>
            :
            null
        }
      </Layout>
    );
  }
}

export default Post;
