'use client';

import { useState } from 'react';

type Props = {
  tags: string[]
  selectHandler?: (tags: string[]) => void
}

function ArticleTagsCard({ tags, selectHandler }: Props) {
  const [checkedTags, setCheckedTags] = useState<string[]>([]);

  const changeHandler = (tag: string) => {
    if (checkedTags.includes(tag)) {
      const newTags = checkedTags.filter((checkedTag) => checkedTag !== tag);
      setCheckedTags(newTags);
      selectHandler && selectHandler(newTags);
    } else {
      setCheckedTags([...checkedTags, tag]);
      selectHandler && selectHandler([...checkedTags, tag]);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <span>태그 목록</span>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <label
            htmlFor={tag}
            key={index}
            className={`flex w-fit h-fit items-center dark:text-white dark:bg-grey-700 rounded-full px-2 py-1 md:p-1 font-semibold transition-all hover:opacity-50 dark:border-white dark:hover:bg-[#ffffff88] ${checkedTags.includes(tag) ? '!bg-blue-500 text-white' : 'text-blue-500'} cursor-pointer`}
          >
            <input
              type={'checkbox'}
              checked={checkedTags.includes(tag)}
              onChange={() => {
                changeHandler(tag);
              }}
              id={tag}
              key={index}
              className="md:text-sm text-blue-500 hidden"
            />
            #{tag}
          </label>
        ))}
      </div>
    </div>
  );
}


export default ArticleTagsCard;
