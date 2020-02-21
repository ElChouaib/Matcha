db-migrate db:drop MATCHA --config ./config/database.json
db-migrate db:create MATCHA --config ./config/database.json
db-migrate up --config ./config/dev.json