import React from 'react'
import './App.css';
import ImgUnsplash from './ImgUnsplash';




function App() {
  return (
    <div >
      <h1>Misha's image gallery</h1>
      {/* <div>
        <input id='searchInput' type='text' placeholder='Search Images' ></input>
        <i className="bi bi-search"></i>
      </div> */}


      <ImgUnsplash />

      {/* <div>
        <a className='loadMore'>Load More</a>
      </div> */}

    </div>
  );
}

export default App;
