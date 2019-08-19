import css from 'styled-jsx/css';

export default css`
  .card {
  padding: 18px 18px 24px;
  width: 220px;
  text-align: left;
  text-decoration: none;
  color: #434343;
  border: 1px solid #9b9b9b;

  }

  .card: hover {
    border-color: #067df7;
  }

  h3 {
    margin: 0;
    color: #067df7;
    font-size: 18px;
  }

  p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
  }
`;
