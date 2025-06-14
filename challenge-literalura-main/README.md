# Literalura 📚

Projeto desenvolvido por **Silvelane Gomes** como parte do **Challenge da Alura**, com foco em **busca, listagem e análise estatística de livros e autores** utilizando a API Gutendex e persistência de dados com Spring Boot.

## Badge literalura:
<img src="badge-literatura.png" width="80px">

## 🚀 Tecnologias Utilizadas

- Java 🟦
- Spring Boot 🌱
- JPA / Hibernate 🗄️
- API Gutendex 🌍

## 📖 Funcionalidades

- Buscar livros pelo título via API Gutendex
- Listar livros e autores cadastrados no banco de dados
- Filtrar autores por ano de nascimento/morte
- Buscar livros por idioma
- Obter estatísticas sobre livros e autores
- Top 10 livros mais baixados

## 🛠️ Como Executar

1. **Clone o repositório:**
   git clone <git@github.com>:mpbmarcio/challenge-literalura.git
   cd literalura

## Execute a aplicação

mvn spring-boot:run

## Configure o banco de dados no arquivo application.properties

spring.application.name=literalura
spring.datasource.url=jdbc:postgresql://${DB_HOST}/literalura
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=update
hibernate.dialect=org.hibernate.dialect.HSQLDialect

## 📂 Estrutura do Projeto

src/
├── assets/
├── controller/
├── dto/
├── model/
├── principal/
├── repository/
└── service/

## ✅ Conclusão

Projeto ideal para praticar integração de API externa com Java, uso do Spring Boot, persistência com JPA e manipulação de dados em banco. Ótimo ponto de partida para aplicações com foco em análise de dados e consumo de APIs públicas.
