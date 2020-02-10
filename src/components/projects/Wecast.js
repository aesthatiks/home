import React from 'react';
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

const Wecast = props => {
  return (
    <div className='project-bg'>
      <h1>WeCast</h1>
      <h2>for Web, iOS, AppleTV and Android STB</h2>

      <img src={cover} alt='Wecast cover'></img>
      <span className='spacer-40h'></span>

      <h3>The task</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut ipsum erat. Aenean elementum neque a neque porttitor, ac
        viverra est pulvinar. Quisque vel sollicitudin ligula. Cras cursus laoreet justo, at elementum mauris molestie nec. Cras vitae urna
        ex. Nunc sit amet facilisis lacus. In sit amet dui eget sapien suscipit aliquam. Etiam consequat enim metus, sit amet mollis elit
        ultricies vel. Sed ultricies diam sed interdum venenatis. Etiam id posuere lorem, quis fringilla nunc. In ut erat sed dolor
        sollicitudin pulvinar placerat nec tellus. Donec ante lacus, interdum in quam ut, venenatis blandit tortor. Ut pretium quam nibh,
        efficitur lacinia velit rhoncus vitae. Phasellus ut lobortis urna. Nunc a mi consequat, gravida lacus at, cursus nibh. Donec porta
        sollicitudin fringilla.
      </p>

      <span className='spacer-40h'></span>

      <h3>iOS - solution</h3>
      <p>Wireframes</p>
      <div className='image-row'>
        <img src={iosHomeW} alt='Wecast ios home wireframes'></img>
        <img src={iosDetailsW} alt='Wecast ios details wireframes'></img>
        <img src={iosEPGW} alt='Wecast ios epg wireframes'></img>
      </div>

      <p>Final UI</p>
      <div className='image-row'>
        <img src={iosHome} alt='Wecast ios home UI'></img>
        <img src={iosDetails} alt='Wecast ios details UI'></img>
        <img src={iosEPG} alt='Wecast ios epg UI'></img>
      </div>

      <span className='spacer-80h'></span>

      <h3>WEB - solution</h3>
      <img src={webHome} alt='Wecast web home'></img>
      <img src={webDetails} alt='Wecast web details'></img>
      <img src={webEPG} alt='Wecast web epg'></img>

      <span className='spacer-80h'></span>

      <h3>AppleTV - solution</h3>
      <img src={appletvHome} alt='Wecast appletv home'></img>
      <img src={appletvDetails} alt='Wecast appletv details'></img>
      <img src={appletvEPG} alt='Wecast appletv epg'></img>

      <span className='spacer-80h'></span>

      <h3>STB - solution</h3>
      <img src={stbHome} alt='Wecast stb home' className='img-border'></img>
      <img src={stbDetails} alt='Wecast stb details' className='img-border'></img>
      <img src={stbEPG} alt='Wecast stb epg' className='img-border'></img>
    </div>
  );
};

export default Wecast;
