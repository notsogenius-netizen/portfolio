import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_ioeko5b

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sourabh",
          from_email: form.email,
          to_email: "sourabhchangmai11@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text mt-14">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm always open to discussing product design work or partnership
            opportunities.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your full name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your email address"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Enter your message..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;