import { css } from "styled-components";


export const laptop = (props:any) => {
    return css`
    @media only screen and (max-width: 1366px) {
      ${props}
    }
  `;
};
export const medium = (props:any) => {
    return css`
    @media only screen and (min-width: 992px) {
      ${props}
    }
  `;
};

export const mobile = (props:any) => {
    return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
