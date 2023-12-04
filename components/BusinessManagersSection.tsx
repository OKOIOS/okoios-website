import kfScheufele from '../public/jonathan-aktepe.png';
import linkedinLogo from '../public/linkedin.png';
import lucasHess from '../public/lucas-hess.png';
import Container from './common/Container';
import ProfileCard from './common/ProfileCard';
import clsx from 'clsx';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function BusinessManagersSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  let profiles = [
    {
      id: 1,
      image: lucasHess,
      name: 'Lucas Hess',
      details:
        "“I think the beauty of a seamless link between technology and people can be appreciated as the foundation leading to success in today's business environment. Our aim at Okoios is to push the boundaries between ideas and cutting edge solutions for our clients.”",
      linkedin: 'https://ch.linkedin.com/in/lucas-hess-6037a8150',
      facebook: '/facebook.com',
    },
    {
      id: 2,
      image: kfScheufele,
      name: 'Karl-Fritz Scheufele',
      details:
        '“Each and every project is a unique opportunity to accelerate your company in the digital future. I think the most important aspect when implementing new digital solutions is not the technology itself but rather the people behind it. We push ourselves to find the best possible path of leveraging technology for your organisation.”',
      linkedin: 'https://ch.linkedin.com/in/jonathan-aktepe-928840116',
      facebook: '/facebook.com',
    },
  ];
  return (
    <div ref={ref} className={clsx('opacity-0', inView && 'animate-fadeIn')}>
      <Container>
        <h1 className="text-okwhite text-center font-bold text-3xl md:text-5xl mb-40">
          Our Business Managers
        </h1>
        <div className="flex md:flex-row flex-col justify-center md:space-y-0 space-y-40 md:space-x-10 mx-auto relative z-20 px-4">
          {profiles?.map((profile) => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </div>
      </Container>

      <div className="h-[515px] -mt-64 bg-waves bg-waves-size bg-okred w-full bg-center relative z-0">
        <span className="absolute w-1/6 left-0 top-0 h-full bg-gradient-to-r from-okred to bg-oktransparent"></span>
        <span className="absolute w-1/6 right-0 top-0 h-full bg-gradient-to-l from-okred to bg-oktransparent"></span>
      </div>
    </div>
  );
}
