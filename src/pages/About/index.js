import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Typography,
  Link,
  List,
  ListItem,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  aboutPage: {
    backgroundColor: theme.palette.black,
    minHeight: "100vh",
    padding: "90px 0 64px",
  },
  aboutPageContent: {
    margin: "0 auto",
    width: "60%",
    height: "100%",
    textAlign: "left",
    color: theme.palette.white,
    backgroundColor: theme.palette.black,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "0 48px 32px",
    },
  },

  aboutPageLeader: {
    fontSize: "24px",
    lineHeight: "30px",
  },
  gitHubIcon: {
    marginBottom: "-4px",
  },
  paragraphContent: {
    lineHeight: "24px",
  },
  link: {
    textDecoration: "none",
    fontWeight: 700,
    color: theme.palette.yellow,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.aboutPage} elevation={0} maxWidth={false}>
      <Paper className={classes.aboutPageContent} elevation={0}>
        <Typography className={classes.aboutPageLeader} paragraph>
          We are a diverse and growing community who believe in the power of{" "}
          <Link
            className={classes.link}
            href="https://crystalproject-info.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            technology and engaging products as tools for eradicating injustice.
          </Link>
        </Typography>
        <Typography
          className={classes.paragraphContent}
          variant="body1"
          paragraph
        >
          One week after the killing of George Floyd on the streets of
          Minneapolis, we decided to build our first product. Crystal is a
          community curated database of US law enforcement officers and
          agencies. By empowering citizens to contribute in addition to
          accessing data about their local police and law enforcement agencies,
          we envision Crystal becoming a trusted bedrock of transparent,
          accountable and collective law enforcement.
        </Typography>
        <Typography paragraph>
          <Link
            className={classes.link}
            href="http://docs.google.com/forms/d/e/1FAIpQLScjbFNwXTWvcoYDZNAeVwmhUITq_kjIiri6l4ZsrPXLEEOZ3Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get involved with Crystal
          </Link>
        </Typography>
        <Typography
          className={classes.paragraphContent}
          variant="body1"
          paragraph
        >
          The beta version of our open source app integrates existing public
          police officers' reports into a searchable database. We are displaying
          previous incidents of misconduct and cases where officers have been
          commended for outstanding performance.
        </Typography>
        <Typography paragraph>
          <Link
            className={classes.link}
            href="https://trello.com/invite/b/gabFGnhB/5f3c74b8836b960385326e9bf2f92c59/crystal-mvp-feedback-tickets"
            target="_blank"
            rel="noopener noreferrer"
          >
            Provide feedback
          </Link>
        </Typography>
        <Typography
          className={classes.paragraphContent}
          variant="body1"
          paragraph
        >
          Our goal is to empower citizens to report and curate an accurate
          record of police officer behavior across the country. We hope to build
          upon and incorporate the excellent work being done by a number of
          projects, including{" "}
          <Link
            className={classes.link}
            href="https://www.raheem.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raheem
          </Link>
          , the Invisible Institute’s{" "}
          <Link
            className={classes.link}
            href="https://beta.cpdp.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Citizen Police Data Project
          </Link>
          , the Washington Post’s{" "}
          <Link
            className={classes.link}
            href="https://www.washingtonpost.com/graphics/investigations/police-shootings-database/"
            target="_blank"
            rel="noopener noreferrer"
          >
            database of fatal police shootings
          </Link>
          , and USA Today’s{" "}
          <Link
            className={classes.link}
            href="https://www.usatoday.com/in-depth/news/investigations/2019/04/24/biggest-collection-police-accountability-records-ever-assembled/2299127002/"
            target="_blank"
            rel="noopener noreferrer"
          >
            database of police misconduct records
          </Link>
          , among many others. We believe that police officers nationwide should
          have a public-facing profile, which allows anyone to track
          praiseworthy moments and incidents of malpractice.
        </Typography>
        <Typography
          className={classes.paragraphContent}
          variant="body1"
          paragraph
        >
          Alongside Crystal, we are building:
          <List>
            <ListItem>
              Mechanisms for communication, collaboration, and cooperation to
              allow interactions between police and the community
            </ListItem>
            <ListItem>
              A live feed of user-generated media showing encounters with the
              police
            </ListItem>
            <ListItem>
              Automated accountability procedures and reporting to support
              communities in documenting their interactions with law enforcement
            </ListItem>
          </List>
        </Typography>

        <Typography
          className={classes.paragraphContent}
          variant="body1"
          paragraph
        >
          Crystal’s database has over 17,000 police records — most of which need
          to be community-vetted. There are more waiting to be uploaded, and we
          could use some help from the open-source community! Consider
          volunteering with Crystal and join{" "}
          <Link
            className={classes.link}
            href="https://join.slack.com/t/crystalpolice/shared_invite/zt-essyn1xu-G5CAEuWgvSaZ04iIQ11FCQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            our Slack
          </Link>
          .
        </Typography>

        <Typography
          className={classes.paragraphContent}
          variant="body1"
          paragraph
        >
          To learn more about Crystal, please visit{" "}
          <Link
            className={classes.link}
            href="https://crystalproject-info.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            our website.
          </Link>
        </Typography>
        <Typography>
          <Link
            className={classes.link}
            href="https://github.com/sherryxiao1988/clarity"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project on <GitHubIcon className={classes.gitHubIcon} />
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
