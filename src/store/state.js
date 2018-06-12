import Cookies from 'js-cookie'

const state = {
  language: Cookies.get('language') || 'zh'
}
export default state
