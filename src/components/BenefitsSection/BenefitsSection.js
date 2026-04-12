import { Row } from "reactstrap";

import SectionHeader from "../UI/SectionHeader";
import BenefitCard from "./BenefitCard";

const BenefitsSection = () => {
  const benefitsData = [
    {
      number: "01",
      title: "Find Housing",
      description:
        "Explore apartments like Avondale, Lindbergh, Decatur, and Marietta. Learn rent ranges, lease policies, deposits, and how students secure housing through referrals, Facebook groups, and direct applications.",
    },
    {
      number: "02",
      title: "Temporary Stay Options",
      description:
        "Discover short-term solutions like Airbnb, subleases, and university housing to help you settle in before finding a permanent apartment in Atlanta.",
    },
    {
      number: "03",
      title: "Cost of Living Planning",
      description:
        "Understand how much money to bring when arriving in the US. Most students recommend budgeting for at least 2 months of expenses including rent, groceries, and health insurance.",
    },
    {
      number: "04",
      title: "Banking & Credit Cards",
      description:
        "Get started with student-friendly banks like Chase and Bank of America. Learn how to open accounts without SSN and choose beginner credit cards like Discover.",
    },
    {
      number: "05",
      title: "Mobile & Internet Plans",
      description:
        "Compare affordable plans like Mint Mobile, T-Mobile prepaid, and LycaMobile. Find the best options for calling internationally and saving money in your first few months.",
    },
    {
      number: "06",
      title: "Shopping & Essentials",
      description:
        "Find where to buy furniture, groceries, halal food, spices, cookware, and daily essentials. Popular stores include Walmart, IKEA, Costco, Patel Brothers, and City Farmers Market.",
    },
    {
      number: "07",
      title: "SSN Application Guide",
      description:
        "Learn how to apply for your Social Security Number using an on-campus job offer, ISSS support letter, and required documents. Includes both campus and SSA office options.",
    },
    {
      number: "08",
      title: "Health Insurance & Clinics",
      description:
        "Understand GSU insurance, Marketplace plans like Oscar, and low-cost clinics such as Grady, Mercy Care, and Good Samaritan for affordable healthcare in Atlanta.",
    },
    {
      number: "09",
      title: "Taxes & Glacier System",
      description:
        "File your taxes using Sprintax and manage tax forms through Glacier. Learn how Bangladeshi students can benefit from tax treaty exemptions on eligible income.",
    },
    {
      number: "10",
      title: "Student Benefits at GSU",
      description:
        "Access resources like Panther Pantry, MARTA discounts, student recreation center, and campus job platforms like Handshake to support your student life.",
    },
    {
      number: "11",
      title: "Travel & Visa Guidance",
      description:
        "Learn how to get travel signatures, renew your visa, and update your I-20 through ISSS before traveling outside the US.",
    },
    {
      number: "12",
      title: "Career & Immigration Pathways",
      description:
        "Explore long-term options like NIW/EB2 for green card pathways. Get insights on internships, on-campus jobs, and connecting with legal advisors.",
    },
  ];

  const title = "Everything You Need as a GSU Student";
  const description =
    "Built from real student experiences, this guide helps Georgia State University students navigate housing, finances, healthcare, and daily life in Atlanta with confidence.";

  return (
    <>
      <SectionHeader title={title} description={description} />

      <section className="benefits container mt-3">
        <Row className="row-cols-1 row-cols-lg-4 row-cols-md-2 g-3 g-lg-3">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              number={benefit.number}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </Row>
      </section>
    </>
  );
};

export default BenefitsSection;