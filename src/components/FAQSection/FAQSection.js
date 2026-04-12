import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import "./FAQSection.css";
import rightArrow from "../../assets/icons/arrow_right.svg";

const accordionData = [
  {
    question: "How did students get their housing as a new student coming to GSU?",
    responses: [
      "One of my friends helped me out.",
      "By communicating with existing graduate students, I was able to lease an apartment as a co-applicant.",
      "A friend of a friend connected me to a GSU student on Facebook who was looking for a tenant.",
      "I got housing through the GSU Bangladeshi Facebook group.",
      "My housing was arranged entirely by a friend, so I did not have to worry about anything."
    ]
  },
  {
    question: "Which apartments and areas were commonly mentioned by students?",
    responses: [
      "Avondale Reserve, Avondale Estates, with rent around $1235 plus utilities near $150 per month.",
      "Marietta, around $1300 for 2 bed 2 bath.",
      "Avondale Village, Decatur, around $1250 for 1B1B and $1475 for 2B2B.",
      "Tuscany at Lindbergh, around $1819 for 2B2B.",
      "Icon Avondale, Decatur, around $1700 for 3B2B.",
      "Westshire apartment around $1000 for 1B1B.",
      "Oak Creek Apartment, 280 Northern Avenue, rent range $1050–1300.",
      "Legacy Apartment, North Druid Hill, around $1350 including other costs."
    ]
  },
  {
    question: "How did students get into those apartments?",
    responses: [
      "Through reference of my university senior.",
      "Recommendations from GSU grad students were key.",
      "I asked around, people shared where they lived, and I followed up with the properties or sublease posts.",
      "I searched online and visited the apartment to check how it is.",
      "I applied online accordingly and tried to connect with current students through Facebook."
    ]
  },
  {
    question: "What common housing policies did students mention?",
    responses: [
      "Application fee ranging from free up to $100 per applicant.",
      "Security deposit from zero to one month rent, though some places asked for more.",
      "Most places require a 12-month lease.",
      "Early lease break may require 60 days notice plus an extra fee.",
      "Some apartments require renter’s insurance.",
      "Utilities such as water, gas, electricity, sewerage, valet trash, and pest fees may be separate.",
      "Some places require proof of income, credit score, or co-signer."
    ]
  },
  {
    question: "What are other options if a student cannot find an apartment before coming?",
    responses: [
      "Airbnb or short-term sublets via Facebook groups or lease-transfer posts.",
      "University Housing downtown if beds are available can be a bridge while apartment-hunting.",
      "Look for individual landlords or room rentals where owners are flexible.",
      "A student community pool or shared spreadsheet could help connect new students with available housing."
    ]
  },
  {
    question: "Should students complete medical tests before coming or after arriving?",
    responses: [
      "Some students said it is better to do vaccinations in Bangladesh before coming.",
      "Others said students can complete required tests after arriving at GSU.",
      "GSU Student Health Clinic was mentioned as a place to complete immunization requirements.",
      "County health clinics were mentioned as lower-cost options.",
      "Pharmacies like Walmart, CVS, and MinuteClinic were also mentioned for vaccines and TB testing."
    ]
  },
  {
    question: "How much money should a new student carry while coming to the US?",
    responses: [
      "At least $3000 USD.",
      "Around $4000 minimum.",
      "A safe amount is $5000.",
      "Some suggested $5000–6000.",
      "One student said for the first two months, around $5000 may be needed before expenses stabilize.",
      "Another suggested carrying enough for around two months of rent, groceries, health insurance, and essentials."
    ]
  },
  {
    question: "In what form should students bring money?",
    responses: [
      "Bring some cash for day 1 expenses.",
      "Use an international debit or credit card for larger payments.",
      "Open a U.S. bank account soon after arrival and move money through wire or remittance service.",
      "One response suggested cash minimum $3000 and card minimum $500."
    ]
  },
  {
    question: "What mobile or internet plans were commonly recommended?",
    responses: [
      "Mint Mobile was the most commonly recommended option.",
      "LycaMobile $29 plan with 1000 minutes to Bangladesh included.",
      "Visible $25/month unlimited was mentioned.",
      "T-Mobile prepaid was also mentioned.",
      "Tello was suggested as a later low-rate option.",
      "Xfinity and Google Fiber were mentioned for home internet."
    ]
  },
  {
    question: "Which banks were recommended for opening a checking account?",
    responses: [
      "Chase Bank.",
      "Bank of America.",
      "Fifth Third Bank.",
      "Truist Student Checking.",
      "Chase was mentioned as offering a possible bonus after direct deposit.",
      "Bank of America Advantage Safe Balance for Students was mentioned as student-friendly."
    ]
  },
  {
    question: "Which credit cards were recommended for new students?",
    responses: [
      "Discover was the most commonly recommended starter credit card.",
      "Chase Freedom Unlimited was also mentioned.",
      "Amex Blue and Capital One were mentioned by some students.",
      "One response said Discover is good because it is very student-friendly.",
      "Another said both the new cardholder and referrer may receive a bonus with Discover."
    ]
  },
  {
    question: "Where can students buy household essentials and groceries?",
    responses: [
      "Mattress – Amazon, Walmart, IKEA, Atlanta Used Furniture Liquidators.",
      "Pillows – Walmart, Target, Costco, Amazon.",
      "Bedsheet – IKEA, Walmart, Target, Ross, Amazon.",
      "Reading Table – IKEA, Walmart, Amazon, Goodwill, Facebook Marketplace.",
      "Cellphone/Laptop – Best Buy, Micro Center, carrier stores, Amazon.",
      "Vegetables – City Farmers Market, Your DeKalb Farmers Market, Buford Highway Farmers Market, Walmart, Kroger.",
      "Fish and Non-Halal Meat – City Farmers Market, Buford Highway Farmers Market, Kroger, Walmart.",
      "Halal Meat – ZamZam, Al-Amin, Bengal, Al Falah, Rahmania.",
      "Spices – Patel Brothers, Cherians, ZamZam, Bengal, Al-Amin, Walmart.",
      "Medicines – CVS, Walgreens, Walmart Pharmacy, Kroger.",
      "Cookware – Walmart, IKEA, Amazon, Target.",
      "Other necessary items and personal care – Walmart, Target, Costco, Dollar Tree."
    ]
  },
  {
    question: "How can a new student get an SSN?",
    responses: [
      "Apply through the nearest SSN office.",
      "Get an employment letter from the department and an SSN support letter from GSU/ISSS.",
      "Bring passport, I-94, I-20, ID, and support letters to the Social Security office.",
      "GSU also hosts SSN campaigns where Social Security officials come to campus.",
      "Some students said the card arrived by mail in about one to two weeks."
    ]
  },
  {
    question: "What health insurance options did students mention?",
    responses: [
      "United Healthcare through GSU.",
      "Oscar from the Marketplace.",
      "Some students said they used marketplace insurance with low monthly payments.",
      "Others said the first semester often requires the school insurance, with marketplace plans considered later."
    ]
  },
  {
    question: "How can students file taxes?",
    responses: [
      "Sprintax was the most commonly mentioned option.",
      "GSU provides tax filing guidance and sometimes a discount code.",
      "Students said to follow university emails and fill out the forms correctly.",
      "Some students mentioned using Glacier first and then tax-prep modules during tax season."
    ]
  },
  {
    question: "What did students say about Glacier and the Bangladesh tax treaty?",
    responses: [
      "Students repeatedly mentioned that Bangladeshi students may get treaty benefits on the first $8000 of eligible income.",
      "Several responses said Glacier is used to manage tax information and treaty-related forms.",
      "Some students recommended contacting Ivan Ivanov for help with the tax treaty process."
    ]
  },
  {
    question: "Is there any employment scope for F-2 dependents?",
    responses: [
      "No scope of employment.",
      "F-2 spouses and children cannot work in the U.S.",
      "One student said only voluntary work may be possible, but not paid employment."
    ]
  },
  {
    question: "How can an F-2 dependent prepare for pregnancy and medical costs?",
    responses: [
      "Look at Grady Health System and community clinics for sliding-fee prenatal care.",
      "Mercy Care was recommended for low-cost primary and women’s health care.",
      "Good Samaritan Health Center was mentioned for women’s health and pediatrics.",
      "One response said Emergency Medicaid in Georgia can cover labor and delivery for income-eligible noncitizens.",
      "Some mentioned that a baby born in the U.S. may qualify for Medicaid, PeachCare, or WIC depending on income."
    ]
  },
  {
    question: "Which doctors, clinics, or hospitals were recommended?",
    responses: [
      "Grady Walk-In Center.",
      "Grady Hospital.",
      "Children’s Healthcare of Atlanta.",
      "Mercy Care.",
      "Wellstar Urgent Care.",
      "Good Samaritan Health Center.",
      "Long Ly, MD at MetroDerm was mentioned by one student."
    ]
  },
  {
    question: "What guidance was given about green card or permanent residency?",
    responses: [
      "Many students mentioned NIW or EB2-NIW as a possible path.",
      "Law firms mentioned included Ellis Porter, Chen associates, Dunn Law, and Raju Law.",
      "Some students said to send a CV, profile, and publications to law firms for evaluation.",
      "One response estimated costs could vary around $4000–7500."
    ]
  },
  {
    question: "What GSU student benefits were mentioned?",
    responses: [
      "Panther Pantry for food and hygiene items.",
      "MARTA card or discounted transit access through GSU.",
      "Student Rec Center with gym, swimming pool, and sports facilities.",
      "Campus employment opportunities through Handshake and student center websites."
    ]
  },
  {
    question: "How can students get travel permission to leave and re-enter the U.S.?",
    responses: [
      "Take a travel signature from ISSS.",
      "Submit an updated I-20 request and get a travel signature.",
      "Apply for a travel I-20 through iStart.",
      "Some students also mentioned downloading enrollment verification from PAWS."
    ]
  },
  {
    question: "How can students renew their visa or passport after coming to the U.S.?",
    responses: [
      "Visa usually needs to be renewed from outside the U.S.",
      "Some students mentioned the dropbox option at the U.S. Embassy in Bangladesh for visa renewal.",
      "Passport renewal can be done through the Bangladeshi Embassy or consular services in the U.S.",
      "One student suggested watching for local Bangladeshi consulate events to avoid long-distance travel."
    ]
  },
  {
    question: "How can students find other on-campus jobs besides TA/GRA positions?",
    responses: [
      "Use Handshake.",
      "Look at the student center website.",
      "Reach out to departments directly.",
      "Contact HR or look at campus employment portals."
    ]
  }
];

const FAQSection = () => {
  const [open, setOpen] = useState("0");

  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faqs container rounded-3 bg-white p-4 p-lg-5 mt-5">
      <Row className="g-4">
        <Col sm={4}>
          <h1>Frequently Asked Questions</h1>
          <p className="text-grey-20">
            Answers below include responses collected from multiple GSU students.
          </p>
          <Button className="btn bg-white border-white-95 p-3 mt-3 text-black">
            See All FAQ’s
          </Button>
        </Col>

        <Col sm={1}></Col>

        <Col sm={7}>
          <Accordion open={open} toggle={toggle} className="faqs">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                className="faq p-3 rounded-3 border-white-95 border-top"
              >
                <AccordionHeader targetId={index.toString()}>
                  {item.question}
                </AccordionHeader>

                <AccordionBody accordionId={index.toString()}>
                  <hr />

                  <div className="mb-4">
                    {item.responses.map((response, responseIndex) => (
                      <p key={responseIndex} className="mb-3">
                        <strong>Response {responseIndex + 1}:</strong> {response}
                      </p>
                    ))}
                  </div>

                  <div className="d-flex justify-content-center align-items-center bg-white-97 border-white-95 p-3 rounded-3">
                    <h6 className="d-inline">Multiple Student Responses</h6>
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className="bg-white rounded-5 p-1 ms-auto"
                    />
                  </div>
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </section>
  );
};

export default FAQSection;