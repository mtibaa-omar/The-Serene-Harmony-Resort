import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const Title = styled.h1`
  font-size: 1.4rem;
  text-align: center;
  color: #586450;
  margin-top: -10%;
  font-weight: 600;
`;
function SideBar() {
  return (
    <StyledSidebar>
      <Logo />
      <Title>The Serene Harmony Resort</Title>
      <MainNav />
    </StyledSidebar>
  );
}

export default SideBar;
