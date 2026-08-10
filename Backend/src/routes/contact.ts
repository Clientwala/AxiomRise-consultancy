import { Router, Request, Response } from "express";
import dbConnect from "../lib/mongodb";
import Contact from "../models/Contact";

const router = Router();

router.post("/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: "Name is required (min 2 characters)." });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: "A valid email address is required." });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return res.status(400).json({ success: false, error: "Message is required (min 10 characters)." });
    }

    await dbConnect();

    await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || undefined,
      company: company?.trim() || undefined,
      message: message.trim(),
    });

    // TODO: send email notification via Resend/Nodemailer if credentials configured

    return res.status(200).json({ success: true, message: "Thank you! Your message has been received." });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ success: false, error: "Something went wrong. Please try again later." });
  }
});

export default router;
