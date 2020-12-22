import React from 'react'

import { Container, PinContainer ,Title, Story } from './styles'

const SavedPins: React.FC = () => {
  return (
      <Container>
          <PinContainer>
              <Story style={{background: ''}} />
              <Title>
                  Trip
              </Title>
          </PinContainer>
          <PinContainer>
              <Story style={{background: '#dafde5'}}/>
              <Title>
                  Me
              </Title>
          </PinContainer>
          <PinContainer>
              <Story style={{background: '#fd817f'}}/>
              <Title>
                  Friends
              </Title>
          </PinContainer>
          <PinContainer>
              <Story style={{background: '#9cdaf3'}} />
              <Title>
                  Music
              </Title>
          </PinContainer>
      </Container>
  );
}

export default SavedPins;