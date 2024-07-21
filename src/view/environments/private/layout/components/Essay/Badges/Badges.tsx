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

export const DropDownBadgeStatus = () => {
  return Object.keys(BadgesList).map((key) => (
    <option key={key} value={key}>
      {BadgesList[key].text}
    </option>
  ));
};
