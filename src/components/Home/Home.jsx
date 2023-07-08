import React, { useEffect, useState } from "react";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";
import SmartInventoryReporting from "../SmartInventoryReporting/SmartInventoryReporting";
import Hero from "../Hero/Hero";
import { HomePageContent, defaultData } from "../../static/Content";
import { useParams } from "react-router-dom";
import {
  AiBookingIcon,
  AiPowerAutomationIcon,
  AiScheduler,
} from "../../assets";

const Home = () => {
  const [pageData, setPageData] = useState([]);
  const { id } = useParams();
  const { readMorePages } = HomePageContent;

  // Find the page object that matches the provided id
  useEffect(() => {
    if (id) {
      const filtered = readMorePages.filter((val) => val?.id == id);
      setPageData(filtered);
    } else {
      setPageData(defaultData);
    }
  }, [id]);

  

  return (
    <div>
      <Hero
        pageData={pageData}
        // heroHeadingWebHomePageTitel={heroHeadingWebHomePageTitel}
        // heroHeadingWeb={heroHeadingWeb}
        // heroHeadingMobilePageTitel={heroHeadingMobilePageTitel}
        // heroHeadingMobile={heroHeadingMobile}
        // heroParaWeb={heroParaWeb}
        // heroParaMobile={heroParaMobile}
        // heroLearnMoreButton={heroLearnMoreButton}
      />
      <Features
        pageData={pageData}
        // featuresHeadingSectionOne={featuresHeadingSectionOne}
        // featuresParaSectionOne={featuresParaSectionOne}
        // readMoreInventoryFeatures={readMoreInventoryFeatures}
        // featuresSectionTwo={featuresSectionTwo}
        // readMoreMannagementFeatures={readMoreMannagementFeatures}
      />
      <ContactUs
      pageData={pageData}
        // contactUsHeading={contactUsHeading}
        // contactUsPara={contactUsPara}
        // heroLearnContactUs={heroLearnContactUs}
      />
      <SmartInventoryReporting
      pageData={pageData}
        // InventoryReportingHeadingBlueLatter={
        //   InventoryReportingHeadingBlueLatter
        // }
        // InventoryReportingHeadingBlackLatter={
        //   InventoryReportingHeadingBlackLatter
        // }
        // InventoryReportingPara={InventoryReportingPara}
        // InventoryReportingItems={InventoryReportingItems}
        // learnMoreInventoryReporting={learnMoreInventoryReporting}
      />
    </div>
  );
};

export default Home;
