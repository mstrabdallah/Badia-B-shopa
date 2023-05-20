import style from './styles/register-service-provider.module.scss'
import FormContactUs from './sections/formContactUs'
import useTranslation from 'next-translate/useTranslation';
const RegisterServiceProvider = () => {
    const { t } = useTranslation('common')
    return (
        <>
            <section className={`page_ ` + style.RegisterServiceProvider}>
                <div className='contactUsPageHeader'>
                    <h1>{t('Register as a service provider')}</h1>
                    <p>{t('Please fill out the following form to register with us as a service provider')}</p>
                </div>

                <div className='formContent'>
                    <FormContactUs />
                </div>
            </section>
        </>
    );
};

export default RegisterServiceProvider;