import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./user.scss";
const User = () => {
  // Fetch data and send to single component

  return (
    <div>
      <Single {...singleUser} />
    </div>
  );
};

export default User;
