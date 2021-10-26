import Card from '../components/Card';
import analyticsIcon from '../public/analysisIcon.png';
import blockchainIcon from '../public/blockchainIcon.png';
import businessIcon from '../public/businessIcon.png';
import cloudIcon from '../public/cloudIcon.png';
import governanceIcon from '../public/governanceIcon.png';
import securityIcon from '../public/securityIcon.png';
import testingIcon from '../public/testingIcon.png';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Solutions() {
  const [focusedCard, setFocusedCard] = useState<number>(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={clsx(
        'w-1366 m-auto opacity-0 pt-32 mb-32',
        inView && 'animate-fadeIn'
      )}
    >
      <h1 className="text-okred text-sm tracking-widest mb-3">
        <a id="solutions">SOLUTIONS</a>
      </h1>
      <p className="text-okwhite text-4xl font-bold mb-10">
        End to End Solution Provider
      </p>
      <div className="flex flex-wrap items-stretch">
        <Card
          icon={
            <Image
              src={analyticsIcon}
              height={41}
              width={41}
              alt="Data analytics icon"
            />
          }
          iconClassName="bg-oktransparentorange"
          title="Data Analytics & AI/ML"
          summary={
            <p>
              Embrace industry and function specific Data & Extend your
              capabilities. Become Data Driven.
            </p>
          }
          details={
            <ul className="text-okwhite list-disc px-8">
              <li>Business Analysis</li>
              <li>Business Intelligence</li>
              <li>Requirement Engineering</li>
              <li>Functional Analysis</li>
              <li>Data Governance</li>
              <li>Data Science & Data Engineering</li>
              <li>Artificial Intelligence</li>
            </ul>
          }
          onClick={() => setFocusedCard(0)}
          showDetails={focusedCard === 0}
          isLeftMost
        />
        <Card
          icon={
            <Image
              src={analyticsIcon}
              height={41}
              width={41}
              alt="Design icon"
            />
          }
          iconClassName="bg-oktransparentorange"
          title="Design & Development"
          summary={
            <p>
              Tailored to your organization's need. Focused on user experience
              and business outcomes
            </p>
          }
          details={
            <ul className="text-okwhite list-disc px-8">
              <li>Software & Web Development</li>
              <li>Mobile Development</li>
              <li>UX/UI Design</li>
              <li>Devops</li>
            </ul>
          }
          onClick={() => setFocusedCard(1)}
          showDetails={focusedCard === 1}
        />
        <Card
          icon={
            <Image
              src={testingIcon}
              height={41}
              width={41}
              alt="Testing icon"
            />
          }
          iconClassName="bg-oktransparentgreen"
          title="Testing and Quality Management"
          summary={
            <p>
              Improve Your efficiency, while being scalable and reliable.
              Support a rapid delivery, while increasing your coverage and
              quality.
            </p>
          }
          details={
            <ul className="text-okwhite list-disc px-8">
              <li>Functional Testing Non-Functional Testing Test Automation</li>
              <li>
                Performance Testing Penetration Testing Test Management and
              </li>
              <li>Solutions Quality Assurance & Quality Control</li>
            </ul>
          }
          onClick={() => setFocusedCard(2)}
          showDetails={focusedCard === 2}
        />
        <Card
          icon={
            <Image
              src={businessIcon}
              height={41}
              width={41}
              alt="Business applications icon"
            />
          }
          iconClassName="bg-oktransparentpurple"
          title="Business Applications & Processes"
          summary={
            <p>
              Translate strategy into execution, Okoios creates durable
              solutions and measurables results.
            </p>
          }
          details={
            <ul className="text-okwhite list-disc px-8">
              <li>CRM & ERP</li>
              <li>ECM/DMS & Portals</li>
              <li>Architecture and infrastructure</li>
              <li>Robotic Process Automation</li>
              <li>Cognitive Solutions (chatbot & virtual assistant)</li>
            </ul>
          }
          onClick={() => setFocusedCard(3)}
          showDetails={focusedCard === 3}
          isRightMost
        />
        <Card
          icon={
            <Image
              src={governanceIcon}
              height={41}
              width={41}
              alt="Governance icon"
            />
          }
          iconClassName="bg-oktransparentred"
          title="Project & IT Governance"
          summary={
            <p>
              Ensure operational excellence. Drive high quality and outcomes for
              your business
            </p>
          }
          details={
            <ul className="text-okwhite list-disc px-8">
              <li>Support and operations</li>
              <li>PPM, PMO, Project Management</li>
              <li>Scrum Master</li>
            </ul>
          }
          onClick={() => setFocusedCard(4)}
          showDetails={focusedCard === 4}
          isLeftMost
        />
        <Card
          icon={
            <Image src={cloudIcon} height={41} width={41} alt="Cloud icon" />
          }
          iconClassName="bg-oktransparentgreenblue"
          title="Cloud"
          summary={<p>Leverage the cloud to drive speed and innovation</p>}
          details={
            <ul className="text-okwhite list-disc px-8">
              <li>Cloud Architecture & Solutions</li>
              <li>Cloud Computing</li>
              <li>Infrastructure as a Service</li>
              <li>Platform as a Service</li>
              <li>Software as a Service</li>
            </ul>
          }
          onClick={() => setFocusedCard(5)}
          showDetails={focusedCard === 5}
        />
        <Card
          icon={
            <Image
              src={securityIcon}
              height={41}
              width={41}
              alt="IT Security icon"
            />
          }
          iconClassName="bg-oktransparentyellow"
          title="IT Security"
          summary={
            <p>
              Protect your infrastructure and keep control of your security
              level, from end to end wherever your organization goes.
            </p>
          }
          details={
            <ul className="text-okwhite list-disc px-8">
              <li>Cybersecurity</li>
              <li>Risk Management</li>
              <li>Digital Risk Monitoring</li>
              <li>Network Security</li>
              <li>Identity and access management</li>
              <li>Incident Management</li>
            </ul>
          }
          onClick={() => setFocusedCard(6)}
          showDetails={focusedCard === 6}
        />
        <Card
          icon={
            <Image
              src={blockchainIcon}
              height={41}
              width={41}
              alt="Blockchain icon"
            />
          }
          iconClassName="bg-oktransparentblue"
          title="Blockchain"
          summary={
            <p>
              Unlock value in your organisations value chain with leaders in
              distributed ledger technologies.
            </p>
          }
          details={
            <ul className="text-okwhite list-disc px-8">
              <li>Software adjustments for Blockchain Solutions</li>
              <li>Tokenisation</li>
              <li>Blockchain Testing</li>
              <li>Big Data & Blockchain Analysis</li>
              <li>
                Smart Contracts/programmable ledger Development And
                Implementation
              </li>
              <li>Blockchain as a Service</li>
              <li>Decentralized Applications (Dapps)</li>
              <li>ecentralized Autonomous Organisations (Daos)</li>
            </ul>
          }
          onClick={() => setFocusedCard(7)}
          showDetails={focusedCard === 7}
          isRightMost
        />
      </div>
    </section>
  );
}
