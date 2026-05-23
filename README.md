# Livraria Eclipse

Site em React para uma loja virtual de livros com estetica misteriosa, literaria e atmosferica.

## Componentes criados

- `Header`: exibe o nome da loja e o menu com links para Inicio, Produtos e Contato.
- `Banner`: mostra a chamada principal da loja com imagem de fundo e botao para os produtos.
- `CardProduto`: componente reutilizavel usado para exibir cada livro com nome, autor, imagem, preco e botao Comprar.
- `Sobre`: apresenta um pequeno texto explicando a proposta da loja.
- `Footer`: exibe o nome da aluna, ano e contatos ficticios.

## Livros usados na vitrine

- A Mao Esquerda da Escuridao, de Ursula K. Le Guin
- O Conto da Aia, de Margaret Atwood
- A Parabola do Semeador, de Octavia E. Butler
- Mulheres que Correm com os Lobos, de Clarissa Pinkola Estes
- Circe, de Madeline Miller
- Frankenstein, de Mary Shelley

## Como rodar

```bash
npm install
npm run dev
```

## Hospedagem no Vercel

Ao importar o repositorio no Vercel, use as configuracoes padrao de projeto Vite:

- Build Command: `npm run build`
- Output Directory: `dist`
