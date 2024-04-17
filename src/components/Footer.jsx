import socialMediaData from "../assets/socialMediaData.json";

function Footer({ social, style }) {
  const socialMediaList = socialMediaData.slice(0, 6);
  const contentList = [
    "help",
    "returns",
    "terms",
    "privacy police",
    "contacts",
  ];

  return (
    <footer className="pb-50" style={style}>
      <ul>
        {social
          ? socialMediaList.map((data) => (
              <a
                href={data.url}
                target="_blank"
                rel="noopener"
                key={data.platform}
              >
                <li>{data.platform}</li>
              </a>
            ))
          : contentList.map((content) => (
              <a href="" key={content}>
                <li>{content}</li>
              </a>
            ))}
      </ul>
    </footer>
  );
}

export default Footer;
