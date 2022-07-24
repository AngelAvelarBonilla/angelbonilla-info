import "./experience.scss";

const Experience = () => {
  const data = [
    {
      id: 1,
      company: "Lockheed Martin",
      jobTitle: "Software Engineer",
      feats: [
        "Drove the containerization effort to build Docker images that are now used as lightweight build enviroments for 13 different services. This allowed developers to test their builds on their own machines.",
        "Ported a 32-bit codebase to 64-bit in response to a company wide effort to step up the operating systems used on our build machines.",
        "Active security clearance at the Secret level",
        "Skills learned - Java, Maven, Docker, C++, Unix Systems: RHEL and CentOS",
      ],
      date: "February 2022 - Present",
    },
    {
      id: 2,
      company: "First American Payment Systems",
      jobTitle: "Technical and Integration Support II",
      feats: [
        "Provided integration support for ISVs looking to integrate their POS solutions with our REST Payment Gateway.",
        "Assisted IT/Development team in QA testing.",
        "Provided technical support for merchants using our applications like our FirstPay mSDK, 1stPayPOS/Mobile, and Virtual Terminal.",
        "Skills learned - Payment Gateways, Postman",
      ],
      date: "May 2019 - January 2022",
    },
    {
      id: 3,
      company: "Google Developer Student Clubs",
      jobTitle: "Lead",
      feats: [
        "Facilitated 2 Google-sponsored introductory Machine Learning workshops",
        "Hosted a handful of Cloud Study Jams focused on teaching others how to utilize the Google Cloud Platform, CSJ topics included: Cloud Essentials, Application Deployment, BigQuery, Firebase",
        "Skills learned - Google Cloud Platform (App Engine, Big Data), Machine Learning",
      ],
      date: "June 2021 - May 2022",
    },
  ];
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className="entry">
            <h3>{d.company}</h3>
            <h4>{d.jobTitle}</h4>
            <ul>
              {d.feats.map((feat) => (
                <li>{feat}</li>
              ))}
            </ul>
            <div className="date">
              <h5>{d.date}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
