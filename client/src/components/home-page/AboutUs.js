import React from "react";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            <h2>
              About <b className="text-danger"> on Target</b>{" "}
            </h2>
            <p>
              The Power of Sharing Your Goals With Others. A goal management and
              sharing app that allows you to set life goals, track them, share
              them with others, and find people who share the same goals so that
              users can support each other in achieving these goals. A social
              goal sharing app where users who have similar short term
              challenges and goals like quitting smoking, regular training,
              dieting etc., meet to support each other with appropriate motives
              and words.
            </p>
          </div>

          <div className="col-lg-6">
            <h3 className="text-danger"> Purpose of on Target </h3>
            <p>
              Assuming you have a list of personal goals written down somewhere,
              much of your energy and focus will be on achieving these goals.
              One of the most powerful ways I have come across to achieve
              personal goals is the practice of sharing them with other people
              you trust. The reason sharing goals with others is so effective is
              because when you share your goals 2 things happen:
              <br />
              <b className="text-danger">1.</b> You Become Accountable for a
              groub of people with the same goals.
              <br />
              <b className="text-danger">2.</b> You May Receive Help to achive
              your life goal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
