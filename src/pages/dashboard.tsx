import React from 'react'
import { useTranslation as useI18n } from 'react-i18next'

const Dashboard = () => {
  const {t} = useI18n()

  return (
    <>

    <div>{t("common.welcome")}</div>
    </>
    
  )
}

export default Dashboard