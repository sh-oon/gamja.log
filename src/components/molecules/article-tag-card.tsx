'use client';

import { Text } from '@/components/atoms'
import styled from '@emotion/styled'
import React, { useState } from 'react';
import { vars } from '@ui-tokens';

type Props = {
  tags: string[]
  selectHandler?: (tags: string[]) => void
}

export function ArticleTagCard({ tags, selectHandler }: Props) {
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
    <StyledCardContainer>
      <Text as={'p'} typography={'title-xs-medium'}>태그 목록</Text>
      <div className="tag-list-container">
        {tags.map((tag, index) => (
          <StyledTag
            htmlFor={tag}
            key={index}
            selected={checkedTags.includes(tag)}
          >
            <input
              type={'checkbox'}
              checked={checkedTags.includes(tag)}
              onChange={() => changeHandler(tag)}
              id={tag}
              key={index}
            />
            #{tag}
          </StyledTag>
        ))}
      </div>
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  & .tag-list-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
`

const StyledTag = styled.label<{ selected: boolean }>`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  transition: all 0.1s;
  font-weight: 600;
  cursor: pointer;
  color: ${vars.$semantic.color.text.interactive};
  
  ${({ selected }) => selected ?
    `color: ${vars.$semantic.color.text.onWhite};
     background-color: ${vars.$semantic.color.text.interactive};` :
    `color: ${vars.$semantic.color.text.interactive};`}
  
  &:hover {
    opacity: 0.5;
  }
  
  & input {
    display: none;
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${vars.$semantic.color.text.primary};
  }
`
