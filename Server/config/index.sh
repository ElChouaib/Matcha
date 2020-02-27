db-migrate db:drop MATCHA --config ./database/database.json
db-migrate db:create MATCHA --config ./database/database.json
db-migrate up --config ./database/dev.json