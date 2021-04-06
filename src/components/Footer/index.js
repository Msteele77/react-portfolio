import React from 'react';


function Footer() {
  return (
    <div className="flex-row">
                <div className="contacts">
                    <ul>
                        <li>
                           <a href="mailto:mcheysteele@gmail.com">
                             <img src="src/assets/images/email.png" alt="email-icon"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Msteele77">
                              <img src="github.png" alt="github-icon"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/macheya-steele">
                              <img src={require("linkedin.png")} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
  );
}

export default Footer;