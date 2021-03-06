# Como rodar o projeto

 ## Clonar o projeto

 ```
$ git clone git@github.com:charliston/frontend-developer.git
$ frontend-developer
 ```

## Instalar as dependências com:
`$ yarn install`
ou
`$ npm install`

## Rodar o projeto:
`$ yarn start`
ou
`$ npm start`

## Deploy no Heroku
Fiz um [deploy no Heroku](https://warm-reef-20582.herokuapp.com/), mas como a API limita a ação de CORS não irá funcionar nem com o método abaixo. =/


# Abrir Google Chrome com as opções de segurança desabilitadas para evitar "erro" de CORS (apenas rodando aplicação local):

## No OSX, abrir o Terminal e executar:
`$ open -a Google\ Chrome --args --disable-web-security --user-data-dir`

[--user-data-dir required on Chrome 49+ on OSX](https://stackoverflow.com/a/35509189/773263)

## Para Linux, executar:
`$ google-chrome --disable-web-security`

Além disso, se você estiver tentando acessar arquivos locais para fins de desenvolvimento, como AJAX ou JSON, também poderá
usar essa flag:
`-–allow-file-access-from-files`

## Para o Windows, vá para o Prompt de Comando, vá para a pasta em que o Chrome.exe está e digite:
`chrome.exe --disable-web-security`

Isso deve desativar a mesma política de origem e permitir que você acesse arquivos locais.

# Considerações

## Meu background
Sou programador front-end a 4 anos mais ou menos, sendo minha última experiência de trabalho com AngularJS. Iniciei os
estudos com React por conta e algumas vídeo aulas. Tive um problema pra iniciar projetos por conta pois as informações
que tem sobre React ou estão desatualizadas ou não funcionam.

## Estrutura do projeto
Visei a melhor escalabilidade do projeto por modularizar ele. Não sei se a estrutura de pastas está nos "padrões React",
mas é as que eu me sinti confortável com o resultado.
Esse é meu primeiro projeto inteiramente feito sem seguir nenhuma vídeo-aula ou tutorial (*yey!*). Isso me deixou muito
confiante das minhas capacidades com React

## Testes
Como disse anteriormente, não achei nada relacionado a Jest com Redux e API que fosse de fácil aprendizado. Mas como
quero sempre evoluir profissionalmente, após a entrega desse projeto, irei entrar mais profudamente nesse assunto, pois
sei que os testes unitários são importantes.

## Layout
Visando a maior velocidade de produção, eu copiei a estrutura de layout de alguns exemplos que existem na Internet.
Visto que não temos um Layout padrão pra seguir, meio que imitando essa prática com isso (*IMO*).

## Dificuldades
Eu tive um pouco de dificuldade em entender a API num primeiro momento, principalmente por estar externo ao desenvolvimento
da mesma. Então optei por caminhos que eu já tinha trabalhado antes com desenvolvimento de e-commerce.

## Tecnologias
- Utilizei o grid do **Bootstrap 4.1**, por ser o mais atualizado, utilizar tecnologias novas de grid, maturidade do projeto e
por eu gostar mais;
- **Fontawesome** 5, por ter os ícones bem mais trabalhados e visualmente mais agradáveis;
- **SCSS** por dar mais velocidade ao desenvolvimento de estilos;
- **create-react-app** por dar um início de projeto mais fácil pra quem não tem tanta intimidade com React;
- **Redux** para gerenciamento de estados;
- **React Loadable** pois fazendo um outro teste, um dos requisitos era esse. Achei tão interessante essa idéia que logo quis
utilizar também. Inclusive esse era uma das coisas que eu não gostava no AngularJS: ter que carregar toda a aplicação de
uma vez. Com o React Loadable, consegui que a aplicação fosse fatiada e carregada sob demanda, ganhando muito tempo de
carregamento;
- **Slick Carousel** pra fazer uma página inicial um pouco menos feia. (Sei que a parte de destaques não ficou linda);
- **[stackedit.io](stackedit.io)** pois fica mais fácil editar arquivos MD com ele :o)

Espero que meu projeto esteja dentro do que a empresa busca. Eu gostei muito de fazer esse teste, como eu disse, foi o
primeiro projeto que tive a confiança de fazer do zero sozinho (sem ajuda de tutoriais) usando o que aprendi nessa
jornada solo de horas de vídeos, documentações, frustrações (quase desisti de React) e, finalmente, alegria.