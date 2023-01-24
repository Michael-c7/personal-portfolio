import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const handleDownload = () => {
  const filePath = '/test-template.pdf';
  /*MAKE SURE TO PUT YOUR REAL RESUME IN HERE!!! */
  fetch(filePath)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      // the name of the file when you download it, the name can be anything eg: eggs.pdf, cat.pdf
      link.download = "test-template.pdf";
      link.click();
    });
};

const Hero = (props) => (


  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am a web developer with a passion for creating visually appealing and user-friendly websites. My goal is to design websites that not only look great, but also provide a seamless experience for the user. I am always looking for new challenges and opportunities to expand my knowledge and skills.
        </SectionText>
        {/* <a href="" download>
          <Button>Download Resume</Button>
        </a> */}
        <Button onClick={handleDownload}>Download Resume</Button>

      </LeftSection>
    </Section>
  </>
);

export default Hero;