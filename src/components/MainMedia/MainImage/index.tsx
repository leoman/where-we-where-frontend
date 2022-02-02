import React from 'react';
import { GoogleImage } from '../../../types';

const MainImage = ({ media }: { media: GoogleImage }) => (
  <img src={`${media?.baseUrl}=w1600-h1200`} alt="" />
);

export default MainImage;