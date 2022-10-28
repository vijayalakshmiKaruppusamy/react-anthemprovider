import {Actions, Body, BodyContentText} from "./commonStyle"
import { legal } from '../../Resources/string'
export default function Footer(){
    return(
        <Body>
        <Actions>{legal.legalText}</Actions>
        <h3>{legal.legalHead}</h3>
        <BodyContentText>{legal.legalContent}</BodyContentText>
        <BodyContentText>{legal.legalContentConti}</BodyContentText>
    </Body>
    )
}