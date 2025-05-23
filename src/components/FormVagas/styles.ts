import styled from 'styled-components'

export const BarraDeBusca = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Botao = styled.button`
  background-color: ${({ theme }) => theme.corPrincipal};
  border: 1px solid ${({ theme }) => theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const CampoDeTexto = styled.input`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.corPrincipal};
`
