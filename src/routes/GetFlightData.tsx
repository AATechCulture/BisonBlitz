import { useState } from 'react';
import '../sass/LandingPage.scss';

type Props = {};

type TripDetails = {
  tripImageUrl: string;
  tripCity: string;
  tripState: string;
};

const tripOne: TripDetails = {
  tripImageUrl:
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/65/florida-keys.jpg?w=700&h=-1&s=1',
  tripCity: 'Key West',
  tripState: 'Florida',
};

const GetFlightData = (props: Props) => {
  const [prompt, setPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [gotData, setGotData] = useState(false);

  return (
    <div className='trip-screen'>
      <p>Good News, We found a trip for you</p>
      <div>
        <img src={tripOne.tripImageUrl} alt='' className='photo-found' />
        <p>
          {tripOne.tripCity}, {tripOne.tripState}
        </p>
      </div>
    </div>
  );
};

export { GetFlightData };
