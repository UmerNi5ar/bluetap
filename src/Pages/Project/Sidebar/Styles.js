import styled from 'styled-components';

import {
  color,
  sizes,
  font,
  mixin,
  zIndexValues,
} from '../../../shared/utils/styles';

export const Sidebar = styled.div`
  position: fixed;
  z-index: ${zIndexValues.navLeft + 1};
  top: 47px;
  left: ${sizes.appNavBarLeftWidth}px;
  height: 60vh;
  width: ${sizes.secondarySideBarWidth}px;
  padding: 0 16px 24px;
  background: ${color.backgroundLightest};
  border-right: 1px solid ${color.borderLightest};
  ${mixin.scrollableY}
  ${mixin.customScrollbar()}
  @media (max-width: 1100px) {
    width: ${sizes.secondarySideBarWidth - 10}px;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  padding: 24px 4px;
`;

export const ProjectTexts = styled.div`
  padding: 3px 0 0 10px;
`;

export const ProjectName = styled.div`
  color: ${color.textDark};
  ${font.size(15)};
  ${font.medium};
`;

export const ProjectCategory = styled.div`
  color: ${color.textMedium};
  ${font.size(13)};
`;

export const Divider = styled.div`
  margin-top: 17px;
  padding-top: 18px;
  border-top: 1px solid ${color.borderLight};
`;

export const LinkItem = styled.div`
  position: relative;
  display: flex;
  padding: 8px 12px;
  border-radius: 3px;
  ${mixin.clickable}
  ${(props) =>
    !props.to
      ? `cursor: not-allowed;`
      : `&:hover { background: ${color.backgroundLight}; }`}
  i {
    margin-right: 15px;
    font-size: 20px;
  }
  &.active {
    color: ${color.primary};
    background: ${color.backgroundLight};
    i {
      color: ${color.primary};
    }
  }
`;

export const LinkText = styled.div`
  padding-top: 2px;
  ${font.size(14.7)};
`;

export const NotImplemented = styled.div`
  display: inline-block;
  position: absolute;
  top: 7px;
  left: 40px;
  width: 140px;
  padding: 5px 0 5px 8px;
  border-radius: 3px;
  text-transform: uppercase;
  color: ${color.textDark};
  background: ${color.backgroundMedium};
  opacity: 0;
  ${font.size(11.5)};
  ${font.bold}
  ${LinkItem}:hover & {
    opacity: 1;
  }
`;
export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 64px;
  color: #deebff;
  transition: color 0.1s;
  display: flex;
  align-items: center;
  text-align: center;

  ${mixin.clickable}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  i {
    position: absolute;
    left: 18px;
  }
`;

export const ItemText = styled.div`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;

  ${font.bold}
  ${font.size(12)}
  
    right: 0;
  visibility: visible;
  opacity: 1;
`;
