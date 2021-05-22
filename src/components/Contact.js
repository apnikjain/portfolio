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

const Contact = ({resumeContact, resumeBasicInfo}) => {
    const classes = useStyles();
    if (resumeContact && resumeBasicInfo) {
      var sectionName = resumeBasicInfo.section_name.contact;
      
      }
    
    

    return (
      <section id="contact">
        <div>
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row aligner" style={{height: '100%'}}>
          
          
            <div className = "contact-text">
              <br/>
              <h1 className="mb-0">
                {resumeContact.name}
              </h1>
              <div className="title-container">
                <h2>{resumeContact.titles}</h2>
              </div>
              <div className="title-container">
                <h2>Email: </h2><h3>{resumeContact.email}</h3>
              </div>
              <br/>
              <div className="title-container">
                <h2>Location: </h2><h3>{resumeContact.location}</h3>
              </div>
              <br/>
              <div className="title-container">
                <h2>Resume: </h2><a href = {resumeContact.resume} target="_blank"><i class="fa fa-download fa-2x text-grey424242" aria-hidden="true"></i></a>
              </div>
              
              
            </div>
          
        </div>
          
        </div>
      </section>
    );
  
}

export default Contact;
