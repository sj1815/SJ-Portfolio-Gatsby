import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pic1 from '../assets/images/pic01.png';
import pic2 from '../assets/images/pic02.png';
import pic3 from '../assets/images/pic03.png';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.png';
import pic6 from '../assets/images/pic06.png';
import pic7 from '../assets/images/pic07.png';
import pic8 from '../assets/images/pic08.jpg';
import pic9 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.png';
import pic11 from '../assets/images/pic11.jpg';

import saurabhlogo from '../assets/images/saurabhlogo.png';
import pdf from '../assets/documents/Resume_S_Joshi.pdf';
import Scroll from '../components/Scroll';


const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <a href="/#" className="image logo"> 
                <img src={saurabhlogo} alt=""/>
            </a> 
            {/* <h2 className="alt">
              Hi! I'm <strong>Saurabh.</strong>
            </h2> */}
            <p>Information Sciences and Technology Masters Student 
             @ R.I.T</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Following are some of My projects.
          </p>
          <div id="download"> 
            <a href={pdf} className="button" target="_blank">
              <i className="fa fa-download"></i>
                &nbsp; Download Resume
              </a>
          </div>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                
                <div className="card">
                  <div className ="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic2} alt=""/>
                      </a>  
                      <span className="card-title">RESTful API Client for Emergency Service Directory</span>
                    </div>
                    <div className="card-content">
                      <p>Designed and developed using module pattern, a Web portal for emergency services with 
                        User Interface.</p>
                    </div>
                  </div>
                  <div className="card-action">
                    <a href="https://github.com/sj1815/RESTful-API-Client-for-Emergency-Service-Directory"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>

              <article className="item">
                <div className="card">
                  <div className="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic3} alt=""/>
                      </a>  
                      <span className="card-title">Enhanced RTO Driving License system</span>
                    </div>
                    <div className="card-content">
                      <p>A prototype system which can work on any touchscreen mobile device containing NFC by law enforcement 
                        officer. </p>
                    </div>
                  </div>
                  <div className="card-action">
                    <a href="https://github.com/sj1815/RTO_Automation"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>

              <article className="item">
                <div className="card">
                  <div className="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic4} alt=""/>
                      </a>  
                      <span className="card-title">Tweets Search application</span>
                    </div>
                    <div className="card-content">
                      <p>Simple application to search tweets using MongoDB and Node.js. 
                        Based on the user query the application creates a list on the 
                        Frontend.</p>
                    </div>
                  </div>
                  
                  <div className="card-action">
                    <a href="https://github.com/sj1815/MongoDb-Tweet-Search-Tool"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-4 col-12-mobile">
              <article className="item">
                <div className="card">
                  <div className= "cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic5} alt=""/>
                      </a>  
                      <span className="card-title">Weather application using React.js</span>
                    </div>
                    <div className="card-content">
                      <p>Single page weather application with react.js and Open Weather Map API.
                        Application provided latest weather update of various cities around the world. 
                        Undertook a components-based approach using React framework and used additional libraries 
                        such as moment.js for date manipulation.</p>
                    </div>
                  </div>
                  <div className="card-action">
                    <a href="https://github.com/sj1815/React-Weather-APP"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>

              <article className="item">
                <div className="card">
                  <div className="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic9} alt=""/>
                      </a>  
                      <span className="card-title">Fake news Data Analysis</span>
                    </div>
                    <div className="card-content">
                      <p>Creation of data models such as linear regression to get meaningful analysis 
                        on data on fake news. The data collected was cleaned and preprocessed using text 
                        processing techniques like stemming after which model is trained and tested to 
                        find details of menace cause by fake news in the modern information domain. 
                      </p>
                    </div>
                  </div>
                  <div className="card-action">
                    <a href="https://github.com/sj1815/Fake-news-Analysis"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>

              <article className="item">
                <div className="card">
                  <div className="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic1} alt=""/>
                      </a>  
                      <span className="card-title">Performance Appraisal System</span>
                    </div>
                    <div className="card-content">
                      <p>Designed and developed appraisal system for diploma college 
                        in which students can appraise the performance of the professors 
                        in confidential pattern.</p>
                    </div>
                  </div>
                  <div className="card-action">
                    <a href="https://github.com/sj1815"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-4 col-12-mobile">
              <article className="item">
                <div className="card">
                  <div className="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic6} alt=""/>
                      </a>  
                      <span className="card-title"> Soccer Dream Team Web application</span>
                    </div>
                    <div className="card-content">
                      <p>Vanilla JavaScript application exhibiting the dynamically created dropdown menu 
                        after selecting each choice to create a futsal (five-aside football) team. 
                        The project showcased the use of DHTML animations along with features like form 
                        validation for the user and local storage along with Cookies.</p>
                    </div>
                  </div>
                  
                  <div className="card-action">
                    <a href="https://github.com/sj1815/Javascript-Soccer-Dream-team"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>

              <article className="item">
                <div className="card">
                  <div className="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic7} alt=""/>
                      </a>  
                      <span className="card-title">Data Warehouse creation</span>
                    </div>
                    <div className="card-content">
                      <p>Created a Data warehouse project where data from three different division 
                        of a company was cleaned and transformed using MS Excel and Pentaho before 
                        loading in the star schema database created using MySQL Workbench (ETL). 
                       </p>
                    </div>
                  </div>
                  
                  <div className="card-action">
                    <a href="https://github.com/sj1815/Data-Warehouse"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>

              <article className="item">
                <div className="card">
                  <div className="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic10} alt=""/>
                      </a>  
                      <span className="card-title">California Fire Arc-Gis Mapping</span>
                    </div>
                    <div className="card-content">
                      <p>GIS based analysis of forest fires in the state of California.Created various GIS based maps
                        for understanding the threats related to forest fires and option for its mitigation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="card-action">
                    <a href="https://github.com/sj1815/Arc-GIS-California-Fire"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-4 col-12-mobile">
              <article className="item">
                <div className="card">
                  <div className="cardHeight">
                    <div className="card-image">
                      <a href="/#" className="image fit"> 
                        <img src={pic11} alt=""/>
                      </a>  
                      <span className="card-title"> Mobile App review based classification</span>
                    </div>
                    <div className="card-content">
                      <p>Text mining and analysis of the unstructured data from google play of various 
                        android applications. Sentimental Analysis using Bayesian classification algorithm 
                        was successfully demonstrated to obtain meaningful results on Google Play Reviews.</p>
                    </div>
                  </div>
                  
                  <div className="card-action">
                    <a href="https://github.com/sj1815/Mobile-App-Review-Classification"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </article>
            
            </div>
            
          
          
          </div>

         


          {/* <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Ipsum Feugiat</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Rhoncus Semper</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Magna Nullam</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Natoque Vitae</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div>
          </div> */}
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
          Hi, I am Saurabh Joshi, currently a graduate student at Rochester Institute of Technology(RIT), New York 
          persuing a major in Information Sciences and Technologies with interests in Full-Stack Development and Data Analytics. 
          I am at present actively looking for Full-time positions.I earned my Bachelor's degree in Information Technology from 
          Mumbai University, India from 2013 to 2016. Previously, I also completed a diploma in Computer Technology 
          from 2010 to 2013 from Maharashtra State Board of Technical Education. In my free time I like travelling to new places, am a big 
          fan of European Soccer and enjoy cooking delicious Vegetarian food.

          </p>
        </div>
         
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2008"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Senior Secondary Education.</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, Maharashtra, India.</h4>
            <p>
              Completed School in Senior Secondary Education.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008-2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            //icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Higher Secondary Education.</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, Maharashtra, India.</h4>
            <p>
              Completed higher secondary education with major in science and decided to persue further education in Technical Education.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            //icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Thakur Polytechnic</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, Maharashtra, India</h4>
            <p>
              Diploma in Computer Technology under Maharashtra State Board of Technical Education.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            //icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Vidyalankar Institute of Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, Maharashtra, India</h4>
            <p>
              Bachelor of Engineering from Mumbai University,India in Information Technology.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017- December 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            //icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Rochester Institute of Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Rochester, NY, USA</h4>
            <p>
              Masters in Information Sciences and Technology with  interests in Full-Stack Development and Data Analytics.
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>  

      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
           Contact me at
           <br/>
           <i className="fa fa-mobile" aria-hidden="true">&nbsp; +1(585)-309-3540</i>
           <br/>
           <i className="fa fa-envelope-o" aria-hidden="true">&nbsp; saurabhvjjoshi@gmail.com</i>
           <br/>
           <i className="fa fa-envelope-o" aria-hidden="true">&nbsp; sj1815@rit.edu</i>
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
