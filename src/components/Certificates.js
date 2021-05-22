import React from "react";
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
      width:"40rem",
      height:"auto"
  },
  imgDiv : {
      display:"flex",
      justifyContent:"center",
      flexDirection:"column"
  }
});

const Certificates = ({resumeCertificates, resumeBasicInfo}) => {
    const classes = useStyles();
    if (resumeCertificates && resumeBasicInfo) {
      var sectionName = resumeBasicInfo.section_name.certificates;
      var certificates = resumeCertificates.map((certificates) =>{
        return (
          <Grid md = {4} spacing = {1} style = {{marginTop:"2rem", display:"flex", justifyContent:"center"}}>
              <div className = {classes.imgDiv}>
                <h3 style ={{alignSelf:"center"}}>{certificates.title}</h3>
                <a href = {certificates.url} target = "_blank"><img src ={certificates.src}  className = {classes.image}/></a>
              </div>

            
          </Grid>
        )
      });
    }

    return (
      <section id="certificates">
        <div>
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <Grid container direction="row"
          justify="center"
          alignItems="center">
                 
               {certificates}
                
                 
            </Grid>
        </div>
      </section>
    );
  
}

export default Certificates;
