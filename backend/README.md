# PopcornTime API - Backend 🍿

This is the core of the PopcornTime application, developed with a focus on scalability, testability, and modern software engineering patterns.

## Evolution & Purpose
This project originated as a college assignment for the Web Interface Development course at PUC Minas. While the initial goal was to create a movie website using jQuery, such tools are often considered legacy in modern enterprise environments. To provide a more robust and production-ready solution, the codebase was completely refactored to meet high-level backend requirements, incorporating enterprise standards and System Design principles.

## Tech Tools

- Node.js 25.0.9
- TypeScript 5.9.3
- Prisma 7.2.0
- MongoDB 8.2.3
- Docker 4.57.0
- Zod 4.3.5

## Project Structure

``` bash
src/
├── domain/                       
│   ├── models/                    <-- Entities
│   └── errors/                    <-- Custom Domain Exceptions
│
├── application/                  
│   ├── use-cases/                 <-- Business rule implementations
│   └── repositories/              <-- Port definitions
│
└── infrastructure/               
    ├── http/
    │   ├── controllers/           <-- Driving Adapters (REST)
    │   ├── routes/                <-- Route definitions
    │   ├── middlewares/           <-- Global Error Handling and Zod validation
    │   └── schemas/               <-- Declarative Zod validation rules
    ├── repositories/              <-- Driven Adapters
    └── generated/                 <-- Generated Prisma Client types
```

## How to Start

Ensure Docker Desktop is running and execute:

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3001`