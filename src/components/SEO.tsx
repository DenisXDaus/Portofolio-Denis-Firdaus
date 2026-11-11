import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  url: string;
}

export default function SEO({
  title,
  description,
  url,
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta
        name="description"
        content={description}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
