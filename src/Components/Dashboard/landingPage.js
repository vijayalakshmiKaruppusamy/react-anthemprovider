import {
    LandingPageHeader, Search, SearchBarHeader, SearchBarContent,Img,H3,
    ContentWrapper, SearchContentHead, Button, ButtonTag
} from "./landingPageStyle";
import Footer from "../Common/common";
import { content, providers, drug } from '../../Resources/string'
import { images } from "../../Resources/images";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const drugPage= useNavigate();
    const pharmacyPage = useNavigate();
    const providerpage = useNavigate();

    const PageDrug = () => {
        drugPage('/drug');
        
    }
    const PagePharmacy = () => {
        pharmacyPage('/pharmacy');
    }
    const PageProvider = () => {
        providerpage('/provider')
    }

    return (
        <>
        <LandingPageHeader>{content.LandingPageHeader}</LandingPageHeader>
            <Search>
                <SearchBarHeader>What are you searching for?</SearchBarHeader>
                <SearchBarContent>
                    <ContentWrapper>
                        <SearchContentHead>
                            <Img src={images.steth} alt="stethoscope" />
                            <H3>{providers.title}</H3>
                        </SearchContentHead>
                        <p>{providers.text}</p>
                        <Button onClick={PageProvider}>{providers.button}</Button>
                    </ContentWrapper>
                    <ContentWrapper>
                        <SearchContentHead>
                            <Img src={images.medicine} alt="drug" />
                            <H3>{drug.drugtitle}</H3>
                        </SearchContentHead>
                        <p>{drug.drugtext}</p>
                        <ButtonTag>
                            <Button onClick={PageDrug}>{drug.drugbutton}</Button>
                            <Button onClick={PagePharmacy}>{drug.PharmacyButton}</Button>
                        </ButtonTag>
                    </ContentWrapper>
                </SearchBarContent>
            </Search>
            <Footer />

         </>
         )
}
