import React from 'react'

import { Container, PinContainer ,Title, Story } from './styles'


const SavedPins: React.FC = () => {
  return (
      <Container>
          <PinContainer>
              <Story />
              <Title>
                  Make
              </Title>
          </PinContainer>
          <PinContainer>
              <Story />
              <Title>
                  Me
              </Title>
          </PinContainer>
          <PinContainer>
              <Story />
              <Title>
                  Anjos
              </Title>
          </PinContainer>
          <PinContainer>
              <Story />
              <Title>
                  Musica
              </Title>
          </PinContainer>
      </Container>
  );
}

export default SavedPins;