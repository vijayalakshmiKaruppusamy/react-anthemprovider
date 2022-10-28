import { useLocation } from "react-router-dom"
import {  explain } from "../../../Resources/string";
import {
    PharmacyName, Pharm, Planing, Tag, TagContent, PreferOptions, StandardOptions, Div,
    Information, P, H4, Fillup, Due,List
} from "./aboutPharmacyStyle"
import { AddressContact,ContactDistance,Contact,Img} from './pharmacyNameStyle'
import { images } from "../../../Resources/images";
import { pharmacydetails,standardcost,prefercost } from "../../../Resources/string";

export default function About() {
    const { state } = useLocation();
    console.log(state);
    return (
        <>
            {pharmacydetails.map((pharmacy) => {
                return (
                    <>
                        {state.id === pharmacy.id && (
                            <>
                                <Pharm>
                                    <PharmacyName>{pharmacy.name}</PharmacyName>
                                    <AddressContact>
                                    <p>{pharmacy.address}</p>
                                    <ContactDistance>
                                        <Contact>
                                            <Img src={images.phone} alt="contact" />
                                            <P>{pharmacy.phone}</P>
                                        </Contact>
                                        <Contact>
                                            <Img src={images.location} alt="location" />
                                            <P>{pharmacy.distance}</P>
                                        </Contact>
                                    </ContactDistance>
                                </AddressContact>
                                  <Div>
                                        <Planing>
                                            <div>
                                                <H4>{explain.extHours}</H4>
                                                <P>{explain.time}</P>
                                            </div>
                                            <div>
                                                <H4>{explain.tt}</H4>
                                                <P>{explain.ttCount}</P>
                                            </div>
                                        </Planing>
                                    </Div>
                                    <Div>
                                        <>
                                            <h3>{explain.pharmType}</h3>
                                            <Tag>
                                            {pharmacy.tag.map((type) => {
                                                 return <TagContent>{type}</TagContent>
                                             })}
                                           </Tag>
                                            <Fillup>
                                                <li>{explain.fillup}</li>
                                                <li>{explain.pricing}</li>
                                            </Fillup>
                                        </>
                                        <>
                                            <h3>{explain.prefer}</h3>
                                            <PreferOptions>
                                                {prefercost.map((item,i) => {
                                                   return(
                                                    <List>{item.name}</List>
                                                   )
                                                })}
                                              </PreferOptions>
                                        </>
                                        <>
                                            <h3>{explain.standard}</h3>
                                            <StandardOptions>
                                                 {standardcost.map((item,i) => {
                                                   return(
                                                    <List>{item.name}</List>
                                                   )
                                                })}
                                            </StandardOptions>
                                        </>
                                    </Div>
                                    <Div>
                                        <Due>
                                            <P>{explain.dueDate}</P>
                                            <P>{explain.lastUpdate}</P>
                                        </Due>
                                    </Div>
                                    <Div>
                                        <Information>
                                            <h2>{explain.importantinfo}</h2>
                                            <P>{explain.info}
                                            </P>
                                        </Information>
                                    </Div>
                                </Pharm>
                             </> 
                        )
                    }
                    </> )
                 }
                    ) } </>
        
               ) }








