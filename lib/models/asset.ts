import { Model, model, models, Schema } from "mongoose";
import { type Asset as TAsset } from "../types";

type AssetModel = Model<TAsset>;

const assetSchema = new Schema<TAsset, AssetModel>({
  ticker: {
    type: String,
    require: [true, "Please provide ticker"],
  },
  quantity: {
    type: Number,
    require: [true, "Please provide quantity"],
  },
  cost: {
    type: Number,
    require: [true, "Please provide buyin"],
  },
  price: {
    type: Number,
    require: [true, "Please provide price"],
  },
});

const Asset = models.Asset || model<TAsset, AssetModel>("Asset", assetSchema);

export default Asset;
