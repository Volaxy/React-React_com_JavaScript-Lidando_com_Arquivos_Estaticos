Geralmente, quando queremos importar arquivos como imagens e estilos css que estão a níveis acima do diretório onde queremos fazer a importação, fazemos dessa maneira:

```javascript
import nome-da-imagem from '../../../assets/imagens/nome da imagem'
```

Voltamos vários níveis de pastas para conseguir acessar o arquivo que desejamos importar. Mas e se um dia esse caminho mudar? Não vai quebrar nada na aplicação? Provavelmente sim! Essas importações múltiplas, relativas e aninhadas foram padrão por muito tempo e são muito difíceis de gerenciar.

É por isso que atualmente se usa absolute imports (importações absolutas) para tornar o código muito mais limpo, legível e gerenciável. As vantagens de se uilizar a importação absoluta são:

*   O código se torna mais limpo;
*   A escrita do código se torna mais fácil;
*   Você não precisa se preocupar com os `../../../`;
*   Você consegue localizar facilmente um componente ou arquivo importado devido ao posicionamento absoluto.

Primeiro você deve criar um arquivo chamado `jsconfig.json` na raiz do seu projeto com o seguinte código:

```javascript
    {
      "compilerOptions": {
        "baseUrl": "src"
      },
      "include": ["src"]
    }
```

Essas poucas linhas simples dirão à configuração do Create React App para usar seu diretório `src` como base para suas importações, para que você possa importar arquivos e componentes com caminhos absolutos.

Com isso configurado, você pode fazer a importação do exemplo inicial da seguinte forma:

```javascript
import nome-da-imagem from '/assets/imagens/nome da imagem'
```

Muito fácil né? Agora você não precisa mais se preocupar com as importações relativas, basta apenas importar seus arquivos de forma direta como no exemplo acima. Se quiser saber mais, [neste link você acessa um artigo explicando porquê e como usar absolute imports](https://javascript.plainenglish.io/why-and-how-to-use-absolute-imports-in-react-d5b52f24d53c).