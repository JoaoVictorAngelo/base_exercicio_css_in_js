import styled from 'styled-components'

export const VagaContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.corPrincipal};
  background-color: ${({ theme }) => theme.corSecundaria};
  color: ${({ theme }) => theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.5s;
  border-radius: 8px;

  :hover {
    background-color: ${({ theme }) => theme.corPrincipal};
    color: ${({ theme }) => theme.corSecundaria};
  }

  :hover a {
    border-color: ${({ theme }) => theme.corPrincipal};
    background-color: ${({ theme }) => theme.corSecundaria};
    color: ${({ theme }) => theme.corPrincipal};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const Botao = styled.a`
  border-color: ${({ theme }) => theme.corSecundaria};
  background-color: ${({ theme }) => theme.corPrincipal};
  color: ${({ theme }) => theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  transition: all ease 0.5s;

  @media (max-width: 768px) {
    display: block;
  }
`
