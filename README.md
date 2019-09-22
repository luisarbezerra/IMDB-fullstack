# IMDB Full-Stack

# Instalação
```bash
./bin/install.sh
```

# Carregamento do Banco de Dados
```bash
./bin/load_csv.sh
```

# Execução do Backend
```bash
./bin/run_api.sh
```

# Execução do Frontend
```bash
./bin/run_api.sh
```
Abra http://localhost:3000 para visualização no browser.


# Stack
* Backend: Python e Flask.
* Banco de dados: sqlite, com SQLAlchemy como ORM e Alembic para a migração.
* Frontend: ReactJS e Redux. 

Gunicorn utilizado para escalabilidade. O número de threads e processos pode ser alterado no arquivo api/runapi.py

