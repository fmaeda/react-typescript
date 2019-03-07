import { css } from '@emotion/core';
import { nvl } from 'src/Utils/Objects';

type JustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

type AlignType =
  | 'auto'
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';

type Props = {
  flex?: number;
  direction?: 'column' | 'row';
  justifyContent?: JustifyType;
  alignItems?: AlignType;
  alignSelf?: AlignType;
};

type InnerProps = Props & {
  color?: string;
  background?: string;
};

export default ({
  flex = 1,
  direction = 'column',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  alignSelf = 'auto',
  color,
  background,
}: InnerProps) => ({
  flex: cFlex,
  direction: cDirection,
  justifyContent: cJustifyContent,
  alignItems: cAlignItems,
  alignSelf: cAlignSelf,
}: Props) => css`
  display: flex;
  flex: ${nvl(cFlex, flex)};
  flex-direction: ${nvl(cDirection, direction)};
  justify-content: ${nvl(cJustifyContent, justifyContent)};
  align-items: ${nvl(cAlignItems, alignItems)};
  align-self: ${nvl(cAlignSelf, alignSelf)};
  ${color &&
    css`
      color: ${color};
    `};
  ${background &&
    css`
      background: ${background};
    `};
`;
