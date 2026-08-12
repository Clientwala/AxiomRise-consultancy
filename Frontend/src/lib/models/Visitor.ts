import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVisitor extends Document {
  ip: string;
  region: string;
  city: string;
  country: string;
  isp: string;
  userAgent: string;
  browser: string;
  os: string;
  device: string;
  path: string;
  referrer: string;
  cookiesAccepted: boolean;
  consentGiven: boolean;
  sessionId: string;
  createdAt: Date;
}

const VisitorSchema = new Schema<IVisitor>(
  {
    ip: { type: String, required: true },
    region: { type: String, default: "Unknown" },
    city: { type: String, default: "Unknown" },
    country: { type: String, default: "Unknown" },
    isp: { type: String, default: "Unknown" },
    userAgent: { type: String, default: "" },
    browser: { type: String, default: "Unknown" },
    os: { type: String, default: "Unknown" },
    device: { type: String, default: "Unknown" },
    path: { type: String, default: "/" },
    referrer: { type: String, default: "" },
    cookiesAccepted: { type: Boolean, default: false },
    consentGiven: { type: Boolean, default: false },
    sessionId: { type: String, default: "" },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const Visitor: Model<IVisitor> =
  mongoose.models.Visitor || mongoose.model<IVisitor>("Visitor", VisitorSchema);

export default Visitor;
