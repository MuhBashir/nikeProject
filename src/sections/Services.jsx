import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';
const Services = () => {
  return (
    <section className='max-container flex flex-col justify-center text-wrap gap-9 lg:flex-row'>
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </section>
  );
};

export default Services;
