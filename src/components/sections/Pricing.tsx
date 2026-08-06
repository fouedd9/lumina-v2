import styled from "styled-components";
import { packs } from "../../data/store";
import type { PackQuantity } from "../../types/store";
import {
  Container,
  Kicker,
  Section,
  Subtitle,
  Title,
} from "../../styles/primitives";
const Root = styled(Section)`
  background: ${({ theme }) => theme.colors.ink};
  color: white;
  text-align: center;
  ${Subtitle} {
    color: #aaa;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 48px;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.article<{ $featured?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 28px;
  text-align: left;
  border: 1px solid
    ${({ theme, $featured }) => ($featured ? theme.colors.lime : "#3c3c3c")};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme, $featured }) =>
    $featured ? theme.colors.lime : "#222"};
  color: ${({ theme, $featured }) => ($featured ? theme.colors.ink : "white")};
  transition: 0.2s;
  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.lime};
  }
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    order: ${({ $featured }) => ($featured ? -1 : 0)};
  }
`;
const Badge = styled.span`
  position: absolute;
  right: 16px;
  top: 16px;
  padding: 6px 9px;
  border-radius: 99px;
  background: ${({ theme }) => theme.colors.orange};
  color: white;
  font-size: 10px;
  font-weight: 800;
`;
const Name = styled.small`
  opacity: 0.65;
  font-weight: 800;
`;
const Label = styled.h3`
  font: 800 28px "Manrope";
  margin: 15px 0 4px;
`;
const Price = styled.div`
  font: 800 46px "Manrope";
  letter-spacing: -2px;
  small {
    font: 600 15px "DM Sans";
    letter-spacing: 0;
  }
`;
const Save = styled.p`
  min-height: 38px;
  margin: 9px 0 20px;
  opacity: 0.65;
  font-size: 13px;
`;
const Choose = styled.button<{ $featured?: boolean }>`
  margin-top: auto;
  border: 0;
  border-radius: 14px;
  padding: 14px;
  background: ${({ theme, $featured }) =>
    $featured ? theme.colors.ink : "white"};
  color: ${({ $featured }) => ($featured ? "white" : "black")};
  font-weight: 800;
`;
export function Pricing({ onOrder }: { onOrder: (q: PackQuantity) => void }) {
  return (
    <Root id="offres">
      <Container>
        <Kicker>Choisissez votre offre</Kicker>
        <Title>Plus vous illuminez, plus vous économisez</Title>
        <Subtitle>
          Prix net et commande rapide. Sélectionnez votre pack puis finalisez en
          quelques secondes.
        </Subtitle>
        <Grid>
          {packs.map((p) => (
            <Card key={p.quantity} $featured={p.featured}>
              {p.featured && <Badge>LE PLUS CHOISI</Badge>}
              <Name>{p.name}</Name>
              <Label>{p.label}</Label>
              <Price>
                {p.price} <small>DT</small>
              </Price>
              <Save>{p.description}</Save>
              <Choose
                $featured={p.featured}
                onClick={() => onOrder(p.quantity)}
              >
                Choisir{" "}
                {p.quantity === 2
                  ? "le duo"
                  : `${p.quantity} pièce${p.quantity > 1 ? "s" : ""}`}
              </Choose>
            </Card>
          ))}
        </Grid>
      </Container>
    </Root>
  );
}
