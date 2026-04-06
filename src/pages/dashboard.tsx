import React from 'react'
import { useTranslation as useI18n } from 'react-i18next'
import TranslateButton from '@/components/translate-button'

const Dashboard = () => {
  const {t} = useI18n()

  return (
    <>
    <TranslateButton/>
    <div>{t("welcome")}</div>
    </>
    
  )
}

export default Dashboard