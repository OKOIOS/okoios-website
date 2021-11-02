import submitButtonBg from '../public/button-bg-okred-outline.png';
import spinner from '../public/spinner.svg';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

type FormState = 'loading' | 'success' | 'error' | null;

export default function ContactForm(): React.ReactElement {
  const [formState, setFormState] = useState<FormState>(null);
  const [name, setName] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setFormState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ name, website, company, email, message }),
      });
      setFormState(res.status === 200 ? 'success' : 'error');
    } catch (e) {
      setFormState('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <div
        className={clsx(formState !== null && 'opacity-10 pointer-events-none')}
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray p-2 pl-0 border-oklavishwhite border-b-1 w-full block rounded-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            placeholder="Company"
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray p-2 pl-0 border-oklavishwhite border-b-1 w-full block rounded-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="E-mail"
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray p-2 pl-0 border-oklavishwhite border-b-1 w-full block rounded-none"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Message"
            rows={6}
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray p-2 pl-0 border-oklavishwhite border-b-1 w-full block rounded-none"
          />
        </div>

        <button
          type="submit"
          className="bg-oktransparent hover:bg-okred transition-all mt-4 border border-okred md:text-base text-xs px-9 md:px-14 py-3 md:py-5 relative"
        >
          Send Now
          <span className="w-4 h-4 block absolute -bottom-2 -right-2 border-l bg-oklightgray border-okred transform rotate-45"></span>
        </button>
      </div>
      {formState === 'loading' && (
        <div className="flex items-center justify-center animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-spin flex items-center justify-center">
            <Image src={spinner} height={200} width={200} />
          </div>
        </div>
      )}
      {formState === 'success' && (
        <div className="transition-shadow duration-200 ease-out absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-oklightgray py-4 px-8 rounded-full shadow-lg">
          <strong className="text-okwhite">Message sent!</strong>
          <br />
          We will get back to you as soon as possible
        </div>
      )}
      {formState === 'error' && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setFormState(null);
          }}
          className="transition-shadow duration-200 ease-out absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-oklightgray py-4 px-8 rounded-full shadow-lg"
        >
          <strong className="text-okwhite">An error occurred</strong>
          <br />
          Please <u>try again</u>, send us an e-mail or give us a phone call
        </a>
      )}
    </form>
  );
}
