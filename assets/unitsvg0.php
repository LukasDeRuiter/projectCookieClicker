<svg
   width="100%"
   height="100%"
   viewBox="0 0 210 297"
   version="1.1"
   id="svg5"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <g
     id="layer1">
    <rect class="unitBody"
       style="fill:#008080;stroke:#008080;stroke-width:1.81926"
       id="rect846"
       width="167.04323"
       height="252.00238"
       x="21.4279"
       y="44.274052"
       rx="19.007481"
       ry="25.14908" />
    <rect class="eyebrow2"
       style="fill:#5eaae7;stroke:#008080;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
       id="rect1380-3"
       width="68.538467"
       height="15.706731"
       x="140.23244"
       y="32.476139"
       rx="0"
       ry="7.8533654"/>
    <path class="mouth"
       style="fill:#780000;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
       id="path1068-3"
       d="m 145.03731,193.64169 a 63.401443,43.03632 0 0 1 -31.70072,37.27055 63.401443,43.03632 0 0 1 -63.401449,0 63.401443,43.03632 0 0 1 -31.70072,-37.27055 h 63.401443 z"
       transform="matrix(1,0,0.09508059,0.99546958,0,0)" />
    <circle class="eye"
       style="fill:#000000;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none"
       id="path1020-4"
       cx="133.50722"
       cy="148.5"
       r="25" />
    <circle class="eye"
       style="fill:#000000;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none"
       id="path1020"
       cx="71.037262"
       cy="150.99878"
       r="25" />
    <ellipse class="eyelid"
       style="fill:#ffffff;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none"
       id="path1068"
       cx="139.14485"
       cy="67.02552"
       rx="7"
       ry="10"
       transform="rotate(40.855425)" />
    <rect class="eyebrow1"
       style="fill:#5eaae7;stroke:#008080;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
       id="rect1380"
       width="68.538467"
       height="15.706731"
       x="-7.3090334"
       y="111.61204"
       rx="0"
       ry="7.8533654"/>
  </g>
  <g
     id="layer2">
    <ellipse class="eyelid"
       style="fill:#ffffff;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none"
       id="path1068-5"
       cx="187.87611"
       cy="19.687937"
       rx="7"
       ry="10"
       transform="rotate(40.855425)" />
    <path class="tongue"
       style="fill:#aa0000;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none"
       id="path1068-3-8"
       transform="matrix(1,0,0.01749889,0.99984688,0,0)"
       d="m 111.51495,192.79393 a 14.841194,54.737656 0 0 1 -7.4206,47.4042 14.841194,54.737656 0 0 1 -14.841196,0 14.841194,54.737656 0 0 1 -7.420596,-47.4042 h 14.841194 z" />
  </g>
</svg>

<style>
    .eyebrow2{
        transition-duration: 100ms;
        transform: rotate(22.577493deg);
        animation: idle2 3s infinite alternate;
    }

    .eyebrow1{
        transition-duration: 100ms;
        transform: rotate(-15.577493deg);
        animation: idle1 3s infinite alternate;
    }

    @keyframes idle2 {
        0% {transform: translateY(0%) rotate(22.577493deg);}
        50% {transform: translateY(5%) rotate(22.577493deg);}
        10% {transform: translateY(0%) rotate(22.577493deg);}
    }

    @keyframes idle1 {
        0% {transform: translateY(0%) rotate(-15.577493deg);}
        50% {transform: translateY(5%) rotate(-15.577493deg);}
        10% {transform: translateY(0%) rotate(-15.577493deg);}
    }

    .mouth {
        animation: mouthIdle 0.5s infinite linear;
    }

    .tongue {
        animation: tongueIdle 0.5s infinite linear;
    }

    @keyframes mouthIdle {
        0% {transform: skewY(0deg) matrix(1,0,0.09508059,0.99546958,0,0);}
        25% {transform: skewY(2deg) matrix(1,0,0.09508059,0.99546958,0,0);}
        50% {transform: skewY(0deg) matrix(1,0,0.09508059,0.99546958,0,0);}
        75% {transform: skewY(-2deg) matrix(1,0,0.09508059,0.99546958,0,0);}
        100% {transform: skewY(0deg) matrix(1,0,0.09508059,0.99546958,0,0);}
    }

    @keyframes tongueIdle {
        0% {transform: skewX(0deg) matrix(1,0,0.01749889,0.99984688,0,0);}
        25% {transform: skewX(2deg) matrix(1,0,0.01749889,0.99984688,0,0);}
        50% {transform: skewX(0deg) matrix(1,0,0.01749889,0.99984688,0,0);}
        75% {transform: skewX(-2deg) matrix(1,0,0.01749889,0.99984688,0,0);}
        100% {transform: skewX(0deg) matrix(1,0,0.01749889,0.99984688,0,0);}
    }

    .eye {
        animation: eyeIdle 3s infinite alternate;
    }

    .eyelid{
        animation: eyelidIdle 3s infinite alternate;
    }


    @keyframes eyeIdle {
        0% {transform: translateY(0%);}
        50% {transform: translateY(2%);}
        100% {transform: translateY(0%);}
    }

    @keyframes eyelidIdle {
        0% {transform: translateY(0%) rotate(40.855425deg);}
        50% {transform: translateY(8%) rotate(40.855425deg);}
        100% {transform: translateY(0%) rotate(40.855425deg);}
    }
</style>