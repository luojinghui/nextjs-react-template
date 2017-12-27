
import Link from 'next/link'
import { fetch } from '../static/tools/request';
import Layout from '../components/Layout'
import {Component} from "react";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstIn: true
    }
  }

  static async getInitialProps() {
    let uri = "https://api.tvmaze.com/search/shows?q=batman";
    let res = {};

    try {
      res = await fetch.get(uri);
    } catch (err) {
      alert("have error");
    }

    return {
      shows: res.body,
      firstIn: false
    };
  }

  render() {
    let props = this.props;

    return (
      <Layout title="Home">
        <h1>Batman TV shows</h1>
        {
          props.firstIn ?
            <div style={{textAlign: "center", fontSize: "26px"}}>loading...</div>
            :
            <ul>
              {props.shows.map(({show}) => {
                return(
                  <li key={show.id} style={{listStyle: "none", marginBottom: "20px"}}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                      <a style={{display: "flex", alignItems: "center"}}>
                        {
                          show.image ?
                            <img src={show.image.medium} alt="" style={{width: "50px", height: "50px", borderRadius: "25px", marginRight: "15px"}}/>
                            :
                            null
                        }
                        {show.name}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
        }
      </Layout>
    )
  }
}

export default Index;