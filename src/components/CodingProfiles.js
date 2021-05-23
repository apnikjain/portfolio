import React from "react";

import { Icon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';
import geeksforgeeksIcon from '@iconify-icons/simple-icons/geeksforgeeks';
import hackerrankIcon from '@iconify-icons/simple-icons/hackerrank';


import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles({
  card: {
    minHeight: "10rem",
    width:"100rem"
  },
  root:{
    maxWidth:"55rem",
    paddingTop:"2rem",
  },
  image:{
      width:"10rem",
      height:"auto",
      color:"white",
      alignSelf:"center"
  },
  imgDiv : {
      display:"flex",
      justifyContent:"center",
      flexDirection:"column"
  }
});


const CodingProfiles = ({sharedProfiles, resumeBasicInfo}) => {
  
  
    const classes = useStyles();
    if (sharedProfiles && resumeBasicInfo) {
      
      var sectionName = resumeBasicInfo.section_name.codingprofiles;
      var Profiles = sharedProfiles.map(function (profiles) {
        
        
        
        
        return (
          <Grid item key = {profiles.title} md = {4} sm = {6} xs = {12} style = {{marginTop:"2rem", display:"flex", justifyContent:"center"}}>
              <div className = {classes.imgDiv}>
                <a href = {profiles.url} target = "_blank" rel="noopener noreferrer" style = {{alignSelf:"center"}}>
                { 
                  profiles.icon === "leetcode" ? <Icon icon={leetcodeIcon} className = {classes.image}/> : 
                    profiles.icon === "gfg" ? <Icon icon={geeksforgeeksIcon} className = {classes.image}/> :
                      profiles.icon === "hr"? <Icon icon={hackerrankIcon} className = {classes.image}/> : null
                  
                }
                  </a>
                <br/>
                <h3 style ={{alignSelf:"center", color:"white"}}>{profiles.title}</h3>
                <h3 style ={{alignSelf:"center", color:"white"}}>{profiles.description}</h3>
              </div>

            
          </Grid>
        );
      });
    }

    return (
      <section id="codingprofiles">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <Grid container direction="row" spacing = {1}
          justify="center"
          alignItems="center">
                 
               {Profiles}
                
                 
            </Grid>
        </div>
      </section>
    );
  
}

export default CodingProfiles;
