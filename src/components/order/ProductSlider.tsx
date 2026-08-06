import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import { gallery } from "../../data/store";

const Root=styled.div`min-width:0`;
const Stage=styled.div`position:relative;aspect-ratio:1/1;overflow:hidden;border-radius:22px;background:${({theme})=>theme.colors.softSurface}`;
const Image=styled.img`width:100%;height:100%;object-fit:cover`;
const Arrow=styled.button<{$right?:boolean}>`position:absolute;z-index:1;top:50%;${({$right})=>$right?'right:12px':'left:12px'};transform:translateY(-50%);width:40px;height:40px;display:grid;place-items:center;border:0;border-radius:50%;background:${({theme})=>theme.colors.paper};color:${({theme})=>theme.colors.ink};box-shadow:0 5px 18px #0003`;
const Caption=styled.div`position:absolute;left:13px;bottom:13px;padding:7px 10px;border-radius:99px;background:${({theme})=>theme.colors.strong};color:white;font-size:12px;font-weight:700`;
const Dots=styled.div`display:flex;justify-content:center;gap:7px;margin-top:12px`;
const Dot=styled.button<{$active:boolean}>`width:${({$active})=>$active?'24px':'8px'};height:8px;border:0;padding:0;border-radius:99px;background:${({theme,$active})=>$active?theme.colors.orange:theme.colors.line};transition:.2s`;
export function ProductSlider(){const[index,setIndex]=useState(0);const previous=()=>setIndex((current)=>(current-1+gallery.length)%gallery.length);const next=()=>setIndex((current)=>(current+1)%gallery.length);return <Root><Stage><Image src={gallery[index].src} alt={gallery[index].alt}/><Arrow onClick={previous} aria-label="Image précédente"><ChevronLeft/></Arrow><Arrow $right onClick={next} aria-label="Image suivante"><ChevronRight/></Arrow><Caption>{gallery[index].label}</Caption></Stage><Dots>{gallery.map((item,itemIndex)=><Dot key={item.src} $active={itemIndex===index} onClick={()=>setIndex(itemIndex)} aria-label={`Afficher l'image ${itemIndex+1}`}/>)}</Dots></Root>}
