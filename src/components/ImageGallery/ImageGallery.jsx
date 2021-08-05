import React from 'react';
import { Gallery, Item, Image, Content, Info } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ webformatURL, likes, views, comments, downloads }) => (
        <Item>
          <Image src={webformatURL} alt="" loading="lazy" />
          <Content>
            <Info>
              <b>Likes</b> {likes}
            </Info>
            <Info>
              <b>Views</b> {views}
            </Info>
            <Info>
              <b>Comments</b> {comments}
            </Info>
            <Info>
              <b>Downloads</b> {downloads}
            </Info>
          </Content>
        </Item>
      ))}
    </Gallery>
  );
};
