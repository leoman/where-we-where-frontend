import React, { useCallback } from 'react';
import { ImageProps } from '../../../types';

const Image = ({ media, onClick, length }: ImageProps) => {
  const view = useCallback(() => {
    onClick(media);
  }, [media, onClick]);
  return (
    <div className="gallery__item">
      <div className="gallery__img" style={{ backgroundImage: `url(${media.baseUrl})` }} onClick={view}  />
    </div>
  );
};

export default Image;