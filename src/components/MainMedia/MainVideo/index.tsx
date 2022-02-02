import React from 'react';
import { GoogleImage } from '../../../types';

const MainVideo = ({ media }: { media: GoogleImage }) => (
  <video autoPlay controls width="100%" height="100%" >
    <source src={`${media?.baseUrl}=dv`} type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>
)

export default MainVideo;