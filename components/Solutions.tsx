import Card from '../components/Card';
import analyticsIcon from '../public/analysisIcon.png';
import ArrowRed from '../public/arrow-red.png';
import blockchainIcon from '../public/blockchainIcon.png';
import businessIcon from '../public/businessIcon.png';
import cloudIcon from '../public/cloudIcon.png';
import governanceIcon from '../public/governanceIcon.png';
import securityIcon from '../public/securityIcon.png';
import testingIcon from '../public/testingIcon.png';
import Container from './common/Container';
import Modal from './common/Modal';
import SolutionCard from './common/SolutionCard';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';

const SOLUTIONS = [
  {
    title: 'Data Analytics & \nAI/ML Solutions',
    icon: analyticsIcon,
    iconBgcolor: 'bg-oktransparentorange',
    shortDetails:
      'Become Data Driven. Embrace industry and function specific Data & Extend your capabilities',
    listTitle: 'Data Analytics & \nAI/ML Solutions',
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
    title: 'Design & \nDevelopment',
    icon: securityIcon,
    iconBgcolor: 'bg-oktransparentorange',
    shortDetails:
      'Tailored to your organisation’s needs. Focused on user experience and business outcomes',
    listTitle: 'Design & Development',
    lists: [
      'Software & Web Development',
      'Mobile Development',
      'UX/UI Design',
      'DevOps',
    ],
  },
  {
    title: 'Testing and Quality \nManagement',
    icon: testingIcon,
    iconBgcolor: 'bg-oktransparentgreen',
    shortDetails:
      'Improve Your efficiency, while remaining scalable and reliable. A rapid delivery, that increases your quality and coverage.',
    listTitle: 'Testing and Quality Management',
    lists: [
      'Functional Testing',
      'Non-Functional Testing',
      'Test Automation',
      'Performance Testing',
      'Penetration Testing',
      'Test Management and Solutions',
      'Quality Assurance & Quality Control',
    ],
  },
  {
    title: 'Business Applications & \nProcesses',
    icon: businessIcon,
    iconBgcolor: 'bg-oktransparentpurple',
    shortDetails:
      'From strategy to execution, Okoios creates durable solutions and measurable results.',
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
    title: 'Project & IT Governance',
    icon: governanceIcon,
    iconBgcolor: 'bg-oktransparentred',
    shortDetails:
      'Ensure operational excellence. Drive high quality and outcomes for your business',
    listTitle: 'Project & IT Governance',
    lists: [
      'Support and operations',
      'PPM, PMO, Project Management',
      'Scrum Master',
    ],
  },
  {
    title: 'Cloud',
    icon: cloudIcon,
    iconBgcolor: 'bg-oktransparentgreenblue',
    shortDetails: 'Leverage on cloud to drive speed and innovation',
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
    title: 'IT Security',
    icon: securityIcon,
    iconBgcolor: 'bg-oktransparentyellow',
    shortDetails:
      'Protect your infrastructures and keep control of your security level, wherever your organization goes',
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
    title: 'Blockchain',
    icon: blockchainIcon,
    iconBgcolor: 'bg-oktransparentblue',
    shortDetails:
      'Unlock value in your organisations using distributed ledger technologies',
    listTitle: 'Blockchain',
    lists: [
      'Software adjustments for Blockchain Solutions',
      'Tokenisation',
      'Blockchain Testing',
      'Big Data & Blockchain Analysis',
      'Smart Contracts/programmable ledger Development And Implementation',
      'Blockchain as a Service',
      'Decentralized Applications (Dapps)',
      'Decentralized Autonomous Organisations (Daos)',
    ],
  },
];

export default function Solutions() {
  const [focusedSolutionIndex, setFocusedSolutionIndex] =
    useState<number>(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const focusedSolution =
    focusedSolutionIndex === null ? null : SOLUTIONS[focusedSolutionIndex];

  return (
    <>
      <section
        id="solutions"
        ref={ref}
        className={clsx(
          'opacity-0 pt-20 lg:pt-40 pb-32 px-4',
          inView && 'animate-fadeIn'
        )}
      >
        <Container>
          <div className="md:text-left text-center">
            <h1 className="text-okred text-sm tracking-widest mb-3">
              <a>SOLUTIONS</a>
            </h1>
            <p className="text-okwhite text-2xl md:text-4xl font-bold mb-10">
              End to End Solution Provider
            </p>
          </div>
          <div className="hidden md:grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {SOLUTIONS?.map((solution, index) => (
              <SolutionCard key={index} id={index} {...solution} />
            ))}
          </div>
          <Carousel
            className="md:hidden block"
            showThumbs={false}
            showIndicators={false}
            autoPlay={true}
            centerSlidePercentage={80}
            infiniteLoop={true}
            interval={5000}
            centerMode={true}
            transitionTime={1500}
            stopOnHover={true}
            showStatus={false}
            renderArrowNext={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute -bottom-20 left-[calc(+20px+50vw)] text-okred"
                >
                  <CgArrowLongRight className="text-6xl" />
                </button>
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute -bottom-20 left-[calc(-20px+50vw)] text-okred -ml-20"
                >
                  <CgArrowLongLeft className="text-6xl" />
                </button>
              )
            }
          >
            {SOLUTIONS.map((solution, index) => (
              <SolutionCard
                id={index}
                key={index}
                {...solution}
                onclick={() => setFocusedSolutionIndex(index)}
              />
            ))}
          </Carousel>
        </Container>
      </section>
      {focusedSolution == null || (
        <Modal
          title={focusedSolution.title}
          lists={focusedSolution.lists}
          onHideModal={() => setFocusedSolutionIndex(null)}
        />
      )}
    </>
  );
}
