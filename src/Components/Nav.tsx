import React from 'react'

const Nav = () => {
  const navLinkStyle = {
    color: '#ffffff',
    fontSize: '18px',
    textDecoration: 'none',
  }

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        height: '80px',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '33.333%'
        }}
      >
        <svg width="55" height="32" viewBox="0 0 55 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.403 11.5315C54.1168 9.47084 52.2851 7.41016 40.7797 7.58189C37.6887 2.4302 31.7356 -0.718054 25.3819 0.14056C19.0281 0.941934 14.0482 5.46397 12.3309 11.2453C0.997232 13.9356 -0.204829 16.5115 0.0241346 18.4004C0.768267 24.1818 19.8295 22.3501 28.015 21.3197C36.2004 20.3466 55.0899 17.3128 54.403 11.5315ZM5.06134 17.828C6.20616 17.2556 8.26683 16.397 11.6441 15.4811C11.6441 16.168 11.6441 16.9122 11.7585 17.6563C11.8158 17.9425 11.873 18.1715 11.9303 18.4577C8.72476 18.3432 6.43512 18.1142 5.06134 17.828ZM26.2405 7.4674C22.806 7.92533 19.944 10.5012 19.1999 13.8784C19.0854 14.5653 18.513 15.0232 17.8261 15.1377C17.6544 15.1377 17.4826 15.1377 17.2537 15.1377C16.395 14.966 15.8226 14.1074 16.0516 13.2487C17.0819 8.49774 21.0316 4.9488 25.8398 4.37639C26.7557 4.26191 27.4998 4.89156 27.6143 5.75018C27.7288 6.55155 27.1564 7.35292 26.2405 7.4674ZM42.8976 14.4508C42.8976 14.1646 42.8976 13.9356 42.8404 13.6494C42.7259 12.9053 42.5542 12.2184 42.3824 11.5315C45.8741 11.5888 48.1065 11.875 49.3086 12.1612C48.1065 12.8481 45.9886 13.6494 42.8976 14.4508Z" fill="#4447E2"/>
          <path d="M15.2502 25.67C18.5702 29.6769 23.7791 31.9093 29.2743 31.2224C34.7694 30.5355 39.2915 27.0438 41.4666 22.3501C37.9177 23.1514 33.6246 23.8956 28.4157 24.5824C23.2067 25.2121 18.8564 25.5555 15.2502 25.67Z" fill="#4447E2"/>
        </svg>
        <a style={navLinkStyle} href="/movies">Movies</a>
        <a style={navLinkStyle} href="/tv">TV Shows</a>
        <a style={navLinkStyle} href="/people">People</a>
        <a style={navLinkStyle} href="/more">More</a>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '25%'
        }}
      >
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9.49324" cy="9.49324" r="8.49324" stroke="#5F5F6F" stroke-width="2"/>
          <line x1="15.3785" y1="14.8273" x2="20.7484" y2="20.1972" stroke="#5F5F6F" stroke-width="2"/>
        </svg>
        <button
          style={{
            fontSize: '14px',
            background: 'transparent',
            color: '#ffffff',
            border: '1px solid #4447E2',
            borderRadius: '15px',
            width: '97px',
            height: '40px'
          }}
        >
          Join
        </button>
        <button
          style={{
            fontSize: '14px',
            background: '#2D2D3A',
            color: '#ffffff',
            borderRadius: '15px',
            width: '97px',
            height: '40px',
            border: 'none'
          }}>
            Login
          </button>
      </div>
    </nav>
  )
}

export default Nav