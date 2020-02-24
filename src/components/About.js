import React, { Fragment, useEffect } from 'react';
import image from '../images/amar.png';
import portfolio from '../images/Resume.pdf';
import { Link } from 'react-router-dom';

const About = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className='aesthatiks-name fade-in-1'>
        <svg width='995px' height='220px' viewBox='0 0 995 220' version='1.1'>
          <title>Who am I</title>
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='0.0631975446'>
            <g id='about' transform='translate(-80.000000, -150.000000)' fill='#FFFFFF' fillRule='nonzero'>
              <path
                d='M172.34668,365 C180.312826,309.150391 185.378255,272.436849 187.542969,254.859375 C192.305339,295.988932 197.803711,332.702474 204.038086,365 L204.038086,365 L272.356445,365 L296.644531,154.719727 L243.522461,154.719727 C236.422201,203.382487 231.356771,253.127604 228.326172,303.955078 L228.326172,303.955078 L222.351562,224.077148 C219.147786,183.986654 217.15625,160.867513 216.376953,154.719727 L216.376953,154.719727 L159.488281,154.719727 C151.435547,214.206055 146.413411,262.262695 144.421875,298.889648 L144.421875,298.889648 L138.707031,228.103516 L133.12207,154.719727 L80,154.719727 L104.417969,365 L172.34668,365 Z M362.235352,365 L362.235352,276.679688 L378.600586,276.679688 L378.600586,365 L433.28125,365 L433.28125,154.719727 L378.600586,154.719727 L378.600586,229.921875 L362.235352,229.921875 L362.235352,154.719727 L307.554688,154.719727 L307.554688,365 L362.235352,365 Z M516.925781,369.416016 C528.788411,369.416016 539.179036,367.467773 548.097656,363.571289 C557.016276,359.674805 564.094889,354.089844 569.333496,346.816406 C574.572103,339.542969 577.68929,331.511882 578.685059,322.723145 C579.680827,313.934408 580.178711,298.976237 580.178711,277.848633 L580.178711,240.985141 C580.16438,219.810026 579.644946,204.952349 578.620117,196.412109 C577.581055,187.753255 574.333984,179.743815 568.878906,172.383789 C563.423828,165.023763 556.215332,159.503743 547.253418,155.82373 C538.291504,152.143717 528.182292,150.303711 516.925781,150.303711 C505.063151,150.303711 494.672526,152.251953 485.753906,156.148438 C476.835286,160.044922 469.756673,165.629883 464.518066,172.90332 C459.27946,180.176758 456.162272,188.207845 455.166504,196.996582 C454.170736,205.785319 453.672852,220.74349 453.672852,241.871094 L453.672852,241.871094 L453.672852,277.848633 C453.672852,299.495768 454.192383,314.648763 455.231445,323.307617 C456.270508,331.966471 459.517578,339.975911 464.972656,347.335938 C470.427734,354.695964 477.63623,360.215983 486.598145,363.895996 C495.560059,367.576009 505.669271,369.416016 516.925781,369.416016 Z M516.795898,333.828125 C513.15918,333.828125 510.842936,332.399414 509.847168,329.541992 C508.8514,326.68457 508.353516,319.151367 508.353516,306.942383 L508.353516,208.750977 C508.353516,197.927409 509.111165,191.411621 510.626465,189.203613 C512.141764,186.995605 514.328125,185.891602 517.185547,185.891602 C520.5625,185.891602 522.792155,187.255371 523.874512,189.98291 C524.956868,192.710449 525.498047,198.966471 525.498047,208.750977 L525.498047,208.750977 L525.498047,305.383789 C525.498047,317.765951 524.978516,325.602214 523.939453,328.892578 C522.900391,332.182943 520.519206,333.828125 516.795898,333.828125 Z M691.618164,365 L694.865234,327.204102 L714.477539,327.204102 L717.205078,365 L773.18457,365 L741.882812,154.719727 L662.78418,154.719727 L634.989258,365 L691.618164,365 Z M712.918945,289.927734 L694.21582,289.927734 C695.601237,271.311198 699.064779,241.914388 704.606445,201.737305 C707.377279,236.719076 710.148112,266.115885 712.918945,289.927734 L712.918945,289.927734 Z M830.333008,365 L830.333008,226.285156 L850.464844,365 L884.364258,365 L903.457031,223.038086 L903.457031,365 L951.253906,365 L951.253906,154.719727 L879.948242,154.719727 L867.479492,252.911133 L859.946289,199.399414 C857.608398,182.254883 855.400391,167.361654 853.322266,154.719727 L853.322266,154.719727 L782.536133,154.719727 L782.536133,365 L830.333008,365 Z M1074.77246,365 L1074.77246,154.719727 L1020.0918,154.719727 L1020.0918,365 L1074.77246,365 Z'
                id='WHOAMI'
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className='aesthatiks-tagline fade-in-2'>
        <svg width='94px' height='22px' viewBox='0 0 94 22' version='1.1' className='left'>
          <title>INSHORT</title>
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='0.798293341'>
            <g id='about' transform='translate(-337.000000, -514.000000)' fill='#FFFFFF' fillRule='nonzero'>
              <g id='Group' transform='translate(80.000000, 509.000000)'>
                <path
                  d='M262.411133,26 L262.411133,5.44628906 L257.066406,5.44628906 L257.066406,26 L262.411133,26 Z M269.025391,26 L269.025391,16.65625 L271.805664,26 L276.490234,26 L276.490234,5.44628906 L272.021484,5.44628906 L272.021484,14.7011719 L269.025391,5.44628906 L264.556641,5.44628906 L264.556641,26 L269.025391,26 Z M289.058594,26.4316406 C290.361979,26.4316406 291.504557,26.1967773 292.486328,25.7270508 C293.468099,25.2573242 294.130371,24.6754557 294.473145,23.9814453 C294.815918,23.2874349 294.987305,22.2083333 294.987305,20.7441406 C294.987305,18.7298177 294.678385,17.2698568 294.060547,16.3642578 C293.442708,15.4586589 291.944661,14.2991536 289.566406,12.8857422 C288.736979,12.3948568 288.233398,11.9759115 288.055664,11.6289062 C287.869466,11.281901 287.776367,10.765625 287.776367,10.0800781 C287.776367,9.546875 287.858887,9.14908854 288.023926,8.88671875 C288.188965,8.62434896 288.432292,8.49316406 288.753906,8.49316406 C289.05013,8.49316406 289.261719,8.59049479 289.388672,8.78515625 C289.515625,8.97981771 289.579102,9.43261719 289.579102,10.1435547 L289.579102,10.1435547 L289.579102,11.6669922 L294.542969,11.6669922 L294.542969,10.8544922 C294.542969,9.22102865 294.384277,8.06363932 294.066895,7.38232422 C293.749512,6.70100911 293.102051,6.13606771 292.124512,5.6875 C291.146973,5.23893229 289.964193,5.01464844 288.576172,5.01464844 C287.306641,5.01464844 286.223307,5.21988932 285.326172,5.63037109 C284.429036,6.04085286 283.77946,6.61002604 283.377441,7.33789062 C282.975423,8.06575521 282.774414,9.21679688 282.774414,10.7910156 C282.774414,11.8828125 282.916178,12.7799479 283.199707,13.4824219 C283.483236,14.1848958 283.84082,14.735026 284.272461,15.1328125 C284.704102,15.530599 285.58431,16.1695964 286.913086,17.0498047 C288.241862,17.9215495 289.075521,18.5436198 289.414062,18.9160156 C289.744141,19.2884115 289.90918,20.0797526 289.90918,21.2900391 C289.90918,21.8401693 289.822428,22.2548828 289.648926,22.5341797 C289.475423,22.8134766 289.210938,22.953125 288.855469,22.953125 C288.5,22.953125 288.252441,22.843099 288.112793,22.6230469 C287.973145,22.4029948 287.90332,21.9078776 287.90332,21.1376953 L287.90332,21.1376953 L287.90332,18.6367188 L282.939453,18.6367188 L282.939453,19.9824219 C282.939453,21.5227865 283.096029,22.7119141 283.40918,23.5498047 C283.722331,24.3876953 284.384603,25.077474 285.395996,25.6191406 C286.407389,26.1608073 287.628255,26.4316406 289.058594,26.4316406 Z M302.007812,26 L302.007812,17.3671875 L303.607422,17.3671875 L303.607422,26 L308.952148,26 L308.952148,5.44628906 L303.607422,5.44628906 L303.607422,12.796875 L302.007812,12.796875 L302.007812,5.44628906 L296.663086,5.44628906 L296.663086,26 L302.007812,26 Z M317.12793,26.4316406 C318.287435,26.4316406 319.30306,26.2412109 320.174805,25.8603516 C321.046549,25.4794922 321.738444,24.9335938 322.250488,24.2226562 C322.762533,23.5117188 323.06722,22.7267253 323.164551,21.8676758 C323.261882,21.0086263 323.310547,19.5465495 323.310547,17.4814453 L323.310547,17.4814453 L323.31002,13.5980415 C323.304397,11.6769054 323.253791,10.318053 323.158203,9.52148438 C323.056641,8.67513021 322.739258,7.8922526 322.206055,7.17285156 C321.672852,6.45345052 320.968262,5.91389974 320.092285,5.55419922 C319.216309,5.1944987 318.22819,5.01464844 317.12793,5.01464844 C315.968424,5.01464844 314.952799,5.20507812 314.081055,5.5859375 C313.20931,5.96679688 312.517415,6.51269531 312.005371,7.22363281 C311.493327,7.93457031 311.188639,8.7195638 311.091309,9.57861328 C310.993978,10.4376628 310.945312,11.8997396 310.945312,13.9648438 L310.94584,17.8482476 C310.951462,19.7693837 311.002068,21.1282361 311.097656,21.9248047 C311.199219,22.7711589 311.516602,23.5540365 312.049805,24.2734375 C312.583008,24.9928385 313.287598,25.5323893 314.163574,25.8920898 C315.039551,26.2517904 316.027669,26.4316406 317.12793,26.4316406 Z M317.115234,22.953125 C316.759766,22.953125 316.533366,22.8134766 316.436035,22.5341797 C316.338704,22.2548828 316.290039,21.5185547 316.290039,20.3251953 L316.290039,10.7275391 C316.290039,9.66959635 316.364095,9.03271484 316.512207,8.81689453 C316.660319,8.60107422 316.874023,8.49316406 317.15332,8.49316406 C317.483398,8.49316406 317.701335,8.62646484 317.807129,8.89306641 C317.912923,9.15966797 317.96582,9.77115885 317.96582,10.7275391 L317.96582,10.7275391 L317.965043,20.4253976 C317.958307,21.4902925 317.907785,22.172061 317.813477,22.4707031 C317.711914,22.7923177 317.479167,22.953125 317.115234,22.953125 Z M330.648438,26 L330.648438,16.7324219 C331.384766,16.7324219 331.839681,16.8636068 332.013184,17.1259766 C332.186686,17.3883464 332.273438,18.0696615 332.273438,19.1699219 L332.273438,19.1699219 L332.273438,26 L337.237305,26 L337.237305,20.5791016 C337.237305,18.9202474 337.192871,17.9067383 337.104004,17.5385742 C337.015137,17.1704102 336.788737,16.766276 336.424805,16.3261719 C336.060872,15.8860677 335.349935,15.5348307 334.291992,15.2724609 C335.459961,15.1624349 336.242839,14.8323568 336.640625,14.2822266 C337.038411,13.7320964 337.237305,12.6572266 337.237305,11.0576172 C337.237305,9.30566406 336.955892,8.02978516 336.393066,7.22998047 C335.830241,6.43017578 335.102376,5.93294271 334.209473,5.73828125 C333.316569,5.54361979 331.609049,5.44628906 329.086914,5.44628906 L329.086914,5.44628906 L325.303711,5.44628906 L325.303711,26 L330.648438,26 Z M330.648438,13.5332031 L330.648438,8.96289062 C331.266276,8.96289062 331.691569,9.06445312 331.924316,9.26757812 C332.157064,9.47070312 332.273438,9.89811198 332.273438,10.5498047 L332.273438,10.5498047 L332.273438,11.6796875 C332.273438,12.5852865 332.152832,13.1206055 331.911621,13.2856445 C331.67041,13.4506836 331.249349,13.5332031 330.648438,13.5332031 L330.648438,13.5332031 Z M346.898438,26 L346.898438,9.55957031 L350.072266,9.55957031 L350.072266,5.44628906 L338.392578,5.44628906 L338.392578,9.55957031 L341.553711,9.55957031 L341.553711,26 L346.898438,26 Z'
                  id='INSHORT'
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <ul>
          <li>I am Amar</li>
          <li>10+ years of experience in the IT world</li>
          <li>From Developer to Designer</li>
          <li>Focusing UX/UI design</li>
          <li>But still code for fun</li>
          <li>Choose Sketch and Figma as my main tools</li>
          <li>Bring designs to life with InVision</li>
          <li>Or code them directly with HTML, CSS and JAVASCRIPT</li>
          <li>Always learning, current target: Reactjs</li>
        </ul>

        <Link to={portfolio} target='_blank' download className='btn-download'>
          Download Full Resume
        </Link>
      </div>
      <div className='aesthatiks-image fade-in-3'>
        <img src={image} alt='Amar'></img>
      </div>
    </Fragment>
  );
};

export default About;