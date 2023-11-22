# Nossa Casa Frontend [![Nossa casa](https://github.com/aceleradora-TW/nossa-casa-front/actions/workflows/development.yml/badge.svg?branch=main)](https://github.com/aceleradora-TW/nossa-casa-front/actions/workflows/development.yml)

## Tecnologias

- React
- JavaScript
- Express

## `Clonar repositório`

 Abra o terminal do seu sistema operacional e digite o seguinte comando:

  ```bash
  git clone https://github.com/aceleradora-TW/nossa-casa-front.git
  ```
  ### `Instalar o Yarn`

 Caso não possua o yarn em sua maquína, abra o terminal do seu sistema operacional e digite o seguinte comando:

  ```bash
  npm install -g yarn
  ```
  
 ### `Instalar as depêndencia`
 
 Para instalar as depêndencias, volte no terminal, e digite o seguinte comando:
 
  ```bash
  yarn install
  ```
## Comandos Disponíveis

No diretório do projeto, você pode executar:

### `yarn start`

Executando o app no modo desenvolvedor\
Abra [http://localhost:3000](http://localhost:3000) para ver em seu navegador.

# Variáveis de Ambiente
Essas são as variáveis de ambiente que essa aplicação precisa para funcionar em qualquer ambiente.
Os valores que devem ser atribuídos a eles dependerão do ambiente.

Para um ambiente **local**(sua maquína) um arquivo `.env` precisa ser criado na raiz do projeto.

```bash
URL_BACKEND=http://localhost:9000
URL_CMS=http://localhost:1337
REACT_APP_LINK_PARCEIRO=https://docs.google.com/forms/d/e/1FAIpQLSfsRwJx-7Wa5VIOSFaH3DAAoOr3iTJFQ27qBOj5aJ5dHTUk1Q/viewform
```

