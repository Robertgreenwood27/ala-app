import React, { useState } from 'react';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // For the sake of this example, we'll just log the form data.
    // In a real application, you'd send this data to a server or handle it as necessary.
    console.log(formData);

    // Optionally reset form data after submit
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="mb-6">
        Ready to get organized? Reach out for a consultation. I&apos;m approachable and eager to assist you.
      </p>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Reach Out Directly</h3>
        <ul className="space-y-2">
          <li><strong>Address:</strong> 123 Anywhere Street, FinCity, 12345</li>
          <li><strong>Email:</strong> info@financialcleanup.com</li>
          <li><strong>Phone:</strong> (123) 456-7890</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Or Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
