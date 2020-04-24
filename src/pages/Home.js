import React from "react";
//import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import HomeMaterials from "../components/Web/HomeMaterials";
/* import HowMyCoursesWork from "../components/Web/HowMyCoursesWork";
import ReviewsCourses from "../components/Web/ReviewsCourses"; */

export default function Home() {
  return (
    <>
      <MainBanner />
      <HomeMaterials />
    </>
  );
}

/* return (
  <>
    <Helmet>
      <title>Agustín Navarro Galdon</title>
      <meta
        name="description"
        content="Home | Web sobre programación"
        data-react-helmet="true"
      />
    </Helmet>
    <MainBanner />
    <HomeMaterials />
    <HowMyCoursesWork />
    <ReviewsCourses />
  </>
); */
