"use client";
import { useQuery, gql } from "@apollo/client";

const userQuery = gql`
  query Query($user: ID!) {
    getUserPortfolioByUser(user: $user) {
      _id
      user
      firstName
      lastName
      title
      bio
      rate
      portfolioUrl
      githubUrl
      linkedinUrl
      available
    }
  }
`;

export default function ProfilePanel(props) {

    const { data, error, loading } = useQuery(userQuery, {
        variables: {
          user: props.user.id,
        },
      });

      if (loading) {
        return (
          <main>
            <p>Loading...</p>
          </main>
        );
      } else if (error) {
        return (
          <main>
            <p>{JSON.stringify(error)}</p>
          </main>
        );
      } else {

        const userData = data.getUserPortfolioByUserId;
    return (
        <>
            <p>Profile Panel</p>
            <h1>for user {props.user.id} {JSON.stringify(data)}</h1>
        </>
    )
      }
}