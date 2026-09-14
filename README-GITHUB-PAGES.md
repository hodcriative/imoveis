# Site do Cléverson — GitHub Pages

Este projeto usa **React + Vite**. O GitHub Pages não deve publicar a pasta `src` diretamente:
o workflow deste pacote instala as dependências, executa `npm run build` e publica somente `dist/`.

## Publicação

1. Crie/abra o repositório `imoveis` no GitHub.
2. Envie todos os arquivos deste ZIP para a branch `main`.
3. Acesse **Settings → Pages**.
4. Em **Build and deployment**, selecione **GitHub Actions**.
5. Aguarde o workflow **Deploy to GitHub Pages** terminar.

A aplicação está configurada para o endereço:

`https://hodcriative.github.io/imoveis/`

O Vite usa `base: "/imoveis/"` e o React Router usa `basename="/imoveis"`, portanto os assets e as rotas funcionam no subdiretório do GitHub Pages.
