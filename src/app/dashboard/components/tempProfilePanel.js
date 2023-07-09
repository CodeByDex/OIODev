"use client";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

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

const addPortfolioMutation = gql`
mutation Mutation($portfolio: portfolioInput) 
{
  createPortfolio(portfolio: $portfolio) {
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

const updatePortfolioMutation = gql`
mutation Mutation($portfolio: portfolioInput, $id: ID) 
{
  updatePortfolio(portfolio: $updatePortfolioPortfolio, ID: $id) {
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
  let userData;
  let neededMutation;
  const [isEditable, setIsEditable] = useState(false);
  const [portfolioState, setPortfolioState] = useState({ IsLoaded: false });

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
  };

  const { data, error, loading } = useQuery(userQuery, {
    variables: {
      user: props.user.id,
    },
  });

  useEffect(() => {

    if (data && data.getUserPortfolioByUser) {
      userData = data.getUserPortfolioByUser;
      neededMutation = updatePortfolioMutation;
    } else {
      userData = {
        _id: null,
        user: props.user.id,
        firstName: props.user.name,
        lastName: "",
        title: null,
        bio: null,
        rate: null,
        portfolioUrl: null,
        githubUrl: null,
        linkedinUrl: null,
        available: false
      }
    }

    setPortfolioState({ IsLoaded: true, ...userData });
    neededMutation = addPortfolioMutation;
  }, [loading])

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
  } 

  const handlePortfolioSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = portfolioUpdate({
        variables: { ...portfolioState }
      })

      setPortfolioState(data);
    } catch (err) {
      console.log("mutate error", err);
    }
  };

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);

    portfolioState

    setPortfolioState({ ...portfolioState, [name]: value });

  }

  return (
    <>
      <div className="flex flex-col">
        {/* Edit and Save Button */}
        <button
          onClick={handleEditClick}
          className={`flex items-center justify-end text-lg font-primary pt-5 pr-5 md:pr-0 w-fit ml-auto ${isEditable ? "hidden" : ""
            } `}
        >
          <div className="delay-75 duration-300 rounded-lg flex items-center gap-3">
            <p className="flex gap-1">
              Edit<span className="hidden md:flex">Profile</span>
            </p>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="bg-brand-accent/5 hover:bg-brand-accent/10 delay-75 duration-300 text-brand-accent p-2 rounded-lg w-5 h-5"
            />
          </div>
        </button>
        <button
          onClick={handleSaveClick}
          className={`flex items-center justify-end text-lg font-primary pt-5 pr-5 md:pr-0 w-fit ml-auto ${isEditable ? "" : "hidden"
            } `}
        >
          <div className="delay-75 duration-300 rounded-lg flex items-center gap-3">
            <p className="flex gap-1">
              Save<span className="hidden md:flex">Changes</span>
            </p>
            <FontAwesomeIcon
              icon={faFloppyDisk}
              className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
            />
          </div>
        </button>
        {/* Form */}
        <form className="flex flex-col gap-2 p-5 pt-0 md:p-0">
          <div className="flex">
            {/* First and Last Name Field */}
            <div className="flex flex-col w-1/2">
              <label className="text-sm md:text-base">First Name</label>
              <input
                className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg ${isEditable
                    ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                    : "bg-transparent outline-none"
                  }`}
                type="text"
                defaultValue={portfolioState.firstName}
                onChange={handleProfileChange}
                readOnly={!isEditable}
              ></input>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm md:text-base">Last Name</label>
              <input
                className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                    ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                    : "bg-transparent outline-none"
                  }`}
                type="text"
                name="lastName"
                defaultValue={portfolioState.lastName}
                onChange={handleProfileChange}
                readOnly={!isEditable}
              ></input>
            </div>
          </div>
          {/* Title Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Title</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                  : "bg-transparent outline-none"
                }`}
              type="text"
              defaultValue={portfolioState.title}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* Rate Field */}
          <div className="flex flex-col w-fit">
            <label className="text-sm md:text-base">Rate</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                  : "bg-transparent outline-none"
                }`}
              type="number"
              name="rate"
              defaultValue={portfolioState.rate}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* Bio Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Bio</label>
            <textarea
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                  : "bg-transparent outline-none"
                }`}
              rows="5"
              defaultValue={portfolioState.bio}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></textarea>
          </div>
          {/* Portfolio Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Portfolio URL</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                  : "bg-transparent outline-none"
                }`}
              type="url"
              defaultValue={portfolioState.portfolioUrl}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* Github Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">GitHub URL</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                  : "bg-transparent outline-none"
                }`}
              type="url"
              defaultValue={portfolioState.githubUrl}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* LinkedIn Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">LinkedIn URL</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                  : "bg-transparent outline-none"
                }`}
              type="url"
              defaultValue={portfolioState.linkedinUrl}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* Availability Field */}
          <div className="flex items-center">
            <input
              className="bg-transparent font-primary text-brand-textHeader text-base md:text-lg my-1 mr-3"
              type="checkbox"
              defaultValue={portfolioState.available}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            />
            <label className="text-sm md:text-base">Available for Work</label>
          </div>
        </form>
      </div>
    </>
  );
}

