import React, {  useCallback, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education"
import Certificates from "./components/Certificates"
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from "react-switch";

const App = () =>{
  const [resumeData , setResumeData] = useState({});
  const [sharedData , setSharedData] = useState({});
  const [open, setOpen] = useState(false);
  const [size1, setSize1] = useState("auto");
  const [size2, setSize2] = useState(12);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);
  

  const onThemeSwitchChange = (checked) => {
    setChecked(checked );
    setTheme();
  }

  const setTheme = () => {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  const toggleDrawer = () =>{
    if(open){
      setSize1("auto");
      setSize2(12);
      
    }
    else{
      setSize1(2);
      setSize2(10);
    }
    setOpen(!open)
    
  }

  const scrollHandler = (id) =>{
    var target = document.getElementById(id)
    
    window.scroll({top: target.offsetTop, behavior: 'smooth'});
  }

  const loadData = useCallback(async() => {
    setLoading(true);

    const response1 = await fetch('portfolio_shared_data.json');
    
    const resData1 = await response1.json();
    
    setSharedData(resData1);
    document.title = `${resData1.basic_info.name}`;
    
    const response2 = await fetch('resumeData.json');
    const resData2 = await response2.json();
    setResumeData(resData2);
    
    setLoading(false);

    
  },[])

  useEffect(() =>{
    loadData();
  },[loadData]) 

  

if(loading){
  return (
    <div style = {{display:'flex', justifyContent:'center', alignItems:"center", height:"100vh"}}>
      <CircularProgress />
    </div>

  )
}
  return (
    <Grid container >
                 
                <Grid item md={size1} sm = {size1} xm = {size1} x1 = {size1}>
                    
                      <Drawer open={open} onClose={() => toggleDrawer()} variant="persistent"  anchor="left" className = "root">
                      <div className = "drawer" style = {{backgroundColor: "#1F1F1F"}}>
               
                      <ChevronLeftIcon style = {{cursor:"pointer"}}  className = "icon" onClick={() => toggleDrawer()} >Open</ChevronLeftIcon>
                      
                      <div style={{position: "fixed",width: "270px"}}>
                      
                      <div className="p-4" style = {{    color: "white",
                        padding: "2.5rem!important",
                        fontSize: "19px"}}>
                        <h1 style={{paddingTop: "10px", color:"white"}}>Apnik Jain <br/><br/><span><h2>Pre-Final Year B.Tech ECE
                        Student</h2></span></h1>
                        <div style = {{paddingTop: "5rem"}}>
                          <ul className="list-unstyled components mb-5">
                            <li style = {{cursor:"pointer"}}>
                              <p onClick = {() => scrollHandler('about')}><span className="fa fa-home mr-3"></span> About Me</p>
                            </li>
                            <li style = {{cursor:"pointer"}}>
                            <p onClick = {() => scrollHandler('education')}><span className="fa fa-book mr-3"></span> Education</p>
                            </li>
                            <li style = {{cursor:"pointer"}}>
                              <p onClick = {() => scrollHandler('skills')}><span className="fa fa-cogs mr-3"></span> Skills</p>
                            </li>
                            <li style = {{cursor:"pointer"}}>
                              <p onClick = {() => scrollHandler('experience')}><span className="fa fa-book mr-3"></span> Experience</p>
                            </li>
                            <li style = {{cursor:"pointer"}}>
                              <p onClick = {() => scrollHandler('projects')}><span className="fa fa-briefcase mr-3"></span> Projects</p>
                              
                            </li>
                            
                            <li style = {{cursor:"pointer"}}>
                              <p onClick = {() => scrollHandler('certificates')}><span className="fa fa-certificate mr-3"></span> Certificates</p>
                            </li>
                            <li style = {{cursor:"pointer"}}>
                              <p onClick = {() => scrollHandler('codingprofiles')}><span className="fa fa-code mr-3"></span> Coding Profiles</p>
                              
                            </li>
                            <li style = {{cursor:"pointer"}}>  
                              <p onClick = {() => scrollHandler('contact')}><span className="fa fa-paper-plane mr-3"></span> Contact</p>
                              
                            </li>
                          </ul>
              
                          <Switch
                            checked={checked}
                            onChange={onThemeSwitchChange}
                            offColor="#353535"
                            onColor="#353535"
                            className="react-switch mx-auto"
                            width={90}
                            height={40}
                            uncheckedIcon={
                              <span
                                className="iconify"
                                data-icon="emojione:crescent-moon"
                                data-inline="false"
                                style={{
                                  display: "block",
                                  height: "100%",
                                  fontSize: 25,
                                  textAlign: "end",
                                  marginLeft: "20px",
                                  color: "#353239",
                                }}
                              ></span>
                            }
                            checkedIcon={
                              <span
                                className="iconify"
                                data-icon="emojione:sun"
                                data-inline="false"
                                style={{
                                  display: "block",
                                  height: "100%",
                                  fontSize: 25,
                                  textAlign: "end",
                                  marginLeft: "10px",
                                  color: "#353239",
                                }}
                              ></span>
                            }
                            id="icon-switch"
                          />
                        </div>
                      </div>
                    </div>
                      
                      </div>
                      </Drawer>
                    
                </Grid>
                
                <Grid item md={size2} sm = {size2} xm = {size2} xl = {size2} >
                  <div>
                  <div className="github-corner" style = {{position:"fixed", zIndex:"10"}}>
                    {
                      open?null:<MenuIcon className = "menu-icon" style = {{color:"black",margin: "1rem 1.5rem", cursor:"pointer"}}  onClick={() => toggleDrawer()}>Open</MenuIcon>
                    }
                    
                  </div>
                  
                  
      
                    
                    <Header sharedData={sharedData.basic_info} open = {open} toggleDrawer = {toggleDrawer} />
                    
                    <About
                      
                      resumeBasicInfo={resumeData.basic_info}
                      sharedBasicInfo={sharedData.basic_info}
                    />
                    <Education
                      
                      resumeEducation={resumeData.education}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    
                    <Skills
                      
                      sharedSkills={sharedData.skills}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <Experience
                      
                      resumeExperience={resumeData.experience}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <Projects

                      resumeProjects={resumeData.projects}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <Certificates

                      resumeCertificates={resumeData.certificates}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <CodingProfiles
                      
                      sharedProfiles={resumeData.codingprofiles}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <Contact

                      resumeContact={sharedData.basic_info}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <Footer sharedBasicInfo={sharedData.basic_info} />
                  </div>
                        
                </Grid>
                 
            </Grid>
  );

}

export default App;
