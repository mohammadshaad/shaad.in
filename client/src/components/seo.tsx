import { Helmet } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
};

const SEO = ({ title, description, keywords, author }: SeoProps) => {
  const defaultTitle = "Mohammad Shaad - Full Stack Developer";
  const defaultDescription =
    "Mohammad Shaad is a full stack developer based in Nashik, India, specializing in Golang, Node.js, React.js, and cloud technologies. Explore my portfolio and projects.";
  const defaultKeywords =
    "Mohammad Shaad, Full Stack Developer, Golang, Node.js, React.js, Next.js, PostgreSQL, MongoDB, Google Cloud, AWS, Docker, Kubernetes, Web Developer, Nashik, India";
  const defaultAuthor = "Mohammad Shaad";

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    author: author || defaultAuthor,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  );
};

export default SEO; 