import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import MainMedia from './components/MainMedia';
import Images from './components/Images';
import { Gallery, GoogleImage } from './types';

import './App.css';

function App() {

  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [media, setMedia] = useState<GoogleImage[]>([]);
  const [mainMedia, setMainMedia] = useState<GoogleImage>();
  const [result, setResult] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {

    async function fetchData() {
      setLoading(true);

      // const result = await fetch('http://localhost:3000/dev/photos');
      const result = await fetch('https://oa08yrhinc.execute-api.eu-west-2.amazonaws.com/prod/photos');
      const response: Gallery = await result.json();
      console.log(response);
      setMedia(response.media);
      setResult(response.result);
      setDate(response.date);
      console.log(response);
      if (response.media?.length) {
        setMainMedia(response.media[0])
      }
      setLoading(false);
      setLoaded(true);
    }

    fetchData();
  }, []);

  const onClick = useCallback((item) => {
    setMainMedia(item);
  }, []);

  if (loading || !loaded) {
    return null;
  }

  console.log("result", result);

  return (
    <section className="gallery">
      <div className='main'>
        <Header result={result} date={date} />
        <div className='main-image'>
          <MainMedia media={mainMedia} />
        </div>
      </div>
      <Images images={media} onClick={onClick} />
      
    </section>
  );
}

export default App;
