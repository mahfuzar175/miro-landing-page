import Banner from "../../components/Banner";
import Brand from "../../components/Brand";
import BuildAllTeam from "../../components/BuildAllTeam";
import BuildWorkWay from "../../components/BuildWorkWay";
import Collaborate from "../../components/Collaborate";
import Connect from "../../components/Connect";
import TeamWork from "../../components/TeamWork";
import WorkWay from "../../components/WorkWay";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Brand></Brand>
        <Collaborate></Collaborate>
        <TeamWork></TeamWork>
        <Connect></Connect>
        <WorkWay></WorkWay>
        <BuildWorkWay></BuildWorkWay>
        <BuildAllTeam></BuildAllTeam>
    </div>
  );
};

export default Home;
