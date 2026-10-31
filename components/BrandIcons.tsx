import { FaGithub, FaLinkedin } from "react-icons/fa";

export function GithubIcon({ className }: { className?: string }) {
  return <FaGithub className={className} aria-hidden />;
}

export function LinkedinIcon({ className }: { className?: string }) {
  return <FaLinkedin className={className} aria-hidden />;
}
