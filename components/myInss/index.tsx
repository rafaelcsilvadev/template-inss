import Image from 'next/image';
import { Container, Row, Button } from 'react-bootstrap';

function MyInss() {
  return (
    <section className="mt-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <div className="text-center">
            <Image src="/images/inss-logo.png" width="200px" height="200px" />
            <p className="title mt-4">Meu INSS</p>
            <Button variant="primary">Entrar/Cadastrar</Button>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default MyInss;
