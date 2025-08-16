export default function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="28" fill="#078c03"/>
      <circle cx="30" cy="30" r="20" fill="#fcdd09"/>
      <circle cx="30" cy="30" r="12" fill="#da121a"/>
      <rect x="29" y="35" width="2" height="8" fill="#2d1810" rx="1"/>
    </svg>
  );
}
