import React from 'react';

import { Container, Tabs, PhotoGrid, Photo } from './style';
import { BsGrid3X3 } from 'react-icons/bs'
import { MdPortrait } from 'react-icons/md'

const Posts: React.FC = () => {
  return (
    <>
    <Container>
      <Tabs>
        <div style={{borderTop: '1px solid rgba(0, 0, 0, 1)', padding: '0px 0px 0px 6px'}} >
          <BsGrid3X3 size={12}/>
          <h1>POSTS</h1>
        </div>
        <div style={{opacity: '0.3'}} >
          <MdPortrait />
          <h1>TAGGED</h1>
        </div>
      </Tabs>
      
    </Container>
    <PhotoGrid>
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
  </PhotoGrid>
  </>  
  );
}

export default Posts;