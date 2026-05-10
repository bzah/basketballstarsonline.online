import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactEmail } from "@/lib/contact.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function ContactForm() {
  const send = useServerFn(sendContactEmail);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await send({ data: form });
      if (res.success) {
        toast.success("Message sent! We'll get back to you within 48 hours.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(res.error ?? "Failed to send message.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required maxLength={100} value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required maxLength={255} value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" required maxLength={200} value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" required rows={6} maxLength={5000} value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
