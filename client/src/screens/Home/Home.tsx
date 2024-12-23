import BaseScreen from "@/layouts/BaseScreen/BaseScreen";
import '../../interfaces/API/mocks/MockHomepage.ts'
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [])
    return (
        <BaseScreen>
            <div>homepage, entry please</div>
        </BaseScreen>
    );
};

export default Home;
