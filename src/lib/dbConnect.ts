import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
  var mongoose: { conn: any; promise: any };
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const cached = global.mongoose || { conn: null, promise: null };

export async function connectDb() {
  if (cached.conn) return cached.conn;
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI);
  cached.conn = await cached.promise;
  return cached.conn;
}
