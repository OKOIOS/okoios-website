import clsx from 'clsx';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

export default function CookieNotice() {
  const [cookies, setCookie] = useCookies(['cookies-allowed']);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(true);

  function togglePreferences(e: React.SyntheticEvent) {
    e.preventDefault();
    setPreferencesOpen(!preferencesOpen);
  }

  function acceptCookies(e: React.SyntheticEvent) {
    e.preventDefault();
    setCookie('cookies-allowed', 'true');
  }
  function rejectCookies(e: React.SyntheticEvent) {
    e.preventDefault();
    setCookie('cookies-allowed', 'false');
  }
  function acceptSelectedCookies(e: React.SyntheticEvent) {
    e.preventDefault();
    if (analyticsChecked) {
      setCookie('cookies-allowed', 'true');
    }
  }

  function toggleAnalytics(e: React.SyntheticEvent) {
    setAnalyticsChecked(!analyticsChecked);
  }

  const isCookiesAllowed = cookies['cookies-allowed'] === 'true';
  const isCookiesRejected = cookies['cookies-allowed'] === 'false';

  if (isCookiesRejected || isCookiesAllowed) {
    return null;
  }

  return (
    <section className="sticky bottom-0 bg-okwhite p-4 text-okgray text-sm justify-center items-center z-10">
      <div className="w-1366 m-auto">
        <div className="w-1/2 m-auto text-okdarkblue">
          <h1 className="font-semibold mb-5 text-xl">We use cookies 🍪</h1>
          {preferencesOpen ? (
            <>
              <div className="flex justify-between mb-5">
                <a href="#" className="mr-6">
                  <label className="flex items-center font-semibold">
                    <input
                      type="checkbox"
                      className="mr-3 border-1 h-4 w-4"
                      defaultChecked={analyticsChecked}
                      onChange={toggleAnalytics}
                    />
                    <span className="border-b-1 border-okdarkblue">
                      Analytics
                    </span>
                  </label>
                </a>
                <p>
                  Analytics cookies allow us to analyze your visits on our
                  website in order to provide you with a better experience.
                </p>
              </div>
              <div className="flex justify-end items-center">
                <button
                  className="font-thin p-2 mr-4 px-4"
                  onClick={togglePreferences}
                >
                  Back
                </button>
                <button
                  className="p-2 px-4 bg-oklightblue mr-4 font-thin"
                  onClick={rejectCookies}
                >
                  Reject
                </button>
                <button
                  className="p-2 px-4 bg-okdarkblue text-okwhite font-thin disabled:bg-oklavishwhite"
                  onClick={acceptSelectedCookies}
                  disabled={!analyticsChecked}
                >
                  Accept Selection
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="mb-5">
                Click "Accept" to allow us storing cookies on this website and
                improve your experience. Customize your preferences by clicking
                "Settings" or click "Reject" if you would not like to use
                cookies.
              </p>
              <div className="flex justify-end items-center">
                <a
                  href="#"
                  className="p-2 mr-4 px-4"
                  onClick={togglePreferences}
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="p-2 px-4 bg-oklightblue mr-4"
                  onClick={rejectCookies}
                >
                  Reject
                </a>
                <a
                  href="#"
                  className="p-2 px-4 bg-okdarkblue text-okwhite"
                  onClick={acceptCookies}
                >
                  Accept
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
