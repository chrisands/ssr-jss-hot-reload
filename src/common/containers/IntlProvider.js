import { addLocaleData, IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import ruLocaleData from 'react-intl/locale-data/ru'

addLocaleData(ruLocaleData)

export default connect(
  () => ({
    defaultLocale: 'ru',
    locale: 'ru',
    messages: {},
  }),
)(IntlProvider)
