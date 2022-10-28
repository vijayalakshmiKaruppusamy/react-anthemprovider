import {
    Available, ContactDistance, AddressContact, Contact, Heading, Img, P, PharmacyName,
    Tag, TagContent, Pharm, Links, Page
} from "./pharmacyNameStyle"
import { avail } from '../../../Resources/string'
import { images } from "../../../Resources/images"
import { HeaderPart } from "./pharmacy"
import Footer from "../../Common/common"
import { useState } from "react"
import About from "./aboutPharmacy"
import { pharmacydetails } from "../../../Resources/string"


export default function PharmacyNames() {
    return (
        <>
            <HeaderPart />
            <Availablility />
            <Footer />
        </>
    )
}
export const Availablility = () => {
    const [shown, isShown] = useState(false);
    const handleClick = event => {
        isShown(true);
    }
    return (
        <Page>
            <Available>
                <Heading>{avail}</Heading>
                {pharmacydetails.map((details, i) => {
                    return (
                        <Links onClick={handleClick} state={{ id: i }}>
                            <Pharm>
                                <PharmacyName>{details.name}</PharmacyName>
                                <AddressContact>
                                    <p>{details.address}</p>
                                    <ContactDistance>
                                        <Contact>
                                            <Img src={images.phone} alt="contact" />
                                            <P>{details.phone}</P>
                                        </Contact>
                                        <Contact>
                                            <Img src={images.location} alt="location" />
                                            <P>{details.distance}</P>
                                        </Contact>
                                    </ContactDistance>
                                </AddressContact>
                                <TagContent>
                                    {details.tag.map((type) => {
                                        return <Tag>{type}</Tag>
                                    })}
                                </TagContent>

                            </Pharm>
                        </Links>
                    )
                })}
            </Available>
            <>
                {shown && <About />}
            </>
        </Page>
    )
}

















