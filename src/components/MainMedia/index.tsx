import React, { useState, useEffect } from 'react';
import MainVideo from './MainVideo';
import MainImage from './MainImage';
import { GoogleImage, MIME_VIDEO, MIME_IMAGE } from '../../types';

const MainMedia = ({ media }: { media: GoogleImage | undefined }) => {
  const [file, setFile] = useState<GoogleImage | undefined>(undefined);

  useEffect(() => {
    setFile(undefined);
    setTimeout(() => {  setFile(media); }, 0);
  }, [media])

  if (!file) return null;

  switch (file.mimeType) {
    case MIME_VIDEO: {
      return <MainVideo media={file}  />
    }
    case MIME_IMAGE: {
      return <MainImage media={file}  />
    }
    default: {
      return null;
    }
  }
};

export default MainMedia;