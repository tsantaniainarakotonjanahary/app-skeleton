import React from 'react'
import { CssReset } from '@dhis2/ui-core'
import { Header } from '../Header'
import { Main } from '../Main'
import 'typeface-roboto'
import './style.css'

export const App = ({ baseUrl, appName, apiVersion }) => (
    <>
        <CssReset />
        <Header baseUrl={baseUrl} appName={appName} apiVersion={apiVersion} />
        <Main />
    </>
)
