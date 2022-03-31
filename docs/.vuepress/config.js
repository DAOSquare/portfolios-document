module.exports = {
    themeConfig: {
      logo: 'portfolios/images/logo.jpg',
    }
  }

module.exports = {
    themeConfig: {
        nav: [
        
            {
                title: ':bank: Portfolios',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "IQ Protocol", path: "/handbook/IQ" }
                ]
            },
            {
              
            }
          ]
    }
}  