import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/amar.png';
import wecast from '../images/projects/wecast/web-home.jpg';
//import allexisEdu from '../images/projects/allexis-edu.png';

const MyWork = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className='aesthatiks-name'>
        <svg width='1010px' height='220px' viewBox='0 0 1010 220' version='1.1'>
          <title>I did this</title>
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='0.0631975446'>
            <g id='about-copy' transform='translate(-90.000000, -150.000000)' fill='#FFFFFF' fillRule='nonzero'>
              <path
                d='M145.59082,365 L145.59082,154.719727 L90.9101562,154.719727 L90.9101562,365 L145.59082,365 Z M284.192875,365 C296.869351,364.970545 306.388393,364.256487 312.75,362.856934 C319.244141,361.428223 324.699219,358.917155 329.115234,355.32373 C333.53125,351.730306 336.62679,346.751465 338.401855,340.387207 C340.176921,334.022949 341.064453,321.402669 341.064453,302.526367 L341.064453,302.526367 L341.064453,228.079026 C341.047961,208.607665 340.441952,195.519311 339.246094,188.813965 C338.033854,182.016764 335.003255,175.847331 330.154297,170.305664 C325.305339,164.763997 318.226725,160.780924 308.918457,158.356445 C299.610189,155.931966 281.751302,154.719727 255.341797,154.719727 L255.341797,154.719727 L214.428711,154.719727 L214.428711,365 L284.192875,365 Z M269.109375,329.022461 L269.109375,190.697266 C275.083984,190.697266 279.153646,191.325033 281.318359,192.580566 C283.483073,193.8361 284.86849,195.80599 285.474609,198.490234 C286.080729,201.174479 286.383789,207.278971 286.383789,216.803711 L286.383143,299.143558 C286.355599,312.790486 285.446635,321.169879 283.65625,324.281738 C281.837891,327.44222 276.988932,329.022461 269.109375,329.022461 L269.109375,329.022461 Z M416.136719,365 L416.136719,154.719727 L361.456055,154.719727 L361.456055,365 L416.136719,365 Z M507.851078,365 C520.527554,364.970545 530.046596,364.256487 536.408203,362.856934 C542.902344,361.428223 548.357422,358.917155 552.773438,355.32373 C557.189453,351.730306 560.284993,346.751465 562.060059,340.387207 C563.835124,334.022949 564.722656,321.402669 564.722656,302.526367 L564.722656,228.079026 C564.706164,208.607665 564.100155,195.519311 562.904297,188.813965 C561.692057,182.016764 558.661458,175.847331 553.8125,170.305664 C548.963542,164.763997 541.884928,160.780924 532.57666,158.356445 C523.268392,155.931966 505.409505,154.719727 479,154.719727 L479,154.719727 L438.086914,154.719727 L438.086914,365 L507.851078,365 Z M492.767578,329.022461 L492.767578,190.697266 C498.742188,190.697266 502.811849,191.325033 504.976562,192.580566 C507.141276,193.8361 508.526693,195.80599 509.132812,198.490234 C509.738932,201.174479 510.041992,207.278971 510.041992,216.803711 L510.041347,299.143558 C510.013802,312.790486 509.104838,321.169879 507.314453,324.281738 C505.496094,327.44222 500.647135,329.022461 492.767578,329.022461 L492.767578,329.022461 Z M709.671875,365 L709.671875,196.801758 L742.142578,196.801758 L742.142578,154.719727 L622.650391,154.719727 L622.650391,196.801758 L654.991211,196.801758 L654.991211,365 L709.671875,365 Z M809.291992,365 L809.291992,276.679688 L825.657227,276.679688 L825.657227,365 L880.337891,365 L880.337891,154.719727 L825.657227,154.719727 L825.657227,229.921875 L809.291992,229.921875 L809.291992,154.719727 L754.611328,154.719727 L754.611328,365 L809.291992,365 Z M956.96875,365 L956.96875,154.719727 L902.288086,154.719727 L902.288086,365 L956.96875,365 Z M1038.66504,369.416016 C1051.99967,369.416016 1063.68913,367.013184 1073.7334,362.20752 C1083.77767,357.401855 1090.55322,351.448893 1094.06006,344.348633 C1097.56689,337.248372 1099.32031,326.208333 1099.32031,311.228516 C1099.32031,290.620443 1096.15983,275.683919 1089.83887,266.418945 C1083.5179,257.153971 1068.19173,245.291341 1043.86035,230.831055 C1035.37467,225.808919 1030.22266,221.522786 1028.4043,217.972656 C1026.49935,214.422526 1025.54688,209.140625 1025.54688,202.126953 C1025.54688,196.671875 1026.39111,192.602214 1028.07959,189.917969 C1029.76807,187.233724 1032.25749,185.891602 1035.54785,185.891602 C1038.57845,185.891602 1040.74316,186.88737 1042.04199,188.878906 C1043.34082,190.870443 1043.99023,195.50293 1043.99023,202.776367 L1043.99023,202.776367 L1043.99023,218.362305 L1094.77441,218.362305 L1094.77441,210.049805 C1094.77441,193.338216 1093.15088,181.497233 1089.90381,174.526855 C1086.65674,167.556478 1080.03271,161.776693 1070.03174,157.1875 C1060.03076,152.598307 1047.93001,150.303711 1033.72949,150.303711 C1020.74121,150.303711 1009.65788,152.403483 1000.47949,156.603027 C991.301107,160.802572 984.655436,166.625651 980.54248,174.072266 C976.429525,181.51888 974.373047,193.294922 974.373047,209.400391 C974.373047,220.570312 975.823405,229.748698 978.724121,236.935547 C981.624837,244.122396 985.283203,249.750651 989.699219,253.820312 C994.115234,257.889974 1003.12044,264.427409 1016.71484,273.432617 C1030.30924,282.351237 1038.83822,288.715495 1042.30176,292.525391 C1045.67871,296.335286 1047.36719,304.431315 1047.36719,316.813477 C1047.36719,322.441732 1046.47965,326.68457 1044.70459,329.541992 C1042.92952,332.399414 1040.22363,333.828125 1036.58691,333.828125 C1032.9502,333.828125 1030.41748,332.702474 1028.98877,330.451172 C1027.56006,328.19987 1026.8457,323.13444 1026.8457,315.254883 L1026.8457,315.254883 L1026.8457,289.667969 L976.061523,289.667969 L976.061523,303.435547 C976.061523,319.194661 977.663411,331.360352 980.867188,339.932617 C984.070964,348.504883 990.846517,355.561849 1001.19385,361.103516 C1011.54118,366.645182 1024.03158,369.416016 1038.66504,369.416016 Z'
                id='IDIDTHIS'
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className='aesthatiks-tagline'>
        <svg width='99px' height='22px' viewBox='0 0 99 22' version='1.1' className='mb-24'>
          <title>Projects</title>
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='0.8'>
            <g id='about-copy' transform='translate(-190.000000, -427.000000)' fill='#FFFFFF' fillRule='nonzero'>
              <path
                d='M195.411133,448 L195.411133,439.722656 L196.845703,439.722656 C198.013672,439.722656 198.959473,439.561849 199.683105,439.240234 C200.406738,438.91862 200.903971,438.457357 201.174805,437.856445 C201.445638,437.255534 201.581055,436.299154 201.581055,434.987305 L201.581055,434.987305 L201.581055,433.197266 C201.581055,431.910807 201.51123,430.960775 201.371582,430.347168 C201.231934,429.733561 200.965332,429.210938 200.571777,428.779297 C200.178223,428.347656 199.590007,428.017578 198.807129,427.789062 C198.024251,427.560547 196.904948,427.446289 195.449219,427.446289 L195.449219,427.446289 L190.066406,427.446289 L190.066406,448 L195.411133,448 Z M195.804688,436.206055 C195.694661,436.206055 195.563477,436.201823 195.411133,436.193359 L195.411133,436.193359 L195.411133,430.962891 C196.105143,430.962891 196.562174,431.068685 196.782227,431.280273 C197.002279,431.491862 197.112305,431.948893 197.112305,432.651367 L197.112305,432.651367 L197.112305,434.339844 C197.112305,435.101562 197.01709,435.603027 196.82666,435.844238 C196.63623,436.085449 196.295573,436.206055 195.804688,436.206055 Z M208.461914,448 L208.461914,438.732422 C209.198242,438.732422 209.653158,438.863607 209.82666,439.125977 C210.000163,439.388346 210.086914,440.069661 210.086914,441.169922 L210.086914,441.169922 L210.086914,448 L215.050781,448 L215.05032,442.293062 C215.0454,440.803244 215.00112,439.885082 214.91748,439.538574 C214.828613,439.17041 214.602214,438.766276 214.238281,438.326172 C213.874349,437.886068 213.163411,437.534831 212.105469,437.272461 C213.273438,437.162435 214.056315,436.832357 214.454102,436.282227 C214.851888,435.732096 215.050781,434.657227 215.050781,433.057617 C215.050781,431.305664 214.769368,430.029785 214.206543,429.22998 C213.643717,428.430176 212.915853,427.932943 212.022949,427.738281 C211.130046,427.54362 209.422526,427.446289 206.900391,427.446289 L206.900391,427.446289 L203.117188,427.446289 L203.117188,448 L208.461914,448 Z M208.461914,435.533203 L208.461914,430.962891 C209.079753,430.962891 209.505046,431.064453 209.737793,431.267578 C209.97054,431.470703 210.086914,431.898112 210.086914,432.549805 L210.086914,432.549805 L210.086914,433.679688 C210.086914,434.585286 209.966309,435.120605 209.725098,435.285645 C209.483887,435.450684 209.062826,435.533203 208.461914,435.533203 L208.461914,435.533203 Z M223.150391,448.431641 C224.309896,448.431641 225.325521,448.241211 226.197266,447.860352 C227.06901,447.479492 227.760905,446.933594 228.272949,446.222656 C228.784993,445.511719 229.089681,444.726725 229.187012,443.867676 C229.284342,443.008626 229.333008,441.546549 229.333008,439.481445 L229.333008,439.481445 L229.333008,435.964844 C229.333008,433.848958 229.282227,432.367839 229.180664,431.521484 C229.079102,430.67513 228.761719,429.892253 228.228516,429.172852 C227.695312,428.453451 226.990723,427.9139 226.114746,427.554199 C225.23877,427.194499 224.250651,427.014648 223.150391,427.014648 C221.990885,427.014648 220.97526,427.205078 220.103516,427.585938 C219.231771,427.966797 218.539876,428.512695 218.027832,429.223633 C217.515788,429.93457 217.2111,430.719564 217.11377,431.578613 C217.016439,432.437663 216.967773,433.89974 216.967773,435.964844 L216.967773,435.964844 L216.967773,439.481445 C216.967773,441.597331 217.018555,443.078451 217.120117,443.924805 C217.22168,444.771159 217.539062,445.554036 218.072266,446.273438 C218.605469,446.992839 219.310059,447.532389 220.186035,447.89209 C221.062012,448.25179 222.05013,448.431641 223.150391,448.431641 Z M223.137695,444.953125 C222.782227,444.953125 222.555827,444.813477 222.458496,444.53418 C222.361165,444.254883 222.3125,443.518555 222.3125,442.325195 L222.3125,442.325195 L222.3125,432.727539 C222.3125,431.669596 222.386556,431.032715 222.534668,430.816895 C222.68278,430.601074 222.896484,430.493164 223.175781,430.493164 C223.505859,430.493164 223.723796,430.626465 223.82959,430.893066 C223.935384,431.159668 223.988281,431.771159 223.988281,432.727539 L223.988281,432.727539 L223.988281,442.172852 C223.988281,443.383138 223.9375,444.149089 223.835938,444.470703 C223.734375,444.792318 223.501628,444.953125 223.137695,444.953125 Z M233.166992,448 C234.351888,448 235.238444,447.909017 235.82666,447.727051 C236.414876,447.545085 236.880371,447.217122 237.223145,446.743164 C237.565918,446.269206 237.758464,445.738118 237.800781,445.149902 C237.843099,444.561686 237.864258,443.239258 237.864258,441.182617 L237.864258,427.446289 L232.519531,427.446289 L232.519023,442.132227 C232.515977,442.787305 232.499219,443.236719 232.46875,443.480469 C232.434896,443.751302 232.307943,443.979818 232.087891,444.166016 C231.867839,444.352214 231.567383,444.445312 231.186523,444.445312 C231.042643,444.445312 230.809896,444.432617 230.488281,444.407227 L230.488281,444.407227 L230.488281,448 L233.166992,448 Z M249.201172,448 L249.201172,443.886719 L245.27832,443.886719 L245.27832,439.367188 L248.617188,439.367188 L248.617188,435.457031 L245.27832,435.457031 L245.27832,431.55957 L248.845703,431.55957 L248.845703,427.446289 L239.933594,427.446289 L239.933594,448 L249.201172,448 Z M256.970703,448.431641 C258.477214,448.431641 259.744629,448.097331 260.772949,447.428711 C261.80127,446.760091 262.465658,445.981445 262.766113,445.092773 C263.066569,444.204102 263.216797,442.697591 263.216797,440.573242 L263.216797,440.573242 L263.216797,439.773438 L257.87207,439.773438 L257.87207,442.350586 C257.87207,443.476237 257.81071,444.191406 257.687988,444.496094 C257.565267,444.800781 257.305013,444.953125 256.907227,444.953125 C256.492513,444.953125 256.225911,444.800781 256.107422,444.496094 C255.988932,444.191406 255.929688,443.539714 255.929688,442.541016 L255.929688,442.541016 L255.929688,432.994141 C255.929688,431.953125 255.988932,431.276042 256.107422,430.962891 C256.225911,430.64974 256.505208,430.493164 256.945312,430.493164 C257.334635,430.493164 257.586426,430.622233 257.700684,430.880371 C257.814941,431.138509 257.87207,431.788086 257.87207,432.829102 L257.87207,432.829102 L257.87207,436.40918 L263.216797,436.40918 L263.216797,434.454102 C263.216797,432.532878 263.05599,431.11735 262.734375,430.20752 C262.41276,429.297689 261.739909,428.538086 260.71582,427.928711 C259.691732,427.319336 258.392578,427.014648 256.818359,427.014648 C255.658854,427.014648 254.63265,427.211426 253.739746,427.60498 C252.846842,427.998535 252.1486,428.538086 251.64502,429.223633 C251.141439,429.90918 250.838867,430.622233 250.737305,431.362793 C250.635742,432.103353 250.584961,433.214193 250.584961,434.695312 L250.584961,434.695312 L250.584961,440.700195 C250.584961,442.714518 250.75,444.223145 251.080078,445.226074 C251.410156,446.229004 252.083008,447.013997 253.098633,447.581055 C254.114258,448.148112 255.404948,448.431641 256.970703,448.431641 Z M272.725586,448 L272.725586,431.55957 L275.899414,431.55957 L275.899414,427.446289 L264.219727,427.446289 L264.219727,431.55957 L267.380859,431.55957 L267.380859,448 L272.725586,448 Z M282.958008,448.431641 C284.261393,448.431641 285.403971,448.196777 286.385742,447.727051 C287.367513,447.257324 288.029785,446.675456 288.372559,445.981445 C288.715332,445.287435 288.886719,444.208333 288.886719,442.744141 C288.886719,440.729818 288.577799,439.269857 287.959961,438.364258 C287.342122,437.458659 285.844076,436.299154 283.46582,434.885742 C282.636393,434.394857 282.132812,433.975911 281.955078,433.628906 C281.76888,433.281901 281.675781,432.765625 281.675781,432.080078 C281.675781,431.546875 281.758301,431.149089 281.92334,430.886719 C282.088379,430.624349 282.331706,430.493164 282.65332,430.493164 C282.949544,430.493164 283.161133,430.590495 283.288086,430.785156 C283.415039,430.979818 283.478516,431.432617 283.478516,432.143555 L283.478516,432.143555 L283.478516,433.666992 L288.442383,433.666992 L288.442383,432.854492 C288.442383,431.221029 288.283691,430.063639 287.966309,429.382324 C287.648926,428.701009 287.001465,428.136068 286.023926,427.6875 C285.046387,427.238932 283.863607,427.014648 282.475586,427.014648 C281.206055,427.014648 280.122721,427.219889 279.225586,427.630371 C278.328451,428.040853 277.678874,428.610026 277.276855,429.337891 C276.874837,430.065755 276.673828,431.216797 276.673828,432.791016 C276.673828,433.882812 276.815592,434.779948 277.099121,435.482422 C277.38265,436.184896 277.740234,436.735026 278.171875,437.132812 C278.603516,437.530599 279.483724,438.169596 280.8125,439.049805 C282.141276,439.921549 282.974935,440.54362 283.313477,440.916016 C283.643555,441.288411 283.808594,442.079753 283.808594,443.290039 C283.808594,443.840169 283.721842,444.254883 283.54834,444.53418 C283.374837,444.813477 283.110352,444.953125 282.754883,444.953125 C282.399414,444.953125 282.151855,444.843099 282.012207,444.623047 C281.872559,444.402995 281.802734,443.907878 281.802734,443.137695 L281.802734,443.137695 L281.802734,440.636719 L276.838867,440.636719 L276.838867,441.982422 C276.838867,443.522786 276.995443,444.711914 277.308594,445.549805 C277.621745,446.387695 278.284017,447.077474 279.29541,447.619141 C280.306803,448.160807 281.527669,448.431641 282.958008,448.431641 Z'
                id='PROJECTS'
              ></path>
            </g>
          </g>
        </svg>
        <Link to='/mywork/wecast' className='project-block'>
          <div className='project-name'>
            <p className='project-name-main'>WeCast</p>
            <p className='project-name-sub'>for Web, iOS, AppleTV</p>
            <p className='project-name-sub'>and Android STB</p>
          </div>

          <div className='project-image-block'>
            <div className='project-image-blur'>
              <img src={wecast} alt='WeCast Home' />
            </div>
            <div className='project-image'>
              <img src={wecast} alt='WeCast Home' />
            </div>
          </div>
        </Link>
      </div>
      <div className='aesthatiks-image faded'>
        <img src={image} alt='Amar'></img>
      </div>
    </Fragment>
  );
};

export default MyWork;
