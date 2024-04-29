import { type TNavMenuItem } from '../types'
import {
  CreditIcon,
  DocumentIcon,
  MailIcon,
  OrganizationsIcon,
  PersonalIcon,
  SettingsIcon
} from "../ui/icons";

export const navMenuItems: TNavMenuItem[] = [
  {
    title: 'Организации',
    icon: OrganizationsIcon
  },
  {
    title: 'Персонал',
    icon: PersonalIcon
  },
  {
    title: 'Кредиты',
    icon: CreditIcon
  },  {
    title: 'Корреспонденция',
    icon: MailIcon
  },
  {
    title: 'Работа',
    icon: DocumentIcon,
    subitems: [
      {
        title: 'Аналитика',
        routerPath: '/job/analytics'
      },
      {
        title: 'Договоры',
        routerPath: '/job/contracts'
      },
      {
        title: 'Импорт',
        routerPath: '/job/import'
      },
    ]
  },
  {
    title: 'Настройки',
    icon: SettingsIcon,
    routerPath: '/settings'
  },
]