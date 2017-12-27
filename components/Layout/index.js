/**
 * Created Date: 2017/12/25
 * Author: luojinghui
 */
import Link from 'next/link'
import Head from './head';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head title={title} />
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
        <Link href='/sss'><a>sss</a></Link>
      </nav>
      <div>
        <audio src=""></audio>
      </div>
    </header>

    { children }

    <footer style={{position: "fixed", bottom: 0, left: 0, width: "100%", height: "50px", backgroundColor: "#eee"}}>
      <div style={{ textAlign: "center"}}>this is Footer page</div>
    </footer>
  </div>
)