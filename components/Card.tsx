import clsx from 'clsx';

interface Props {
  icon: React.ReactNode;
  iconClassName: string;
  title: string;
  summary: React.ReactNode;
  details: React.ReactNode;
  onClick: () => void;
  showDetails: boolean;
  isLeftMost?: boolean;
  isRightMost?: boolean;
}

export default function Card(props: Props) {
  const showIcon = !props.showDetails;
  return (
    <div
      className={clsx(
        'w-1/4 p-2 h-80',
        props.isLeftMost && 'pl-0',
        props.isRightMost && 'pr-0'
      )}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          props.onClick();
        }}
        onFocus={props.onClick}
        className={clsx(
          'block bg-oklightgray rounded-xl shadow-lg p-4 h-full',
          props.showDetails &&
            'transition duration-200 ease-out bg-okred text-white'
        )}
      >
        <div>
          {showIcon && (
            <div
              className={clsx(
                'rounded h-14 w-14 flex items-center justify-center mb-4',
                props.iconClassName
              )}
            >
              {props.icon}
            </div>
          )}
          <h2 className="font-bold h-14 text-okwhite">{props.title}</h2>
          <div
            className={clsx(
              'text-sm',
              props.showDetails ? 'text-white' : 'text-oklavishwhite'
            )}
          >
            {props.showDetails ? props.details : props.summary}
          </div>
        </div>
      </a>
    </div>
  );
}
