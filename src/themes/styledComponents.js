import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;

const fadeIn = (color) => keyframes`
0% {
  background: rgba(0, 0, 0, 0);
}
100% {
  background: ${color};
  backdrop-filter: blur(5px);
}
`;

const SC = {
  Brackets: styled.span`
    color: ${(props) => props.theme.colors.accentColor} !important;
    transition: all 0.2s ease !important;
  `,
  GradientBackground: styled.div`
    background-image: linear-gradient(
      132.6deg,
      ${(props) => props.theme.colors.gradientBackgroundColor1} 23.3%,
      ${(props) => props.theme.colors.gradientBackgroundColor2} 84.7%
    );
    transition: all 0.2s ease !important;
  `,

  // SIDEBAR
  NavLogo: styled.svg`
    background-color: ${(props) => props.theme.colors.accentColor} !important;
    transition: all 0.2s ease !important;
  `,
  MenuItem: styled.span`
    &.active:after {
      background: ${(props) => props.theme.colors.accentColor} !important;
      transition: all 0.2s ease !important;
    }
    @media (max-height: 420px) {
      @media (min-width: 700px) {
        &.active {
          background-color: ${(props) =>
            props.theme.colors.accentColor} !important;
        }
      }
    }
  `,
  MenuUnderline: styled.a`
    &:after {
      background: ${(props) => props.theme.colors.accentColor} !important;
      transition: all 0.2s ease !important;
    }
  `,

  // MOBILE NAV
  Hamburger: styled.span`
    background: ${(props) => props.theme.colors.accentColor} !important;
    transition: all 0.2s ease !important;
  `,
  ArrowSvg: styled.g`
    fill: ${(props) => props.theme.colors.accentColor} !important;
    transition: all 0.2s ease !important;
  `,

  // ABOUT
  AboutImg: styled.img`
    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.colors.accentColor} 0%,
      ${(props) => props.theme.colors.accentColor} 47%,
      ${(props) => props.theme.colors.accentColorAnimation} 50%,
      ${(props) => props.theme.colors.accentColor} 53%,
      ${(props) => props.theme.colors.accentColor} 100%
    );
    animation: ${gradientAnimation} 15s ease infinite !important;
    background-size: 800% 800% !important;
  `,
  AboutImgMobile: styled.img`
    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.colors.accentColor} 0%,
      ${(props) => props.theme.colors.accentColor} 47%,
      ${(props) => props.theme.colors.accentColorAnimation} 50%,
      ${(props) => props.theme.colors.accentColor} 53%,
      ${(props) => props.theme.colors.accentColor} 100%
    );
    animation: ${gradientAnimation} 15s ease infinite !important;
    background-size: 650% 650% !important;
  `,
  Break: styled.div`
    background: ${(props) => props.theme.colors.accentColor} !important;
    transition: all 0.2s ease !important;
  `,
  UnderLinedH2: styled.h2`
    text-decoration: underline solid 3px
      ${(props) => props.theme.colors.accentColor} !important;
    transition: all 0.2s ease !important;
  `,
  LastP: styled.p`
    color: ${(props) => props.theme.colors.lastPcolor} !important;
    transition: all 0.2s ease !important;
  `,

  // DOTS
  Dots: styled.li`
    border-color: ${(props) => props.theme.colors.accentColor} !important;
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.accentColorFaded} !important;
    }
    &.active {
      background-color: ${(props) => props.theme.colors.accentColor} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.accentColor} !important;
      }
    }
    transition: all 0.2s ease !important;
  `,

  //  PORTFOLIO LIST
  PortfolioListItem: styled.li`
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.accentColorFaded} !important;
    }
    &:active {
      background-color: ${(props) =>
        props.theme.colors.accentColorFaded} !important;
    }
    &.active {
      background-color: ${(props) => props.theme.colors.accentColor} !important;
    }
    &.inactive {
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.accentColorFaded} !important;
      }
    }
    transition: all 0.2s ease !important;
  `,
  ScrollThumb: styled.div`
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.accentColor} !important;
    }
  `,
  ModalBackground: styled.div`
    &.modal-background-in {
      animation: ${(props) => fadeIn(props.theme.colors.accentColor)} 1s
        cubic-bezier(0.165, 0.84, 0.44, 1) forwards !important;
    }
  `,

  // SKILLS
  SkillsH2: styled.h2`
    text-decoration: underline solid 3px #23c5d9 !important;
    @media (min-height: 421px) {
      @media (max-width: 768px) {
        text-decoration: underline solid 3px
          ${(props) => props.theme.colors.accentColor} !important;
      }
    }
    transition: all 0.2s ease !important;
  `,

  // CONTACT
  ContactButton: styled.button`
    background: ${(props) => props.theme.colors.accentColor};
    color: ${(props) => props.theme.colors.accentTextColor} !important;
    &:hover {
      background: linear-gradient(
        130deg,
        ${(props) => props.theme.colors.accentColor},
        ${(props) => props.theme.colors.accentColor},
        ${(props) => props.theme.colors.accentColor},
        ${(props) => props.theme.colors.accentColor},
        ${(props) => props.theme.colors.accentColorAnimation},
        ${(props) => props.theme.colors.accentColor},
        ${(props) => props.theme.colors.accentColor},
        ${(props) => props.theme.colors.accentColor},
        ${(props) => props.theme.colors.accentColor}
      );
      -webkit-animation: animated-logo 2.2s ease infinite;
      -moz-animation: animated-logo 2.2s ease infinite;
      animation: animated-logo 2.2s ease infinite;
      background-size: 300% 300%;
    }
    transition: all 0.2s ease !important;
  `,
  ContactItem: styled.div`
    &:hover .contact-icon-container {
      background: ${(props) => props.theme.colors.accentColor} !important;
    }
    &:hover .item-details .item-span {
      color: ${(props) => props.theme.colors.accentColor} !important;
    }

    transition: all 0.2s ease !important;
  `,
  ContactIcon: styled.div`
    @media (min-height: 421px) {
      @media (max-width: 768px) {
        &.active {
          background-color: ${(props) =>
            props.theme.colors.accentColor} !important;
        }
      }
    }
    transition: all 0.2s ease !important;
  `,
  ContactInput: styled.input`
    &:focus {
      border-color: ${(props) => props.theme.colors.accentColor} !important;
    }
    &:hover {
      border-color: ${(props) =>
        props.theme.colors.accentColorFaded} !important;
    }
    transition: all 0.2s ease !important;
  `,
  ContactMessage: styled.textarea`
    &:focus {
      border-color: ${(props) => props.theme.colors.accentColor} !important;
    }
    &:hover {
      border-color: ${(props) =>
        props.theme.colors.accentColorFaded} !important;
    }
    transition: all 0.2s ease !important;
  `,
};

export default SC;
