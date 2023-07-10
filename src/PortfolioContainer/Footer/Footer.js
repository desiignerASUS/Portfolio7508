import React from 'react'
import './Footer.css';
import {ImHeart} from 'react-icons/im';
export default function Footer() {
    let date = new Date().getFullYear();
  return (
    <footer className="site-footer">
        <div className="container-footer">
                <div className="">
                    <div className=" footer-toop">
                        <h3 id='NameFooter'>Prabhat Jain</h3>
                        <p>Motivated and enthusiastic software engineering graduate with a strong passion for quality assurance and test automation. Solid foundation in software testing concepts and methodologies, combined with handson experience in creating and executing test cases. eager to apply technical skills in building robust test automation frameworks. Excellent team player with effective communication and problem-solving abilities.</p>
                        <div className='footer-social'>
                            <a href="https://github.com/desiignerASUS" target="_blank">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/prabhat-jain-84449a207/" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            {/* <a href="instagram-link" target="_blank">
                                <i className='fa fa-instagram'></i>
                            </a>
                           
                            <a href="twitter-link" target="_blank">
                                <i className='fa fa-twitter'></i>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-footer-text">
                <p>©{date}. Design with {<ImHeart color='red'/>} by Prabhat</p>
            </div>
    </footer>
  )
}
