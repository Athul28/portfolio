import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEOHelmet = ({
  title = "Athul Bhandary - Full Stack Developer | AI & ML Enthusiast",
  description = "Full Stack Developer specializing in React, AI/ML, and modern web technologies. NMAMIT BTech student with 12+ innovative projects. Hire expert developer.",
  keywords = "Athul Bhandary, Full Stack Developer, React Developer, AI ML Engineer, Web Developer, JavaScript, TypeScript, Python, Portfolio, NMAMIT",
  image = "https://athulbhandary.tech/profile1.png",
  url = "https://athulbhandary.tech/",
  type = "website",
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
SEOHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};

export default SEOHelmet;
