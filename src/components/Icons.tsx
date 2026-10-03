import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export function Search({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

export function Pin({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function Navigation({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M21 3 3 10.5l8 2.5 2.5 8L21 3Z" />
    </svg>
  )
}

export function Camera({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7a1 1 0 0 0 .8-.4l1-1.3a1 1 0 0 1 .8-.4h4.4a1 1 0 0 1 .8.4l1 1.3a1 1 0 0 0 .8.4h1.7A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-8Z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </svg>
  )
}

export function Dumbbell({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M6.5 8v8M4 9.5v5M17.5 8v8M20 9.5v5M6.5 12h11" />
    </svg>
  )
}

export function Eye({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function Wallet({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18M16.5 14.5h1.5" />
    </svg>
  )
}

export function ArrowRight({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 12h15M13.5 6.5 20 12l-6.5 5.5" />
    </svg>
  )
}

export function ArrowLeft({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M20 12H5M10.5 6.5 4 12l6.5 5.5" />
    </svg>
  )
}

export function Check({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </svg>
  )
}

export function Close({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </svg>
  )
}

export function Clock({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  )
}

export function Phone({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function Chat({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M20.5 11.5a7.7 7.7 0 0 1-8.2 7.7 8.6 8.6 0 0 1-3.4-.8L4 19.5l1.2-4.4a7.6 7.6 0 0 1-.9-3.6A7.7 7.7 0 0 1 12.4 4a7.7 7.7 0 0 1 8.1 7.5Z" />
    </svg>
  )
}

export function Mail({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 8 8 5 8-5" />
    </svg>
  )
}

export function Menu({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function User({ size = 18, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="12" cy="8.5" r="3.6" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </svg>
  )
}

export function Star({ size = 14, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" stroke="none" {...rest}>
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
    </svg>
  )
}

export function Share({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="17.5" cy="6" r="2.5" />
      <circle cx="17.5" cy="18" r="2.5" />
      <path d="m8.3 10.8 6.9-3.6M8.3 13.2l6.9 3.6" />
    </svg>
  )
}

export function Bookmark({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M6.5 4.5h11a1 1 0 0 1 1 1v14l-6.5-4-6.5 4v-14a1 1 0 0 1 1-1Z" />
    </svg>
  )
}

export function Layers({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="m12 3.5 8.5 4.3L12 12 3.5 7.8 12 3.5Z" />
      <path d="m4 12.5 8 4 8-4M4 16.5l8 4 8-4" />
    </svg>
  )
}

export function Clock2({ size = 16, ...rest }: IconProps) {
  return <Clock size={size} {...rest} />
}

export function Filter({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 6.5h16M7 12h10M10 17.5h4" />
    </svg>
  )
}

export function Chevrons({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="m8 10 4-4 4 4M8 14l4 4 4-4" />
    </svg>
  )
}

export function Whatsapp({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L4 20.3l1.3-4a8.4 8.4 0 1 1 15.2-4.6Z" />
      <path d="M9.2 9.1c.3 2.4 3.3 5.4 5.7 5.7l1-1.4 1.7.8c-.4 1.3-2 1.7-3.4 1.1-2.7-.9-5.6-3.8-6.5-6.5-.6-1.4-.2-3 1.1-3.4l.8 1.7-1.4 1Z" />
    </svg>
  )
}

export function Instagram({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

export function Twitter({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 4.5 19.5 19.5M19.5 4.5 4 19.5" />
    </svg>
  )
}

export function Linkedin({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 11v5.5M8 8.2v.1M12 16.5V11m0 2.2c0-1.2 1-2.2 2.2-2.2s2.3 1 2.3 2.4v3" />
    </svg>
  )
}

export function Logo({ size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="brand-mark"
    >
      <rect width="32" height="32" rx="9" fill="#2563EB" />
      <path
        d="M9 13v6M12 11v10M20 11v10M23 13v6M12 16h8"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
