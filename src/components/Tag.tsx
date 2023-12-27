import styled from 'styled-components';
import React from 'react';

interface TagProps {
  text: string;
  type: 'disabled' | 'enabled'; // "enabled"를 추가하여 타입 지정
}

const Tag: React.FC<TagProps> = ({ text, type }) => {
  const btncolor = type === 'disabled' ? '#989292' : '#fd505b';

  return <TagWrapper btncolor={btncolor}>{text}</TagWrapper>;
};

export default Tag;

interface TagWrapperProps {
  btncolor: string;
}

const TagWrapper = styled.div<TagWrapperProps>`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.btncolor};
  color: ${(props) => props.btncolor};
`;
