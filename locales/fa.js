export default async (context, locale) => {
    return await Promise.resolve({
      menu:{
          homePage : 'صفحه اصلی',
          onlineCalculator : 'محاسبه گر آنلاین',
          minerMachines : 'دستگاه های ماینر',
          aboutExtraction : 'درباره استخراج ',
          news : 'اخبار',
          blog : 'بلاگ',
          aboutUs : 'درباره ما',
          contact : 'تماس با ما',
          lang : 'زبان',
          articles: 'مقالات',
          kripto: 'کریپتوکده',
          education: 'آموزش'
      },
      services:{
        digitalCurrenctPrices: 'قیمت ارزهای دیجیتال',
        exchangeOffices:'مقایسه قیمت صرافی ها',
        digitalCurrencyCalculator:'ماشین حساب ارز دیجیتال',
        mining:'ماینیگ',
        dictionary:'واژه نامه بلاکچین'
      },
      educations:{
        start: 'از کجا شروع کنم؟',
        bitOrEth: 'بیت کوین یا اتریوم',
        altCoin:'آلت کوین ها',
        blogWorlds:'دنیای بلاگ ها',
        oscillation:'نوسان گیری'
      },
      inputs:{
        name:'نام و نام خانوادگی',
        email:'ایمیل',
        typeYourMessage:'متن پیام را تایپ کنید',
        send:'ارسال'
      },
      headings:{
        newsletters:'خبرنامه',
        contactForm:'فرم تماس',
        quickAccess:'دسترسی سریع',
        services:'سرویس ها ',
        educations:'آموزش ها'
      },
      texts:{
        newsletter:'با ثبت ایمیل خود از آخرین آخبار مطلع شوید',
        contactForm:'برای ارسال نظرات و پیشنهادات خود فرم زیر را پر کنید'
      }
    })
  }
  