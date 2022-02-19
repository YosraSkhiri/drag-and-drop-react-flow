const subMenuItems = {
  regular: [
    {
      label: "+ Text",
      node: "text",
      icon: (
        <svg width="81" viewBox="0 0 81 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M78.9609 0L80.0156 22.3594H77.3438C76.8281 18.4219 76.125 15.6094 75.2344 13.9219C73.7812 11.2031 71.8359 9.21094 69.3984 7.94531C67.0078 6.63281 63.8438 5.97656 59.9062 5.97656H46.4766V78.8203C46.4766 84.6797 47.1094 88.3359 48.375 89.7891C50.1562 91.7578 52.8984 92.7422 56.6016 92.7422H59.9062V95.3438H19.4766V92.7422H22.8516C26.8828 92.7422 29.7422 91.5234 31.4297 89.0859C32.4609 87.5859 32.9766 84.1641 32.9766 78.8203V5.97656H21.5156C17.0625 5.97656 13.8984 6.30469 12.0234 6.96094C9.58594 7.85156 7.5 9.5625 5.76562 12.0938C4.03125 14.625 3 18.0469 2.67188 22.3594H0L1.125 0H78.9609Z" fill="url(#paint0_linear_2_4)"/>
          <defs>
            <linearGradient id="paint0_linear_2_4" x1="40.0078" y1="0" x2="40.0078" y2="95.3438" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A84FF"/>
              <stop offset="1" stopColor="#2525FF"/>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      label: "+ Image",
      node: "image",
      icon: (
        <svg width="80" viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 64V82H80V64C76.8333 61 69.1 53.3 63.5 46.5C57.9 39.7 51.8333 43.6667 49.5 46.5C48.1667 47.8333 46 51.5 43 55.5C40 59.5 37 65 32.5 65C28 65 22.5 57 21 55.5C19.5 54 18.2092 52.5072 16 52.5C13.6244 52.4922 12 54 10 55.5L0 64Z" fill="#0034FF"/>
          <circle cx="26" cy="15" r="15" fill="#0034FF"/>
        </svg>
      )
    },
    {
      label: "+ Video",
      node: "video",
      icon: (
        <svg width="84" viewBox="0 0 84 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="84" height="75.6" rx="14.28" fill="url(#paint0_linear_2_20)"/>
          <path d="M56.4302 36.3634C57.509 37.0173 57.509 38.5827 56.4302 39.2366L36.1509 51.5303C35.0313 52.209 33.6 51.4029 33.6 50.0937V25.5064C33.6 24.1971 35.0313 23.391 36.1509 24.0697L56.4302 36.3634Z" fill="white"/>
          <defs>
            <linearGradient id="paint0_linear_2_20" x1="42" y1="0" x2="42" y2="75.6" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A84FF"/>
              <stop offset="1" stopColor="#2525FF"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      label: "+ List",
      node: "list",
      icon: (
        <svg width="70" viewBox="0 0 70 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20.5618" width="49.4382" height="10" rx="4.49438" fill="#2A84FF"/>
          <circle cx="5" cy="5" r="5" fill="#2A84FF"/>
          <rect x="20.5618" y="24" width="49.4382" height="10" rx="4.49438" fill="#2F59FF"/>
          <circle cx="5" cy="29" r="5" fill="#2F59FF"/>
          <rect x="20.5618" y="48" width="49.4382" height="10" rx="4.49438" fill="#0034FF"/>
          <circle cx="5" cy="53" r="5" fill="#0034FF"/>
        </svg>
      )
    },
    {
      label: "+ Gallery",
      node: "gallery",
      icon: (
        <svg width="87" viewBox="0 0 87 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="24.1569" width="86.2745" height="63.8431" rx="14.6667" fill="url(#paint0_linear_2_34)"/>
          <rect x="12.0784" y="12.0784" width="62.1176" height="5.17647" rx="2.58824" fill="#0034FF"/>
          <rect x="21.5686" width="43.1373" height="5.17647" rx="2.58824" fill="#0034FF"/>
          <path d="M26.7451 65.7412V73.3118H60.3921V65.7412C59.0603 64.4794 55.8077 61.2409 53.4524 58.3809C51.0971 55.5209 48.5456 57.1892 47.5642 58.3809C47.0034 58.9417 46.0921 60.4838 44.8304 62.1662C43.5686 63.8486 42.3069 66.1618 40.4142 66.1618C38.5216 66.1618 36.2083 62.7971 35.5774 62.1662C34.9466 61.5353 34.4036 60.9075 33.4745 60.9044C32.4753 60.9012 31.7921 61.5353 30.951 62.1662L26.7451 65.7412Z" fill="white"/>
          <circle cx="37.6804" cy="45.1324" r="6.30882" fill="white"/>
          <defs>
            <linearGradient id="paint0_linear_2_34" x1="43.1373" y1="24.1569" x2="43.1373" y2="88" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A84FF"/>
              <stop offset="1" stopColor="#2525FF"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ],
  logic: [
    {
      label: "+ Reply",
      node: "reply",
      icon: (
        <svg width="66" viewBox="0 0 66 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 39.6667C35.5967 39.6667 45 31.3087 45 21C45 10.6913 35.5967 2.33333 24 2.33333C12.4033 2.33333 3 10.6913 3 21C3 24.6727 4.19467 28.098 6.255 30.9867L3 39.6667L14.0717 37.4523C17.1745 38.9218 20.5668 39.6783 24 39.6667Z" stroke="#0034FF" strokeWidth="4.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 52.3333C30.4033 52.3333 21 43.9753 21 33.6667C21 23.358 30.4033 15 42 15C53.5967 15 63 23.358 63 33.6667C63 37.3393 61.8053 40.7647 59.745 43.6533L63 52.3333L51.9283 50.119C48.8255 51.5884 45.4332 52.345 42 52.3333Z" fill="white" stroke="#0034FF" strokeWidth="4.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M41.5542 26.0525C42.3134 26.6598 42.4365 27.7676 41.8291 28.5268L39.423 31.5345H47.4959C48.4681 31.5345 49.2562 32.3226 49.2562 33.2948C49.2562 34.267 48.4681 35.0551 47.4959 35.0551H39.4229L41.8291 38.063C42.4365 38.8221 42.3134 39.9299 41.5542 40.5372C40.7951 41.1446 39.6873 41.0215 39.08 40.2623L34.3907 34.4008C34.1493 34.1021 34.0035 33.7228 34.0001 33.3096C34 33.3047 34 33.2998 34 33.2948L34 33.2891C34.0013 32.8687 34.15 32.483 34.3971 32.181L39.08 26.3274C39.6873 25.5683 40.7951 25.4452 41.5542 26.0525Z" fill="#0034FF"/>
        </svg>
      )
    },
    {
      label: "+ Wait",
      node: "wait",
      icon: (
        <svg width="66" viewBox="0 0 66 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 40.3333C35.5967 40.3333 45 31.9753 45 21.6667C45 11.358 35.5967 3 24 3C12.4033 3 3 11.358 3 21.6667C3 25.3393 4.19467 28.7647 6.255 31.6533L3 40.3333L14.0717 38.119C17.1745 39.5884 20.5668 40.345 24 40.3333Z" stroke="#0034FF" strokeWidth="4.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 53C30.4033 53 21 44.642 21 34.3334C21 24.0247 30.4033 15.6667 42 15.6667C53.5967 15.6667 63 24.0247 63 34.3334C63 38.006 61.8053 41.4314 59.745 44.32L63 53L51.9283 50.7857C48.8255 52.2551 45.4332 53.0117 42 53Z" fill="white" stroke="#0034FF" strokeWidth="4.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="34.5" cy="34.5" r="2.5" fill="#0034FF"/>
          <circle cx="42.5" cy="34.5" r="2.5" fill="#0034FF"/>
          <circle cx="50.5" cy="34.5" r="2.5" fill="#0034FF"/>
        </svg>
      )
    }
  ]
};

export default subMenuItems;
