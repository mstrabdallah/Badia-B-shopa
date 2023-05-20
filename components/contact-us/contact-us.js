import style from './styles/contactUsPage.module.scss'
import FormContactUs from './sections/formContactUs'
import useTranslation from 'next-translate/useTranslation';
const ContactUs = () => {

    const { t } = useTranslation('common')
    return (
        <>
            <section className={`page_ ` + style.contactUsPage}>
                <div className='container_'>
                    <div className='contactUsPageHeader'>
                        <h1>{t('To contact the B-shopa team')}</h1>
                        <p>{t('Contact us now by sending a message and we will respond to you within 48 hours.')}</p>
                        <p dangerouslySetInnerHTML={{ __html: t('Dear merchants, you can contact technical support at the unified number <span>0123456</span>') }}></p>
                    </div>

                    <div className='formContent'>
                        <FormContactUs />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;