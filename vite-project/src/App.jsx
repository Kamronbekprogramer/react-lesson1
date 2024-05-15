import main_img from "./assets/Ellipse 1.png";
import work_img1 from "./assets/Rectangle 30.png";
import work_img2 from "./assets/Rectangle 32.png";
import work_img3 from "./assets/Rectangle 34.png";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <body>
        <div className="main_section">
          <div className="container">
            <div className="main_inner_section">
              <div className="main_text">
                <h1>
                  Hi, I am John, <br /> Creative Technologist
                </h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet <br /> sint. Velit officia consequat duis enim velit
                  mollit. Exercitation veniam <br /> consequat sunt nostrud
                  amet.
                </p>
                <button>Download Resume</button>
              </div>
              <div className="main_img">
                <img src={main_img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="posts_section">
          <div className="container">
            <div className="posts">
              <div className="posts_text">
                <h3>Recent posts</h3>
                <button>
                  <a href="#">View all</a>
                </button>
              </div>
              <div className="posts_card">
                <div className="card">
                  <h1>Making a design system from scratch</h1>
                  <div className="data">
                    <p>12 Feb 2020</p>
                    <p>|</p>
                    <p>design, Pattern</p>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="card">
                  <h1>Making a design system from scratch</h1>
                  <div className="data">
                    <p>12 Feb 2020</p>
                    <p>|</p>
                    <p>design, Pattern</p>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="works_section">
          <div className="container">
            <div className="works">
              <h1>Featured works</h1>
              <div className="work">
                <div className="work-img">
                  <img src={work_img1} alt="" />
                </div>
                <div className="work-text">
                  <h1>Designing Dashboards</h1>
                  <div className="dashboard">
                    <div className="year">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit <br /> officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt <br /> nostrud
                    amet.
                  </p>
                </div>
              </div>
              <div className="border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="858"
                  height="2"
                  viewBox="0 0 858 2"
                  fill="none"
                >
                  <path d="M0 1L858 1.00008" stroke="#E0E0E0" />
                </svg>
              </div>
              <div className="work">
                <div className="work-img">
                  <img src={work_img2} alt="" />
                </div>
                <div className="work-text">
                  <h1>Vibrant Portraits of 2020</h1>
                  <div className="dashboard">
                    <div className="year">
                      <p>2018</p>
                    </div>
                    <p>Illustration</p>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit <br /> officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt <br /> nostrud
                    amet.
                  </p>
                </div>
              </div>
              <div className="border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="858"
                  height="2"
                  viewBox="0 0 858 2"
                  fill="none"
                >
                  <path d="M0 1L858 1.00008" stroke="#E0E0E0" />
                </svg>
              </div>
              <div className="work">
                <div className="work-img">
                  <img src={work_img3} alt="" />
                </div>
                <div className="work-text">
                  <h1>36 Days of Malayalam type</h1>
                  <div className="dashboard">
                    <div className="year">
                      <p>2018</p>
                    </div>
                    <p>Typography</p>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit <br /> officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt <br /> nostrud
                    amet.
                  </p>
                </div>
              </div>
              <div className="border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="858"
                  height="2"
                  viewBox="0 0 858 2"
                  fill="none"
                >
                  <path d="M0 1L858 1.00008" stroke="#E0E0E0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
          <div className="footer_icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H13.2422V19.3945H9.72656V14.1211H13.2422V10.5469C13.2422 7.63893 15.6077 5.27344 18.5156 5.27344H23.8477V10.5469H18.5156V14.1211H23.8477L22.9688 19.3945H18.5156V30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0Z"
                fill="#21243D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M21.7209 0H8.27874C3.71384 0 0 3.71402 0 8.27892V21.7211C0 26.2862 3.71384 30 8.27874 30H21.7209C26.2862 30 30 26.286 30 21.7211V8.27892C30.0002 3.71402 26.2862 0 21.7209 0ZM27.3384 21.7211C27.3384 24.8185 24.8185 27.3383 21.7211 27.3383H8.27874C5.18153 27.3384 2.66175 24.8185 2.66175 21.7211V8.27892C2.66175 5.18171 5.18153 2.66175 8.27874 2.66175H21.7209C24.8183 2.66175 27.3383 5.18171 27.3383 8.27892V21.7211H27.3384Z"
                fill="#21243D"
              />
              <path
                d="M15 7.27014C10.7375 7.27014 7.26978 10.7379 7.26978 15.0004C7.26978 19.2627 10.7375 22.7303 15 22.7303C19.2625 22.7303 22.7303 19.2627 22.7303 15.0004C22.7303 10.7379 19.2625 7.27014 15 7.27014ZM15 20.0683C12.2054 20.0683 9.93152 17.7949 9.93152 15.0002C9.93152 12.2054 12.2052 9.93171 15 9.93171C17.7948 9.93171 20.0685 12.2054 20.0685 15.0002C20.0685 17.7949 17.7947 20.0683 15 20.0683Z"
                fill="#21243D"
              />
              <path
                d="M23.0545 5.01318C22.5417 5.01318 22.0379 5.2208 21.6757 5.58457C21.3118 5.94657 21.1025 6.45053 21.1025 6.96513C21.1025 7.47814 21.3119 7.98192 21.6757 8.34569C22.0377 8.70769 22.5417 8.91708 23.0545 8.91708C23.5691 8.91708 24.0713 8.70769 24.435 8.34569C24.7988 7.98192 25.0064 7.47796 25.0064 6.96513C25.0064 6.45053 24.7988 5.94657 24.435 5.58457C24.073 5.2208 23.5691 5.01318 23.0545 5.01318Z"
                fill="#21243D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="30"
              viewBox="0 0 37 30"
              fill="none"
            >
              <path
                d="M36.9231 3.55154C35.55 4.15385 34.0869 4.55308 32.5615 4.74692C34.1308 3.81 35.3285 2.33769 35.8915 0.563077C34.4285 1.43538 32.8131 2.05154 31.0915 2.39538C29.7023 0.916154 27.7223 0 25.5623 0C21.3715 0 17.9977 3.40154 17.9977 7.57154C17.9977 8.17154 18.0485 8.74846 18.1731 9.29769C11.88 8.99077 6.31154 5.97462 2.57077 1.38C1.91769 2.51308 1.53462 3.81 1.53462 5.20615C1.53462 7.82769 2.88462 10.1515 4.89692 11.4969C3.68077 11.4738 2.48769 11.1208 1.47692 10.5646C1.47692 10.5877 1.47692 10.6177 1.47692 10.6477C1.47692 14.3262 4.10077 17.3815 7.54154 18.0854C6.92538 18.2538 6.25385 18.3346 5.55692 18.3346C5.07231 18.3346 4.58308 18.3069 4.12385 18.2054C5.10462 21.2031 7.88769 23.4069 11.1969 23.4785C8.62154 25.4931 5.35154 26.7069 1.81154 26.7069C1.19077 26.7069 0.595385 26.6792 0 26.6031C3.35308 28.7654 7.32692 30 11.6123 30C25.5415 30 33.1569 18.4615 33.1569 8.46C33.1569 8.12538 33.1454 7.80231 33.1292 7.48154C34.6315 6.41538 35.8938 5.08385 36.9231 3.55154Z"
                fill="#21243D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0ZM10.6055 23.7891H7.08984V11.4844H10.6055V23.7891ZM10.6055 9.72656H7.08984V6.21094H10.6055V9.72656ZM22.9102 23.7891H19.3945V16.7578C19.3945 15.7887 18.6058 15 17.6367 15C16.6676 15 15.8789 15.7887 15.8789 16.7578V23.7891H12.3633V11.4844H15.8789V12.147C16.7999 11.8607 17.3982 11.4844 18.5156 11.4844C20.8999 11.4869 22.9102 13.6258 22.9102 16.1536V23.7891Z"
                fill="#21243D"
              />
            </svg>
          </div>
          <p>Copyright ©2020 All rights reserved</p>
          </div>
        </footer>
      </body>
    </>
  );
}

export default App;
