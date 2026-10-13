import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './style.css';
import { Col, Container, Row } from 'react-bootstrap';

const LOGO_URL =
  'http://courses.ics.hawaii.edu/ics314f25/morea/ui-frameworks/murphyslogowhite.png';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'St. Patrick’s Day', href: '#' },
  { label: 'To Go Ordering', href: '#' },
];

const socialLinks = [
  { label: 'Instagram', icon: 'bi-instagram', href: '#' },
  { label: 'Facebook', icon: 'bi-facebook', href: '#' },
  { label: 'Twitter', icon: 'bi-twitter', href: '#' },
];

const hours = [
  { title: 'Lunch', weekdays: '11:00am - 2:30pm' },
  { title: 'Bar', weekdays: 'From 11:00am to closing' },
  { title: 'Dinner', weekdays: '5:00pm - 9:00pm' },
];

function Header() {
  return (
    <header className="menu-bar">
      <Container fluid className="justify-content-center">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <ul className="nav justify-content-start">
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  {/* I can't find the logo image so you'll just have to imagine it */}
                  <img src={LOGO_URL} alt="Murphy's Bar & Grill" className="brand-logo" />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <ul className="nav justify-content-end">
              {navLinks.map(({ label, href }) => (
                <li key={label} className="nav-item">
                  <a className="nav-link" href={href}>{label}</a>
                </li>
              ))}
              {socialLinks.map(({ label, icon, href }) => (
                <li key={label} className="nav-item">
                  <a className="nav-link" href={href} aria-label={label}>
                    <i className={`bi ${icon}`} />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="murphys-background">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="hero-text">
              Now accepting reservations for St. Patrick’s Day<br />
              Please call 808-531-0422 for reservations<br />
              St. Patrick’s Day To-Go Orders can be ordered on our website menu.
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="murphys-footer">
      <Container>
        <Row>
          {hours.map(({ title, weekdays }) => (
            <Col key={title} xs={12} md={4}>
              <h5>{title}</h5>
              <hr />
              <p>
                Monday - Friday: {weekdays}<br />
                Saturday - Sunday: Not open
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}