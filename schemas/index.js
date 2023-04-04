import AnalyticsCode from './documents/AnalyticsCode'
import Banner from './documents/Banner'
import Footer from './documents/Footer'
import Header from './documents/Header'
import HomePage from './documents/HomePage'
import metaTag from './documents/MetaTag'
import About from './documents/about'
import ExpertiseArea from './documents/expertiseArea'
import Services from './documents/Services'
import siteConfig from './documents/siteConfig'
import Link from './objects/Link'
import logo from './objects/Logo'
import NavItems from './objects/NavItems'
import socialMedia from './objects/socialMedia'
import Testimonials from './documents/testimonials'
import Subscribers from './documents/Subscribers'
import privacyPolicy from './documents/privacyPolicy'

export const schemaTypes = [
  //documents type
  siteConfig,
  HomePage,
  Header,
  Banner,
  About,
  Services,
  ExpertiseArea,
  Testimonials,
  Footer,
  metaTag,
  AnalyticsCode,
  Subscribers,
  privacyPolicy,

  //objects type
  logo,
  NavItems,
  Link,
  socialMedia,
]
