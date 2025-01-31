import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// function Button({ children, className, ...rest }: ButtonProps) {
//   return (
//     <button
//       {...rest}
//       className={clsx(
//         `text-sm sm:text-base border-indigo-400 hover:border-indigo-200 border-4 rounded-lg text-indigo-100 bg-indigo-500 `,
//         className
//       )}
//     >
//       {children}
//     </button>
//   );
// }

// export default Button;

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `py-1 px-3 text-sm sm:text-base xl:text-lg bg-muted/70 hover:bg-muted/90 border-2 border-foreground/60 hover:border-foreground/90 rounded-sm`,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
