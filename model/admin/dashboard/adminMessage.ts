import mongoose from "mongoose";
import { adminMessage } from "./adminDashboardInterfaces";

interface IAdminMessage extends adminMessage, mongoose.Document {}

const adminMessageSchema = new mongoose.Schema<adminMessage>({
  sender: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
});

const adminMessageModel = mongoose.model<IAdminMessage>(
  "adminMessageCollection",
  adminMessageSchema
);
