export const MIME_VIDEO = 'video/mp4';
export const MIME_IMAGE = 'image/jpeg';

export const RESULT_TYPE = {
  SUCCESS: 'SUCCESS',
  RANDOM: 'RANDOM',
  FAILURE: 'FAILURE',
};

export interface GoogleImage {
  id: string;
  baseUrl: string;
  filename: string;
  mimeType: string;
  productUrl: string;
  mediaMetadata: {
    creationTime: string
    height: string
    video?: {
      cameraMake: string, 
      cameraModel: string, 
      fps: number, 
      status: string
    }
    photo?: {
      apertureFNumber: number
      cameraMake: string
      cameraModel: string
      exposureTime: string
      focalLength: number
      isoEquivalent: number
    }
    width: string
  }
}

export interface Gallery {
  media: GoogleImage[];
  result: string;
  date: string;
}

export interface Response {
  code: GoogleImage[];
  message: string;
  result: Gallery;
}

export interface ImageProps {
  media: GoogleImage;
  onClick: (arg: GoogleImage) => void
  length: number
}

export interface ImagesProps {
  images: GoogleImage[];
  onClick: (arg: GoogleImage) => void
}


export interface Arrow {
  className?: string;
  style?: any;
  onClick?: () => void
}