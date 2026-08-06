import styled from "styled-components";
import { Container, Kicker, Section, Title } from "../../styles/primitives";
const Root=styled(Section)`text-align:center`;
const Grid=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px;@media(max-width:${({theme})=>theme.bp.tablet}){grid-template-columns:1fr}`;
const Step=styled.article`h3{margin:4px 0 9px}p{margin:0;color:${({theme})=>theme.colors.muted};line-height:1.6}`;
const No=styled.div`font:800 55px 'Manrope';color:${({theme})=>theme.colors.line}`;
const content=[["Choisissez votre pack","1, 2 ou 10 veilleuses, avec le total affiché immédiatement."],["Indiquez vos coordonnées","Nom, téléphone et adresse complète pour préparer la livraison."],["Confirmez sur WhatsApp","Votre message est prêt. Il vous suffit de l’envoyer depuis votre compte."]];
export const HowItWorks=()=><Root><Container><Kicker>Simple et rapide</Kicker><Title>Votre commande en 3 étapes</Title><Grid>{content.map(([title,text],index)=><Step key={title}><No>0{index+1}</No><h3>{title}</h3><p>{text}</p></Step>)}</Grid></Container></Root>;
