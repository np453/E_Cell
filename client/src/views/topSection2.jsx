import React, { Component } from 'react';
import fb from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import tweet from '../assets/twitter.svg'
import axios from 'axios'
import gsap from "gsap";
import { Controls, PlayState, Tween } from 'react-gsap';
import {base} from '../base';
import Navbar from '../components/naavbar';
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
class TopSection2 extends Component {
    state = {
        rightSideImages : [],
        navLinks : [
            {
              navLinkName:"About us",
              link:""
            },
            {
              navLinkName:"past sponsors",
              link:"/sponsors"
            },
            {
              navLinkName:"follow us",
              link:""
            },
          ],
          sideBarItems : [
            {
              item:"sadsad"
            },
            {
              item:"ddsadfdsf"
            },
            {
              item:"ddsadfdsf"
            }
          ]
    }
    iconRef = React.createRef();
    tl = gsap.timeline({ repeat: -1, delay: 1, repeatDelay: 1, yoyo: true });

    componentDidMount = async() => {
        const {data : rightSideImages } = await axios.get('/front/');
        // gsap.registerPlugin(DrawSVGPlugin);
        console.log(rightSideImages)
        this.setState({rightSideImages});
        // this.tl.fromTo(
        //     this.iconRef.current,
        //     {
        //       drawSVG: "0"
        //     },
        //     {
        //       duration: 1,
        //       drawSVG: "100%"
        //     }
        //   );
    }
    
    render() {
        return (
            <div className="vh-100 container-fluid p-0 landing_page_top_section__container2">
                <Navbar 
                sidebarBackground="#333" 
                sideBarItems={this.state.sideBarItems} 
                navLinks={this.state.navLinks} 
                navbarColor="#000" 
                navbarBrandColor="#fff"
                linkColor="#fff"
                linkOpacity="0.9"
                // navBrandLogo={LandingPageLogo}
                />
                <svg className="page_curve" viewBox="0 0 1920 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="946" cy="317.5" rx="1376" ry="317.5" fill="black"/>
                </svg>
                <div className=" main_page_heading_container container2">
                <div className=" m-0">
                        <h1 className="text-center landing_page_main_heading2">
                        ENTREPRENEURSHIP CELL
                        </h1>
                        <h1 className="text-center landing_page_main_heading2">
                            MNNIT Allahabad
                        </h1>
                        <div className="row d-flex justify-content-center m-0">
            
                        <svg className="topSection_bulb" viewBox="0 0 514 496" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M262.31 57.9336H251.695V0.000240326H262.31V57.9336Z" fill="#CCCCCC"/>
<path d="M59.1333 256.988H0V246.59H59.1333V256.988Z" fill="#CCCCCC"/>
<path d="M513.993 256.988H454.859V246.59H513.993V256.988Z" fill="#CCCCCC"/>
<path d="M400.677 118.388L393.172 111.036L434.985 70.0703L442.489 77.424L400.677 118.388Z" fill="#CCCCCC"/>
<path d="M120.838 111.037L113.333 118.39L71.5195 77.4255L79.0243 70.0717L120.838 111.037Z" fill="#CCCCCC"/>
<path d="M218.599 467.012C206.973 467.012 206.971 445.845 218.599 445.845H295.665C307.305 445.845 307.316 467.012 295.665 467.012H218.599Z" fill="#CCCCCC"/>
<path d="M204.262 440.244C189.75 440.244 189.741 419.082 204.262 419.082H309.964C324.489 419.082 324.484 440.244 309.964 440.244H204.262Z" fill="#CCCCCC"/>
<path d="M225.228 392.257H209.804V358.545L189.457 343.474V411.514C193.01 411.948 189.265 411.952 225.228 411.928C238.741 411.928 238.838 392.257 225.228 392.257Z" fill="#CCCCCC"/>
<path d="M304.439 358.547V392.05H291.023C277.455 392.05 277.446 411.721 291.023 411.721H324.783V343.477L304.439 358.547Z" fill="#CCCCCC"/>
<path d="M255.157 267.269C254.76 267.249 254.365 267.227 253.97 267.198H253.64V267.173C234.301 265.633 218.67 250.771 216.04 231.832H255.318V219.863H216.126C219.102 200.672 235.426 185.83 255.318 185.05V174.349C227.278 175.211 204.723 198.11 204.723 226.162C204.723 254.154 227.19 277.018 255.157 277.971V267.269Z" fill="#CCCCCC"/>
<path d="M285.777 250.99C285.777 251.496 285.465 251.8 284.948 251.8H279.775C279.206 251.8 278.948 251.496 278.948 250.99V246.935C278.948 245.617 278.222 244.908 276.878 244.908H274.189C272.792 244.908 272.119 245.617 272.119 246.935V270.046C272.119 271.414 272.843 272.074 274.189 272.074H276.878C278.222 272.074 278.948 271.414 278.948 270.046V265.992C278.948 265.485 279.206 265.181 279.775 265.181H284.948C285.465 265.181 285.777 265.485 285.777 265.992V271.465C285.777 276.228 283.138 278.763 278.327 278.763H272.533C267.669 278.763 265.031 276.228 265.031 271.465V245.516C265.031 240.753 267.669 238.219 272.533 238.219H278.327C283.138 238.219 285.777 240.753 285.777 245.516V250.99Z" fill="#CCCCCC"/>
<path d="M311.589 244.097C311.589 244.604 311.381 244.959 310.762 244.959H297.828V255.094H307.71C308.227 255.094 308.537 255.399 308.537 255.956V260.974C308.537 261.532 308.227 261.836 307.71 261.836H297.828V272.074H310.762C311.381 272.074 311.589 272.327 311.589 272.883V277.952C311.589 278.458 311.381 278.763 310.762 278.763H291.726C291.258 278.763 290.949 278.458 290.949 277.952V239.029C290.949 238.522 291.258 238.219 291.726 238.219H310.762C311.381 238.219 311.589 238.522 311.589 239.029V244.097Z" fill="#CCCCCC"/>
<path d="M323.809 272.074H336.12C336.689 272.074 336.949 272.376 336.949 272.883V277.952C336.949 278.51 336.689 278.763 336.12 278.763H317.601C317.084 278.763 316.773 278.51 316.773 277.952V239.029C316.773 238.522 317.084 238.219 317.601 238.219H322.981C323.55 238.219 323.809 238.522 323.809 239.029V272.074Z" fill="#CCCCCC"/>
<path d="M348.671 272.072H360.982C361.551 272.072 361.811 272.375 361.811 272.881V277.951C361.811 278.508 361.551 278.761 360.982 278.761H342.463C341.946 278.761 341.637 278.508 341.637 277.951V239.028C341.637 238.52 341.946 238.217 342.463 238.217H347.843C348.412 238.217 348.671 238.52 348.671 239.028V272.072Z" fill="#CCCCCC"/>
<path d="M173.806 287.878C174.146 287.878 174.329 288.058 174.329 288.389V307.836C174.329 308.168 174.146 308.347 173.806 308.347H171.376C171.038 308.347 170.854 308.168 170.854 307.836V296.32H170.672L168.086 307.886C168.008 308.193 167.826 308.347 167.513 308.347H166.232C165.919 308.347 165.736 308.193 165.657 307.886L163.072 296.32H162.889V307.836C162.889 308.168 162.707 308.347 162.367 308.347H159.964C159.625 308.347 159.441 308.168 159.441 307.836V288.389C159.441 288.058 159.625 287.878 159.964 287.878H163.412C163.725 287.878 163.908 288.032 163.987 288.338L166.885 301.081L169.783 288.338C169.862 288.032 170.045 287.878 170.358 287.878H173.806Z" fill="#CCCCCC"/>
<path d="M187.731 287.878C187.992 287.878 188.148 288.032 188.148 288.287V307.938C188.148 308.193 187.992 308.347 187.731 308.347H185.145C184.909 308.347 184.754 308.245 184.675 308.014L180.679 297.09H180.548V307.938C180.548 308.193 180.418 308.347 180.131 308.347H177.416C177.154 308.347 176.996 308.193 176.996 307.938V288.287C176.996 288.032 177.154 287.878 177.416 287.878H180C180.235 287.878 180.392 287.98 180.47 288.211L184.44 299.085H184.596V288.287C184.596 288.032 184.727 287.878 185.015 287.878H187.731Z" fill="#CCCCCC"/>
<path d="M201.453 287.878C201.716 287.878 201.871 288.032 201.871 288.287V307.938C201.871 308.193 201.716 308.347 201.453 308.347H198.867C198.633 308.347 198.477 308.245 198.398 308.014L194.402 297.09H194.271V307.938C194.271 308.193 194.141 308.347 193.853 308.347H191.139C190.877 308.347 190.719 308.193 190.719 307.938V288.287C190.719 288.032 190.877 287.878 191.139 287.878H193.722C193.958 287.878 194.115 287.98 194.193 288.211L198.162 299.085H198.319V288.287C198.319 288.032 198.45 287.878 198.738 287.878H201.453Z" fill="#CCCCCC"/>
<path d="M207.622 287.88C207.884 287.88 208.039 288.033 208.039 288.289V307.94C208.039 308.194 207.884 308.349 207.622 308.349H204.906C204.618 308.349 204.488 308.194 204.488 307.94V288.289C204.488 288.033 204.618 287.88 204.906 287.88H207.622Z" fill="#CCCCCC"/>
<path d="M220.134 287.881C220.422 287.881 220.551 288.034 220.551 288.29V290.849C220.551 291.105 220.422 291.259 220.134 291.259H217.105V307.941C217.105 308.222 216.974 308.35 216.688 308.35H213.97C213.71 308.35 213.553 308.222 213.553 307.941V291.259H210.523C210.262 291.259 210.105 291.105 210.105 290.849V288.29C210.105 288.034 210.262 287.881 210.523 287.881H220.134Z" fill="#CCCCCC"/>
<path d="M235.498 292.355L233.827 301.285H237.169L235.498 292.355ZM238.971 308.347C238.736 308.347 238.606 308.22 238.554 307.988L237.822 304.254H233.173L232.469 307.988C232.417 308.22 232.286 308.347 232.05 308.347H229.256C228.969 308.347 228.838 308.193 228.917 307.912L233.252 288.236C233.304 287.98 233.46 287.878 233.696 287.878H237.327C237.561 287.878 237.717 287.98 237.77 288.236L242.106 307.912C242.158 308.193 242.052 308.347 241.739 308.347H238.971Z" fill="#CCCCCC"/>
<path d="M248.029 304.971H254.244C254.532 304.971 254.663 305.124 254.663 305.38V307.94C254.663 308.22 254.532 308.349 254.244 308.349H244.895C244.634 308.349 244.477 308.22 244.477 307.94V288.289C244.477 288.033 244.634 287.88 244.895 287.88H247.611C247.899 287.88 248.029 288.033 248.029 288.289V304.971Z" fill="#CCCCCC"/>
<path d="M260.54 304.97H266.756C267.042 304.97 267.175 305.123 267.175 305.378V307.938C267.175 308.219 267.042 308.347 266.756 308.347H257.407C257.146 308.347 256.988 308.219 256.988 307.938V288.287C256.988 288.032 257.146 287.878 257.407 287.878H260.123C260.409 287.878 260.54 288.032 260.54 288.287V304.97Z" fill="#CCCCCC"/>
<path d="M275.622 292.355L273.952 301.285H277.293L275.622 292.355ZM279.096 308.347C278.861 308.347 278.73 308.22 278.678 307.988L277.946 304.254H273.299L272.594 307.988C272.541 308.22 272.412 308.347 272.176 308.347H269.381C269.094 308.347 268.964 308.193 269.042 307.912L273.376 288.236C273.428 287.98 273.586 287.878 273.82 287.878H277.451C277.687 287.878 277.842 287.98 277.895 288.236L282.23 307.912C282.282 308.193 282.178 308.347 281.865 308.347H279.096Z" fill="#CCCCCC"/>
<path d="M291.495 288.287C291.495 288.032 291.653 287.878 291.914 287.878H294.603C294.916 287.878 295.049 288.032 295.049 288.287V307.938C295.049 308.193 294.916 308.347 294.603 308.347H291.914C291.653 308.347 291.495 308.193 291.495 307.938V299.8H288.154V307.938C288.154 308.193 287.997 308.347 287.735 308.347H285.046C284.733 308.347 284.602 308.193 284.602 307.938V288.287C284.602 288.032 284.733 287.878 285.046 287.878H287.735C287.997 287.878 288.154 288.032 288.154 288.287V296.423H291.495V288.287Z" fill="#CCCCCC"/>
<path d="M303.466 292.355L301.797 301.285H305.137L303.466 292.355ZM306.939 308.347C306.705 308.347 306.574 308.22 306.522 307.988L305.791 304.254H301.142L300.437 307.988C300.385 308.22 300.255 308.347 300.02 308.347H297.225C296.938 308.347 296.808 308.193 296.885 307.912L301.22 288.236C301.272 287.98 301.43 287.878 301.665 287.878H305.295C305.53 287.878 305.686 287.98 305.739 288.236L310.074 307.912C310.126 308.193 310.022 308.347 309.709 308.347H306.939Z" fill="#CCCCCC"/>
<path d="M319.463 300.825C319.463 300.159 319.125 299.801 318.42 299.801H316.042V304.97H318.42C319.099 304.97 319.463 304.638 319.463 303.946V300.825ZM319.463 292.279C319.463 291.614 319.125 291.256 318.42 291.256H316.042V296.424H318.42C319.099 296.424 319.463 296.066 319.463 295.426V292.279ZM322.936 296.272C322.936 297.217 322.232 297.934 321.292 298.087V298.139C322.232 298.292 322.936 299.009 322.936 299.955V304.663C322.936 307.068 321.606 308.347 319.15 308.347H312.884C312.621 308.347 312.465 308.193 312.465 307.938V288.287C312.465 288.007 312.621 287.878 312.884 287.878H319.15C321.606 287.878 322.936 289.159 322.936 291.563V296.272Z" fill="#CCCCCC"/>
<path d="M331.354 292.357L329.683 301.287H333.025L331.354 292.357ZM334.827 308.349C334.592 308.349 334.461 308.221 334.41 307.99L333.678 304.255H329.03L328.325 307.99C328.272 308.221 328.142 308.349 327.907 308.349H325.112C324.825 308.349 324.694 308.194 324.772 307.913L329.107 288.237C329.16 287.982 329.317 287.88 329.552 287.88H333.183C333.417 287.88 333.574 287.982 333.626 288.237L337.96 307.913C338.014 308.194 337.908 308.349 337.595 308.349H334.827Z" fill="#CCCCCC"/>
<path d="M345.733 304.97C346.412 304.97 346.777 304.637 346.777 303.946V292.304C346.777 291.614 346.412 291.256 345.733 291.256H343.329V304.97H345.733ZM339.777 288.287C339.777 288.032 339.91 287.878 340.196 287.878H346.464C348.919 287.878 350.224 289.184 350.224 291.589V304.663C350.224 307.068 348.919 308.347 346.464 308.347H340.196C339.91 308.347 339.777 308.219 339.777 307.938V288.287Z" fill="#CCCCCC"/>
<path d="M202.402 212.978H104.077C102.182 222.955 102.008 231.449 104.077 238.977H202.404C200.364 230.31 200.363 221.645 202.402 212.978Z" fill="#CCCCCC"/>
<path d="M412.069 226.791C412.069 310.112 342.88 377.896 257.841 377.896C192.642 377.896 136.769 338.057 114.253 281.915C110.892 273.564 108.279 264.843 106.484 255.847H127.731C127.739 255.869 127.739 255.893 127.746 255.917H209.553C216.364 265.82 224.792 273.146 235.1 277.464V281.915H136.866C158.119 326.53 204.349 357.523 257.841 357.523C331.413 357.523 391.274 298.877 391.274 226.791C391.274 154.712 331.413 96.0658 257.841 96.0658C205.009 96.0658 159.262 126.304 137.654 170.043H235.1V174.487C225.096 178.686 216.573 185.863 209.553 196.042H106.823C108.729 187.061 111.446 178.371 114.904 170.043C137.846 114.769 193.268 75.6928 257.841 75.6928C342.88 75.6928 412.069 143.479 412.069 226.791Z" fill="#CCCCCC"/>
<path d="M222.113 473.599H288.242C280.241 485.133 269.933 495.068 255.584 495.068C240.696 495.068 230.928 484.177 222.113 473.599Z" fill="#CCCCCC"/>
<path d="M255.003 268.277C254.596 268.257 254.19 268.233 253.785 268.205H253.445V268.18C233.594 266.596 217.548 251.341 214.85 231.901H255.168V219.614H214.938C217.992 199.915 234.749 184.679 255.168 183.879V172.894C226.384 173.778 203.23 197.284 203.23 226.081C203.23 254.815 226.295 278.285 255.003 279.263V268.277Z" fill="#CCCCCC"/>
</svg>

                    
                        </div>
    

                </div>
                </div>

            </div>
        );
    }
}

export default TopSection2;