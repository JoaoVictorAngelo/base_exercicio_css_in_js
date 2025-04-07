import { FormEvent, useState } from 'react'

import { BarraDeBusca, Botao, CampoDeTexto } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <BarraDeBusca onSubmit={aoEnviarForm}>
      <CampoDeTexto
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </BarraDeBusca>
  )
}
export default FormVagas
