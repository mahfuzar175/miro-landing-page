import highlight from "../assets/images/idea.png";

const Collaborate = () => {
  return (
    <div className="py-6 md:py-7 overflow-hidden relative lg:py-12 mt-10 font-inter">
        {/* heading */}
      <div>
        <h1 className="text-center text-[#050038] text-2xl lg:text-5xl md:text-3xl font-bold mt-3">
          Collaborate without <br /> constraints
        </h1>
        <div className="absolute lg:block -top-4 md:-top-6 left-12 md:left-[58%]">
          <img src={highlight} alt="highlite" />
        </div>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:mt-5 lg:mt-6">
        <div className="border border-white p-4">
          <h1 className="text-[#050038] text-xl font-bold">Free forever</h1>
          <p className="text-slate-600 pt-3 lg:pt-4">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our <br /> <span className="text-[#4262FF]">pricing plans</span> for more features.
          </p>
        </div>
        <div className="border border-white p-4">
          <h1 className="text-[#050038] text-xl font-bold">
            Easy integrations
          </h1>
          <p className="text-slate-600 pt-3 lg:pt-4">
            Miro has 100+ powerful integrations with tools you already use like
            G <br /> Suite, Slack, and Jira, so your <br /> workflow is seamless. View the
            full <br /> list in our <span className="text-[#4262FF]">Marketplace</span> .
          </p>
        </div>
        <div className="border border-white p-4">
          <h1 className="text-[#050038] text-xl font-bold">Security first</h1>
          <p className="text-slate-600 pt-3 lg:pt-4">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards <br /> and give you tools to protect
            intellectual property. Learn more <br /> at our <span className="text-[#4262FF]">Trust Center</span> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
