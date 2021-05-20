import React, {  useCallback, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education"
import Grid from "@material-ui/core/Grid";
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';

const App = () =>{
  const [resumeData , setResumeData] = useState({});
  const [sharedData , setSharedData] = useState({});
  const [open, setOpen] = useState(true);
  const [size1, setSize1] = useState(2);
  const [size2, setSize2] = useState(10);
  const [loading, setLoading] = useState(true);


  const toggleDrawer = () =>{
    if(open){
      setSize1(0);
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
    console.log(id, target);
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
  return <h1>loading...</h1>;
}
  return (
    <Grid container >
                 
                <Grid item md={size1} sm = {size1} xm = {size1} x1 = {size1}>
                    
                      <Drawer open={open} onClose={() => toggleDrawer()} variant="persistent"
                      anchor="left" >
                      <div className = "drawer">
               
                      <ChevronLeftIcon  className = "icon" onClick={() => toggleDrawer()} style = {{alignSelf:"center"}}>Open</ChevronLeftIcon>
                      
                      <div style={{position: "fixed",width: "270px"}}>
                      
                      <div class="p-4">
                        <h1 style={{paddingTop: "10px"}}><a href="index.html" class="logo" style={{paddingTop: "30px"}} >Apnik Jain <br/><span>Pre-Final Year B.Tech ECE
                              Student</span></a></h1>
                        <div class="">
                          <ul class="list-unstyled components mb-5">
                            <li>
                              <p onClick = {() => scrollHandler('about')}><span class="fa fa-home mr-3"></span> About Me</p>
                            </li>
                            <li>
                            <p onClick = {() => scrollHandler('education')}><span class="fa fa-book mr-3"></span> Education</p>
                            </li>
                            <li>
                              <a href="#experience"><span class="fa fa-laptop mr-3"></span> Experience</a>
                            </li>
                            <li>
                              <a href="#projects"><span class="fa fa-briefcase mr-3"></span> Projects</a>
                            </li>
                            <li>
                              <a href="#skills"><span class="fa fa-cogs mr-3"></span> Skills</a>
                            </li>
                            <li>
                              <a href="#achievements"><span class="fa fa-trophy mr-3"></span> Achievements</a>
                            </li>
                            <li>
                              <a href="#certificates"><span class="fa fa-certificate mr-3"></span> Certificates</a>
                            </li>
                            <li>
                              <a href="#coding"><span class="fa fa-code mr-3"></span> Coding Profiles</a>
                            </li>
                            <li>
                              <a href="#contact"><span class="fa fa-paper-plane mr-3"></span> Contact</a>
                            </li>
                          </ul>
              
                        </div>
                      </div>
                    </div>
                      
                      </div>
                      </Drawer>
                    
                </Grid>
                
                <Grid item md={size2} sm = {size2} xm = {size2} xl = {size2} >
                  <div>
                  <div class="github-corner" style = {{position:"fixed", zIndex:"10"}}>
                    {
                      open?null:<MenuIcon  className = "icon" onClick={() => toggleDrawer()}>Open</MenuIcon>
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
                      id = "3"
                      sharedSkills={sharedData.skills}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <Experience
                      id = "4"
                      resumeExperience={resumeData.experience}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <Projects
                      id = "2"
                      resumeProjects={resumeData.projects}
                      resumeBasicInfo={resumeData.basic_info}
                    />
                    <Footer sharedBasicInfo={sharedData.basic_info} />
                  </div>
                        
                </Grid>
                 
            </Grid>
  );

}

export default App;
