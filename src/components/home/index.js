import { SUILoadingButton } from '../../SUI_Library_Components/widgets/buttons/loadingbutton';
import { SUIDownloadLoadingButton } from '../../SUI_Library_Components/widgets/buttons/downloadbutton';
import { SUIRippleButton } from '../../SUI_Library_Components/widgets/buttons/ripplebutton';
import { SUIButton } from '../../SUI_Library_Components/widgets/buttons/antbutton';
import { SUINavbar } from '../../SUI_Library_Components/components/navbar';
import { SUISpinner } from '../../SUI_Library_Components/widgets/spinner';
import { SUIFooter } from '../../SUI_Library_Components/components/footer';
import { SUISlider } from '../../SUI_Library_Components/components/carousel/slider'
import { SUIDescriptionSlider } from '../../SUI_Library_Components/components/carousel/description_slider';
import { SUITestimonials } from '../../SUI_Library_Components/components/carousel/testimonials';
import LeftHomeMenu from './left_menu';
import RightHomeMenu from './right_menu';

import './style.css'
import SUIComponentPageData from './sui_components_data';

const Home = () => {
    return (
        <>
            <div className='Home'>

                <LeftHomeMenu />

                <div className='HomeContainer'>

                    <SUIComponentPageData />


                    <SUISlider />
                    <br></br>
                    <SUIDescriptionSlider />

                    <br></br>

                    <SUITestimonials />

                    <br></br>
                    <SUIRippleButton color="white" bgColor="red" >Submit</SUIRippleButton>
                    <br></br>
                    <SUILoadingButton time={1000} className="loginbtn" >Login</SUILoadingButton>
                    <br></br>
                    <SUILoadingButton time={1000} className="signinbtn"  >Sign in</SUILoadingButton>
                    <br></br>
                    <SUIDownloadLoadingButton time={1000} color="white" bgColor="red">download</SUIDownloadLoadingButton>
                    <br></br>
                    <SUIButton color="white" bgColor="red">Submit</SUIButton>

                    {/* <SUIFooter /> */}
                </div>

                <RightHomeMenu />

            </div>


        </>
    )
}



export default Home