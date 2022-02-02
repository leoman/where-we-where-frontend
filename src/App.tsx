import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import MainMedia from './components/MainMedia';
import Images from './components/Images';
import { GoogleImage, Response } from './types';

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

      // const result = await fetch('http://localhost:3000/api/date/01-05-2019');
      const result = await fetch('http://localhost:3000/api');
      const response: Response = await result.json();
      console.log(response);
      setMedia(response.media);
      setResult(response.result);
      setDate(response.date);
      if (response.media.length) {
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
