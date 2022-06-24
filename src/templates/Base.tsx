import { Meta } from '../components/layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';

const Base = () => (
  <div className="antialiased text-gray-600 flex flex-col h-screen">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
  </div>
);

export { Base };
