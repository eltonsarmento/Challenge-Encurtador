#Challenge Encurtador

Serviço a partir de parâmetro da URL que deverá ser encurtada
conforme as seguintes regras:

1. Mínimo de 5 e máximo de 10 caracteres.
2. Apenas letras e números.

A URL retornada deverá ser salva no banco de dados e possui prazo de validade (você
poderá escolher quanto tempo) e ao receber uma URL encurtada, deverá fazer o
redirecionamento para a URL salva no banco.

Exemplo ao encurtar

Seu sistema recebe uma chamada para encurtar a URL http://wisereducacao.com e retorna
o seguinte json:

{ newUrl: "http://localhost:8081/abc123ab"; }
O endpoint que salva a URL e retorna a URL encurtada deve ser um POST com a rota
http://localhost:8081/encurtador recebendo no body:
{ url: "http://wisereducacao.com";

Exemplo ao redirecionar
Ao receber uma chamada para http://localhost:8081/abc123ab você irá retornar um
redirecionamento para a URL salva no banco ( http://wisereducacao.com ), caso não seja
encontrada, retornar ao HTTP 404.

Stack utilizadas:
● Typescript;
● NodeJS;
● Express;
● Banco PostgreSQL;
● Docker;


#Levantar ambiente Docker com Postgres e configurar

//criar conteiner a partir de uma imagem (docker run)
//nome do conteiner (--name)
//fazer redirecionamento de porta (-p)
sudo docker run --name database -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

//conferir se o conteiner foi criado 
sudo docker ps

//para startar o conteiner
sudo docker start dbpostgres

//criar banco
teste_url

//rip para criat tabela
create table url
(
    id         serial       not null constraint url_pk primary key,
    encrypt    varchar(255) not null,
    url        varchar(255) not null,
    start_date timestamp    not null,
    end_date   timestamp    not null,
    situation  char default 1
);
