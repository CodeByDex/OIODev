"use client";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const userQuery = gql`
query User($id: ID!) {
  user(ID: $id) {
    _id
    email
    name
    image
    company
  }
}
`;

const userMutation = gql`
mutation Mutation($id: ID!, $name: String!, $email: String!, $image: String, $company: String) {
  updateUser(ID: $id, name: $name, email: $email, image: $image, company: $company) {
    _id
    email
    name
    image
    company
  }
}
`;

export default function ProfilePanel(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [userState, setUserState] = useState({});
  const [updateUser] = useMutation(userMutation, { onCompleted(args) { onMutateComplete(args)}});

  function onMutateComplete(args) {
    setUserState({...args.updateUser});

    setIsEditable(false);
  }

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
  };

  const { data, error, loading } = useQuery(userQuery, {
    variables: {
      id: props.user.id,
    },
  });

  useEffect(() => {
    if (!loading) {
      setUserState({...data.user})
      console.log("loaded",userState);
    }
  }, [loading]);

  const handleUserChange = (event) => {
    let {name, value} = event.target;

    setUserState({...userState, [name]: value});
  }

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
    return (
      <>
        <div className="flex flex-col">
          {/* Edit and Save Button */}
          <button
            onClick={handleEditClick}
            className={`flex items-center justify-end text-lg font-primary pt-5 pr-5 md:pr-0 w-fit ml-auto ${
              isEditable ? "hidden" : ""
            } `}
          >
            <div className="delay-75 duration-300 rounded-lg flex items-center gap-3">
              <p className="flex gap-1">
                Edit<span className="hidden md:flex">Settings</span>
              </p>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="bg-brand-accent/5 hover:bg-brand-accent/10 delay-75 duration-300 text-brand-accent p-2 rounded-lg w-5 h-5"
              />
            </div>
          </button>
          <button
            onClick={handleSaveClick}
            className={`flex items-center justify-end text-lg font-primary pt-5 pr-5 md:pr-0 w-fit ml-auto ${
              isEditable ? "" : "hidden"
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
                <label className="text-sm md:text-base">Name</label>
                <input
                  className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg ${
                    isEditable
                      ? "bg-brand-primary/50 caret-brand-accent border-gray-800/60 border"
                      : "bg-transparent outline-none"
                  }`}
                  type="text"
                  defaultValue={props.user.name}
                  onChange={(e) => setFirstName(e.target.value)}
                  readOnly={!isEditable}
                ></input>
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-sm md:text-base">Last Name</label>
                <input
                  className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
                    isEditable
                      ? "bg-brand-primary/50 caret-brand-accent border-gray-800/60 border"
                      : "bg-transparent outline-none"
                  }`}
                  type="text"
                  defaultValue={props.user.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  readOnly={!isEditable}
                ></input>
              </div>
            </div>
            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-sm md:text-base">Email</label>
              <input
                className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
                  isEditable
                    ? "bg-brand-primary/50 caret-brand-accent border-gray-800/60 border"
                    : "bg-transparent outline-none"
                }`}
                type="text"
                defaultValue={props.user.email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!isEditable}
              ></input>
            </div>
            
          </form>
        </div>
      </>
    );
  }
}

