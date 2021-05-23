import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from "react-bootstrap/Badge";

const useStyles = makeStyles({
  card: {
    minHeight: "10rem",
    cursor:"default"
  },
  root:{
    maxWidth:"55rem",
    paddingTop:"2rem",
    backgroundColor:"white !important"
  }
});

const Projects = ({resumeProjects, resumeBasicInfo}) => {
    const classes = useStyles();
    if (resumeProjects && resumeBasicInfo) {
      var sectionName = resumeBasicInfo.section_name.projects;
      var projects = resumeProjects.map((projects) =>{
        return (
          <Grid item md = {12} key = {projects.title} style = {{marginTop:"2rem", display:"flex", justifyContent:"center"}}>
              <Card className = {classes.root}>
                 
                  <CardContent className = {classes.card}>
                      <Typography gutterBottom variant="h4" component="h2">
                        {projects.title}
                      </Typography>
                      <h4>
                        {projects.description}
                      </h4>
                      <br/>
                      {
                        projects.technologies.map((technology, i) => {
                          return (
                            <Badge  className="main-badge mr-2 mb-2" key={i} style = {{maxWidth:"22rem"}}>
                              {technology.name}
                            </Badge>
                          );
                        })
                      }
                      
                  </CardContent>
                
                <CardActions style = {{marginLeft:"0.7rem"}}>
                  {
                    projects.url === "" ? null:<a href = {projects.url} target = "_blank" rel="noopener noreferrer" style = {{ color: "white", textDecoration:"none"}}><Button size="large" variant="text" style = {{backgroundColor : "#1F1F1F", color: "white", textDecoration:"none"}}>
                                                  View Project
                                                </Button></a>
                  }
                  {
                    projects.gitUrl === "" ? null:<a href = {projects.gitUrl} target = "_blank" rel="noopener noreferrer" style = {{ color: "white", textDecoration:"none"}}><Button size="large" variant="text" style = {{backgroundColor : "#1F1F1F", color: "white", textDecoration:"none"}}>
                                                    View Code
                                                  </Button></a>
                  }
                  
                </CardActions>
            </Card>
          </Grid>
        )
      });
    }

    return (
      <section id="projects">
        <div>
          <h1 className="section-title" style={{ color: "white" }}>
            <span>{sectionName}</span>
          </h1>
          <Grid container direction="row"
          justify="center"
          alignItems="center">
                 
               {projects}
                
                 
            </Grid>
        </div>
      </section>
    );
  
}

export default Projects;
