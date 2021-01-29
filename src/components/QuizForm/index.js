import styled from 'styled-components';
import { useRouter } from 'next/router';

export const QuizForm = (props) => {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <p>{props.description}</p>
      <Form
        as={Form}
        onSubmit={function (infosDoEvento) {
          infosDoEvento.preventDefault();
          router.push(`/quiz?name=${name}`);
        }}
      >
        <Form.Input
          onChange={function (infosDoEvento) {
            setName(infosDoEvento.target.value);
          }}
          placeholder="Diz aí seu nome pra jogar :)"
        />

        <Form.Button type="submit" disabled={name.length === 0}>
          JOGAR
        </Form.Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

Form.Input = styled.input`
  height: 2.5rem;
  padding: 0 1rem;
  background: rgba(255, 255, 255);
  border: 0.0625rem solid #d3e2e5;
  border-radius: 4px;
  outline: none;
  color: #5c8599;
  margin: 1rem 0;

  font-size: 14px;
  line-height: 24px;
`;

Form.Button = styled.button`
  height: 2.25rem;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  box-shadow: inset 0px 1px 3px 0px #fce2c1;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary} 5%,
    #fb9e25 100%
  );
  background-color: ${({ theme }) => theme.colors.secondary};

  color: #fff;
  font-weight: bold;

  transition: background-color 0.2s;

  text-decoration: none;
  text-shadow: 0px -1px 0px #cc9f52;

  &:hover {
    background: linear-gradient(
      to bottom,
      #fb9e25 5%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
    background-color: #fb9e25;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
