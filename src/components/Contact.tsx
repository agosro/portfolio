import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      toast({ title: "Error", description: "Please verify that you are not a robot." });
      return;
    }

    emailjs.send(
      "service_ws6dn1m",
      "template_hhc95k9",
      formData,
      "uduSm5CAOXodhz3Ji"
    )
    .then(() => {
      toast({ title: "Message sent!", description: "Thank you for your message. I'll get back to you soon!" });
      setFormData({ name: "", email: "", message: "" });
      setCaptchaValue(null);
    })
    .catch(() => {
      toast({ title: "Error", description: "Something went wrong. Try again later." });
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">agosrotorres@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Cordoba, Argentina</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-primary rounded-lg text-primary-foreground">
              <h4 className="font-bold text-lg mb-2">Available for freelance work</h4>
              <p className="opacity-90">
                I'm currently accepting new projects and would love to hear about yours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
              />

              {/* reCAPTCHA */}
              <ReCAPTCHA
                sitekey="6LdYw7YrAAAAAH1W2_pkURL5scVvwfP_gzWkRtjd"
                onChange={(value) => setCaptchaValue(value)}
              />

              <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow-primary">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;