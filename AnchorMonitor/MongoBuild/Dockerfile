FROM mongo
COPY users.js /docker-entrypoint-initdb.d/
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mongod", "--auth"]
