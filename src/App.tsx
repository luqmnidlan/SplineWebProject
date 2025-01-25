import React, { useRef, useState, useEffect } from 'react';
import type { Application, SPEObject } from '@splinetool/runtime';
import Spline from '../components/Spline';
import axios from 'axios';

function App() {
  const cube = useRef<SPEObject>();


  const [searchText ,setSearchText]=useState("");
  
  function searchForOrder(){
    var config = {
      method: 'get',
      url: `https://10.182.109.27/nitag/v2/tags/${searchText}/values/current`,
      headers: { 
        'Content-Type': 'application/json', 
        'x-ni-api-key': 'yBHwCN5xAIGtXi1tEoZA1S7gChMZB1SsXn_0gjUza8'
      }
    };
    
    axios(config)
    .then((response)=> {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    
    <>

      <div className='fullscreen-container'>
      <div className='template'>
        <div className='search'>
            <div className='form-control'>
              <label htmlFor='number'>Search your order Number</label>
              <input
                type='name'
                name='OrderNo'
                id='OrderNo'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
              <button onClick={searchForOrder} className='submit'>search</button>
            </div>
        </div>
      </div>
    </div>
      <Spline
        scene="https://prod.spline.design/j8bcswslSH6eBVvQ/scene.splinecode"
        onLoad={(spline: Application) => {
          cube.current = spline.findObjectByName('Cube');
        }}
      />
    </>
    

  );
}

export default App;