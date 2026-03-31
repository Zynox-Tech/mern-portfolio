import React from 'react';
import './skills.css';

export const Skill = () => {
    return (
        <>
            <div className="skill-heading">
                <h1>
                    my <span>skills</span>
                </h1>
            </div>
            <section className="skills-section">
                <div className="skills-grid">
                    <div className="skill-card">
                        <img src="./images/html.png" alt="HTML Logo" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-card">
                        <img src="./images/css.png" alt="CSS Logo" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-card">
                        <img src="./images/javascript.png" alt="JavaScript Logo" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-card">
                        <img src="./images/mongodb.svg" alt="MongoDB Logo" />
                        <p>MongoDB</p>
                    </div>
                    <div className="skill-card">
                        <img src="./images/nodejs.png" alt="Node.js Logo" />
                        <p>Node.js</p>
                    </div>
                    <div className="skill-card">
                        <img src="./images/react.png" alt="React.js Logo" />
                        <p>React.js</p>
                    </div>
                    <div className="skill-card">
                        <img src="./images/php.png" alt="PHP Logo" />
                        <p>PHP</p>
                    </div>
                    <div className="skill-card">
                        <img src="./images/shopifylogo.png" alt="Shopify Logo" />
                        <p>Shopify</p>
                    </div>
                    <div className="skill-card">
                        <img src="./images/wordpress.png" alt="WordPress Logo" />
                        <p>WordPress</p>
                    </div>
                </div>
            </section>
        </>
    );
};
