"use client";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import ProfileLoading from "./ProfileLoading.js";

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
      calendlyUrl
      imageUrl
      available
    }
  }
`;

const addPortfolioMutation = gql`
mutation Mutation($user: ID, $firstName: String, $lastName: String, $title: String, $bio: String, $rate: Float, $portfolioUrl: String, $githubUrl: String, $linkedinUrl: String, $calendlyUrl: String, $imageUrl: String, $available: Boolean) {
  createPortfolioByField(user: $user, firstName: $firstName, lastName: $lastName, title: $title, bio: $bio, rate: $rate, portfolioUrl: $portfolioUrl, githubUrl: $githubUrl, linkedinUrl: $linkedinUrl, available: $available, calendlyUrl: $calendlyUrl, imageUrl: $imageUrl) {
    _id
    available
    bio
    firstName
    githubUrl
    lastName
    linkedinUrl
    portfolioUrl
    rate
    title
    user
    calendlyUrl
    imageUrl
  }
}
`;

const updatePortfolioMutation = gql`
mutation Mutation($portId: ID, $user: ID, $firstName: String, $lastName: String, $title: String, $bio: String, $rate: Float, $portfolioUrl: String, $githubUrl: String, $linkedinUrl: String, $calendlyUrl: String, $imageUrl: String, $available: Boolean) {
  updatePortfolioByField(portID: $portId, user: $user, firstName: $firstName, lastName: $lastName, title: $title, bio: $bio, rate: $rate, portfolioUrl: $portfolioUrl, githubUrl: $githubUrl, linkedinUrl: $linkedinUrl, calendlyUrl: $calendlyUrl, imageUrl: $imageUrl, available: $available) {
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
    calendlyUrl
    imageUrl
    available
  }
}
`;

export default function ProfilePanel(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [portfolioState, setPortfolioState] = useState({});
  const [addPortfolio, { addPortErr }] = useMutation(addPortfolioMutation, { onCompleted(args) { onMutateComplete(args, true); } });
  const [updatePortfolio, { upPortErr }] = useMutation(updatePortfolioMutation, { onCompleted(args) { onMutateComplete(args, false); } });

  function onMutateComplete(args, isAdd) {
    if (isAdd) {
      setPortfolioState({ ...args.createPortfolioByField })
    } else {
      setPortfolioState({ ...args.updatePortfolioByField })
    }

    setIsEditable(false);
  }

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const { data, error, loading } = useQuery(userQuery, {
    variables: {
      user: props.user.id,
    },
  });

  useEffect(() => {

    if (!loading) {
      if (data.getUserPortfolioByUser) {
        setPortfolioState({ ...data.getUserPortfolioByUser })
      } else {
        setPortfolioState({
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
          calendlyUrl: null,
          imageUrl: props.user.image,
          available: false
        });
      }

    }

  }, [loading])

  if (loading) {
    return (
      <ProfileLoading />
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

    //cast values to their actual data types, they are getting saved as strings when pulled from the form
    portfolioState.rate = parseFloat(portfolioState.rate);
    portfolioState.available = Boolean(portfolioState.available);

    try {
      if (portfolioState._id == null) {
        addPortfolio({
          variables: { ...portfolioState }
        })

      } else {
        const vars = { ...portfolioState, portId: portfolioState._id };

        updatePortfolio({
          variables: vars

        })

      }
    } catch (err) {
      console.log("mutate error", err);
    }
  };

  const handleProfileChange = (event) => {
    let { name, value } = event.target;

    if (name === "available") {
      value = event.target.checked;
    }

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
          onClick={handlePortfolioSubmit}
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
                name="firstName"
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
              name="title"
              defaultValue={portfolioState.title}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* Rate Field */}
          <div className="flex flex-col w-fit">
            <label className="text-sm md:text-base">Hourly Rate</label>
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
              name="bio"
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
              name="portfolioUrl"
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
              name="githubUrl"
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
              name="linkedinUrl"
              defaultValue={portfolioState.linkedinUrl}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* Calendly Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Calendly URL</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
                }`}
              type="url"
              name="calendlyUrl"
              defaultValue={portfolioState.calendlyUrl}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* Image Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Image URL</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
                }`}
              type="url"
              name="imageUrl"
              defaultValue={portfolioState.imageUrl}
              onChange={handleProfileChange}
              readOnly={!isEditable}
            ></input>
          </div>
          {/* Availability Field */}
          <div className="flex items-center">
            <input
              className="bg-transparent font-primary text-brand-textHeader text-base md:text-lg my-1 mr-3"
              type="checkbox"
              name="available"
              checked={portfolioState.available}
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
