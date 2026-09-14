# Publicação no GitHub Pages

Este projeto foi preparado para GitHub Pages usando Vite + React.

## 1. Repositório

O projeto está configurado para o repositório:

`https://hodcriative.github.io/imoveis/`

Portanto, o `base` do Vite é `/imoveis/`.

Se o nome do seu repositório for diferente, altere `base` em `vite.config.ts` para `/<nome-do-repositorio>/`.

## 2. GitHub Pages

No GitHub, abra:

**Settings → Pages → Build and deployment → Source**

Selecione:

**GitHub Actions**

Não selecione "Deploy from a branch" para este workflow.

## 3. Branch

Faça o push do projeto para a branch `main`.

O workflow `.github/workflows/pages.yml` fará o build e o deploy automaticamente.

## 4. Rotas

O projeto usa `HashRouter`, portanto as rotas são compatíveis com hospedagem estática do GitHub Pages.

Exemplo:

`https://hodcriative.github.io/imoveis/#/`

## 5. Teste local

Execute:

```bash
npm install
npm run build
npm run dev
```

Se `npm run build` terminar sem erros, a etapa de build está pronta para o GitHub Actions.
