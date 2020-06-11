import React from "react";
import "./about.css";
import styled from "styled-components";
const yellow = "#fce21b";

const YellowLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${yellow};
`;

function About(props) {
  return (
    <div className="about-page">
      <div className="about-page-content">
        <p className="about-page-leader">
          We are a diverse, growing community of journalists, technologists,
          lawyers, community activists, and more — 100 members and growing! —
          around the globe who believe in the power of{" "}
          <YellowLink
            href="https://crystalproject-info.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            technology for justice.
          </YellowLink>
        </p>
        <p>
          One week after the killing of George Floyd on the streets of
          Minneapolis, we decided to build our first product, Crystal: a
          database of law enforcement officers and agencies from around the
          nation to bring the transparency that our communities deserve. By
          empowering citizens to not only access, but also contribute to data
          about their local police and law enforcement agencies, we hope Crystal
          will be the Wiki for policing.
        </p>
        <YellowLink
          href="http://docs.google.com/forms/d/e/1FAIpQLScjbFNwXTWvcoYDZNAeVwmhUITq_kjIiri6l4ZsrPXLEEOZ3Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get involved with Crystal
        </YellowLink>
        <p>
          The beta version of our open source app integrates existing public
          police officers' reports into a searchable database. We are displaying
          previous incidents of misconduct and cases where officers have been
          commended for outstanding performance.
        </p>
        <YellowLink
          href="https://trello.com/invite/b/gabFGnhB/5f3c74b8836b960385326e9bf2f92c59/crystal-mvp-feedback-tickets"
          target="_blank"
          rel="noopener noreferrer"
        >
          Provide feedback
        </YellowLink>
        <p>
          Our goal is to curate a database moderated by communities across the
          country. We hope to build upon and incorporate the excellent work
          being done by a number of projects, including{" "}
          <YellowLink
            href="https://www.raheem.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raheem
          </YellowLink>
          , the Invisible Institute’s{" "}
          <YellowLink
            href="https://beta.cpdp.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Citizen Police Data Project
          </YellowLink>
          , the Washington Post’s{" "}
          <YellowLink
            href="https://www.washingtonpost.com/graphics/investigations/police-shootings-database/"
            target="_blank"
            rel="noopener noreferrer"
          >
            database of fatal police shootings
          </YellowLink>
          , and USA Today’s{" "}
          <YellowLink
            href="https://www.usatoday.com/in-depth/news/investigations/2019/04/24/biggest-collection-police-accountability-records-ever-assembled/2299127002/"
            target="_blank"
            rel="noopener noreferrer"
          >
            database of police misconduct records
          </YellowLink>
          , among many others. We believe that police officers nationwide should
          have a public-facing profile, which allows anyone to track
          praiseworthy moments and incidents of malpractice.
        </p>
        <p>
          Alongside Crystal, we are building:
          <ul>
            <li>
              Mechanisms for communication, collaboration, and cooperation to
              allow interactions between police and the community
            </li>
            <li>
              A live feed of user-generated media showing encounters with the
              police
            </li>
            <li>
              Automated accountability procedures and reporting to support
              communities in documenting their interactions with law enforcement
            </li>
          </ul>
        </p>

        <p>
          Crystal’s database has over 17,000 police records — most of which need
          to be community-vetted. There are more waiting to be uploaded, and we
          could use some help from the open-source community! Consider
          volunteering with Crystal and join{" "}
          <YellowLink
            href="https://join.slack.com/t/crystalpolice/shared_invite/zt-essyn1xu-G5CAEuWgvSaZ04iIQ11FCQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            our Slack
          </YellowLink>
          .
        </p>

        <p>
          To learn more about Crystal, please visit{" "}
          <YellowLink
            href="https://crystalproject-info.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            our website.
          </YellowLink>
        </p>

        <YellowLink
          href="https://github.com/sherryxiao1988/clarity"
          target="_blank"
          rel="noopener noreferrer"
        >
          View project on github
        </YellowLink>
      </div>
    </div>
  );
}

export default About;
