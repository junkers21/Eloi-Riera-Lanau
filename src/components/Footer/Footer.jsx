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
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from 'react';

export default function Footer() {
    return (
        <footer className="bg-warning py-5 inset-shadow">
            <Container>
                <Row>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 4, order: 1 }} className="mb-3">
                        <SocialLinks />
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 4, order: 2 }} className="mb-3">
                        <ContactInfo />
                    </Col>
                    <Col xs={{ span: 12, order: 3 }} md={{ span: 12, order: 3 }} lg={{ span: 4, order: 3 }} className="mb-3">
                        <ChangeLang />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


function SocialLinks() {
    const { t } = useTranslation('home')
    return (
        <Row>
            <Col xs={12} className="mb-2"><p className="h5 text-white">{t("footer.social_networks")}</p></Col>
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

function ChangeLang() {
    const { t, i18n } = useTranslation()
    const [selectedLang, setSelectedLang] = useState("");

    var setLangText = (lang) => {
        switch (lang) {
            case "es-ES":
                setSelectedLang(t("langs.spanish", { ns: 'common' }))
                break;
            case "fr-FR":
                setSelectedLang(t("langs.french", { ns: 'common' }))
                break;
            default:
                setSelectedLang(t("langs.english", { ns: 'common' }))
        }

    }



    var checkLanguage = () => {
        let lng = i18n.language
        let lang = lng

        if (lang.includes("es") && lang !== "es-ES") {
            lng = "es-ES"
        }
        if (lang.includes("fr") && lang !== "fr-FR") {
            lng = "fr-FR"
        }
        if (lang.includes("en") && lang !== "en") {
            lng = "en"
        }

        if (lng !== lang) {
            i18n.changeLanguage(lng)
        }
    }

    var setLang = (lang) => {
        i18n.changeLanguage(lang)
        setSelectedLang(lang)
    }

    useEffect(() => {
        setLangText(i18n.language)
        checkLanguage()
    });


    return (
        <Row>
            <Col xs={12} className="mb-2"><p className="h5 text-white">{t("footer.select_lang", { ns: 'home' })}</p></Col>
            <Col xs={12}>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                        {selectedLang}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { setLang("es-ES") }}>{t("langs.spanish", { ns: 'common' })}</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setLang("fr-FR") }}>{t("langs.french", { ns: 'common' })}</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setLang("en") }}>{t("langs.english", { ns: 'common' })}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
        setTimeout(() => { setShow(false) }, 2000);
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
            <Col xs={12} className="mb-2"><p className="h5 text-white">{t("footer.contact_information")}</p></Col>
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