import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

function NavBarComponent() {
  useEffect(() => {
    const button = document.querySelector('.navbar-toggler');
    button.addEventListener('click', () => {
      const children = button.children;
      children[0].classList.toggle('navbar-activated');
    });
  }, []);

  return (
    <header>
      <Navbar id="navbar" bg="primary" collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link href="/">
            <Image src="/images/inss-logo.png" width="50px" height="50px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="">
              <a>Agendamentos/Solicitações</a>
            </Link>
            <Link href="">
              <a>Perícia</a>
            </Link>
            <Link href="">
              <a>Guias de Pagamentos(GPS)</a>
            </Link>
            <Link href="">
              <a>Acidente de Trabalho (CAT)</a>
            </Link>
            <Link href="">
              <a>Calendário de Pagamento</a>
            </Link>
            <Link href="">
              <a>Encontre uma agência</a>
            </Link>
            <Link href="">
              <a>Autencidade de Documentos</a>
            </Link>
          </Nav>
          <Nav>
            <Link href="">
              <a>Agências Abertas Covid-19</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavBarComponent;
