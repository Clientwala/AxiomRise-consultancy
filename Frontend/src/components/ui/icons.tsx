import { SVGProps } from "react";

// Hand-drawn style line icons — thin strokes, rounded caps, organic feel.
// Each icon uses stroke-based paths to mimic a pencil-sketch aesthetic.

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const BriefcaseIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
    <path d="M3 12.5h18" />
    <path d="M10.5 12.5v2h3v-2" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const DocumentIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 3h8l4 4v13a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V4.5A1.5 1.5 0 0 1 6.5 3" />
    <path d="M14 3v4h4" />
    <path d="M8 12h8M8 15.5h5" />
  </Svg>
);

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
    <path d="M8.5 11a2.5 2.5 0 0 1 2.5-2.5" />
  </Svg>
);

export const HeadsetIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <path d="M4 13v4a2 2 0 0 0 2 2h1.5v-6H6a2 2 0 0 0-2 2" />
    <path d="M20 13v4a2 2 0 0 1-2 2h-1.5v-6H18a2 2 0 0 1 2 2" />
    <path d="M18.5 19a2.5 2.5 0 0 1-2 2.5h-3" />
  </Svg>
);

export const BuildingIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 21h16" />
    <path d="M6 21V5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5V21" />
    <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
    <path d="M18 9h2a1 1 0 0 1 1 1v11" />
  </Svg>
);

export const WalletIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a1 1 0 0 1 1 1v1" />
    <path d="M3 8.5h16a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5" />
    <path d="M15.5 13.5h3" />
    <circle cx="16" cy="14" r="1" />
  </Svg>
);

export const PeopleIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a2.75 2.75 0 0 1 0 5.4" />
    <path d="M17 14.5a5.5 5.5 0 0 1 3.5 5.5" />
  </Svg>
);

export const UploadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 16V5" />
    <path d="M8 9l4-4 4 4" />
    <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
  </Svg>
);

export const PenIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 2.8 0l.2.2a2 2 0 0 1 0 2.8L8 19z" />
    <path d="M13.5 6.5l3.5 3.5" />
  </Svg>
);

export const ChartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20h16" />
    <path d="M7 16v-4M11 16V8M15 16v-6M19 16V5" />
  </Svg>
);

export const BellIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 16a6 6 0 0 1 12 0" />
    <path d="M9 16v1.5a3 3 0 0 0 6 0V16" />
    <path d="M12 4V3" />
    <path d="M18 10a6 6 0 0 0-12 0" />
  </Svg>
);

export const ChipIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M4 10h3M4 14h3M17 10h3M17 14h3" />
    <path d="M10 10h4v4h-4z" />
  </Svg>
);

export const MegaphoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 11v3l15 5V6L3 11z" />
    <path d="M18 8.5a3 3 0 0 1 0 8" />
    <path d="M7 19l1-3" />
  </Svg>
);

export const NetworkIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M8 8l2.5 7.5M16 8l-2.5 7.5M8.5 6h7" />
  </Svg>
);

export const CapIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 9l9-4 9 4-9 4-9-4z" />
    <path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" />
    <path d="M21 9v5" />
  </Svg>
);

export const BoltIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.8}>
    <path d="M13.4 2.3 5.6 13.1c-.4.5-.1 1 .5 1h4.1l-1.5 6.9c-.1.5.5.8.8.4l8.1-9.5c.4-.5.1-1.1-.5-1.1h-3.9l1.2-6.8c.1-.5-.3-.9-.8-.9h-.2z" />
    <path d="M11.6 6.6c.5 1.2 1 2 1.8 2.8" opacity={0.45} strokeWidth={1.1} />
    <path d="M7.3 9.9c1 .3 2 .6 3 .9" opacity={0.25} strokeWidth={1.1} />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.8}>
    <path d="M12 2.7c.9.6 4.4 2.1 6.3 3.1v5.2c0 4.5-2.9 7.7-6.3 9.1-3.4-1.4-6.3-4.6-6.3-9.1V5.8c1.9-1 5.4-2.5 6.3-3.1z" />
    <path d="M8.8 11.7l2.2 2.3 4.2-4.5" strokeWidth={1.5} />
    <path d="M6.1 8.3c1.2.7 2.4 1.3 3.6 1.9" opacity={0.35} strokeWidth={1.1} />
  </Svg>
);

export const HeartIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.8}>
    <path d="M12 19.8C6.7 16.5 4.8 12.9 4.8 9.9c0-2.3 1.8-4 4-4 1.2 0 2.4.6 3.2 1.6.8-1 2-1.6 3.2-1.6 2.2 0 4 1.7 4 4 0 3-1.9 6.6-7.2 9.9z" />
    <path d="M7.2 8.4c.6.4 1.2.7 1.8 1" opacity={0.4} strokeWidth={1.1} />
    <path d="M16.9 8.7c-.5.3-1 .5-1.5.7" opacity={0.25} strokeWidth={1.1} />
  </Svg>
);

export const CompassIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M15 9l-2 4-4 2 2-4 4-2z" />
  </Svg>
);

export const ScaleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v16M6 20h12" />
    <path d="M6 7h12" />
    <path d="M8 7l-3 6a2.5 2.5 0 0 0 5 0L8 7zM16 7l-3 6a2.5 2.5 0 0 0 5 0l-2-6z" />
  </Svg>
);

export const LinkedinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.5 9v9" />
    <circle cx="6.5" cy="5.5" r="1.5" />
    <path d="M11 18v-5a2.5 2.5 0 0 1 5 0v5" />
    <path d="M11 13.5V18" />
  </Svg>
);
