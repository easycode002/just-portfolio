"use";
import React from "react";
import {Button} from "../components/Button";
import { PostgresqlIcon } from "../components/atoms/Icon";

const Portfolio = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-3 text-2xl md:text-3xl lg:text-4xl font-ubuntubold uppercase underline underline-offset-4">
          Portfolio
        </h2>
        <p className="text-center">Most recent work</p>
        <Button variant="secondary" icon={<PostgresqlIcon />}>
          Profile
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
