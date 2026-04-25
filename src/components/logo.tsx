import Image from "next/image";

type LogoProps = {
  className?: string;
};

/**
 * Liva Cafe brand mark.
 * Renders the official PNG from /public/logo.png. The asset is already a
 * sage disc with the chasen + chawan, so no badge wrapper is needed —
 * we just clip to a circle to keep the silhouette crisp on dark backgrounds.
 */
export function Logo({ className }: LogoProps) {
  return (
    <span
      className={`relative inline-block overflow-hidden rounded-full ${className ?? ""}`}
      aria-hidden
    >
      <Image
        src="/logo.png"
        alt=""
        fill
        sizes="64px"
        priority
        className="object-cover"
      />
    </span>
  );
}
