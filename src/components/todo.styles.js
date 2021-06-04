import styled from 'styled-components';
import tw from 'twin.macro';

export const Section = styled.section`
  ${tw`flex flex-wrap flex-grow flex-col text-center max-w-screen-lg md:w-6/12 lg:w-6/12 w-10/12 border-8 rounded my-8 mx-auto`}
  & {
    figcaption {
      ${tw`mt-3 text-xl font-bold
    `}
    }
    h3 {
      ${tw`bg-green-400 text-white hover:bg-white hover:text-black mx-auto my-1 p-2 rounded-sm mt-3 text-xl font-bold
    `}
    }
  }
`;

export const AddItems = styled.form`
  ${tw`flex m-4`}
  & {
    input {
      ${tw`w-3/4 mx-auto my-1 p-2 rounded-sm
    `}
    }
  }
`;

export const Button = styled.button`
  ${tw` w-1/4 bg-green-500 hover:bg-green-300 rounded-sm text-white my-1 p-2`}
`;
