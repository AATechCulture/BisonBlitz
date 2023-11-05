import React from 'react';
import { Card } from 'antd';

import '../sass/LandingPage.scss';
import Meta from 'antd/es/card/Meta';
type Props = {
  title: string;
  imageUrl: string;
  pref: string;
};

const CardComponent: React.FC<Props> = (props) => {
  const handleCardClick = (e: any) => {
    e.preventDefault();
    window.localStorage.setItem(props.pref, JSON.stringify(props.title));
  };
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt='example' src={props.imageUrl} />}
      onClick={(e) => handleCardClick(e)}
    >
      <Meta title={props.title} />
    </Card>
  );
};

export { CardComponent };
