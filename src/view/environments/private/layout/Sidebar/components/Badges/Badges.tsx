import { Badge } from 'antd';
import { BadgesList } from './mapped';

interface BadgesProps {
  className?: string;
  statusType: string;
}

export const Badges = ({ className, statusType }: BadgesProps) => {
  const badge = BadgesList[statusType];
  return (
    <div className={className}>
      {badge && <Badge key={statusType} color={badge.color} text={badge.text} />}
    </div>
  );
};
