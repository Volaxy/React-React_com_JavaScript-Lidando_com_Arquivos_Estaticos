A forma mais comum de usar fontes em aplicações web, é utilizando o [Google Fonts](https://fonts.google.com/). Você pode escolher entre uma variedade de fontes de todos os tipos e estilos para utilizar em seus projetos. Contudo, por questões de exclusividade de marca, branding, etc, é comum que empresas possuam suas próprias fontes.

O @font-face surgiu para permitir que pessoas desenvolvedoras possam adicionar fontes sem se limitar às chamadas “fontes seguras”, como as do Google. Com o @font-face podemos especificar o nome de uma fonte instalada localmente. Se a fonte não estiver instalada no localmente na máquina do usuário, automaticamente ela é baixada no servidor e exibida ao usuário.

Para utilizar o @font-face no React você precisa criar uma pasta chamada fonts.

Feito isso, você pode baixar as fontes desejadas e colocá-las nessa pasta fonts.

Em seguida, você deve adicionar essas fontes ao arquivo index.js de seu projeto, dessa forma:

```jsx
import './fonts/nome-da-fonte.ttf';
```

No arquivo index.css (ou a extensão de pré-processador que está usando), você pode usar o @font-face:

```scss
@font-face {
    font-family: "NomePersonalizadoDaFonte";
    src: url("../assets/fontes/nome-da-font.ttf") format("truetype");
    font-weight: 500;
    font-display: swap;
}
```

O format depende do tipo da fonte. Eis alguns exemplos:
*   **.woff** -> format("woff"),
*   **.ttf** -> format("truetype")
*   **.eot** -> format('embedded-opentype')

Você pode [consultar quais fontes os navegadores modernos suportam acessando este link](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp). Se deseja saber mais sobre como importar fontes nos seus projetos, recomendo a leitura desses dois artigos abaixo (em inglês).

*   [Adicionando fontes a um aplicativo React](https://dev.to/annequinkenstein/adding-fonts-to-create-react-app-3ed7)
*   [3 maneiras rápidas de adicionar fontes ao seu aplicativo React](https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app)

Para saber mais sobre o @font-face, sugiro [ler a documentação neste link](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@font-face). E se quiser saber outras formas de importar fontes em seus projetos react, vou deixar [neste link um artigo muito legal explicando passo a passo de cada uma das maneiras](https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app).