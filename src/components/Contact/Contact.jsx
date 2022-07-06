import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome-free-regular';
import { useTranslation } from 'react-i18next';
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

export default function Contact() {
    return (
        <section className="bg-warning py-5">
            <Container id="contact">
                <Row>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 4, order: 1 }} className="mb-3">
                        <SocialLinks />
                    </Col>
                    <Col xs={{ span: 12, order: 3 }} md={{ span: 12, order: 3 }} lg={{ span: 4, order: 2 }} className="mb-3">
                        <ContactForm />
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 4, order: 3 }} className="mb-3">
                        <ContactInfo />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

function SocialLinks() {
    return (
        <Row>
            <Col xs={12} className="mb-2"><p className="h5 text-white">Redes Sociales</p></Col>
            <Col xs={12}>
                <Button variant="outline-light" target="_blank" href="https://www.linkedin.com/in/eloi-riera-lanau/">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </Button>
                <Button variant="outline-light ms-2" target="_blank" href="https://github.com/junkers21">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                </Button>
            </Col>
        </Row>
    )
}

function ContactForm() {
    return (
        <Row>
            <Col xs={12} className="mb-2"></Col>
            <Col xs={12}>
            </Col>
        </Row>
    )
}

function ContactInfo() {
    const { t } = useTranslation('home')

    const textCopied = "Copied"
    const textFailed = "Fail"


    const [tooltipText, setTooltip] = useState(textCopied);
    const [show, setShow] = useState(false);
    const target = useRef(null);

    var email = t('header.email_text')

    var closeTooltip = () => {
        setTimeout(() => { setShow(false) }, 3000);
    }

    var onSuccess = () => {
        setTooltip(textCopied)
        setShow(true)
        closeTooltip()
    };


    var onFail = () => {
        setTooltip(textFailed)
        setShow(true)
        closeTooltip()
    };

    var onClickCopy = () => {
        copyTextToClipboard(
            email,
            onSuccess,
            onFail
        )
    };

    return (
        <Row>
            <Col xs={12} className="mb-2"><p className="h5 text-white">Información de contacto</p></Col>
            <Col xs={12}>
                <a href={"mailto:" + email} className="text-white text-decoration-underline">{email}</a>

                <Button ref={target} variant="outline-light" className="ms-3" onClick={() => onClickCopy()}>
                    <FontAwesomeIcon icon="fa-regular fa-copy" />
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            {tooltipText}
                        </Tooltip>
                    )}
                </Overlay>
            </Col>
        </Row>
    )
}

function fallbackCopyTextToClipboard(text, onSuccess, onFail) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        if (successful) {
            onSuccess()
        } else {
            onFail()
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}


function copyTextToClipboard(text, onSuccess, onFail) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text, onSuccess, onFail);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        onSuccess()
    }, function (err) {
        onFail()
    });
}
