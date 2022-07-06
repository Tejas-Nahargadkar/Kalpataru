import { AddCircle } from "@mui/icons-material";
import React, { useState } from "react";
import Accordion from "../../Components/Accordion/Accordion";
import ContactUsBlock from "../../Components/ContactUs-Block/ContactUsBlock";
import "./PrivacyPolicy.css";
export default function PrivacyPolicy() {
  return (
    <div className="PrivacyPolicy-Container">
      <div className="PrivacyPolicy-Banner">
        <div className="PrivacyPolicy-Banner-content">
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-para">
            A statement about Kalpatru policy on content displayed in the
            website and users’ personal details
          </p>
        </div>
        <div className="PrivacyPolicy-Banner-Image">
          <img src="/images/PrivacyPolicy-BannerImage.png" alt="" />
        </div>
      </div>
      <div className="PrivacyPolicy-Dropdown-Col">
        <div className="Privacy-Dropdown-Header">
          <h1 className="section-title">Attention Investors!</h1>
        </div>
        <div className="PrivacyPolicy-Dropdowns">
          <Accordion title="PRIVACY POLICY STATEMENT">
            <p className="section-para">
              We, at Kalpatarumulti.com, acknowledge and accept that the
              personal details that you impart to us, is to be kept in strict
              confidentiality and to use the information only in the manner
              which would be beneficial to our customers. We consider our
              relationship with you as invaluable and strive to respect and
              safeguard your right to privacy.
            </p>
            <p className="section-para">
              We shall protect the personal details received from you with the
              same degree of care, but no less than a reasonable degree of care,
              to prevent the unauthorized use, dissemination, or publication of
              these information as we protect our own confidential information
              of a like nature.
            </p>
            <p className="section-para">
              We shall use the personal information to improve our service to
              you and to keep you updated about our new product or information
              that may be of interest to you. The information collected from you
              would be used in the right spirit and context in which it is
              intended to be used. Your information would be used by us to
              process your trading request and to carry out the settlements of
              your obligations
            </p>
          </Accordion>
          <Accordion title="IMPART YOUR PERSONAL INFORMATION">
            <p className="section-para">
              We, at Kalpatarumulti.com, acknowledge and accept that the
              personal details that you impart to us, is to be kept in strict
              confidentiality and to use the information only in the manner
              which would be beneficial to our customers. We consider our
              relationship with you as invaluable and strive to respect and
              safeguard your right to privacy.
            </p>
          </Accordion>
          <Accordion title="KALPATARU MULTIPLIER LTD">
            <p className="section-para">
              We, at Kalpatarumulti.com, acknowledge and accept that the
              personal details that you impart to us, is to be kept in strict
              confidentiality and to use the information only in the manner
              which would be beneficial to our customers. We consider our
              relationship with you as invaluable and strive to respect and
              safeguard your right to privacy.
            </p>
          </Accordion>
          <Accordion title="INFORMATION SHARING AND DISCLOSURE">
            <p className="section-para">
              We, at Kalpatarumulti.com, acknowledge and accept that the
              personal details that you impart to us, is to be kept in strict
              confidentiality and to use the information only in the manner
              which would be beneficial to our customers. We consider our
              relationship with you as invaluable and strive to respect and
              safeguard your right to privacy.
            </p>
          </Accordion>
        </div>
      </div>
      <ContactUsBlock />
    </div>
  );
}
