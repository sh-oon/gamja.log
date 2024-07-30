'use client';

import { useEffect, useState } from 'react';

type TElementPosition = {
  id: string
  top: number
}

function ToC() {
  const [elementPosition, setElementPosition] = useState<TElementPosition[]>([]);

  useEffect(() => {
    const mds = document.getElementById('markdown').querySelectorAll('h2, h3, h4, h5, h6');

    setElementPosition(
      Array.from(mds).map((md) => {
        return {
          id: md.id,
          tag: md.tagName.toLowerCase(),
          top: md.getBoundingClientRect().top,
        };
      }),
    );
  }, []);

  const clickToScroll = (id: string) => {
    const el = elementPosition.find((el) => el.id === id);
    window.scrollTo({ top: el.top - 120, behavior: 'smooth' });
  }

  const textSize = (tag: string) => {
    switch (tag) {
      case 'h2':
        return 'text-lg';
      case 'h3':
        return 'text-base pl-2';
      case 'h4':
        return 'text-sm';
      case 'h5':
        return 'text-xs';
      case 'h6':
        return 'text-xs';
      default:
        return 'text-sm';
    }
  }

  return (
    <aside className='sticky flex-1 w-fit top-[120px] left-full h-full'>
      <ul className='flex flex-col'>
        {elementPosition.map((el) => {
          return (
            <li
              key={el.id}
              className={`block text-sm cursor-pointer text-grey-600 hover:text-black ${textSize(el.tag)}`}
              onClick={() => clickToScroll(el.id)}
            >
              {el.id}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}


export default ToC;
