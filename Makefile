SHELL := /bin/bash

.PHONY: server/.env
server/.env:
	@cp server/.env.template server/.env

.PHONY: client/.env
client/.env:
	@cp client/.env.template client/.env

.PHONY: .env
.env: server/.env client/.env
