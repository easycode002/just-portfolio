import React from "react";
import { Button } from "../components/atoms/Button";

const Home = () => {
  return (
    <div className="flex flex-col justify-star mt-32 items-center min-h-screen w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
      <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="flex items-center space-x-2">
            <h1 className="text-h1 sm:text-4xl md:text-5xl font-ubuntubold text-gray-900">
              Mab Sothea
            </h1>
            <span className="text-2xl sm:text-3xl md:text-4xl">👋</span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-ubunturegular text-gray-700">
          Full Stack Developer
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-1xl mx-auto leading-relaxed">
          I am an experienced <strong>Data Analyst</strong> with a robust
          foundation in backend and full-stack development. My technical
          expertise includes Node.js, Express.js, Laravel, Django, and RESTful
          APIs, alongside proficiency in managing databases such as MS SQL
          Server and MongoDB. I excel in leveraging tools like Power BI,
          Tableau, and Excel to transform complex datasets into actionable
          insights and visually compelling dashboards. My experience with DevOps
          practices, including CI/CD pipelines and AWS deployments using SST and
          EC2, enables me to deliver scalable and efficient data-driven
          solutions. Additionally, my familiarity with front-end frameworks like
          React.js and Next.js allows me to approach backend development with a
          full-stack perspective, ensuring seamless integration and
          user-centered outcomes. With a strong commitment to data analytics,
          visualization, and innovation, I bring valuable expertise to drive
          strategic decision making and organizational success
        </p>

        <div className="flex justify-center space-x-4 pt-4">
          <Button size="lg" className="text-subtitle font-ubunturegular !py-6">
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-subtitle font-ubunturegular !py-6 border-[1.5px] hover:border-[#25B5A2] border-[#25B5A2]"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
