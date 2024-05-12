import React from "react";
import CarouselProps from "./component/Carousel";
import List from "../product/List";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="py-3 bg-dark bg-pattern mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center text-white">
                <span className="heading-xxs letter-spacing-xl">
                  ⚡️ Happy Holiday Deals on Everything ⚡️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarouselProps />
      <List/>
    </div>
  );
};
export default HomePage;
