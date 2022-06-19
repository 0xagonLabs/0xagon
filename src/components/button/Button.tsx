import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  bit?: boolean;
  children: string;
  onClick?: (event: MouseEvent) => void;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    // 'btn-base': !props.xl,
    // 'btn-primary': true,
    'btn-bit': props.bit,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
           {
            /* .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          } */
          }

          .btn-bit {
            @apply inline-block text-center;
            @apply bg-red-500;
            display: inline-block;
            position: relative;
            text-align: center;
            font-size: 30px;
            padding: 20px;
            @apply text-3xl font-semibold py-2 px-4;
            font-family: 'editundo';
            color: white;
            box-shadow: inset -4px -4px 0px 0px #013349;
          }
          .btn-bit:hover,
          .btn-bit:focus {
            @apply bg-primary-600;
            box-shadow: inset -4px * 1.5 -4px * 1.5 0px 0px #013349;
          }
          .btn-bit:active {
            box-shadow: inset 4px 4px 0px 0px #013349;
          }
          .btn-bit:before,
          .btn-bit:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: content-box;
          }
          .btn-bit:before {
            top: -6px;
            left: 0;
            border-top: 6px black solid;
            border-bottom: 6px black solid;
          }

          .btn-bit:after {
            left: -6px;
            top: 0;
            border-left: 6px black solid;
            border-right: 6px black solid;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
