import React from 'react';
import styled from '@emotion/styled/macro';
import Icon from './IconBase';

const SVG = styled(Icon)``;

const Question = ({ active, className }) => (
  <SVG
    width="16"
    height="16"
    viewBox="0 0 16 16"
    active={active}
    className={className}
  >
    <path
      d="M8 0C3.59184 0 0 3.59184 0 8C0 12.4082 3.59184 16 8 16C12.4082 16 16 12.4082 16 8C16 3.59184 12.4082 0 8 0ZM8 12.4898C7.59184 12.4898 7.18367 12.0816 7.18367 11.6735C7.18367 11.2653 7.59184 10.8571 8 10.8571C8.40816 10.8571 8.81633 11.2653 8.81633 11.6735C8.81633 12.0816 8.40816 12.4898 8 12.4898ZM9.87755 7.18367C9.71429 7.42857 9.55102 7.67347 9.30612 7.91837C8.89796 8.40816 8.57143 8.81633 8.57143 9.22449C8.57143 9.55102 8.32653 9.87755 7.91837 9.87755C7.5102 9.87755 7.26531 9.63265 7.26531 9.22449C7.26531 8.40816 7.83674 7.67347 8.2449 7.10204C8.40816 6.93878 8.57143 6.69388 8.73469 6.44898C8.81633 6.28572 8.89796 6.12245 8.89796 5.87755C8.89796 5.30612 8.40816 4.89796 7.91837 4.89796C7.42857 4.89796 6.93878 5.38776 6.93878 5.87755C6.93878 6.20408 6.69388 6.53061 6.28571 6.53061C5.87755 6.53061 5.71429 6.28572 5.71429 5.95918C5.71429 4.73469 6.69388 3.67347 8 3.67347C9.30612 3.67347 10.2857 4.65306 10.2857 5.95918C10.2857 6.36735 10.1225 6.77551 9.87755 7.18367Z"
      fill="#B1BBCE"
    />
  </SVG>
);

export default Question;