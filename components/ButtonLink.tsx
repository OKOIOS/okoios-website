import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  label: string;
  onClick?: (e: React.SyntheticEvent) => void;
  highlighted?: boolean;
}

export default function ButtonLink(props: Props) {
  return (
    <Link href={props.href}>
      <div
        className={clsx(
          'cursor-pointer flex items-center justify-center mr-8 h-button-h w-button-w bg-button-size hover:bg-button active:bg-button focus:bg-button hover:text-okwhite focus:text-okwhite active:text-okwhite hover:font-semibold focus:font-semibold active:font-semibold',
          props.highlighted ? 'bg-button text-okwhite' : 'bg-button-outline'
        )}
        onClick={props.onClick}
      >
        {props.label}
      </div>
    </Link>
  );
}
