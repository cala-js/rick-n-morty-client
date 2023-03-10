import { statusType } from '@components/StatusIndicator'

export interface ICharacterAttributes {
    status: statusType
    species: string
    gender: string
    origin: string
}

export interface ICharacter {
    id: number
    name: string
    image: string
    attributes: {
        status: statusType
        species: string
        gender: string
        origin: string
    }
    episodes: number[]
}
