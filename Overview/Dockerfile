FROM node
COPY factom-node-monitoring-tool app
COPY entrypoint.sh /app/
WORkDIR app
RUN npm install
ENTRYPOINT ["/app/entrypoint.sh"]
