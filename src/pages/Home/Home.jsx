import Header from '../../components/Header/Header'
import FirstSection from '../../components/FirstSection/FirstSection'
import Summary from '../../components/Summary/Summary'
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';

export default function Home() {
    return (
        <div>
            <HomeMetaDescriptions />

            <Header />
            <FirstSection />
            <Summary />
        </div>
    )
}

function HomeMetaDescriptions() {

    const { t } = useTranslation('home')

    return (
        <div>
            <Helmet>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
                <link rel="canonical" href={t('meta.url')} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={t('meta.title')} />
                <meta property="og:description" content={t('meta.description')} />
                <meta property="og:image" content="https://picsum.photos/600/700" />
                <meta property="og:url" content={t('meta.url')} />
                <meta property="og:site_name" content={t('meta.title')} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('meta.title')} />
                <meta name="twitter:description" content={t('meta.description')} />
                <meta name="twitter:image" content="https://picsum.photos/600/700" />
                <meta name="twitter:url" content={t('meta.url')} />
            </Helmet>
        </div>
    )
}