import React from 'react'
import { Hero as HeroContainer, HeroDiv, HeroTitle } from './styles'
import { Container } from '../../styles'

const Hero = () => (
  <HeroContainer>
    <Container>
      <HeroDiv>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </HeroDiv>
    </Container>
  </HeroContainer>
)

export default Hero
