import Box from './components/Box';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import { SiFacebook } from 'react-icons/si';
import { BsTelegram, BsDiscord } from 'react-icons/bs';
import { FaFacebookMessenger, FaTwitterSquare } from 'react-icons/fa';
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';
import Footer from './components/Footer';
// import UnityDummy from './components/UnityDummy';

function App() {
    const BoxData = [
        {
            id: '1',
            img: 'https://lh3.googleusercontent.com/8i47zYp_vOf0P98U6FfyN-hWGN_7l5DxQ8_EB2mIWzclRCiFK_hw9Mp-GRPllS46YT-Wy1RfRJgKaIJ9-sKQVT_echnjXyCUWOcH=w600',
            text: 'Text'
        },
        {
            id: '2',
            img: 'https://lh3.googleusercontent.com/8i47zYp_vOf0P98U6FfyN-hWGN_7l5DxQ8_EB2mIWzclRCiFK_hw9Mp-GRPllS46YT-Wy1RfRJgKaIJ9-sKQVT_echnjXyCUWOcH=w600',
            text: 'Text'
        },
        {
            id: '3',
            img: 'https://lh3.googleusercontent.com/8i47zYp_vOf0P98U6FfyN-hWGN_7l5DxQ8_EB2mIWzclRCiFK_hw9Mp-GRPllS46YT-Wy1RfRJgKaIJ9-sKQVT_echnjXyCUWOcH=w600',
            text: 'Text'
        },
        {
            id: '4',
            img: 'https://lh3.googleusercontent.com/8i47zYp_vOf0P98U6FfyN-hWGN_7l5DxQ8_EB2mIWzclRCiFK_hw9Mp-GRPllS46YT-Wy1RfRJgKaIJ9-sKQVT_echnjXyCUWOcH=w600',
            text: 'Text'
        }
    ];

    const TextBoxData = [
        {
            id: '1',
            title: 'Text Box',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem odio voluptatibus? Deserunt, culpa, '
        },
        {
            id: '2',
            title: 'Text Box',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem odio voluptatibus? Deserunt, culpa,'
        },
        {
            id: '3',
            title: 'Text Box',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem odio voluptatibus? Deserunt, culpa,'
        },
        {
            id: '4',
            title: 'Text Box',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem odio voluptatibus? Deserunt, culpa,'
        }
    ];

    console.log(getCookieConsentValue());

    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between flex-column py-5">
                        <h1>Text Field</h1>
                        <h2>Text Field</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./logo.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-12 d-flex justify-content-center ">
                        <a href="" className="text-decoration-none fs-3" style={{ color: '#98ff98' }}>
                            Play
                        </a>
                    </div>
                </div>
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-12 py-4 d-flex  flex-column justify-content-center  align-items-center" style={{ height: '250px' }}>
                        {/* <UnityDummy /> */}
                        {/* <p>Will add unity dummy and metamask login here..</p> */}
                        <button className="p-3" style={{}}>
                            Connect metamask
                        </button>
                    </div>
                </div>
                <div className="row py-2 py-lg-5">
                    {BoxData.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-3 d-flex justify-content-center">
                                <Box Img={item.img} Text={item.text} />
                            </div>
                        );
                    })}
                </div>
                <div className="row py-2 py-lg-5">
                    {TextBoxData.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-3 d-flex justify-content-center">
                                <TextBox Title={item.title} Desc={item.desc} />
                            </div>
                        );
                    })}
                </div>
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">
                        <div className="mb-4 d-flex justify-content-between">
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://discord.com" className="social-link">
                                    <BsDiscord size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://twitter.com" className="social-link">
                                    <FaTwitterSquare size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://facebook.com" className="social-link">
                                    <SiFacebook size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center p-2">
                                <a href="https://telegram.com" className="social-link">
                                    <BsTelegram size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Understood"
                cookieName="myAwesomeCookieName2"
                style={{ background: '#2B373B', textAlign: 'center' }}
                buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
                expires={150}
            >
                This website uses cookies to enhance the user experience
            </CookieConsent>
            <Footer />
        </div>
    );
}

export default App;
