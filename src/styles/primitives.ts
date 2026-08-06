import styled from 'styled-components';
export const Container=styled.div`width:min(${({theme})=>theme.layout.max},calc(100% - 36px));margin-inline:auto`;
export const Section=styled.section`padding:100px 0;@media(max-width:${({theme})=>theme.bp.tablet}){padding:74px 0}`;
export const Kicker=styled.span`display:block;color:${({theme})=>theme.colors.orange};font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase`;
export const Title=styled.h2`max-width:800px;margin:12px auto 16px;font:800 clamp(36px,4.3vw,58px)/1.07 'Manrope',sans-serif;letter-spacing:-.055em`;
export const Subtitle=styled.p`max-width:630px;margin:0 auto;color:${({theme})=>theme.colors.muted};font-size:17px;line-height:1.65`;
export const Button=styled.button`display:inline-flex;align-items:center;justify-content:center;gap:9px;border:0;border-radius:${({theme})=>theme.radius.pill};padding:15px 22px;background:${({theme})=>theme.colors.ink};color:white;font-weight:800;transition:.2s;&:hover{transform:translateY(-2px);box-shadow:${({theme})=>theme.shadow.lift}}`;
