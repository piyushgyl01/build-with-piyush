import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

import logo from "./images/logo.svg";
import toggler from "./images/toggler.svg";
import hero from "./images/hero-img.png";
import arrow from "./images/arrow.svg";
import tools from "./images/tools.png";
import { projects } from "./Data.js";
import phone from "./images/phone.svg";
import git from "./images/git.svg";
import linkedin from "./images/linkedin.svg";
import x from "./images/x.svg";
import yt from "./images/yt.svg";
import ig from "./images/ig.svg";
import mail from "./images/mail.svg";

function App() {
  const [activeType, setActiveType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const projectTypes = [
    "All",
    "Web Development",
    "Mobile Development",
    "Product Design",
    "Others",
  ];

  const filteredProjects =
    activeType === "All"
      ? projects
      : projects.filter((project) => project.type.includes(activeType));

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top pt-4 mb-4">
        <div
          className="container py-2 px-4"
          style={{
            borderRadius: "2.4rem",
            border: "1px solid rgba(135, 113, 237, 0.25)",
            background: "#04020E",
            boxShadow: "-1px -1px 0px 0px #674AE9 inset",
          }}
        >
          <a className="navbar-brand" href="#hero" style={{ color: "#d9d0ff" }}>
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img src={toggler} alt="" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#d9d0ff" }}
                  href="#myStack"
                >
                  My Stack
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#d9d0ff" }}
                  href="#projectSection"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  target={"_blank"}
                  className="nav-link"
                  style={{ color: "#d9d0ff" }}
                  href="https://drive.google.com/file/d/13GPDshTmvzpJAvy7mL5Lm1mw3Lu9lHOw/view"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#d9d0ff" }}
                  href="#contactSection"
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              target="_blank"
              style={{ color: "#d9d0ff" }}
              className="text-decoration-none"
              href="https://calendly.com/piyush_goyal/meet-w-piyush"
            >
              {" "}
              <button
                className="btn btn-outline-success px-5 my-3"
                style={{
                  borderRadius: "100px",
                  border: "1px solid rgba(135, 113, 237, 0.50)",
                  background:
                    "radial-gradient(172.66% 52.24% at 50% 50%, rgba(82, 68, 151, 0.04) 0%, rgba(82, 68, 151, 0.40) 100%), #1D1635",
                }}
                type="submit"
              >
                <span className="text-white text-decoration-none">
                  Book a call
                </span>
              </button>{" "}
            </a>
          </div>
        </div>
      </nav>
      <section id="hero" className="container pb-4">
        <div className="row">
          <div className="col-md-6 pb-5 my-5">
            <p className="softwareAndDesigner">
              SOFTWARE ENGINEER CUM DESIGNER
            </p>
            <h1 className="hero-heading">
              Obsessed with <span id="designAndCode">design & code </span>{" "}
              <span id="remaining">plus everything in between</span>
            </h1>
            <p className="hero-text">
              hey, i'm piyush goyal, based out of delhi & bangalore, india. i
              don't care about titles or postions. i just to want to build
              software and that's it. to make that happen i'll learn everything
              and anything. becuase the impact, software had on me [both
              constructively & destructively] is insane, which just makes me
              pumps up and i just end up wanting to do same for the other
              people.
            </p>
            <a
              target="_blank"
              href="https://calendly.com/piyush_goyal/meet-w-piyush"
              style={{ color: "#f2efff" }}
            >
              <button style={{ color: "#f2efff" }} className="call py-3 px-5">
                Let's get on a call <img className="ms-3" src={arrow} alt="" />
              </button>{" "}
            </a>
          </div>
          <div className="col-md-6">
            <img src={hero} alt="" className="img-fluid" />
          </div>
        </div>
      </section>
      <section id="myStack" className="tools py-5 my-4">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <p className="letsTalk">TOOLS</p>
              <h2 className="reachOut">
                Without them I don't{" "}
                <span className="reachOutSolo"> feel alive</span>
              </h2>

              <p className="tools-text">
                Though i believe that having better or worse tools doesn't makes
                any difference. Because if you ask me the one who's wielding
                them makes or breaks the game
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <img src={tools} alt="" className="img-fluid" />
      </section>
      <section id="projectSection" className="projects py-5 my-4">
        <div className="container py-4">
          <p className="letsTalk text-center">Projects</p>
          <h2 className="reachOut text-center mb-4 pb-4">
            This feels like <span className="reachOutSolo">play to me</span> and
            I love every second of it
          </h2>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    className={`project-btn ${
                      activeType === type ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveType(type);
                      setCurrentPage(1);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-12 mt-3">
              <div className="row">
                {currentProjects.map((project) => (
                  <div className="col-md-12 pb-2 mb-4" key={project.id}>
                    <div
                      className="card"
                      style={{
                        backgroundColor: "#0E0C1E",
                        border: "1px solid rgba(135, 113, 237, 0.25)",
                      }}
                    >
                      <div className="row g-0">
                        <div className="col-md-6">
                          <a target="_blank" href={project.websiteUrl}>
                            <img
                              src={project.image}
                              className="img-fluid rounded-start"
                              alt={project.title}
                            />{" "}
                          </a>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <h5 className="card-title text-white project-title">
                              {project.title}
                            </h5>
                            <p className="card-text text-secondary project-description">
                              {project.description}
                            </p>
                            <div className="mb-3">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="badge me-1"
                                  style={{
                                    backgroundColor: "rgba(135, 113, 237, 0.1)",
                                    color: "#d9d0ff",
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div>
                              {project.type.includes("Product Design") ||
                              project.type.includes("Others") ? (
                                <a
                                  target="_blank"
                                  href={project.websiteUrl}
                                  className="btn btn-primary me-2 view-web"
                                >
                                  View Work
                                </a>
                              ) : (
                                <a
                                  target="_blank"
                                  href={project.websiteUrl}
                                  className="btn btn-primary me-2 view-web"
                                >
                                  Visit Website
                                </a>
                              )}
                              {project.type.includes("Product Design") ||
                              project.type.includes("Others") ? (
                                ""
                              ) : (
                                <a
                                  target="_blank"
                                  href={project.sourceCodeUrl}
                                  className="btn btn-secondary"
                                  style={{
                                    backgroundColor: "transparent",
                                    borderColor: "#d9d0ff",
                                    color: "#d9d0ff",
                                  }}
                                >
                                  View Source
                                </a>
                              )}{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                  <button
                    className={`project-btn me-2 ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className={`project-btn ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="contactSection" className="contact py-5 my-4">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="letsTalk">Let’s talk</p>
              <h2 className="reachOut mb-5 pb-3">
                Feel free to <span className="reachOutSolo"> reach out</span> to
                me on
              </h2>
            </div>
            <div className="row">
              <div className="d-flex align-items-center col-md-4 mb-3">
                <a href="mailto:piyush2022ug@gmail.com?subject=Build%20with%20Piyush">
                  <img src={mail} alt="Email Icon" className="me-3" />
                </a>
                <div className="contactDetails">
                  <p className="mb-0 fw-medium">Email Me</p>
                  <a
                    href="mailto:piyush2022ug@gmail.com?subject=Build%20with%20Piyush"
                    className="mb-0"
                    style={{ color: "#d9d0ff" }}
                  >
                    piyush2022ug@gmail.com
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center col-md-4 mb-3">
                <a href="https://wa.me/919319935187?text=Hey%20Piyush,%20let's%20collaborate!">
                  {" "}
                  <img src={phone} alt="Phone Icon" className="me-3" />
                </a>
                <div className="contactDetails">
                  <p className="mb-0 fw-medium">WhatsApp Me</p>
                  <a
                    style={{ color: "#d9d0ff" }}
                    href="https://wa.me/919319935187?text=Hey%20Piyush,%20let's%20collaborate!"
                  >
                    <p className="mb-0 ">+91 9319935187</p>
                  </a>
                </div>
              </div>
              <div className="d-flex col-md-4 align-items-center">
                <a href="https://github.com/piyushgyl01">
                  <img src={git} alt="GitHub Icon" className="me-3" />
                </a>
                <div className="contactDetails">
                  <p className="mb-0 fw-medium">Github</p>
                  <p className="mb-0">
                    <a
                      href="https://github.com/piyushgyl01"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d9d0ff" }}
                    >
                      https://github.com/piyushgyl01
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div>
              <img src={logo} alt="Piyush Goyal" className="footer-logo" />
            </div>

            {/* Social Media Icons */}
            <div className="d-flex">
              <a
                href="https://github.com/piyushgyl01"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={git} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-goyal-4a1261231/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://x.com/piyush_gyl" // Replace with your Twitter URL
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={x} alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com/piyush.gyl/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={ig} alt="Instagram" />
              </a>
              <a
                href="https://www.youtube.com/@piyushgoyal30/videos" // Replace with your YouTube URL
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={yt} alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
