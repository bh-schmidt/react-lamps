# React Lamps

## Objetivos

* Construir um prédio que contenha divs que representem as suas janelas.
* Ao clicar em cada janela suas luzes se acendem/apagam.
* Ao lado criar um botão que permite acender/apagar todas as luzes.
* Utilizar a [Sunrise Sunset API](https://sunrise-sunset.org/api) para mudar o cenário caso esteja noite ou dia.

## O projeto

O projeto foi desenvolvido pensando em uma visualização Desktop, porém está responsivo caso o usuário deseje utilizá-lo em outra plataforma. Ao lado direito da construção há um menu onde o usuáiro pode acender e apagar as luzes, alterar as coordenadas e visualizar as informações sobre o local que a Sunrise Sunset disponibiliza. Ao carregar a página a aplicação verifica se é dia ou noite e com base nisso altera o cenário.

## Tecnologias

* Node 10.16.0 - JavaScript environment.
* React 16.8.6 - front end library.
* Axios 0.19.0 - biblioteca para realizar chamadas rest.
* dateformat 3.0.3 - biblioteca para formatar as datas.
* node-sass 4.12.0 - extensão do CSS3.
* toastr 2.1.4 - biblioteca para exibir mensagens ao usuário.

## Funcionamento técnico

O sistema é dividido em dois componentes, o primeiro é o cenário da construção e o segundo representa os controles do usuário, ou seja, os filtros e os botões para as lâmpadas.

O componente do cenário é composto por algumas divs contendo um mapeamento de 5 componentes que representam os andares, dentro de cada andar é feito um mapeamento de 3 componentes representando as janelas.

O componente dos controles contém um componente que trata dos botões que ativam as lâmpadas, um componente que é responsável pelas coordenadas e outro componente que exibe as informações retornadas pela Sunrise Sunset API.

## Estrutura do Projeto

A estrutura de pastas é composta pelas seguintes pastas:

`components`: pasta onde ficam os componentes e onde cada componente contém sua própria pasta para armazenar seus arquivos e seus filhos.

`icons`: pasta dos icones do projeto.

`imgs`: imagens de textura.

`shared`: tudo que é compartilhado por todo o sistema.

`shared\factory`: implementação do padrão facotry.

`shared\http`: arquivos relacionados a http, sendo eles, enums, constantes, rotas, etc.

`shared\toastr`: implementação da biblioteca toastr.

`styles`: armazenamento de todos os itens de estilo do sistema.

## Possíveis Questionamentos

> Porque não redux?

R: Redux é para casos muito específicos, para quando é necessário armazenar e organizar uma informação que será consumida em vários componentes que estão completamente separados um do outro. Quando os componentes estão relacionados e a comunicação entre eles é rápida e fácil o Redux apenas deixará o sistema complexo.

> Porque bloquear a coordenada zero?

R: Aparentemente a Sunrise Sunset API não aceita a coordenada zero, então para evitar erros foi zero foi bloqueado.
