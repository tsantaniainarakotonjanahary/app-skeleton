import React from 'react'
import { Card } from '@dhis2/ui-core'
import './style.css'
import { Interests } from '../Interests'

export const Main = () => (
    <main id="main">
        <Card className="padded-card">
            <h1>Hello world</h1>
            <Interests />
        </Card>
    </main>
)
