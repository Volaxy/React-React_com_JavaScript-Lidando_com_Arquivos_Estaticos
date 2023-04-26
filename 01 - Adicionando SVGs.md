Durante o curso não utilizamos nenhuma imagem no formato .svg. Contudo, arquivos svg’s são muito comuns em aplicações web, pois eles são utilizados para criar logotipos, ícones e outros elementos interativos na página.

Além disso, utilizar svg’s é altamente recomendado sempre que possível, pois eles podem ser pesquisados, indexados, e possuem altíssima qualidade, não comprometendo a resolução em outros tamanhos de telas.

Você pode adicionar svg’s em suas aplicações da mesma forma que importa imagens e arquivos css:

```javascript
    import React from 'react'
    import logo from '../assets/logo.svg'
    import style from './Cabecalho.module.scss'
    
    export default function Cabecalho() {
      return (
        <div className={style.header}>
            <img src={logo} alt="Logotipo da Alura Space" />
    … // código oculto
        </div>
      )
    }
```

Mas sabia que é possível adicionar svg’s como componentes e não como imagens?

É isso aí! Segundo a [documentação do React](https://create-react-app.dev/docs/adding-images-fonts-and-files) você pode importar svg’s diretamente como componentes React, da seguinte forma:

```javascript
    import React from 'react'
    import { ReactComponent as Logo } from './assets/Logo.svg';
    import style from './Cabecalho.module.scss'
    
    export default function Cabecalho() {
      return (
        <div className={style.header}>
          {/* Agora a logotipo é um componente React */}
          <Logo />
        </div>
      );
    }
```
Ao importar um svg como componente você deve usar a notação de componente `<Logo />`.

O nome de importação **ReactComponent** informa ao Create React App que você deseja um componente React que renderize um SVG. As vantagens de utilizar um svg como um componente é que você não precisa carregar o arquivo svg como um arquivo separado.

As duas formas de importação estão corretas, mas na segunda forma você renderizará um componente que é um svg puro, enquanto que na primeira forma será uma imagem que renderiza um svg. Do ponto de vista de compilação, é bem melhor a segunda forma.