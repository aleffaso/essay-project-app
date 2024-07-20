import { useState } from 'react';
import { MenuList } from './mapped';
import { cn } from '@utils/tailwind/cn';
import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react';

export const Menu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const collapsedStyle = collapsed ? 'w-10' : 'w-30';

  const iconSize = 16;

  return (
    <div className={cn(' bg-dark-950 rounded-tr-sm h-full-height', collapsedStyle)}>
      <ul className="flex flex-col mt-3">
        {MenuList.map((item, index) => (
          <button
            disabled={item.disabled}
            className={cn(
              'flex items-center p-2 text-white hover:bg-gray-700 hover:rounded-sm text-xs',
              {
                'cursor-not-allowed text-gray-400': item.disabled,
                'cursor-pointer': !item.disabled
              }
            )}
            key={index}
            onClick={() => {
              if (item.onClick) {
                item.onClick();
              } else if (item.path) {
                window.location.href = item.path;
              }
            }}>
            <span className="mr-2 ml-1">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
        <li className="p-2 text-white cursor-pointer hover:bg-gray-700 hover:rounded-sm text-xs">
          <button className=" text-white flex" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <ArrowCircleRight size={iconSize} className="ml-1" />
            ) : (
              <ArrowCircleLeft size={iconSize} className="ml-1" />
            )}
            {!collapsed && <span className="ml-2">Menu</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};
