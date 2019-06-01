import styled from 'styled-components'
import { HeaderBar } from '@dhis2/ui-widgets'

export const StickyHeaderBar = styled(HeaderBar)`
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
`
