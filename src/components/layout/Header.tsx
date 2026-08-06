import { ArrowRight, Moon, Sun } from "lucide-react";
import styled from "styled-components";
import type { ThemeMode } from "../../hooks/useThemeMode";
import type { PackQuantity } from "../../types/store";
import { Button, Container } from "../../styles/primitives";
import { Logo } from "../ui/Logo";

const Bar = styled.div`
  background: ${({ theme }) => theme.colors.strong}; color: white; text-align: center; padding: 9px; font-size: 13px;
  b { color: ${({ theme }) => theme.colors.lime}; }
`;
const Nav = styled(Container)`height:76px;display:flex;align-items:center;justify-content:space-between;gap:20px;@media(max-width:${({theme})=>theme.bp.mobile}){height:68px;gap:10px}`;
const Links = styled.div`display:flex;gap:28px;color:${({theme})=>theme.colors.muted};font-size:14px;font-weight:700;@media(max-width:${({theme})=>theme.bp.tablet}){display:none}`;
const Actions = styled.div`display:flex;align-items:center;gap:10px`;
const ThemeToggle = styled.button<{ $dark: boolean }>`
  position:relative;display:inline-flex;align-items:center;justify-content:space-between;width:58px;height:34px;padding:4px;border:1px solid ${({theme})=>theme.colors.line};border-radius:${({theme})=>theme.radius.pill};background:${({theme})=>theme.colors.paper};color:${({theme})=>theme.colors.muted};transition:background .2s,border-color .2s;
  svg{position:relative;z-index:1;width:15px;height:15px;transition:color .2s;}&::after{content:'';position:absolute;width:24px;height:24px;border-radius:50%;background:${({theme})=>theme.colors.orange};box-shadow:0 2px 7px #0003;transform:translateX(${({$dark})=>$dark?'24px':'0'});transition:transform .22s ease;}&:hover{border-color:${({theme})=>theme.colors.orange};}
`;
const NavButton = styled(Button)`@media(max-width:${({theme})=>theme.bp.mobile}){width:38px;height:38px;padding:0;gap:0;font-size:0}`;

interface Props { onOrder: (q: PackQuantity) => void; themeMode: ThemeMode; onToggleTheme: () => void; }

export function Header({ onOrder, themeMode, onToggleTheme }: Props) {
  const isDark = themeMode === "dark";
  return <header><Bar>Livraison disponible en Tunisie · <b>Paiement à la livraison</b></Bar><Nav><Logo/><Links><a href="#avantages">Avantages</a><a href="#offres">Nos offres</a><a href="#faq">Questions</a></Links><Actions><ThemeToggle $dark={isDark} onClick={onToggleTheme} aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"} aria-pressed={isDark} title={isDark ? "Passer au mode clair" : "Passer au mode sombre"}><Sun aria-hidden="true"/><Moon aria-hidden="true"/></ThemeToggle><NavButton onClick={()=>onOrder(2)}><span>Commander</span><ArrowRight size={17}/></NavButton></Actions></Nav></header>;
}
