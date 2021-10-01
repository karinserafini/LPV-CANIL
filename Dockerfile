#procura a imagem-base pra ser criado
FROM node:14-alpine

#definir variáveis de ambiente, essas variáveis de ambiente já são pré-definidas pelo Docker
ENV TZ=America/Sao_Paulo 
#tz - timezone

#
RUN mkdir -p /home/node/api-canil

#
WORKDIR /home/node/api-canil

#
COPY ./package.json ./
COPY ./src ./src

#
RUN npm install

#
EXPOSE 3000

CMD ["node", "./src/index.js"]


