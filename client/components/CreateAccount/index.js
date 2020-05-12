import { useState } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import css from "./CreateAccount.module.css";
import NavBar from "../NavBar/NavBar";
import Link from "next/link";
import { url } from "../../config";

export default function CreateAccount() {
  function onChange(e) {
    e.persist();
    const newState = e.target.value;
    const name = e.target.name;
    //setTutorSetting has an argument which is a function or anything else, containing old state
    setDetails(oldState => ({ ...oldState, [name]: newState }));
  }

  function handlePageChange(e) {
    e.preventDefault();
    setIsToggled(!isToggled);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createAccount();
  }

  async function createAccount() {
    const res = await fetch(`${url}/dev/tutors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...details
      })
    });
    const data = await res.json();
    // success - set up what we get back.
    // think about navigation after they have finished.
  }

  return (
    <>
      <div className={css.mainContainer}>
        <div className={css.formContainer}>
          <h1>Create an account</h1>
          <InputField label="email" className={css.email} />
          <InputField
            label="password"
            type="password"
            className={css.password}
          />
          <Link href="/register">
            <div className={css.buttons}>
              <Button
                handleClick={() => createAccount}
                text=" Create Account "
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

// {page == "pageTwo" ? (
//     <>
//       <div>
//         {Object.keys(details)
//           .slice(0, 7)
//           .map(item => {
//             return (
//               <InputField
//                 label={item}
//                 onChange={onChange}
//                 type="text"
//                 name={item}
//               />
//             );
//           })}
//         <Button text="Next" handleClick={() => setPage("pageThree")} />
//         <Button
//           text="Previous"
//           handleClick={() => setPage("pageOne")}
//         />
//       </div>{" "}
//     </>
//   ) : null}
//   {page == "pageThree" ? (
//     <>
//       <div>
//         {Object.keys(details)
//           .slice(8, 14)
//           .map(item => {
//             return (
//               <InputField
//                 label={item}
//                 onChange={onChange}
//                 type="text"
//                 name={item}
//               />
//             );
//           })}
//         <Button text="Next" handleClick={() => setPage("pageOne")} />
//         <Button
//           text="Previous"
//           handleClick={() => setPage("pageTwo")}
//         />
//         <Button text="Submit" handleClick={createAccount} />
//       </div>
//     </>
//   ) : null}

// const initialState = {
//   firstName: "",
//   lastName: "",
//   tel: null,
//   email: "",
//   accNum: null,
//   sortCode: null,
//   textContact: false,
//   emailContact: false,
//   subjects: [""],
//   bio: "",
//   teachingLevel: "",
//   location: "",
//   price: null,
//   exp: "",
//   img_url: "",
//   vid_url: ""
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "pageOne":
//       return ;
//     case "pageTwo":
//       return ;
//     case "pageThree":
//       return ;
//     default:
//       return state;
//   }
// }
