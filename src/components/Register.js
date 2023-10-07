import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from "react-router-dom";


function Register() {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        
        console.log(res);

        const storageRef = ref(storage, displayName);
        
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(true);
              // setLoading(false);
            }
          });
        });



    } catch (err) {
        setErr(true)
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" required/>
          <input type="email" placeholder="email" required/>
          <input type="password" placeholder="password" required/>
          <input style={{ display: "none" }} type="file" id="file" required/>
          <label htmlFor="file">
            <img
              src="https://github.com/safak/youtube2022/blob/react-chat/src/img/addAvatar.png?raw=true"
              alt=""
            />
            <span>Add an account</span>
          </label>

          <button>SignUp</button>
          {err && <span>Something Went Wrong</span>}
        </form>
        <p>You have an Account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
