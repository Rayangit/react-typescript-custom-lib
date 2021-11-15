import {FontSizeTypes} from '@theme/fonts/interfaces'

export interface Props {
  variant?: keyof FontSizeTypes
  children: string
}
