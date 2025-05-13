interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
  download?: boolean;
}
import { motion } from "framer-motion";
export function SocialLink({
  href,
  icon,
  label,
  delay = 0,
  download = false,
}: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      download="mudashir roheemoh Resume.pdf"
      target="_blank"
      className="group flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-green-400"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      aria-label={label}
    >
      <span className="uppercase">{label}</span>
      <motion.span
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        {/* arrow icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up-right"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </motion.span>
    </motion.a>
  );
}
