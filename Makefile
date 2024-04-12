build:
	docker compose build
dev:
	docker compose up -d	
	docker compose exec svelte_app npm run dev
shell:
	docker compose exec svelte_app bash
stop:
	docker compose down

.PHONY: build dev shell stop