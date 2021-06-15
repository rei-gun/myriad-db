db.auth('root', 'passw0rd')
db = db.getSiblingDB('myriad')
db.createUser(
    {
        user: "api",
        pwd: "passw0rd",
        roles: [
            {
                role: "readWrite",
                db: "myriad"
            }
        ]
    }
);
