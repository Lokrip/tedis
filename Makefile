.PHONY: migrate
migrate:
	python manage.py migrate

makemigrations:
	python manage.py makemigrations

run-server:
	docker-compose up
