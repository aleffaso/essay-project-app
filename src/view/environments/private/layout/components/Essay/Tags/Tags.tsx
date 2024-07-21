import { Tag } from 'antd';
import { TagsList } from './mapped';

interface TagsProps {
  className?: string;
  tagsType: string;
}

export const Tags = ({ className, tagsType }: TagsProps) => {
  const tag = TagsList[tagsType];
  return (
    <div className={className}>
      {tag && (
        <Tag key={tagsType} color={tag.color}>
          {tag.label}
        </Tag>
      )}
    </div>
  );
};

export const DropDownField = () => {
  return Object.keys(TagsList).map((key) => (
    <option key={key} value={key}>
      {TagsList[key].label}
    </option>
  ));
};
