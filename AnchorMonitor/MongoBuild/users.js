db.auth('admin','pass');
db = db.getSiblingDB('anchor_db');
db.createUser(
  {
    user: "anchor",
    pwd: "MKO)0okmAQ!1qaz",
    roles: [ { role: "readWrite", db: "anchor_db" } ]
  }
);

