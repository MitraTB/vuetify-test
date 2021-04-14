export default async (context, locale) => {
    return await Promise.resolve({
      menu:{
          homePage : 'Home',
          onlineCalculator : 'Online Calculator',
          minerMachines : 'Miner Machines',
          aboutExtraction : 'About Extraction',
          news : 'News',
          blog : 'Blog',
          aboutUs : 'About Us',
          contact : 'Contact',
          lang : 'Language',
          articles : 'Articles',
          kripto:'Kripto',
          education: 'Education'
      },
      services:{
        digitalCurrenctPrices: 'Digital currency rates',
        exchangeOffices: 'Comparing exchange offices rates',
        digitalCurrencyCalculator: 'Digital currency calculator',
        mining:'Mining',
        dictionary:'Dictionary'
      },
      educations:{
        start: 'Where to start',
        bitOrEth: 'Bitcoin or Ethereum',
        altCoin:'َAltcoin',
        blogWorlds:'Blogs world',
        oscillation:'Getting Oscillation'
      },
      inputs:{
        name:'Firstname and Lastname',
        email:'Email',
        typeYourMessage:'Type your messsage',
        send:'Send'
      },
      headings:{
        newsletters:'Newsletters',
        contactForm:'Contact Form',
        quickAccess:'Quick Access',
        services:'Services',
        educations:'Educations'
      },
      texts:{
        newsletter:'Register your email to notify you with the latest news',
        contactForm:'For sending your suggestions please fill the form below'
      }
    })
  }
  