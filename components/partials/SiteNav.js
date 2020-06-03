import React from 'react'
import { useRouter } from 'next/router'
import { facebook, twitter } from '../../components/icons'

const SiteNav = ({ site, post, setRef }) => {
  const router = useRouter()

  return (
    <>
      <nav ref={setRef} className="site-nav">
          <div className="site-nav-left-wrapper">
              <div className="site-nav-left">
                  {site.logo ? (
                      <a className="site-nav-logo" href={site.url}><img src={site.logo} alt={site.title} /></a>
                  ) : (
                      <a className="site-nav-logo" href={site.url}>{site.title}</a>
                  )}
                  <div className="site-nav-content">
                      {site.navigation.length !== 0 && (
                        <ul className="nav">
                          {site.navigation.map((nav, index) => {
                            let lowerCaseLabel = nav.label.toLowerCase()
                            return (
                              <li
                                key={`${nav.label}-${index}`}
                                className={`nav-${lowerCaseLabel}${router.asPath === nav.url ? " nav-current" : ""}`}
                                role="menuitem"
                              >
                                <a href={nav.url}>{nav.label}</a>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                      {post && (
                          <span className={`nav-post-title ${!site.logo && 'dash'}`}>{post.title}</span>
                      )}
                  </div>
              </div>
          </div>
          <div className="site-nav-right">
              {site.secondary_navigation.length !== 0 ? (
                <ul className="nav" role="menu">
                  {site.secondary_navigation.map((nav, index) => {
                    let lowerCaseLabel = nav.label.toLowerCase()
                    return (
                      <li
                        key={`${nav.label}-${index}`}
                        className={`nav-${lowerCaseLabel}${router.asPath === nav.url ? " nav-current" : ""}`}
                        role="menuitem"
                      >
                        <a href={nav.url}>{nav.label}</a>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <div className="social-links">
                  {site.facebook && (
                    <a className="social-link social-link-fb"
                      href={site.facebook}
                      title="Facebook"
                      target="_blank"
                      rel="noopener"
                    >
                      {facebook}
                    </a>
                  )}
                  {site.twitter && (
                    <a
                      className="social-link social-link-tw"
                      href={site.twitter}
                      title="Twitter"
                      target="_blank"
                      rel="noopener"
                    >
                        {twitter}
                    </a>
                  )}
                </div>
                  /*
                    {{#unless @labs.members}}  There is no api endpoint at the moment for labs features
                        <a className="rss-button" href="https://feedly.com/i/subscription/feed/{{@site.url}}/rss/" title="RSS" target="_blank" rel="noopener">{{> "icons/rss"}}</a>
                    {{/unless}}
                  */
              )}
              {/* There is no api endpoint at the moment for labs features
                {{#if @labs.members}}
                    <a className="subscribe-button" href="#subscribe">Subscribe</a>
                {{/if}}
              */}
          </div>
        </nav>
    </>
  )
}

export default SiteNav
