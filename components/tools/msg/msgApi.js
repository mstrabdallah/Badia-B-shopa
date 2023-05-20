import useTranslation from "next-translate/useTranslation"

export default function MsgApi({ apiErrors, msg }) {
    const { t } = useTranslation('common')


    return (

        msg === true && (apiErrors?.message && apiErrors?.message != '') ?
            <div className="ApiError" >
                {t(apiErrors?.message)}
            </div>
            :

            !apiErrors?.errors && (apiErrors?.message && apiErrors?.message != '') &&
            <div className="ApiError">
                {t(apiErrors?.message)}
            </div>
    )
} 