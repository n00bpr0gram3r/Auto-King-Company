import { Injectable } from '@angular/core';
import { LanguageService, Language } from './language.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations = {
    en: {
      // Common
      readMore: 'Read More',
      readLess: 'Read Less',
      exploreServices: 'Explore Services',
      joinMembership: 'Join Membership',
      membershipTitle: 'Exclusive Membership Benefits',
      membershipDesc: 'Join our lifetime membership program and enjoy exclusive benefits',

      // Carousel
      premiumServices: 'Premium Auto Services in Dammam',
      expertRepairs: 'Expert Vehicle Repairs & Maintenance',
      trustedCare: 'Your Trusted Auto Care Partner',
      serviceGuarantee: '24-Hour Service Guarantee with Quality Assurance',

      // Carousel Service Descriptions
      qualityServicing: 'Quality Auto Services',
      qualityDesc: 'Auto King Company in Eastern Province is your most trusted vehicle repair workshop, conveniently located in Dammam, Khobar, Hassa, Hubail, Al Rabiyah, and Industrial Areas. We offer complete automotive maintenance services under one roof with premium quality work, prompt delivery, and affordable pricing.',
      
      expertTechnicians: 'Expert Auto Technicians',
      expertDesc: 'Our certified team specializes in all popular vehicle brands in Saudi Arabia, including Japanese, Korean, Chinese, and Indian manufacturers. With our highly skilled automobile engineers and technicians, we provide comprehensive diagnostic and repair services.',
      
      modernEquipment: 'State-of-the-Art Equipment',
      equipmentDesc: 'We utilize the latest diagnostic and repair equipment to ensure precise service delivery. Our modern facility is equipped with advanced tools for AC repair, computer scanning, programming, and all mechanical works.',

      // About Page
      aboutTitle: 'About Auto King Company',
      aboutSubtitle: 'Your Trusted Auto Service Partner in Eastern Province',
      ourHistory: 'Our History',
      historyDesc: 'Auto King Company has been serving the Eastern Province with excellence in automotive care. Located in Ar Rabiyah, Dammam, we\'ve built our reputation on trust, quality, and customer satisfaction.',
      ourMission: 'Our Mission',
      missionDesc: 'To provide premium quality auto repair and maintenance services with transparency, reliability, and customer convenience at the forefront of everything we do.',
      ourValues: 'Our Values',

      // Values
      values: {
        quality: 'Quality Excellence in Every Service',
        integrity: 'Professional Integrity and Transparency',
        innovation: 'Technical Innovation and Advancement',
        customer: 'Customer-First Approach',
        reliability: '24-Hour Service Reliability'
      },

      // Benefits
      benefits: {
        priority: 'Priority Service Access',
        discounts: 'Exclusive Discounts',
        inspection: 'Complimentary Inspections',
        support: '24/7 Support Access',
        offers: 'Special Seasonal Offers'
      },

      // Services Section
      services: {
        ourServices: 'Our Services',
        exploreServices: 'Explore Our Professional Services',
        bookNow: 'Book Now',
        process: {
          title: 'Working Process',
          subtitle: 'How We Work',
          booking: 'Book Appointment',
          bookingDesc: 'Schedule your service online or call us',
          dropoff: 'Bring Vehicle',
          dropoffDesc: 'Drop off your vehicle at our workshop',
          service: 'Service & Repair',
          serviceDesc: 'Our experts diagnose and fix issues',
          completion: 'Ready to Go',
          completionDesc: 'Collect your serviced vehicle'
        },
        
        // Service Categories
        categories: {
          diagnostic: {
            title: 'Diagnostic Services',
            description: 'Complete vehicle diagnostics with advanced computerized systems',
            features: [
              'Engine Performance Analysis',
              'Electronic System Check',
              'OBD Scanning',
              'Battery Health Test',
              'Emission Testing'
            ]
          },
          ac: {
            title: 'AC Services',
            description: 'Full AC system maintenance and repair services',
            features: [
              'AC Performance Check',
              'Gas Recharge',
              'Compressor Service',
              'Cooling System Repair',
              'Temperature Control'
            ]
          },
          mechanical: {
            title: 'Mechanical Repairs',
            description: 'Comprehensive mechanical repair and maintenance',
            features: [
              'Engine Overhaul',
              'Transmission Service',
              'Brake System',
              'Suspension Work',
              'Oil Changes'
            ]
          }
        }
      },

      // Booking Section
      booking: {
        title: 'Book Your Service Appointment',
        description: 'Schedule your car service with our expert team. We offer flexible booking options and convenient time slots.',
        formTitle: 'Make an Appointment',
        form: {
          name: 'Your Name',
          email: 'Your Email',
          phone: 'Your Phone',
          selectService: 'Select Service',
          selectTime: 'Select Time',
          message: 'Special Requirements',
          submit: 'Book Appointment'
        }
      },

      // Quote Section
      quote: {
        title: 'Request a Quote',
        getQuote: 'Get a Free Quote For Your Car Service',
        description: 'Get an instant quote for your car service needs. Our team will provide you with a detailed estimate based on your vehicle model and service requirements.',
        form: {
          name: 'Your Name',
          phone: 'Your Phone',
          carModel: 'Car Model & Year',
          selectService: 'Select Service',
          description: 'Service Description or Special Requirements',
          submit: 'Get Quote Now'
        },
        benefits: {
          fastResponse: {
            title: 'Fast Response',
            description: 'Get your quote within 30 minutes'
          },
          competitivePricing: {
            title: 'Competitive Pricing',
            description: 'Best rates in the Eastern Province'
          },
          transparent: {
            title: 'Transparent Pricing',
            description: 'No hidden costs or surprise charges'
          },
          expert: {
            title: 'Expert Assessment',
            description: 'Professional evaluation by certified technicians'
          }
        }
      },

      // Newsletter Section
      newsletter: {
        title: 'Subscribe to Our Newsletter',
        description: 'Stay updated with our latest services, maintenance tips, and special offers. Get expert advice for your vehicle maintenance.',
        form: {
          email: 'Your Email',
          submit: 'Subscribe'
        },
        seasonalTips: {
          title: 'Seasonal Maintenance Tips',
          summer: {
            title: 'Summer (May - September)',
            tips: [
              'Regular AC system check and cleaning',
              'Battery health inspection (heat affects battery life)',
              'Coolant level and quality check',
              'Tire pressure monitoring (heat increases pressure)',
              'UV protection for car paint and interior',
              'Air filter replacement (increased dust)'
            ]
          },
          winter: {
            title: 'Winter (December - February)',
            tips: [
              'Battery performance check',
              'Windshield wipers and washer fluid check',
              'Tire tread depth inspection',
              'Brake system inspection',
              'Engine oil viscosity check'
            ]
          },
          sandstorm: {
            title: 'Sandstorm Season',
            tips: [
              'Air filter inspection and replacement',
              'Exterior protective coating',
              'Windshield and wiper maintenance',
              'Door and window seal check',
              'Regular exterior washing',
              'AC filter cleaning'
            ]
          },
          yearRound: {
            title: 'Year-Round Tips',
            tips: [
              'Regular oil changes every 5,000-7,500 km',
              'Monthly tire pressure check',
              'Regular brake inspection',
              'AC system maintenance',
              'Battery terminal cleaning',
              'Regular car washing to prevent sand damage'
            ]
          }
        }
      }
    },
    ar: {
      // Common
      readMore: 'اقرأ المزيد',
      readLess: 'اقرأ أقل',
      exploreServices: 'استكشف خدماتنا',
      joinMembership: 'انضم للعضوية',
      membershipTitle: 'مزايا العضوية الحصرية',
      membershipDesc: 'انضم إلى برنامج العضوية مدى الحياة واستمتع بمزايا حصرية',

      // Carousel
      premiumServices: 'خدمات السيارات المتميزة في الدمام',
      expertRepairs: 'إصلاح وصيانة السيارات بخبرة عالية',
      trustedCare: 'شريكك الموثوق في العناية بالسيارات',
      serviceGuarantee: 'ضمان خدمة 24 ساعة مع ضمان الجودة',

      // Carousel Service Descriptions
      qualityServicing: 'خدمات السيارات عالية الجودة',
      qualityDesc: 'شركة أوتو كينج في المنطقة الشرقية هي ورشة إصلاح السيارات الأكثر ثقة، متواجدة في الدمام والخبر والأحساء والجبيل والربيعة والمناطق الصناعية. نقدم خدمات صيانة سيارات متكاملة تحت سقف واحد مع عمل عالي الجودة وتسليم سريع وأسعار معقولة.',
      
      expertTechnicians: 'فنيو سيارات خبراء',
      expertDesc: 'يتخصص فريقنا المعتمد في جميع العلامات التجارية الشعبية للسيارات في المملكة العربية السعودية، بما في ذلك اليابانية والكورية والصينية والهندية. مع مهندسي وفنيي السيارات ذوي المهارات العالية، نقدم خدمات تشخيص وإصلاح شاملة.',
      
      modernEquipment: 'معدات حديثة ومتطورة',
      equipmentDesc: 'نستخدم أحدث معدات التشخيص والإصلاح لضمان تقديم خدمة دقيقة. منشأتنا الحديثة مجهزة بأدوات متطورة لإصلاح التكييف وفحص الكمبيوتر والبرمجة وجميع الأعمال الميكانيكية.',

      // About Page
      aboutTitle: 'عن شركة أوتو كينج',
      aboutSubtitle: 'شريكك الموثوق في خدمة السيارات في المنطقة الشرقية',
      ourHistory: 'تاريخنا',
      historyDesc: 'تقدم شركة أوتو كينج خدماتها في المنطقة الشرقية بتميز في العناية بالسيارات. من موقعنا في الربيعة، الدمام، بنينا سمعتنا على الثقة والجودة ورضا العملاء.',
      ourMission: 'مهمتنا',
      missionDesc: 'تقديم خدمات إصلاح وصيانة السيارات بجودة عالية مع الشفافية والموثوقية وراحة العملاء في مقدمة كل ما نقوم به.',
      ourValues: 'قيمنا',

      // Values
      values: {
        quality: 'التميز في الجودة في كل خدمة',
        integrity: 'النزاهة المهنية والشفافية',
        innovation: 'الابتكار والتقدم التقني',
        customer: 'العميل أولاً',
        reliability: 'موثوقية الخدمة على مدار 24 ساعة'
      },

      // Benefits
      benefits: {
        priority: 'أولوية الحصول على الخدمة',
        discounts: 'خصومات حصرية',
        inspection: 'فحوصات مجانية',
        support: 'دعم على مدار 24/7',
        offers: 'عروض موسمية خاصة'
      },

      // Services Section
      services: {
        ourServices: 'خدماتنا',
        exploreServices: 'استكشف خدماتنا المهنية',
        bookNow: 'احجز الآن',
        process: {
          title: 'آلية العمل',
          subtitle: 'كيف نعمل',
          booking: 'حجز موعد',
          bookingDesc: 'احجز خدمتك عبر الإنترنت أو اتصل بنا',
          dropoff: 'إحضار السيارة',
          dropoffDesc: 'أحضر سيارتك إلى ورشتنا',
          service: 'الخدمة والإصلاح',
          serviceDesc: 'يقوم خبراؤنا بتشخيص وإصلاح المشاكل',
          completion: 'جاهز للانطلاق',
          completionDesc: 'استلم سيارتك بعد الصيانة'
        },
        
        // Service Categories
        categories: {
          diagnostic: {
            title: 'خدمات التشخيص',
            description: 'تشخيص كامل للسيارة باستخدام أنظمة حاسوبية متقدمة',
            features: [
              'تحليل أداء المحرك',
              'فحص النظام الإلكتروني',
              'فحص OBD',
              'اختبار صحة البطارية',
              'فحص الانبعاثات'
            ]
          },
          ac: {
            title: 'خدمات التكييف',
            description: 'صيانة وإصلاح كامل لنظام التكييف',
            features: [
              'فحص أداء التكييف',
              'إعادة شحن الغاز',
              'خدمة الضاغط',
              'إصلاح نظام التبريد',
              'التحكم في درجة الحرارة'
            ]
          },
          mechanical: {
            title: 'الإصلاحات الميكانيكية',
            description: 'إصلاح وصيانة ميكانيكية شاملة',
            features: [
              'إصلاح المحرك',
              'خدمة ناقل الحركة',
              'نظام الفرامل',
              'أعمال التعليق',
              'تغيير الزيت'
            ]
          }
        }
      },

      // Booking Section
      booking: {
        title: 'احجز موعد صيانة سيارتك',
        description: 'احجز صيانة سيارتك مع فريقنا المتخصص. نقدم خيارات حجز مرنة ومواعيد مناسبة.',
        formTitle: 'حدد موعداً',
        form: {
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          phone: 'رقم الهاتف',
          selectService: 'اختر الخدمة',
          selectTime: 'اختر الوقت',
          message: 'متطلبات خاصة',
          submit: 'احجز موعداً'
        }
      },

      // Quote Section
      quote: {
        title: 'اطلب عرض سعر',
        getQuote: 'احصل على عرض سعر مجاني لخدمة سيارتك',
        description: 'احصل على عرض سعر فوري لاحتياجات صيانة سيارتك. سيقدم فريقنا تقديراً مفصلاً بناءً على طراز سيارتك ومتطلبات الخدمة.',
        form: {
          name: 'الاسم',
          phone: 'رقم الهاتف',
          carModel: 'موديل السيارة والسنة',
          selectService: 'اختر الخدمة',
          description: 'وصف الخدمة أو المتطلبات الخاصة',
          submit: 'احصل على عرض السعر الآن'
        },
        benefits: {
          fastResponse: {
            title: 'استجابة سريعة',
            description: 'احصل على عرض السعر خلال 30 دقيقة'
          },
          competitivePricing: {
            title: 'أسعار تنافسية',
            description: 'أفضل الأسعار في المنطقة الشرقية'
          },
          transparent: {
            title: 'أسعار شفافة',
            description: 'لا تكاليف خفية أو رسوم مفاجئة'
          },
          expert: {
            title: 'تقييم خبير',
            description: 'تقييم مهني من قبل فنيين معتمدين'
          }
        }
      },

      // Newsletter Section
      newsletter: {
        title: 'اشترك في نشرتنا الإخبارية',
        description: 'ابق على اطلاع بأحدث خدماتنا ونصائح الصيانة والعروض الخاصة. احصل على نصائح الخبراء لصيانة سيارتك.',
        form: {
          email: 'البريد الإلكتروني',
          submit: 'اشترك'
        },
        seasonalTips: {
          title: 'نصائح الصيانة الموسمية',
          summer: {
            title: 'الصيف (مايو - سبتمبر)',
            tips: [
              'فحص وتنظيف نظام التكييف بانتظام',
              'فحص صحة البطارية (الحرارة تؤثر على عمر البطارية)',
              'فحص مستوى وجودة سائل التبريد',
              'مراقبة ضغط الإطارات (الحرارة تزيد الضغط)',
              'حماية من الأشعة فوق البنفسجية لطلاء السيارة والمقصورة',
              'استبدال فلتر الهواء (زيادة الغبار)'
            ]
          },
          winter: {
            title: 'الشتاء (ديسمبر - فبراير)',
            tips: [
              'فحص أداء البطارية',
              'فحص مساحات الزجاج وسائل الغسيل',
              'فحص عمق مداس الإطارات',
              'فحص نظام الفرامل',
              'فحص لزوجة زيت المحرك'
            ]
          },
          sandstorm: {
            title: 'موسم العواصف الرملية',
            tips: [
              'فحص واستبدال فلتر الهواء',
              'طلاء حماية خارجي',
              'صيانة الزجاج الأمامي والمساحات',
              'فحص أختام الأبواب والنوافذ',
              'غسيل خارجي منتظم',
              'تنظيف فلتر المكيف'
            ]
          },
          yearRound: {
            title: 'نصائح على مدار السنة',
            tips: [
              'تغيير الزيت المنتظم كل 5,000-7,500 كم',
              'فحص ضغط الإطارات شهرياً',
              'فحص الفرامل بانتظام',
              'صيانة نظام التكييف',
              'تنظيف أقطاب البطارية',
              'غسيل السيارة بانتظام لمنع أضرار الرمال'
            ]
          }
        }
      }
    }
  };

  private currentTranslations = new BehaviorSubject<any>(this.translations.en);

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.currentTranslations.next(this.translations[lang]);
    });
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let value = this.currentTranslations.value;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value as string;
  }

  getCurrentTranslations() {
    return this.currentTranslations.asObservable();
  }
} 