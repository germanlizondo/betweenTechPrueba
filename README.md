# German Lizondo Prueba Técnica

Prueba técnica para between Tech en Nodejs, Mongodb y React

## Deployment

1- Descargar el proyecto

2- Ejecutar el comando: docker compose up -d

## Funcionamiento

### Acceder a la UI

http://localhost:3000

### Recibir datos por Postman

curl --location --request GET 'localhost:3000/api/all-data'

### Filtrar datos por localidad y date

curl --location --request GET 'localhost:3000/api/all-data?location.city=Barcelona&date=18/10/1997'

### Añadir datos por Postman

curl --location --request POST 'localhost:3000/api/add' \
--header 'Content-Type: application/json' \
--data-raw '{
    "date": "19/10/1997",
    "location": {
        "city": "barcelona",
        "country": "spain"
    },
    "hourly_temperature": [
        1.1,2,3,4,5
    ]
}'

### Eliminar datos por Postman

curl --location --request DELETE 'localhost:3000/api/delete/:id'

## Eliminar datos de la app en docker

Ejecutar el comando: docker compose down
