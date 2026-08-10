"use client";
import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Name is required (min 2 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message is required (min 10 chars).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Thank you! Your message has been received.");
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const field = (label: string, name: keyof typeof form, type = "text", required = false) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-primary mb-1.5">{label}{required && " *"}</label>
      {type === "textarea" ? (
        <textarea id={name} rows={5} value={form[name]} onChange={e => setForm({ ...form, [name]: e.target.value })}
          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none" />
      ) : (
        <input id={name} type={type} value={form[name]} onChange={e => setForm({ ...form, [name]: e.target.value })}
          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition" />
      )}
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field("Name", "name", "text", true)}
        {field("Email", "email", "email", true)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field("Phone", "phone", "tel")}
        {field("Company", "company", "text")}
      </div>
      {field("Message", "message", "textarea", true)}
      <Button type="submit" variant="primary" size="lg" loading={loading} disabled={loading} className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
