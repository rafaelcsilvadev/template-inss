import { Navbar, Container, Row, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

function NavBarComponent() {

  useEffect(() => {
    const button = document.querySelector('.navbar-toggler');
    button.addEventListener('click', () => {
      const children = button.children;
      children[0].classList.toggle('navbar-activated');
    })
  }, [])

  return (
    <Navbar id="navbar" bg="primary" collapseOnSelect expand="lg">
      <Navbar.Brand>
        <Link href="/">
          <Image src="/images/inss-logo.png" width="50px" height="50px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="">Agendamentos/Solicitações</Nav.Link>
          <Nav.Link href="">Perícia</Nav.Link>
          <Nav.Link href="">Guias de Pagamentos(GPS)</Nav.Link>
          <Nav.Link href="">Acidente de Trabalho (CAT)</Nav.Link>
          <Nav.Link href="">Calendário de Pagamento</Nav.Link>
          <Nav.Link href="">Encontre uma agência</Nav.Link>
          <Nav.Link href="">Autencidade de Documentos.</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="">Agências Abertas Covid-19</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
