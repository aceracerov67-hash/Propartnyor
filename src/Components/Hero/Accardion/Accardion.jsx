import React from "react";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const StyledAccordion = styled(Accordion)(() => ({
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  boxShadow: "none",
  marginBottom: "14px",
  "&:before": { display: "none" },
}));

const StyledSummary = styled(AccordionSummary)(() => ({
  padding: "16px 20px",
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
}));

const StyledDetails = styled(AccordionDetails)(() => ({
  padding: "0 20px 16px 20px",
  color: "#6b7280",
  fontSize: "15px",
  lineHeight: "1.6",
}));

const PlanTrip = () => {
  const { t } = useTranslation();
  const items = t("planTrip.accordion", { returnObjects: true });

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="900"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          
          <div
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              {t("planTrip.title")}
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-600 leading-relaxed mb-8"
            >
              {t("planTrip.description")}
            </p>

            <button
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-blue-500 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition"
            >
              {t("planTrip.button")}
            </button>
          </div>

         
          <div>
            {items.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + index * 150}
              >
                <StyledAccordion>
                  <StyledSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>
                      {item.title}
                    </Typography>
                  </StyledSummary>
                  <StyledDetails>
                    {item.desc}
                  </StyledDetails>
                </StyledAccordion>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
