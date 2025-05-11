"use client";

import { SocialLink } from "@/components/atoms/social-link";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-6">
      <SocialLink
        href="https://www.linkedin.com/in/mudashir/"
        icon={null}
        label="LinkedIn"
        delay={0.1}
      />
      <SocialLink
        href="https://github.com/oluwabukola2610"
        icon={null}
        label="GitHub"
        delay={0.2}
      />
      <SocialLink
        href="https://www.instagram.com/the.roheemoh/"
        icon={null}
        label="Instagram"
        delay={0.3}
      />
      <SocialLink
        href="https://drive.google.com/file/d/1WsfenyLvI2xiMsfDep83cC_82ecgfg-s/view"
        icon={null}
        label="Instagram"
        delay={0.3}
      />
<SocialLink href="/resume.pdf" icon={null} label="Resume" delay={0.5} download />
    </div>
  );
}
