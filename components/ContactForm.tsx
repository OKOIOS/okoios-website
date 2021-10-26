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
        <label className="border-oklavishwhite border-b-1 text-oklavishwhite flex items-center justify-between block pb-3 mb-3">
          <span>
            Name<span className="text-okred ml-1">*</span>
          </span>
          <input
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray flex-auto p-1 pl-2 ml-4 border-0 rounded"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="border-oklavishwhite border-b-1 text-oklavishwhite flex items-center justify-between block pb-3 mb-3">
          <span>Company</span>
          <input
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray flex-auto p-1 pl-2 ml-4 border-0 rounded"
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <label className="border-oklavishwhite border-b-1 text-oklavishwhite flex items-center justify-between block pb-3 mb-3">
          <span>
            E-mail<span className="text-okred ml-1">*</span>
          </span>
          <input
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray flex-auto p-1 pl-2 ml-4 border-0 rounded"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="hidden border-oklavishwhite border-b-1 text-oklavishwhite block pb-3 mb-3 mb-10">
          <div>
            Website<span className="text-okred ml-1">*</span>
          </div>
          <input
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray flex-auto p-1 pl-2 ml-4 border-0 rounded"
            type="text"
            name="website"
            value={website}
            placeholder="please don't edit"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <label className="border-oklavishwhite border-b-1 text-oklavishwhite block pb-3 mb-10">
          <div>
            Message<span className="text-okred ml-1">*</span>
          </div>
          <textarea
            className="bg-oktransparent focus:outline-none focus:bg-oklightgray hover:bg-oklightgray flex-auto w-full h-32 p-1 pl-2 mt-4 border-0 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <input
          type="submit"
          name="submit"
          value="Send Now"
          className="bg-oktransparent cursor-pointer flex items-center justify-center mr-8 h-button-h w-button-w bg-button-outline bg-button-size hover:bg-button active:bg-button focus:bg-button"
        />
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
