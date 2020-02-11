import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

import webHome from '../../images/projects/wecast/web-home.jpg';
import webDetails from '../../images/projects/wecast/web-details.jpg';
import webEPG from '../../images/projects/wecast/web-epg.jpg';

import iosHomeW from '../../images/projects/wecast/ios-home-w.jpg';
import iosDetailsW from '../../images/projects/wecast/ios-details-w.jpg';
import iosEPGW from '../../images/projects/wecast/ios-epg-w.jpg';

import iosHome from '../../images/projects/wecast/ios-home.jpg';
import iosDetails from '../../images/projects/wecast/ios-details.jpg';
import iosEPG from '../../images/projects/wecast/ios-epg.jpg';

import appletvHome from '../../images/projects/wecast/appletv-home.jpg';
import appletvDetails from '../../images/projects/wecast/appletv-details.jpg';
import appletvEPG from '../../images/projects/wecast/appletv-epg.jpg';

import stbHome from '../../images/projects/wecast/stb-home.jpg';
import stbDetails from '../../images/projects/wecast/stb-details.jpg';
import stbEPG from '../../images/projects/wecast/stb-epg.jpg';

import cover from '../../images/projects/wecast/cover.jpg';

const AllexisEdu = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className='project-bg'>
        <h1>WeCast</h1>
        <h2>for Web, iOS, AppleTV and Android STB</h2>

        <img src={cover} alt='Wecast cover'></img>

        <div className='divider'></div>

        <div className='col-2'>
          <div className='mt-40'>
            <h3>The task</h3>
            <p>
              WeCast is a long ongoing product in development of WeTek, a video distribution platform aimed as a b2b service. The platform
              was the main product but it had a variety of front-end applications called WeCast, which would deliver the content to the end
              users. Those applications were some time in development and were available on multiple platforms such as iOS, AppleTV, Web,
              Android Mobile and Android STB. The apps were not really designed to be consistent and did not take in count each of the
              platforms specifics. My task at WeTek was to give all application a visual refresh bringing them up to modern standards but
              keep in mind all the platform sepcific guidlines.
            </p>
          </div>
          <div className='mt-40'>
            <h3>What I did</h3>
            <p>
              The process took about 9 months from start to finish, not including the finalized Android Mobile app. The first couple of
              weeks I spent researching the existing apps and the platforms API to see what data I have to work with. I carefully noted all
              changes I had in mind and presented them firstly to the management board, and further on to each of the teams responsible for
              the specific platform. I organised brainstorms with the individual development teams to take into consideration their
              difficulties with the previous designs, take in suggestions and ideas they had. The rest of the process was the same for each
              platform, create low fidelity wireframes, proceed to a higher fidelity prototype and once agreeing on it, finalizing the UI
              and creating a high fidelity prototype for the management and marketing team to be able to test while the apps were in
              production.
            </p>
          </div>
        </div>

        <div className='col-2'>
          <div className='mt-40'>
            <h3>Challenges I faced</h3>
            <p>
              This was the first time I had to work on an AppleTV and Android STB interface. I had to move my mindset completely from what
              I've been used to workoing on Web and Mobile apps. Interacting with the TV apps is a completely different approach having in
              mind that the users interact with just a simple remote, and having all the same functionalities available for them as for the
              Web and Mobile apps was quite a difficult task to achieve.
            </p>
          </div>
          <div className='mt-40'>
            <h3>What I learned</h3>
            <p>A lot!</p>
          </div>
        </div>

        <div className='divider'></div>

        <h3>iOS - solution</h3>
        <h4>Wireframes</h4>
        <div className='image-row'>
          <img src={iosHomeW} alt='Wecast ios home wireframes'></img>
          <img src={iosDetailsW} alt='Wecast ios details wireframes'></img>
          <img src={iosEPGW} alt='Wecast ios epg wireframes'></img>
        </div>

        <h4 className='mt-40'>Final UI</h4>
        <div className='image-row'>
          <img src={iosHome} alt='Wecast ios home UI'></img>
          <img src={iosDetails} alt='Wecast ios details UI'></img>
          <img src={iosEPG} alt='Wecast ios epg UI'></img>
        </div>

        <div className='divider'></div>

        <h3>WEB - solution</h3>
        <img className='mt-40' src={webHome} alt='Wecast web home'></img>
        <img className='mt-40' src={webDetails} alt='Wecast web details'></img>
        <img className='mt-40' src={webEPG} alt='Wecast web epg'></img>

        <div className='divider'></div>

        <h3>AppleTV - solution</h3>
        <img className='mt-40' src={appletvHome} alt='Wecast appletv home'></img>
        <img className='mt-40' src={appletvDetails} alt='Wecast appletv details'></img>
        <img className='mt-40' src={appletvEPG} alt='Wecast appletv epg'></img>

        <div className='expanded-box dark'>
          <h3>Android STB - solution</h3>
          <img className='mt-40' src={stbHome} alt='Wecast stb home'></img>
          <img className='mt-40' src={stbDetails} alt='Wecast stb details'></img>
          <img className='mt-40' src={stbEPG} alt='Wecast stb epg'></img>
        </div>
      </div>

      <Link to='/mywork' className='btn-download mt-40 mb-120'>
        Back to Project List
      </Link>

      <ScrollToTop showUnder={300} duration={700} style={{ right: '20px' }}>
        <span className='scroll-btn'></span>
      </ScrollToTop>
    </Fragment>
  );
};

export default AllexisEdu;
