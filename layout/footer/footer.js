import { Col, Layout, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import style from './footer.module.scss'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'
import useTranslation from "next-translate/useTranslation";
export default function Footer() {

  const { t } = useTranslation('common')
  return (
    <>
      <footer className={style.footer + ' container_'}>

        <Row gutter={20}>
          <Col xs={24} md={24} lg={7}>
            <div className="logo">
              <Link prefetch={false} href="/"><a>
                <Image alt="footer" src={'/images/logo.svg'} width={217} height={97} />
              </a></Link>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div className="footerUl">
              <ul>
                <li>
                  <Link prefetch={false} href="/"><a>
                    {t('privacy policy')}
                  </a>
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/"><a>
                    {t('Terms and Conditions')}
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div className="footerUl">
              <ul>
                <li>
                  <Link prefetch={false} href="/about-us"><a>
                    {t('About B-Shopa')}
                  </a>
                  </Link>
                </li>

                <li>
                  <Link  prefetch={false} href="/contact-us"><a>
                    {t('call us')}
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={24} lg={5}>
            <div className="socail">
              <ul className="flexCenter">
                <li>
                  <Link  href="/"><a><GrFacebookOption />
                  </a>
                  </Link>
                </li>

                <li>
                  <Link href="/"><a><AiOutlineTwitter />
                  </a>
                  </Link>
                </li>

                <li>
                  <Link href="/"><a><AiFillYoutube />
                  </a>
                  </Link>
                </li>

                <li>
                  <Link href="/"><a><AiFillInstagram />
                  </a>
                  </Link>
                </li>

              </ul>
            </div>
            <div className="cc">
              <p>{t('All rights reserved © Badia Tech 2022')}</p>
            </div>
          </Col>
        </Row>
      </footer>
    </>

  );
}
