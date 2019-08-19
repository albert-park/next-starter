import React, { FC } from 'react';

import PropTypes from 'prop-types';
import Link from 'next/link';
import CardStyles from './index.styles';

interface CardProps {
  headline: string,
  body: string,
  href: string,
  key: string
}

const Card: FC<CardProps> = ({
  headline, body, href, key,
}) => (
  <>
    <Link key={key} href={href}>
      <a className="card">
        <h3>{headline}</h3>
        <p>{body}</p>
      </a>
    </Link>

    <style jsx>
      {CardStyles}
    </style>
  </>
);

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Card;
