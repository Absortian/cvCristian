# Empezamos cargando la imágen base
FROM node:lts-stretch-slim
# Añado todo el contenido del proyecto
COPY ./ /var/www/cv
# Cambio la carpeta de trabajo a la carpeta del proyecto dentro del Docker
WORKDIR /var/www/cv
# Ejecutamos npm install
RUN npm install
# Fuerzo que ejecute un comando que deje la terminal activa para que no muera el Docker.
CMD npm start
