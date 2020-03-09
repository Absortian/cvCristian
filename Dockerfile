# Empezamos cargando la imágen base
FROM node:lts-stretch-slim
# Indicamos que la terminal debe ser no interactiva
#ENV DEBIAN_FRONTEND=noninteractive
# Actualizamos repos e instalamos software que necesitamos
#RUN apt update && apt install -yq --no-install-recommends npm
# Añado en el sistema el fichero de configuraciónes extra de php.ini
COPY ./ /var/www/cv
WORKDIR /var/www/cv
RUN npm install
#RUN npm run stylus
# Fuerzo que ejecute un comando que se quede leyendo información indefinidamente, si el comando parase, la imagen también
CMD npm start
