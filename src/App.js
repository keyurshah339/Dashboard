import "./styles.css";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div>
      <div className="container">
        <div>
          <nav className="navbar"></nav>

          <div className="mask">
            <h1 className="mask-title">Hello Keyur</h1>
            <h4 className="mask-matter">
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks
            </h4>
            <button className="mask-button">Edit Profile</button>
          </div>

          <div className="mask-container">
            <div className="container-box">
              <div className="box-head">
                <div className="box-head-element">My account</div>
                <div className="box-head-element">
                  <button
                    style={{
                      backgroundColor: "#11cdef",
                      borderColor: "#11cdef",
                      borderRadius: "0.3rem",
                      color: "#f7fafc"
                    }}
                  >
                    Settings
                  </button>
                </div>
              </div>

              <div>
                <form>
                  <h5 style={{ color: "rgba(0, 0, 0, 0.329)" }}>
                    USER INFORMATION
                  </h5>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      margin: "2rem"
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label for="username">Username</label>
                      <input id="username" value="tristan.9"></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label for="email">Email</label>
                      <input id="email" value="keyurshah339@gmail.com"></input>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      margin: "2rem"
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label for="fname">First name</label>
                      <input id="fname" value="Keyur"></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label for="lname">Last Name</label>
                      <input id="lname" value="Shah"></input>
                    </div>
                  </div>
                </form>
                <hr />

                <form>
                  <h5 style={{ color: "rgba(0, 0, 0, 0.329)" }}>
                    CONTACT INFORMATION
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "2rem"
                    }}
                  >
                    <label for="address">Address</label>
                    <input
                      style={{ width: "20rem", marginLeft: "10rem" }}
                      id="address"
                      value="Bangalore,MG Road"
                    ></input>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      margin: "2rem"
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label for="city">City</label>
                      <input id="city" value="Bangalore"></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label for="country">Country</label>
                      <input id="country" value="India"></input>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label for="postal">Postal</label>
                      <input id="postal" value="Postal Code"></input>
                    </div>
                  </div>
                </form>
                <hr />

                <form>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label for="aboutme">About Me</label>
                    <input
                      style={{
                        margin: "auto",
                        height: "10rem",
                        width: "40rem"
                      }}
                      id="aboutme"
                    ></input>
                  </div>
                </form>
                <div className="fot">
                  <div style={{ color: "whitesmoke" }}>
                    © 2022{" "}
                    <a href="#pablo" style={{ color: "whitesmoke" }}>
                      Keyur Shah
                    </a>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div>
                      <a
                        href="https://github.com/keyurshah339"
                        style={{ color: "whitesmoke" }}
                      >
                        Github
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://-developer.netlify.app/"
                        style={{ color: "whitesmoke" }}
                      >
                        Web Portfolio
                      </a>
                    </div>
                  </div>
                </div>
                <div className="side-container-box">
                  <div className="card-profile-image">
                    <img
                      alt=""
                      className="rounded-circle"
                      src="https://avatars.githubusercontent.com/u/75299295?v=4"
                    />
                  </div>

                  <div className="social">
                    <div>
                      22
                      <h4 style={{ color: "rgba(0, 0, 0, 0.329)" }}>Photos</h4>
                    </div>

                    <div>
                      89
                      <h4 style={{ color: "rgba(0, 0, 0, 0.329)" }}>Photos</h4>
                    </div>
                  </div>

                  <div className="professional">
                    <h3>Keyur Shah,23</h3>
                    <h4 style={{ color: "rgba(0, 0, 0, 0.329)" }}>
                      Bangalore,India
                    </h4>

                    <h4 style={{ color: "rgba(0, 0, 0, 0.329)" }}>
                      Dayananda Sagar College of Engineering,Bangalore
                    </h4>

                    <Link to="#pablo">Show More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="side-navbar">
          <div>
            <h2 style={{ color: "#9999ff" }}>Keyur</h2>
            <div className="side-nav-element">
              <Link to="#pablo">
                {" "}
                <h4>Dashborad</h4>{" "}
              </Link>
              <Link to="#pablo">
                {" "}
                <h4>Icons</h4>{" "}
              </Link>
              <Link to="#pablo">
                {" "}
                <h4>Maps</h4>{" "}
              </Link>
              <Link to="#pablo">
                {" "}
                <h4>User Profile</h4>{" "}
              </Link>
              <Link to="#pablo">
                {" "}
                <h4>Login</h4>{" "}
              </Link>
              <Link to="#pablo">
                {" "}
                <h4>Register</h4>{" "}
              </Link>
              <Link to="me">
                <h4>My Profile </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <UserProfile />
    </div>
  );
}
