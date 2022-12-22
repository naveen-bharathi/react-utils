import { DIRECTION } from '@/types/direction'

export function getDirectionForLocale<L = any>(rtlLocales: L[], locale: L) {
  return rtlLocales.includes(locale)
    ? DIRECTION.RTL
    : DIRECTION.LTR
}
