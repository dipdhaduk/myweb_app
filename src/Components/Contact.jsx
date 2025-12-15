import axios from "axios";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Contact() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const datainsert = async (e) => {
    e.preventDefault();

    const data = {
      firstname,
      lastname,
      email,
      message,
    };

    try {
      await axios.post(
        "https://68e5edbf21dd31f22cc36bec.mockapi.io/furnitureapp/Contacts",
        data
      );

      alert("Message Sent Successfully ✅");

      // reset form
      setfirstname("");
      setlastname("");
      setemail("");
      setmessage("");
    } catch (error) {
      console.log("form not submitted", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Furni<span>.</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/service">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="container">
          <h1>Contact</h1>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="untree_co-section">
        <div className="container">
          <form onSubmit={datainsert}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-12 mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-12 mb-3">
                <label>Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
