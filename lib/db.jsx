import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connext(
    "mongodb+srv://jeff:ETUhj6SP8WPnRB7F@cluster0.w6rfo7r.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
