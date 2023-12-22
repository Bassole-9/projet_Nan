import { connect } from "mongoose";

export const connecterDb = async () => {
  const secret = process.env.mongoo_uri;
  if (!secret) throw new Error("url n'existe pas");
  await connect(secret, {
    dbName: "culture"
  });
};