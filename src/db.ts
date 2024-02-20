import { ListDatabasesResult, MongoClient } from "mongodb";

type Id = {
    _id: string;
}

type User = Id & {}

type Article = Id & {
    authorId: string;
}

type Comment = Id & {
    articleId: string;
}

type Entity = User | Article | Comment;

class DbClient {

    private client: MongoClient;

    private constructor(client: MongoClient) {
        this.client = client;
    };
    
    static async connect(): Promise<DbClient> {
        const url = process.env.MONGO_URL!;
        const client = new MongoClient(url);
        try {
            await client.connect();
            console.log('Connected to db');
            const dbs: ListDatabasesResult = await client.db().admin().listDatabases();
            dbs.databases.forEach(db => console.log(db.name));
            return new DbClient(client);
        } catch (error) {
            console.error('Failed to connect client: %s', error);
            throw error;
        }  //finally {
        //     await client.close();
        // }
    }

    create = async (entity: Entity) => {
        try {
            this.client.db().collection<Entity>("users").insertOne(entity,)
        } catch(error) {
            console.error('Failed to create entity: %s', error);
            throw error;
        }
    }

    get = async (entity: Entity) => {
        try {

        } catch(error) {
            console.error('Failed to create entity: %s', error);
            throw error;
        }
    }

}


 

export default DbClient;

/*
hello ipsum hello is
article:
id
content



*/