import React from "react";
import ContactForm from "../components/molecules/contact/ContactForm";
import { SocialLinks } from "../components/molecules/contact/SocailLinks";

const Contact = () => {
  return (
    <div className="container px-4">
      <h2 className="text-center mb-3 text-2xl md:text-3xl lg:text-4xl font-ubuntubold uppercase underline underline-offset-4">
        CONTACT
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <SocialLinks />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
