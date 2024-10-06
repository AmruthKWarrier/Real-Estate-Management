import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container p-6 mx-auto">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At Real Estate Pro, we take your privacy seriously. This privacy policy
        outlines the types of personal information that is collected, how it is
        used, and how we protect your data.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        phone number, and other details when you interact with our services. We
        also collect non-personal information, such as your browser type, IP
        address, and how you navigate our website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        The information we collect is used to provide, maintain, and improve our
        services. We may also use it to communicate with you, respond to your
        inquiries, and send marketing or promotional content.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We take reasonable measures to protect your data from unauthorized
        access, alteration, or disclosure. However, no method of transmission
        over the internet or electronic storage is 100% secure, so we cannot
        guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance your experience. Cookies are small
        files that are placed on your device to collect information about your
        browsing activity. You can adjust your browser settings to refuse
        cookies or notify you when cookies are being sent.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services to process and store data. These
        services are contractually obligated to protect your information and may
        only use it to perform specific functions on our behalf.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        6. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We reserve the right to update this privacy policy at any time. Any
        changes will be posted on this page with an updated "Last Updated" date.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this privacy policy, please
        contact us at
        <a
          href="mailto:contact@yourcompany.com"
          className="text-blue-600 underline"
        >
          {" "}
          contact@realestatepro.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
