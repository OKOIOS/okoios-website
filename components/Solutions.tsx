import Card from '../components/Card';
import analyticsIcon from '../public/analysisIcon.png';
import blockchainIcon from '../public/blockchainIcon.png';
import businessIcon from '../public/businessIcon.png';
import cloudIcon from '../public/cloudIcon.png';
import governanceIcon from '../public/governanceIcon.png';
import securityIcon from '../public/securityIcon.png';
import testingIcon from '../public/testingIcon.png';
import Container from './common/Container';
import SolutionCard from './common/SolutionCard';
import clsx from 'clsx';
import Image from 'next/image';
import { CSSProperties, useState } from 'react';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';

export default function Solutions() {
  const [focusedCard, setFocusedCard] = useState<number>(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const solutionData = [
    {
      id: 1,
      title: 'Data Analytics & AI/ML Solutions',
      icon: analyticsIcon,
      iconBgcolor: 'bg-oktransparentorange',
      shortDetails:
        'Embrace industry and function specific Data & Extend your capabilities. Become Data Driven.',
      listTitle: 'Design & Development',
      lists: [
        'Business Analysis',
        'Business Intelligence',
        'Requirement Engineering',
        'Functional Analysis',
        'Data Governance',
        'Data Science & Data Engineering',
        'Artificial Intelligence',
      ],
    },
    {
      id: 2,
      title: 'Design & Development',
      icon: securityIcon,
      iconBgcolor: 'bg-oktransparentorange',
      shortDetails:
        "Tailored to your organization's need. Focused on user experience and business outcomes",
      listTitle: 'Design & Development',
      lists: [
        'Software & Web Development',
        'Mobile Development',
        'UX/UI Design',
        'Devops',
      ],
    },
    {
      id: 3,
      title: 'Testing and Quality Management',
      icon: testingIcon,
      iconBgcolor: 'bg-oktransparentgreen',
      shortDetails:
        'Improve Your efficiency, while being scalable and reliable. Support a rapid delivery, while increasing your coverage and quality.',
      listTitle: 'Testing and Quality Management',
      lists: [
        'Functional Testing Non-Functional Testing Test Automation',
        'Performance Testing Penetration Testing Test Management and',
        'Solutions Quality Assurance & Quality Control',
      ],
    },
    {
      id: 4,
      title: 'Business Applications & Processes',
      icon: businessIcon,
      iconBgcolor: 'bg-oktransparentpurple',
      shortDetails:
        'Translate strategy into execution, Okoios creates durable solutions and measurables results.',
      listTitle: 'Business Applications & Processes',
      lists: [
        'CRM & ERP',
        'ECM/DMS & Portals',
        'Architecture and infrastructure',
        'Robotic Process Automation',
        'Cognitive Solutions (chatbot & virtual assistant)',
      ],
    },
    {
      id: 5,
      title: 'Project & IT Governance',
      icon: governanceIcon,
      iconBgcolor: 'bg-oktransparentred',
      shortDetails:
        ' Ensure operational excellence. Drive high quality and outcomes for your business.',
      listTitle: 'Project & IT Governance',
      lists: [
        'Support and operations',
        'PPM, PMO, Project Management',
        'Scrum Master',
      ],
    },
    {
      id: 6,
      title: 'Cloud',
      icon: cloudIcon,
      iconBgcolor: 'bg-oktransparentgreenblue',
      shortDetails: 'Leverage the cloud to drive speed and innovation',
      listTitle: 'Cloud',
      lists: [
        'Cloud Architecture & Solutions',
        'Cloud Computing',
        'Infrastructure as a Service',
        'Platform as a Service',
        'Software as a Service',
      ],
    },
    {
      id: 7,
      title: 'IT Security',
      icon: securityIcon,
      iconBgcolor: 'bg-oktransparentyellow',
      shortDetails:
        'Protect your infrastructure and keep control of your security level, from end to end wherever your organization goes.',
      listTitle: 'IT Security',
      lists: [
        'Cybersecurity',
        'Risk Management',
        'Digital Risk Monitoring',
        'Network Security',
        'Identity and access management',
        'Incident Management',
      ],
    },
    {
      id: 8,
      title: 'Blockchain',
      icon: blockchainIcon,
      iconBgcolor: 'bg-oktransparentblue',
      shortDetails:
        'Unlock value in your organisations value chain with leaders in distributed ledger technologies.',
      listTitle: 'Blockchain',
      lists: [
        'Software adjustments for Blockchain Solutions',
        'Tokenisation',
        'Blockchain Testing',
        'Big Data & Blockchain Analysis',
        'Smart Contracts/programmable ledger Development And Implementation',
        'Blockchain as a Service',
        'Decentralized Applications (Dapps)',
        'ecentralized Autonomous Organisations (Daos)',
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className={clsx('opacity-0 pt-32 mb-32 px-4', inView && 'animate-fadeIn')}
    >
      <Container>
        <h1 className="text-okred text-sm tracking-widest mb-3">
          <a id="solutions">SOLUTIONS</a>
        </h1>
        <p className="text-okwhite text-2xl md:text-4xl font-bold mb-10">
          End to End Solution Provider
        </p>
        <div className="hidden md:grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {solutionData?.map((solution) => (
            <SolutionCard key={solution.id} {...solution} />
          ))}
        </div>
        <Carousel
          className="md:hidden block"
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          centerMode={true}
          transitionTime={1500}
          stopOnHover={true}
          showStatus={false}
          renderArrowNext={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute -bottom-10 left-1/2 text-okred"
              >
                <CgArrowLongRight className="text-4xl" />
              </button>
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute -bottom-10 left-1/2 text-okred -ml-20"
              >
                <CgArrowLongLeft className="text-4xl" />
              </button>
            )
          }
        >
          {solutionData?.map((solution) => (
            <SolutionCard key={solution.id} {...solution} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
