import styled from "styled-components";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { ReactNode } from "react";

const FormRowStyled = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

interface PropTypes {
  label: string;
  children: ReactNode;
  err: string | null;
}

export default function FormRow({
  label,
  err,
  children,
}: PropTypes): JSX.Element {
  return (
    <FormRowStyled>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {err && <Error>{err}</Error>}
    </FormRowStyled>
  );
}
