import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Calendar, Heart } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- SERVER-SIDE ACTION (Simulated Email & Logging) ---
    // NOTE: In a real application, you would replace this console.log
    // with a `fetch` request to your backend to securely send the email.
    console.log('--- Form Data Submitted (Ready for Email Backend) ---');
    console.log('Form data:', formData);
    
    // --- CLIENT-SIDE ACTION (WhatsApp Redirect) ---
    
    // 1. Define your target number (must include country code, no spaces or special characters)
    const targetPhoneNumber = '919921371016'; 

    // 2. Format the message content
    const whatsappMessage = `
    *NEW INQUIRY via Website Form*
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone || 'N/A'}
    Event Type: ${formData.eventType}
    Event Date: ${formData.eventDate || 'N/A'}
    Budget: ${formData.budget || 'N/A'}
    
    *Message:*
    ${formData.message}
    `;

    // 3. Encode the message and build the WhatsApp link
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

    // 4. Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');

    // 5. Optional: Clear the form after submission
    // setFormData({
    //   name: '', email: '', phone: '', eventDate: '', eventType: '', message: '', budget: ''
    // });
    
    // Show a confirmation message (since we cannot use alert)
    console.log('WhatsApp chat initiated. Email data sent to backend (simulated).');
  };

  // --- NEW FUNCTION: Smooth scroll implementation ---
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      // scrollIntoView with smooth behavior guarantees a scroll on the current page
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            Let's Create Magic Together
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Ready to capture your special moments? We'd love to hear about your story and discuss how we can preserve your precious memories.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      {/* ID remains the scroll target */}
      <section id="contact-form" className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
                  Get In Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're planning a wedding, engagement session, or special event, we're here to help bring your vision to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 99213 71016</p>
                    <p className="text-sm text-muted-foreground/80">Available Mon-Sat, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">shreeporduction007@gmail.com</p>
                    <p className="text-sm text-muted-foreground/80">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Bondrenagar Phulewadi Ringoad,</p>
                    <p className="text-muted-foreground">Kolhapur, Maharastra, India-416010</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Studio Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-secondary/20 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Heart className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                    Why Choose Us
                  </h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Award-winning photography team</li>
                  <li>• 500+ happy couples served</li>
                  <li>• Full-service wedding packages</li>
                  <li>• Professional editing & delivery</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                    Tell Us About Your Event
                  </h2>
                  <p className="text-muted-foreground">
                    Share some details about your special day, and we'll get back to you with a personalized quote.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Event Date */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Event Type and Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="pre-wedding">Pre-Wedding/Engagement</option>
                        <option value="portrait">Portrait Session</option>
                        <option value="event">Event Photography</option>
                        <option value="calligraphy">Calligraphy Services</option>
                        <option value="videography">Videography</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-2k">Rs. 80k</option>
                        <option value="2k-5k">Rs.80k - Rs.1L</option>
                        <option value="5k-10k">Rs.1L - Rs.1.5L</option>
                        <option value="10k-plus">Rs.2L</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell Us About Your Vision *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="Tell us about your event, style preferences, timeline, and any specific requests you have. The more details you share, the better we can serve you!"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message & Chat</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our photography services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">How far in advance should we book?</h3>
              <p className="text-muted-foreground">
                We recommend booking 6-12 months in advance for weddings, especially during peak season (May-December). 
                For other sessions, 4-6 weeks notice is usually sufficient.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">What's included in your wedding packages?</h3>
              <p className="text-muted-foreground">
                Our wedding packages include full-day coverage, edited high-resolution gallery, online sharing, 
                and print release. Specific inclusions vary by package - we'll provide detailed information during consultation.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">Do you travel for destination weddings?</h3>
              <p className="text-muted-foreground">
                Yes! We love destination weddings and are available to travel anywhere. 
                Travel fees apply based on location and duration.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">How long until we receive our photos?</h3>
              <p className="text-muted-foreground">
                You'll receive a preview gallery within 48 hours, and your full edited gallery within 4-6 weeks. 
                Rush delivery options are available for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Calendar className="w-6 h-6 text-accent" />
            <h2 className="text-3xl lg:text-4xl text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
              Ready to Book Your Session?
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Let's schedule a consultation to discuss your vision and create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Schedule Consultation button uses onClick for guaranteed smooth scroll on the same page */}
            <a 
              href="#contact-form"
              onClick={handleScrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </a>
            {/* Call Us Now button uses the tel: protocol for calling */}
            <a 
              href="tel:+919921371016"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
