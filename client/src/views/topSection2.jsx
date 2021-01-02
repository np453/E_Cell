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
                            Entrepreneurship Cell
                        </h1>
                        <h1 className="text-center landing_page_main_heading2">
                            MNNIT Allahabad
                        </h1>
                        <div className="row d-flex justify-content-center m-0">
                        
                        <svg ref={this.iconRef} className="bulb" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Tween
      from={{
        svgDraw: 0,
      }}
      to={{
        svgDraw: 1,
      }}
      duration={2}
    >               
                        {/*Bulb top center line*/}<path fill="none" stroke="white" strokeWidth="0.7" className="main_page_icon" d="M44.7158 9.87598H42.9062V0.000142097H44.7158V9.87598Z" fill="url(#paint0_linear)"/>
                        
                        {/*Bulb left line*/}<path fill="none" stroke="white" strokeWidth="0.7" className="main_page_icon" d="M10.0804 43.8086H0V42.036H10.0804V43.8086Z" fill="url(#paint1_linear)"/>
                        {/*bulb right line*/}<path fill="none" stroke="white" strokeWidth="0.7" className="main_page_icon" d="M87.6195 43.8086H77.5391V42.036H87.6195V43.8086Z" fill="url(#paint2_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" className="main_page_icon" d="M68.3028 20.1816L67.0234 18.9283L74.1512 11.9449L75.4305 13.1985L68.3028 20.1816Z" fill="url(#paint3_linear)"/>
                        
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M20.5987 18.9285L19.3194 20.1819L12.1914 13.1988L13.4707 11.9452L20.5987 18.9285Z" fill="url(#paint4_linear)"/>
                        
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M37.2639 79.6111C35.2821 79.6111 35.2816 76.0027 37.2639 76.0027H50.4012C52.3854 76.0027 52.3874 79.6111 50.4012 79.6111H37.2639Z" fill="url(#paint5_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M34.8208 75.0481C32.347 75.0481 32.3454 71.4406 34.8208 71.4406H52.8397C55.3157 71.4406 55.3148 75.0481 52.8397 75.0481H34.8208Z" fill="url(#paint6_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M38.3948 66.8678H35.7654V61.1208L32.2969 58.5518V70.1505C32.9026 70.2245 32.2641 70.2251 38.3948 70.2211C40.6983 70.2211 40.7148 66.8678 38.3948 66.8678Z" fill="url(#paint7_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M51.8973 61.1212V66.8325H49.6102C47.2974 66.8325 47.2958 70.1858 49.6102 70.1858H55.3654V58.5522L51.8973 61.1212Z" fill="url(#paint8_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M43.496 45.5612C43.4283 45.5578 43.3608 45.554 43.2936 45.5491H43.2374V45.5449C39.9407 45.2824 37.2759 42.7489 36.8277 39.5203H43.5233V37.4799H36.8423C37.3497 34.2084 40.1325 31.6783 43.5233 31.5455V29.7212C38.7434 29.8681 34.8984 33.7717 34.8984 38.5537C34.8984 43.3255 38.7284 47.2231 43.496 47.3855V45.5612Z" fill="url(#paint9_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M48.7161 42.7861C48.7161 42.8724 48.663 42.9243 48.5749 42.9243H47.693C47.596 42.9243 47.552 42.8724 47.552 42.7861V42.0949C47.552 41.8702 47.4283 41.7493 47.1992 41.7493H46.7408C46.5026 41.7493 46.3879 41.8702 46.3879 42.0949V46.0346C46.3879 46.2678 46.5113 46.3802 46.7408 46.3802H47.1992C47.4283 46.3802 47.552 46.2678 47.552 46.0346V45.3434C47.552 45.2571 47.596 45.2053 47.693 45.2053H48.5749C48.663 45.2053 48.7161 45.2571 48.7161 45.3434V46.2765C48.7161 47.0884 48.2664 47.5205 47.4461 47.5205H46.4586C45.6294 47.5205 45.1797 47.0884 45.1797 46.2765V41.853C45.1797 41.0411 45.6294 40.609 46.4586 40.609H47.4461C48.2664 40.609 48.7161 41.0411 48.7161 41.853V42.7861Z" fill="url(#paint10_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M53.1161 41.6112C53.1161 41.6975 53.0807 41.758 52.9751 41.758H50.7702V43.4858H52.4548C52.5429 43.4858 52.5958 43.5377 52.5958 43.6327V44.4881C52.5958 44.5832 52.5429 44.635 52.4548 44.635H50.7702V46.3802H52.9751C53.0807 46.3802 53.1161 46.4234 53.1161 46.5182V47.3824C53.1161 47.4686 53.0807 47.5205 52.9751 47.5205H49.73C49.6504 47.5205 49.5977 47.4686 49.5977 47.3824V40.7472C49.5977 40.6607 49.6504 40.609 49.73 40.609H52.9751C53.0807 40.609 53.1161 40.6607 53.1161 40.7472V41.6112Z" fill="url(#paint11_linear)"/>
                        <path fill="none" className="e_cell_first_l" stroke="white" strokeWidth="0.7" d="M55.1993 46.3802H57.298C57.395 46.3802 57.4392 46.4319 57.4392 46.5182V47.3824C57.4392 47.4774 57.395 47.5205 57.298 47.5205H54.141C54.0529 47.5205 54 47.4774 54 47.3824V40.7472C54 40.6607 54.0529 40.609 54.141 40.609H55.0583C55.1552 40.609 55.1993 40.6607 55.1993 40.7472V46.3802Z" fill="url(#paint12_linear)"/>
                        <path fill="none" className="e_cell_second_l" stroke="white" strokeWidth="0.7" d="M59.4373 46.38H61.5361C61.6331 46.38 61.6773 46.4316 61.6773 46.5179V47.3821C61.6773 47.4771 61.6331 47.5203 61.5361 47.5203H58.3791C58.291 47.5203 58.2383 47.4771 58.2383 47.3821V40.7469C58.2383 40.6604 58.291 40.6088 58.3791 40.6088H59.2963C59.3933 40.6088 59.4373 40.6604 59.4373 40.7469V46.38Z" fill="url(#paint13_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M29.6284 49.0744C29.6863 49.0744 29.7175 49.105 29.7175 49.1615V52.4766C29.7175 52.5331 29.6863 52.5637 29.6284 52.5637H29.2142C29.1565 52.5637 29.1253 52.5331 29.1253 52.4766V50.5135H29.0942L28.6534 52.4851C28.64 52.5374 28.6089 52.5637 28.5556 52.5637H28.3373C28.2839 52.5637 28.2527 52.5374 28.2393 52.4851L27.7986 50.5135H27.7674V52.4766C27.7674 52.5331 27.7364 52.5637 27.6784 52.5637H27.2689C27.2109 52.5637 27.1797 52.5331 27.1797 52.4766V49.1615C27.1797 49.105 27.2109 49.0744 27.2689 49.0744H27.8566C27.9099 49.0744 27.9412 49.1005 27.9546 49.1528L28.4486 51.325L28.9426 49.1528C28.956 49.1005 28.9873 49.0744 29.0407 49.0744H29.6284Z" fill="url(#paint14_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M32.0018 49.0744C32.0463 49.0744 32.073 49.1005 32.073 49.1441V52.494C32.073 52.5374 32.0463 52.5637 32.0018 52.5637H31.561C31.5208 52.5637 31.4944 52.5463 31.4809 52.507L30.7997 50.6447H30.7774V52.494C30.7774 52.5374 30.7552 52.5637 30.7062 52.5637H30.2435C30.1988 52.5637 30.1719 52.5374 30.1719 52.494V49.1441C30.1719 49.1005 30.1988 49.0744 30.2435 49.0744H30.6839C30.724 49.0744 30.7507 49.0918 30.7641 49.1311L31.4408 50.9847H31.4675V49.1441C31.4675 49.1005 31.4898 49.0744 31.5389 49.0744H32.0018Z" fill="url(#paint15_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M34.3417 49.0744C34.3863 49.0744 34.4128 49.1005 34.4128 49.1441V52.494C34.4128 52.5374 34.3863 52.5637 34.3417 52.5637H33.9008C33.8609 52.5637 33.8342 52.5463 33.8208 52.507L33.1396 50.6447H33.1172V52.494C33.1172 52.5374 33.0951 52.5637 33.0461 52.5637H32.5833C32.5386 52.5637 32.5117 52.5374 32.5117 52.494V49.1441C32.5117 49.1005 32.5386 49.0744 32.5833 49.0744H33.0237C33.0638 49.0744 33.0907 49.0918 33.104 49.1311L33.7806 50.9847H33.8073V49.1441C33.8073 49.1005 33.8297 49.0744 33.8787 49.0744H34.3417Z" fill="url(#paint16_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M35.3935 49.0746C35.4382 49.0746 35.4647 49.1008 35.4647 49.1444V52.4943C35.4647 52.5376 35.4382 52.564 35.3935 52.564H34.9305C34.8815 52.564 34.8594 52.5376 34.8594 52.4943V49.1444C34.8594 49.1008 34.8815 49.0746 34.9305 49.0746H35.3935Z" fill="url(#paint17_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M37.5259 49.0749C37.575 49.0749 37.5971 49.101 37.5971 49.1446V49.5807C37.5971 49.6245 37.575 49.6507 37.5259 49.6507H37.0096V52.4945C37.0096 52.5423 36.9873 52.5642 36.9385 52.5642H36.4753C36.4308 52.5642 36.4041 52.5423 36.4041 52.4945V49.6507H35.8876C35.8431 49.6507 35.8164 49.6245 35.8164 49.5807V49.1446C35.8164 49.101 35.8431 49.0749 35.8876 49.0749H37.5259Z" fill="url(#paint18_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M40.1452 49.8376L39.8604 51.3599H40.4301L40.1452 49.8376ZM40.7373 52.5637C40.6971 52.5637 40.675 52.542 40.6661 52.5025L40.5414 51.8659H39.7489L39.6289 52.5025C39.62 52.542 39.5976 52.5637 39.5575 52.5637H39.0811C39.0323 52.5637 39.0099 52.5374 39.0234 52.4895L39.7623 49.1354C39.7712 49.0918 39.7979 49.0744 39.838 49.0744H40.457C40.4969 49.0744 40.5236 49.0918 40.5325 49.1354L41.2716 52.4895C41.2805 52.5374 41.2625 52.5637 41.2091 52.5637H40.7373Z" fill="url(#paint19_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M42.2813 51.9882H43.3408C43.3899 51.9882 43.4122 52.0143 43.4122 52.0579V52.4943C43.4122 52.5421 43.3899 52.564 43.3408 52.564H41.7472C41.7027 52.564 41.6758 52.5421 41.6758 52.4943V49.1444C41.6758 49.1008 41.7027 49.0746 41.7472 49.0746H42.2101C42.2591 49.0746 42.2813 49.1008 42.2813 49.1444V51.9882Z" fill="url(#paint20_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M44.4141 51.9879H45.4737C45.5225 51.9879 45.545 52.0141 45.545 52.0577V52.494C45.545 52.5418 45.5225 52.5637 45.4737 52.5637H43.88C43.8355 52.5637 43.8086 52.5418 43.8086 52.494V49.1441C43.8086 49.1005 43.8355 49.0744 43.88 49.0744H44.3429C44.3917 49.0744 44.4141 49.1005 44.4141 49.1441V51.9879Z" fill="url(#paint21_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M46.985 49.8376L46.7001 51.3599H47.2698L46.985 49.8376ZM47.577 52.5637C47.5371 52.5637 47.5148 52.542 47.5059 52.5025L47.3811 51.8659H46.5888L46.4686 52.5025C46.4597 52.542 46.4376 52.5637 46.3975 52.5637H45.9211C45.872 52.5637 45.8499 52.5374 45.8631 52.4895L46.6021 49.1354C46.611 49.0918 46.6379 49.0744 46.6778 49.0744H47.2967C47.3369 49.0744 47.3633 49.0918 47.3724 49.1354L48.1114 52.4895C48.1203 52.5374 48.1025 52.5637 48.0491 52.5637H47.577Z" fill="url(#paint22_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M49.6908 49.1441C49.6908 49.1005 49.7177 49.0744 49.7622 49.0744H50.2206C50.274 49.0744 50.2965 49.1005 50.2965 49.1441V52.494C50.2965 52.5374 50.274 52.5637 50.2206 52.5637H49.7622C49.7177 52.5637 49.6908 52.5374 49.6908 52.494V51.1067H49.1211V52.494C49.1211 52.5374 49.0944 52.5637 49.0497 52.5637H48.5913C48.538 52.5637 48.5156 52.5374 48.5156 52.494V49.1441C48.5156 49.1005 48.538 49.0744 48.5913 49.0744H49.0497C49.0944 49.0744 49.1211 49.1005 49.1211 49.1441V50.531H49.6908V49.1441Z" fill="url(#paint23_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M51.7311 49.8376L51.4464 51.3599H52.0159L51.7311 49.8376ZM52.3231 52.5637C52.2832 52.5637 52.2609 52.542 52.252 52.5025L52.1274 51.8659H51.3349L51.2147 52.5025C51.2058 52.542 51.1837 52.5637 51.1436 52.5637H50.6672C50.6181 52.5637 50.596 52.5374 50.6092 52.4895L51.3482 49.1354C51.3571 49.0918 51.384 49.0744 51.4241 49.0744H52.0428C52.083 49.0744 52.1094 49.0918 52.1185 49.1354L52.8575 52.4895C52.8663 52.5374 52.8486 52.5637 52.7952 52.5637H52.3231Z" fill="url(#paint24_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M54.4586 51.2814C54.4586 51.1679 54.4009 51.1069 54.2807 51.1069H53.8755V51.9879H54.2807C54.3966 51.9879 54.4586 51.9314 54.4586 51.8134V51.2814ZM54.4586 49.8247C54.4586 49.7112 54.4009 49.6502 54.2807 49.6502H53.8755V50.5312H54.2807C54.3966 50.5312 54.4586 50.4702 54.4586 50.3611V49.8247ZM55.0507 50.5052C55.0507 50.6663 54.9307 50.7886 54.7704 50.8147V50.8236C54.9307 50.8496 55.0507 50.9718 55.0507 51.1331V51.9357C55.0507 52.3457 54.8239 52.5637 54.4052 52.5637H53.337C53.2923 52.5637 53.2656 52.5374 53.2656 52.494V49.1441C53.2656 49.0963 53.2923 49.0744 53.337 49.0744H54.4052C54.8239 49.0744 55.0507 49.2927 55.0507 49.7025V50.5052Z" fill="url(#paint25_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M56.4852 49.8379L56.2003 51.3601H56.77L56.4852 49.8379ZM57.0772 52.564C57.0371 52.564 57.0147 52.5423 57.0061 52.5028L56.8813 51.8662H56.089L55.9688 52.5028C55.9597 52.5423 55.9376 52.564 55.8975 52.564H55.4211C55.3722 52.564 55.3499 52.5376 55.3631 52.4898L56.102 49.1356C56.1112 49.0921 56.1378 49.0746 56.178 49.0746H56.7969C56.8368 49.0746 56.8635 49.0921 56.8724 49.1356L57.6113 52.4898C57.6205 52.5376 57.6024 52.564 57.5491 52.564H57.0772Z" fill="url(#paint26_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M58.9372 51.9879C59.0528 51.9879 59.1151 51.9312 59.1151 51.8134V49.8289C59.1151 49.7112 59.0528 49.6502 58.9372 49.6502H58.5274V51.9879H58.9372ZM57.9219 49.1441C57.9219 49.1005 57.9444 49.0744 57.9933 49.0744H59.0617C59.4802 49.0744 59.7028 49.2969 59.7028 49.7069V51.9357C59.7028 52.3457 59.4802 52.5637 59.0617 52.5637H57.9933C57.9444 52.5637 57.9219 52.5418 57.9219 52.494V49.1441Z" fill="url(#paint27_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M34.5031 36.3063H17.7418C17.4188 38.0071 17.3891 39.4549 17.7418 40.7383H34.5035C34.1557 39.2609 34.1555 37.7837 34.5031 36.3063Z" fill="url(#paint28_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M70.245 38.6609C70.245 52.8645 58.4505 64.4197 43.9539 64.4197C32.8396 64.4197 23.315 57.6283 19.4766 48.0579C18.9036 46.6342 18.4582 45.1475 18.1523 43.614H21.7743C21.7756 43.6178 21.7756 43.6219 21.7769 43.6259H35.7224C36.8835 45.3141 38.3201 46.563 40.0773 47.2991V48.0579H23.3315C26.9545 55.6633 34.8353 60.9467 43.9539 60.9467C56.4956 60.9467 66.7001 50.9493 66.7001 38.6609C66.7001 26.3737 56.4956 16.3763 43.9539 16.3763C34.9477 16.3763 27.1493 21.5309 23.4658 28.9872H40.0773V29.7447C38.3719 30.4605 36.919 31.6839 35.7224 33.4191H18.21C18.535 31.8882 18.9982 30.4067 19.5877 28.9872C23.4985 19.5647 32.9463 12.9034 43.9539 12.9034C58.4505 12.9034 70.245 24.4587 70.245 38.6609Z" fill="url(#paint29_linear)"/>
                        <path fill="none" stroke="white" strokeWidth="0.7" d="M37.8633 80.734H49.1362C47.7723 82.7003 46.015 84.3938 43.569 84.3938C41.0311 84.3938 39.3658 82.5372 37.8633 80.734Z" fill="url(#paint30_linear)"/>
                        {/* <path fill="none" stroke="white" strokeWidth="0.7" d="M43.4701 45.733C43.4007 45.7296 43.3315 45.7256 43.2625 45.7207H43.2046V45.7164C39.8206 45.4465 37.0852 42.846 36.6252 39.532H43.4983V37.4374H36.6402C37.1609 34.0794 40.0174 31.4822 43.4983 31.3457V29.4732C38.5914 29.6239 34.6445 33.631 34.6445 38.5399C34.6445 43.4382 38.5762 47.4391 43.4701 47.6057V45.733Z" fill="url(#paint31_linear)"/> */}
                        
                        
                        </Tween>
                        </svg>                      
                        </div>
    

                </div>
                </div>

            </div>
        );
    }
}

export default TopSection2;