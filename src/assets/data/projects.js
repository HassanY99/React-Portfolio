import { v4 as uuidv4 } from 'uuid';
import SnowImg from '../images/snow.jpg';
import PasswordImg from '../images/password.jpg';
import BestImg from '../images/best.jpg';
import ParkingImg from '../images/parking.jpeg';

const projects = [
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'An application that will update you on current weather.',
    img: SnowImg,
  },
  {
    id: uuidv4(),
    name: 'Password Generator',
    desc:
      'An app to help people generate random passwords in seconds.',
    img: PasswordImg,
  },
  {
    id: uuidv4(),
    name: 'The Best of Me',
    desc:
      'The Best of Me is safe web application that creates inpirational qoutes for users to help them motivate and release stress.',
    img: BestImg,
  },
  {
    id: uuidv4(),
    name: "Parker",
    desc:
      'A mobile friendly web application that help users find free parking on the busiest of streets.',
    img: ParkingImg,
  },
];

export default projects;
