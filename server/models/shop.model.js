import mongoose from "mongoose";

const Schema = mongoose.Schema;

const shopSchema = new Schema();

const shopData = mongoose.model("shopData", shopSchema);

export default shopData;
