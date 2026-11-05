/* Icons exported from the Rectio Figma file (paths unchanged, colours switched to currentColor).
   Each renders inside a fixed square box matching the Figma icon frame. */

type P = { className?: string };
const stroke = { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Menu — 24px frame. */
export function MenuIcon({ className = "size-6" }: P) {
  return (
    <span className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 17.375 15.375" fill="none" className="h-[58%] w-[67%]">
        <path d="M0.6875 0.6875H16.6875" {...stroke} strokeWidth="1.375" />
        <path d="M0.6875 7.6875H16.6875" {...stroke} strokeWidth="1.375" />
        <path d="M0.6875 14.6875H16.6875" {...stroke} strokeWidth="1.375" />
      </svg>
    </span>
  );
}

/** Arrow - Right — 24px frame. */
export function ArrowRightIcon({ className = "size-6" }: P) {
  return (
    <span className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 14.375 12.375" fill="none" className="h-[46%] w-[54%]">
        <path d="M8.87622 0.687509L13.6875 6.18753L8.87622 11.6875" {...stroke} strokeWidth="1.375" />
        <path d="M13.3107 6.18751H0.6875" {...stroke} strokeWidth="1.375" />
      </svg>
    </span>
  );
}

/** add — plus sign, 50% of its frame. */
export function AddIcon({ className = "size-10" }: P) {
  return (
    <span className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 18 18" fill="none" className="size-1/2">
        <path d="M1 9H17" {...stroke} strokeWidth="2" />
        <path d="M9 17V1" {...stroke} strokeWidth="2" />
      </svg>
    </span>
  );
}

/** Equal — 32px frame. */
export function EqualIcon({ className = "size-8" }: P) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M6.66667 12H25.3333" {...stroke} strokeWidth="2.66667" />
      <path d="M6.66667 20H25.3333" {...stroke} strokeWidth="2.66667" />
    </svg>
  );
}

/** Copy — 28px frame. */
export function CopyIcon({ className = "size-7" }: P) {
  return (
    <span className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 25.3333 25.3333" fill="none" className="size-[84%]">
        <path d="M17.3333 13.7167V18.6167C17.3333 22.7 15.7 24.3333 11.6167 24.3333H6.71667C2.63333 24.3333 1 22.7 1 18.6167V13.7167C1 9.63334 2.63333 8 6.71667 8H11.6167C15.7 8 17.3333 9.63334 17.3333 13.7167Z" {...stroke} strokeWidth="2" />
        <path d="M24.3333 6.71667V11.6167C24.3333 15.7 22.7 17.3333 18.6167 17.3333H17.3333V13.7167C17.3333 9.63334 15.7 8 11.6167 8H8V6.71667C8 2.63333 9.63334 1 13.7167 1H18.6167C22.7 1 24.3333 2.63333 24.3333 6.71667Z" {...stroke} strokeWidth="2" />
      </svg>
    </span>
  );
}

/** CheckCircle — green filled, 28px frame. */
export function CheckCircleIcon({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <path d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z" fill="var(--green-500)" stroke="var(--green-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.625 14.875L12.25 17.5L18.375 11.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** XCircle — red outline, 32px frame (don'ts and failed checks). */
export function XCircleIcon({ className = "size-8" }: P) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M20 12L12 20" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12L20 20" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
