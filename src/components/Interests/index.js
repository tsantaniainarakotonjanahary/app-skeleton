import React, { useEffect, useState } from 'react'
import { InputField, Button } from '@dhis2/ui-core'
import { get, put } from '../../api/api.js'

export const Interests = () => {
    const [interests, setInterests] = useState('')

    useEffect(() => {
        const getInterests = async () => {
            const response = await get('me?fields=interests')
            setInterests(response.interests)
        }
        getInterests()
    }, [])

    const onChange = event => {
        setInterests(event.target.value)
    }

    const onSubmit = () => {
        put('me', { interests })
    }

    return (
        <span>
            <InputField
                value={interests}
                onChange={onChange}
                name="interests"
                label="Interests"
            />
            <Button primary onClick={onSubmit}>
                Submit
            </Button>
        </span>
    )
}
