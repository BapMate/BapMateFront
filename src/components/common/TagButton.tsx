import styled from 'styled-components';
import React, { useState, FC } from 'react';

interface TagButtonProps {
  text: string;
  type: 'default' | 'disabled';
  onClick: (text: string) => void;
}

const TagButton: FC<TagButtonProps> = ({ text, type, onClick }) => {
  const [disabled, setDisabled] = useState(type === 'disabled');

  const btncolor = disabled ? '#989292' : '#fd505b';

  return (
    <TagWrapper
      btncolor={btncolor}
      onClick={() => {
        setDisabled(!disabled);
        onClick(text);
      }}
    >
      {text}
    </TagWrapper>
  );
};

export default TagButton;

const TagWrapper = styled.button<{ btncolor: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.btncolor};
  color: ${(props) => props.btncolor};
  background-color: transparent;

  margin-right: 8px;
  margin-bottom: 8px;
`;
