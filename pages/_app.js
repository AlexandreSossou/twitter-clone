import '../styles/globals.css';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import TweetBox from '../components/TweetBox';

function App({ Component, pageProps }) {
  return (
    <>
      <div className='app'>
        <h1></h1>

        {/* Sidebar */}
        <Sidebar />

        
        {/* Feed */}
        <Feed />


        {/* Widgets */}
        <Widgets />


      </div>
    </>
  );
}

export default App;
