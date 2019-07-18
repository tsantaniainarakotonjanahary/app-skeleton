import React from 'react'
import { DataProvider } from '@dhis2/app-runtime'
import { HeaderBar } from '@dhis2/ui-widgets'
import './style.css'

export const Header = ({ baseUrl, appName, apiVersion }) => (
    <DataProvider baseUrl={baseUrl} apiVersion={apiVersion}>
        <HeaderBar appName={appName} className='headerbar' />
    </DataProvider>
)

