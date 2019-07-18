import React from 'react'
import { Header } from '../Header'
import { Main } from '../Main'
import 'typeface-roboto'
import './style.css'

export const App = ({ baseUrl, appName, apiVersion }) => (
    <>
        <Header baseUrl={baseUrl} appName={appName} apiVersion={apiVersion} />
        <Main />
    </>
)
