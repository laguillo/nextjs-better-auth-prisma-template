import { railwayDeployUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';

const SIZES = {
  sm: 'h-9',
  md: 'h-10',
  lg: 'h-12 sm:h-14'
};

/**
 * The official Railway button, sized by height. `placement` becomes
 * `utm_content`, so Railway's referral stats show which CTA converts.
 */
export function DeployButton({
  placement,
  size = 'lg',
  glow = false,
  className
}: {
  placement: string;
  size?: keyof typeof SIZES;
  glow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={railwayDeployUrl(placement)}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        'focus-visible:ring-ring inline-flex rounded-lg transition-transform outline-none hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2',
        glow && 'deploy-cta',
        className
      )}
    >
      <img
        src='https://railway.com/button.svg'
        alt='Deploy on Railway'
        width={183}
        height={40}
        className={cn('w-auto', SIZES[size])}
      />
    </a>
  );
}
