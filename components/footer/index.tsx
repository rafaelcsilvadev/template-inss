import Link from 'next/link';
import Image from 'next/image';
import { Container, Row } from 'react-bootstrap';

interface LinksProps {
  href: string;
  text: string;
}

interface Props {
  title: string;
  link: Array<LinksProps>;
}

function LinksFooter(props: Props) {
  const array = props.link;
  console.log(array);
  return (
    <div className="d-flex flex-column col-12 mt-4 col-md-5 mt-0 col-lg-3">
      <h6 className="title2">{props.title}</h6>
      <div className="d-flex flex-column">
        {array.map((e, i) => (
          <div key={i}>
            <Link href={e.href}>
              <a className="text">{e.text}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary footer px-2 px-md-5 py-4">
      <Container fluid={true}>
        <Row>
          <LinksFooter
            title="Serviços"
            link={[
              {
                href: '#',
                text: 'Agendamentos/Solicitações',
              },
              {
                href: '#',
                text: 'Agendar Perícia',
              },
              {
                href: '#',
                text: 'Emitir Guia de Pagamentos (GPS)',
              },
              {
                href: '#',
                text: 'Comunidade de Acidentes de Trabalho',
              },
              {
                href: '#',
                text: 'Calendário de Pagamento',
              },
              {
                href: '#',
                text: 'Encontre uma Agência',
              },
              {
                href: '#',
                text: 'Verificar Autenticidade de Documento',
              },
              {
                href: '#',
                text: 'Agências abertas Covid-19',
              },
            ]}
          />
          <LinksFooter
            title="Inscrições"
            link={[
              {
                href: '#',
                text: 'Informações sobre inscrição',
              },
              {
                href: '#',
                text: 'Tipos de Filiação',
              },
              {
                href: '#',
                text: 'Formas de Pagar',
              },
              {
                href: '#',
                text: 'Prazos de Recolhimento',
              },
              {
                href: '#',
                text: 'Como preencher a GPS',
              },
              {
                href: '#',
                text: 'Donos de Casa',
              },
              {
                href: '#',
                text: 'Plano Simplificado',
              },
            ]}
          />
          <LinksFooter
            title="Aplicativos"
            link={[
              {
                href: '#',
                text: 'Baixar na Play Store',
              },
              {
                href: '#',
                text: 'Baixar na Apple Store',
              },
            ]}
          />
          <LinksFooter
            title="Suporte"
            link={[
              {
                href: '#',
                text: 'Perguntas Frequentes',
              },
              {
                href: '#',
                text: 'Ouvidoria',
              },
            ]}
          />
        </Row>
        <div className="text-right">
          <Link href="#">
            <Image src="/images/patria_amada.png" width="100px" height="50px" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
