import React, { FC } from 'react'

import CardStyles from "./index.styles";

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
    <>
      <a className="card">
        <h3>{headline}</h3>
        <p>{body}</p>
      </a>

      <style jsx>
        {CardStyles}
      </style>
    </>
  );
}


export default Card;