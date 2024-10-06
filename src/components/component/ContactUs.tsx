import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Clock } from "lucide-react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Here you would typically make an API call to send the message
    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setPhone("");
    setInterest("");
    setMessage("");
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="phone"
              >
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Office</h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <MapPin className="mr-2" size={18} /> 123 Real Estate Street,
              Coimbatore-641001
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" size={18} /> (123) 456-7890
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" size={18} /> info@realestate.com
            </p>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Business Hours</h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <Clock className="mr-2" size={18} /> Monday - Friday: 9:00 AM -
              6:00 PM
            </p>
            <p className="ml-6">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="ml-6">Sunday: Closed</p>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Our Services</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Residential Property Sales</li>
            <li>Commercial Real Estate</li>
            <li>Property Management</li>
            <li>Real Estate Consultation</li>
            <li>Investment Opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
