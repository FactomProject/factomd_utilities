FROM node:current-alpine 
RUN mkdir /app
COPY RelateAPI/ /app/
COPY entrypoint.sh /app/
WORKDIR /app
RUN npm install -g npm@6.4.1
RUN npm install
ENTRYPOINT ["/app/entrypoint.sh"]
