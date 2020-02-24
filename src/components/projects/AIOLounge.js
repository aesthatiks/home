import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

import cover from '../../images/projects/aiolounge/cover.jpg';
import personas from '../../images/projects/aiolounge/personas.jpg';
import ia from '../../images/projects/aiolounge/ia.jpg';
import ui from '../../images/projects/aiolounge/ui.jpg';

import downloadStatus1 from '../../images/projects/aiolounge/download-status-1.jpg';
import downloadStatus2 from '../../images/projects/aiolounge/download-status-2.jpg';

const AllexisEdu = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className='project-bg'>
        <h1>AIO</h1>
        <h2>Media consumption platform</h2>

        <img src={cover} alt='AIO cover'></img>

        <div className='divider'></div>

        <div className='col-2'>
          <div className='mt-40'>
            <h3>The task</h3>
            <p>
              Create a design for an App that allows client companies to deliver media of all types to their users based on different
              individual business models. The app had to be easily adaptable to client brandings and all sections should be easily switched
              on a module model. Aquiring the provided media could be done in a lot of ways, either through redemption codes from marketing
              campaigns, subscriptions, direct purchase of the media and even complimentary gift codes from third parties.
            </p>
          </div>
          <div className='mt-40'>
            <h3>What I did</h3>
            <p>
              I started of by desk research of competitor platforms, but none of them were close to the business model our app had to be
              designed for. I conducted interviews and talked to frineds and people through different channels trying to figure out pain
              points of media platforms they currently use. Created high level personas for each business model, and the IA for the app.
              After I created low fidelity wireframes, and proceeded to the UI, skipping the low fidelity prototypes since I decided those
              would just confuse the people I've talked to and intend to present the product to. The developers and management were closley
              involved in the design process since we all had to figure out a lot of app states that were not forseen in the begining. This
              made me create a lot of almost duplicate screens with just slight status indication changes to represent all of those states
              the app could be in. I had to create the designs for both iOS and Android, mobile and ipad/tablet sized devices.
            </p>
          </div>
        </div>

        <div className='col-2'>
          <div className='mt-40'>
            <h3>Challenges I faced</h3>
            <p>
              We had countless iterations and reviews for a lot of screens, since the product was not well defined and always something new
              poped up to be done. It was tough to redo a lot of them so many times without loosing motivation to continue. And the most
              challenging screens were those which had a lot of states, depending just on the download and purchase business model of the
              client.
            </p>
          </div>
          <div className='mt-40'>
            <h3>What I learned</h3>
            <p>
              Going into detail with dozen of screens for one single page of the app, with multiple states made it a lot, really a lot
              easier for the developers to understand the correct flow and states they needed to handle. I tended to provide base screens of
              the UI with just a couple of demo states but this time, having the developers closely involved made me better understand their
              procees and how much it meant for them to have the additional info visualised on the designs.
            </p>
          </div>
        </div>

        <div className='divider'></div>

        <h3>Personas access mapping</h3>
        <h4>Displaying all business models</h4>
        <img src={personas} alt='Personas'></img>

        <div className='divider'></div>

        <h3>Information Architecture</h3>
        <img src={ia} alt='IA'></img>

        <div className='divider'></div>

        <h3>The UI</h3>
        <h4>Choosen samples</h4>
        <img src={cover} alt='UI sample'></img>
        <img src={ui} alt='UI sample'></img>

        <div className='divider'></div>

        <h3>One of the multistate samples</h3>
        <h4>Displaying all download status states</h4>
        <img src={downloadStatus1} alt='IA'></img>
        <img src={downloadStatus2} alt='IA'></img>
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
