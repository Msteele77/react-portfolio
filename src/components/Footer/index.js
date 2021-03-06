import React from 'react';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import email from '../../assets/images/email.png';

function Footer() {
  return (
    <section class="footer" id="connect">
      <h2>Connect With Me</h2>
    <div className="flex-row contacts-container">
                
                    <ul class="contacts">
                        <li>
                           <a class="icon" href="mailto:mcheysteele@gmail.com">
                           <img src={email} alt="email-icon"></img>
                            </a>
                        </li>
                        <li>
                            <a class="icon" href="https://github.com/Msteele77">
                              <img src={github} alt="github-icon"></img>
                            </a>
                        </li>
                        <li>
                            <a class="icon" href="https://www.linkedin.com/in/macheya-steele">
                              <img src={linkedin }alt="linkedin-icon"/>
                            </a>
                        </li>
                    </ul>
                
            </div>
            </section>
  );
}

export default Footer;