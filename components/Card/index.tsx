import React, { FC } from 'react'

import {
  StyledAnchor,
  StyledHeadline,
  StyledParagraph
} from "./index.styles";

interface CardProps { 
  headline: string,
  body: string
}

const Card: FC<CardProps> = (props) => {
  const { 
    headline,
    body
  } = props
  
  return (
    <StyledAnchor>
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledParagraph>{body}</StyledParagraph>
    </StyledAnchor>
  );
}


export default Card;