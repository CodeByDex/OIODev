"use client";
import { useState } from "react";
import UserContainer from "./components/UserContainer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faCalendarCheck,
//   faRightFromBracket,
//   faAngleRight,
// } from "@fortawesome/free-solid-svg-icons";
import { useQuery, gql } from "@apollo/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

// const userQuery = gql`
//   query Query($user: ID!) {
//     getUserPortfolioByUser(user: $user) {
//       _id
//       user
//       firstName
//       lastName
//       title
//       bio
//       rate
//       portfolioUrl
//       githubUrl
//       linkedinUrl
//       available
//     }
//   }
// `;

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  if (session) {
    return <UserContainer />;
  }
}
