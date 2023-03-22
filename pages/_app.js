import '../styles/globals.css';
import Head from 'next/head';
import Sidebar from './Sidebar';

function App({ Component, pageProps }) {
  return (
    <>
      <div className='app'>
        <h1>Let's build twitter</h1>

        {/* Sidebar */}
        <Sidebar />

        
        {/* Feed */}


        {/* Widgets */}


      </div>
    </>
  );
}

export default App;
