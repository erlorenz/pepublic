import React from 'react';
import styled from 'styled-components/macro';
// import SectionTitle from './SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faScroll,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYelp,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <List>
          <ListItem>
            <Icon>
              <FontAwesomeIcon icon={faPhone} />
            </Icon>
            702.620.3315
          </ListItem>
          <ListItem>
            <Icon>
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>
            <a href="mailto:support@pressexpresslv.com">
              support@PressExpressLV.com
            </a>
          </ListItem>
          <ListItem>
            <Icon>
              <FontAwesomeIcon icon={faScroll} />
            </Icon>
            {`Terms & Conditions`}
          </ListItem>
          <ListItem>
            <Icon>
              <FontAwesomeIcon icon={faLock} />
            </Icon>
            Privacy Policy
          </ListItem>
        </List>
        <MediaIcons>
          <a href="https://www.facebook.com/Press-Express-Las-Vegas-306987010005902/">
            <MediaIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/pressexpresslv">
            <MediaIcon icon={faTwitter} />
          </a>
          <a href="https://www.yelp.com/biz/press-express-las-vegas-las-vegas">
            <MediaIcon icon={faYelp} />
          </a>
          <a href="https://www.google.com/search?q=press+express+las+vegas&oq=press+express+las+vegas">
            <MediaIcon icon={faGoogle} />
          </a>
        </MediaIcons>
      </Container>
      <Copyright>
        Copyright © 2019 Press Express™. All rights reserved.
      </Copyright>
    </Section>
  );
}

export default Contact;

const Section = styled.section`
  padding: 4rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  color: #67727e;

  @media (min-width: 1025px) {
    padding: 2.5rem 10%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 2rem;
  align-items: center;
  width: 100%;
  max-width: 700px;

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

const MediaIcons = styled.div`
  width: 100%;
  max-width: 280px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
`;

const List = styled.ul`
  max-width: 280px;
  margin-top: 0;
  margin-bottom: 4rem;
  color: inherit;
  list-style: none;
  padding: 0;
  font-size: 0.8rem;

  @media (min-width: 500px) {
    font-size: 1rem;
    width: 100%;
    max-width: 500;
  }
`;

const ListItem = styled.li`
  padding: 0.3rem 0;
  display: flex;
  cursor: pointer;
  color: #ffffffb3;

  :hover {
    color: white;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
`;

const Icon = styled.div`
  display: flex;
  width: 25px;
  color: #ffffff6e;
`;

const MediaIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  :hover {
    color: white;
  }
`;
