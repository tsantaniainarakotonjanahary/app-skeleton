import React from 'react'
import { Header, Main } from '..'
import 'typeface-roboto'
import './style.css'

export const App = ({ baseUrl, appName, apiVersion }) => (
    <>
        <Header baseUrl={baseUrl} appName={appName} apiVersion={apiVersion} />
        <Main />
    </>
)
