# xy-inc

A XY Inc. é uma empresa especializada na produção de excelentes receptores GPS (Global
Positioning System). A diretoria está empenhada em lançar um dispositivo inovador que
promete auxiliar pessoas na localização de ponto de interesse (POIs).

## Funcionalidades feitas:

- Serviço pra cadastrar pontos de interesse, com 3 atributos: Nome do POI, coordenada X
(inteiro não negativo) e coordenada Y (inteiro não negativo). Os POIs foram armazenados
em uma base de dados. Utilizei PostgreSQL, criei a imagem via docker ```run --name xy -e POSTGRES_PASSWORD=inc -p 5432:5432 -d postgres:11``` e visualizei no Postbird.
 
- Serviço para listar todos os POIs cadastrados. Utilzei Insomnia pra enviar as requisições em formato ```Json```.

- Serviço para listar POIs por proximidade. Este serviço receberá uma coordenada X e uma coordenada Y, especificando um ponto de referência, em como uma distância máxima (dmax) em metros. O serviço deverá retornar todos os POIs da base de dados que estejam a uma distância menor ou igual a d-max a partir do ponto de referência. Exemplo:
 ### Base de Dados:
'Lanchonete' (x=27, y=12)
'Posto' (x=31, y=18)
'Joalheria' (x=15, y=12)
'Floricultura' (x=19, y=21)
'Pub' (x=12, y=8)
'Supermercado' (x=23, y=6)
'Churrascaria' (x=28, y=2)

Feito apenas um rascunho, no ```PoiController.js```.

## Ferramentas Utilizadas 

- Sucrase + Nodemon;
- ESLint + Prettier;
- Sequelize (Utilizei PostgreSQL);

## Screenshots
