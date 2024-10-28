import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <>
      <div>About page</div>
      <User />
      <UserClass name={"Govardhana"} location={"dharmavaram"} />
    </>
  );
};

export default About;
