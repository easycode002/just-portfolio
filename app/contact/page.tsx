import React from "react";
import { SocialLink } from "../components/molecules/contact/SocailLinks";
import ContactForm from "../components/molecules/contact/ContactForm";

const Contact = () => {
  return (
    <div className="container px-4 mt-16">
      <h2 className="text-center mb-3 text-2xl md:text-3xl lg:text-4xl font-ubuntubold uppercase underline underline-offset-4">
        CONTACT
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <SocialLink />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
