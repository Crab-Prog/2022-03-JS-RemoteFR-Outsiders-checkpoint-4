import Header from "@components/Header";
import Navbar from "@components/Navbar";
import "@styles/Home.scss";
// import axios from "axios";
// import { useState, useEffect } from "react";

export default function Home() {
  // back is working yes
  // const [members, setMembers] = useState();

  // useEffect(() => {
  //   axios.get("http://localhost:5500/members")
  //   .then((res) => {
  //     setMembers(res.data);
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.error(console.error(err));
  //   });
  // }, []);

  return (
    <header className="home-header">
      <Navbar />
      <Header />
      {/* {members.map((member) => {
        return(<p>{member.first_name}</p>)
      })} */}
    </header>
  );
}
