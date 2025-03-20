import { Injectable } from '@angular/core';
import { LanguageService, Language } from './language.service';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

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

      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        pages: 'Pages',
        booking: 'Booking',
        contact: 'Contact',
        getQuote: 'Get A Quote'
      },

      // Carousel
      premiumServices: 'Premium Auto Services in Dammam',
      expertRepairs: 'Expert Vehicle Repairs & Maintenance',
      trustedCare: 'Your Trusted Auto Care Partner',
      serviceGuarantee: '24-Hour Service Guarantee with Quality Assurance',

      // Service Sections
      qualityServicing: 'Quality Auto Services',
      qualityDesc: 'Auto King Company, located in Ar Rabiyah, Dammam, is your trusted vehicle repair workshop. We offer comprehensive automotive maintenance services with premium quality work, prompt delivery, and competitive pricing. Our state-of-the-art facility is equipped to handle all your vehicle service needs under one roof.',
      
      expertTechnicians: 'Expert Auto Technicians',
      expertDesc: 'Our certified team of automotive professionals specializes in servicing all major vehicle brands. With years of experience and continuous training, our technicians provide comprehensive diagnostic and repair services using the latest industry standards and best practices.',
      
      modernEquipment: 'State-of-the-Art Equipment',
      equipmentDesc: 'Our workshop is equipped with advanced diagnostic and repair equipment to ensure precise service delivery. From computerized diagnostic systems to specialized tools for AC repair, mechanical work, and electrical systems, we have everything needed to maintain and repair your vehicle to the highest standards.',

      // Service Categories
      services: {
        categories: {
          diagnostic: {
            title: 'Diagnostic Services',
            description: 'Advanced computerized diagnostics for accurate problem identification',
            features: [
              'Computerized System Analysis',
              'Performance Diagnostics',
              'Electronic System Testing',
              'Battery & Charging System Check',
              'Emission Control Testing'
            ]
          },
          ac: {
            title: 'AC Services',
            description: 'Complete AC system maintenance and repair solutions',
            features: [
              'System Performance Analysis',
              'Refrigerant Level Check',
              'Compressor & Component Service',
              'Temperature Control Calibration',
              'Air Quality Testing'
            ]
          },
          mechanical: {
            title: 'Mechanical Repairs',
            description: 'Comprehensive mechanical repair and maintenance services',
            features: [
              'Engine & Transmission Service',
              'Brake System Maintenance',
              'Suspension & Steering Work',
              'Oil & Filter Service',
              'General Mechanical Repairs'
            ]
          }
        },
        process: {
          service: '24/7 Service Support',
          serviceDesc: 'Round-the-clock professional service and support'
        }
      },

      // Service Details
      serviceDetails: {
        diagnostic: {
          subtitle: 'Advanced Diagnostic Solutions',
          benefits: [
            'State-of-the-art diagnostic equipment',
            'Comprehensive system analysis',
            'Detailed diagnostic reports',
            'Expert technical recommendations',
            'Quality assured repairs'
          ]
        },
        mechanical: {
          subtitle: 'Professional Mechanical Services',
          benefits: [
            'Expert mechanical repairs',
            'Genuine parts installation',
            'Complete system overhaul',
            'Performance optimization',
            'Quality assurance'
          ]
        }
      },

      // Quote Benefits
      quoteBenefits: {
        benefits: {
          expert: {
            title: 'Expert Support',
            description: '24/7 Professional technical support'
          }
        }
      },

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

      // Booking Section
      booking: {
        title: 'Book Your Service Appointment',
        description: 'Schedule your car service with our expert team. We offer flexible booking options and convenient time slots.',
        formTitle: 'Make an Appointment',
        features: {
          professional: {
            title: 'Professional Service',
            description: 'Expert technicians and quality service'
          },
          schedule: {
            title: 'Flexible Schedule',
            description: 'Choose your preferred service time'
          },
          experts: {
            title: 'Expert Mechanics',
            description: 'Skilled team for all car brands'
          },
          warranty: {
            title: 'Service Warranty',
            description: 'Guaranteed satisfaction and quality'
          }
        },
        services: {
          diagnostic: 'Diagnostic Service',
          ac: 'AC Service',
          mechanical: 'Mechanical Repair',
          electrical: 'Electrical Service',
          computer: 'Computer Scanning',
          gearbox: 'Gearbox Service & Repair',
          engine: 'Engine Overhaul',
          periodic: 'Periodic Maintenance',
          fahas: 'FAHAS Inspection Preparation',
          suspension: 'Suspension System Service',
          brake: 'Brake System Service',
          oil: 'Oil Change & Fluids',
          battery: 'Battery & Electrical Systems',
          steering: 'Steering System Service',
          exhaust: 'Exhaust System Repair',
          cooling: 'Cooling System Service',
          transmission: 'Transmission Service',
          alignment: 'Wheel Alignment & Balancing',
          fuel: 'Fuel System Service',
          clutch: 'Clutch Repair & Replacement',
          radiator: 'Radiator Service & Repair',
          timing: 'Timing Belt Replacement',
          inspection: 'Pre-Purchase Inspection'
        },
        timeSlots: {
          slot_09_00: '09:00 AM',
          slot_10_00: '10:00 AM',
          slot_11_00: '11:00 AM',
          slot_12_00: '12:00 PM',
          slot_14_00: '02:00 PM',
          slot_15_00: '03:00 PM',
          slot_16_00: '04:00 PM',
          slot_17_00: '05:00 PM',
          slot_18_00: '06:00 PM',
          slot_19_00: '07:00 PM',
          slot_20_00: '08:00 PM'
        },
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
        title: 'Get A Quote',
        subtitle: 'Get a quote for your car service',
        getQuote: 'Get A Quote',
        description: 'Get a detailed quote for your car service needs',
        form: {
          name: 'Your Name',
          phone: 'Your Phone',
          carModel: 'Car Model',
          selectService: 'Select Service',
          description: 'Service Description',
          submit: 'Get Quote'
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
          transparentPricing: {
            title: 'Transparent Pricing',
            description: 'No hidden costs or surprise charges'
          },
          expertAssessment: {
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
      },

      // Contact Info (Topbar)
      contact: {
        openHours: 'Opening Hours',
        openTime: 'Sun - Thu : 09 AM - 09 PM',
        phone: 'Call Us',
        phoneNumber: '+966 XX XXX XXXX',
        location: 'Our Location',
        address: 'Al Rabiyah, Dammam, Saudi Arabia'
      },

      // Footer
      footer: {
        quickLinks: 'Quick Links',
        services: 'Our Services',
        location: 'Ar Rabiyah, Dammam, Saudi Arabia',
        support: 'Support',
        address: {
          title: 'Our Address',
          line1: 'Auto King Company',
          line2: 'Al Rabiyah',
          line3: 'Dammam, Eastern Province',
          line4: 'Saudi Arabia'
        },
        workingHours: {
          title: 'Working Hours',
          weekdays: 'Saturday - Thursday',
          weekdayTiming: '08:00 AM - 08:00 PM',
          friday: 'Friday',
          fridayTiming: 'Closed',
        },
        social: {
          title: 'Follow Us',
          facebook: 'Facebook',
          twitter: 'Twitter',
          instagram: 'Instagram',
          whatsapp: 'WhatsApp'
        },
        copyright: '© 2024 Auto King Company. All Rights Reserved.'
      },

      // Error Messages
      errors: {
        required: 'This field is required',
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid phone number',
        minLength: 'Must be at least {0} characters',
        maxLength: 'Must not exceed {0} characters',
        invalidDate: 'Please select a valid date',
        invalidTime: 'Please select a valid time',
        submitError: 'An error occurred. Please try again.',
        submitSuccess: 'Submitted successfully!'
      },

      // Maintenance Tips Additional Content
      maintenanceTips: {
        general: {
          title: 'General Maintenance',
          description: 'Regular maintenance tips to keep your vehicle in top condition',
          tips: [
            'Regular oil changes extend engine life',
            'Check tire pressure monthly',
            'Inspect brakes every 10,000 km',
            'Keep battery terminals clean',
            'Replace air filters regularly'
          ]
        },
        seasonal: {
          title: 'Seasonal Care',
          description: 'Specific maintenance needs for different seasons',
          tips: [
            'Prepare for extreme temperatures',
            'Check cooling system efficiency',
            'Inspect weather protection',
            'Monitor fluid levels',
            'Test battery condition'
          ]
        }
      },

      // Call-to-Action Buttons
      cta: {
        bookNow: 'Book Now',
        getQuote: 'Get Quote',
        learnMore: 'Learn More',
        contactUs: 'Contact Us',
        subscribe: 'Subscribe',
        viewServices: 'View All Services',
        readMore: 'Read More',
        submitForm: 'Submit',
        callNow: 'Call Now',
        directions: 'Get Directions'
      },

      topbar: {
        address: 'Auto King Company, Ar Rabiyah, Dammam Saudi Arabia',
        workingHours: 'Sat - Mon : 08.00 AM - 08.00 PM',
        phone: '+966-538459995'
      },

      pageHeader: {
        home: 'Home',
        pages: 'Pages'
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

      // Navigation
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        pages: 'الصفحات',
        booking: 'الحجز',
        contact: 'اتصل بنا',
        getQuote: 'احصل على عرض سعر'
      },

      // Carousel
      premiumServices: 'خدمات السيارات المتميزة في الدمام',
      expertRepairs: 'إصلاح وصيانة السيارات بخبرة عالية',
      trustedCare: 'شريكك الموثوق في العناية بالسيارات',
      serviceGuarantee: 'ضمان خدمة 24 ساعة مع ضمان الجودة',

      // Service Sections
      qualityServicing: 'خدمات السيارات عالية الجودة',
      qualityDesc: 'شركة أوتو كينج في المنطقة الشرقية هي ورشة إصلاح السيارات الأكثر ثقة، متواجدة في الدمام والخبر والأحساء والجبيل والربيعة والمناطق الصناعية. نقدم خدمات صيانة سيارات متكاملة تحت سقف واحد مع عمل عالي الجودة وتسليم سريع وأسعار معقولة.',
      
      expertTechnicians: 'فنيو سيارات خبراء',
      expertDesc: 'يتخصص فريقنا المعتمد في جميع العلامات التجارية الشعبية للسيارات في المملكة العربية السعودية، بما في ذلك اليابانية والكورية والصينية والهندية. مع مهندسي وفنيي السيارات ذوي المهارات العالية، نقدم خدمات تشخيص وإصلاح شاملة.',
      
      modernEquipment: 'معدات حديثة ومتطورة',
      equipmentDesc: 'نستخدم أحدث معدات التشخيص والإصلاح لضمان تقديم خدمة دقيقة. منشأتنا الحديثة مجهزة بأدوات متطورة لإصلاح التكييف وفحص الكمبيوتر والبرمجة وجميع الأعمال الميكانيكية.',

      // Service Categories
      services: {
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
        },
        process: {
          service: 'دعم على مدار 24/7',
          serviceDesc: 'خدمة ودعم احترافي على مدار الساعة'
        }
      },

      // Service Details
      serviceDetails: {
        diagnostic: {
          subtitle: 'حلول تشخيص متقدمة',
          benefits: [
            'معدات تشخيص متطورة',
            'تحليل شامل للنظام',
            'تقارير تشخيص مفصلة',
            'توصيات فنية متخصصة',
            'إصلاحات مضمونة الجودة'
          ]
        },
        mechanical: {
          subtitle: 'خدمات ميكانيكية احترافية',
          benefits: [
            'إصلاحات ميكانيكية متخصصة',
            'تركيب قطع غيار أصلية',
            'إصلاح شامل للنظام',
            'تحسين الأداء',
            'ضمان الجودة'
          ]
        }
      },

      // Quote Benefits
      quoteBenefits: {
        benefits: {
          expert: {
            title: 'دعم متخصص',
            description: 'دعم فني احترافي على مدار 24/7'
          }
        }
      },

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

      // Booking Section
      booking: {
        title: 'احجز موعد صيانة سيارتك',
        description: 'احجز صيانة سيارتك مع فريقنا المتخصص. نقدم خيارات حجز مرنة ومواعيد مناسبة.',
        formTitle: 'حدد موعداً',
        features: {
          professional: {
            title: 'خدمة احترافية',
            description: 'فنيون خبراء وخدمة عالية الجودة'
          },
          schedule: {
            title: 'جدول مرن',
            description: 'اختر وقت الخدمة المناسب لك'
          },
          experts: {
            title: 'ميكانيكيون خبراء',
            description: 'فريق ماهر لجميع العلامات التجارية للسيارات'
          },
          warranty: {
            title: 'ضمان الخدمة',
            description: 'ضمان الرضا والجودة'
          }
        },
        services: {
          diagnostic: 'خدمة التشخيص',
          ac: 'خدمة التكييف',
          mechanical: 'إصلاح ميكانيكي',
          electrical: 'خدمة كهربائية',
          computer: 'فحص الكمبيوتر',
          gearbox: 'خدمة وإصلاح صندوق التروس',
          engine: 'إصلاح المحرك',
          periodic: 'الصيانة الدورية',
          fahas: 'تحضير فحص الفاحص',
          suspension: 'خدمة نظام التعليق',
          brake: 'خدمة نظام الفرامل',
          oil: 'تغيير الزيت والسوائل',
          battery: 'البطارية والأنظمة الكهربائية',
          steering: 'خدمة نظام التوجيه',
          exhaust: 'إصلاح نظام العادم',
          cooling: 'خدمة نظام التبريد',
          transmission: 'خدمة ناقل الحركة',
          alignment: 'ضبط وموازنة العجلات',
          fuel: 'خدمة نظام الوقود',
          clutch: 'إصلاح واستبدال الدبرياج',
          radiator: 'خدمة وإصلاح الرادياتير',
          timing: 'استبدال سير التوقيت',
          inspection: 'فحص ما قبل الشراء'
        },
        timeSlots: {
          slot_09_00: '٩:٠٠ ص',
          slot_10_00: '١٠:٠٠ ص',
          slot_11_00: '١١:٠٠ ص',
          slot_12_00: '١٢:٠٠ م',
          slot_14_00: '٢:٠٠ م',
          slot_15_00: '٣:٠٠ م',
          slot_16_00: '٤:٠٠ م',
          slot_17_00: '٥:٠٠ م',
          slot_18_00: '٦:٠٠ م',
          slot_19_00: '٧:٠٠ م',
          slot_20_00: '٨:٠٠ م'
        },
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
        title: 'احصل على عرض سعر',
        subtitle: 'احصل على عرض سعر لخدمة سيارتك',
        getQuote: 'احصل على عرض سعر',
        description: 'احصل على عرض سعر مفصل لاحتياجات خدمة سيارتك',
        form: {
          name: 'اسمك',
          phone: 'رقم هاتفك',
          carModel: 'موديل السيارة',
          selectService: 'اختر الخدمة',
          description: 'وصف الخدمة',
          submit: 'احصل على العرض'
        },
        benefits: {
          fastResponse: {
            title: 'استجابة سريعة',
            description: 'احصل على عرضك خلال ٣٠ دقيقة'
          },
          competitivePricing: {
            title: 'أسعار تنافسية',
            description: 'أفضل الأسعار في المنطقة الشرقية'
          },
          transparentPricing: {
            title: 'أسعار شفافة',
            description: 'لا توجد تكاليف خفية أو رسوم مفاجئة'
          },
          expertAssessment: {
            title: 'تقييم خبير',
            description: 'تقييم احترافي من فنيين معتمدين'
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
      },

      // Contact Info (Topbar)
      contact: {
        openHours: 'ساعات العمل',
        openTime: 'الأحد - الخميس : ٩ ص - ٩ م',
        phone: 'اتصل بنا',
        phoneNumber: '+966 XX XXX XXXX',
        location: 'موقعنا',
        address: 'الربيعة، الدمام، المملكة العربية السعودية'
      },

      // Footer
      footer: {
        quickLinks: 'روابط سريعة',
        location: 'الربيعة، الدمام، المملكة العربية السعودية',
        services: 'خدماتنا',
        support: 'الدعم',
        address: {
          title: 'عنواننا',
          line1: 'شركة أوتو كينج',
          line2: 'الربيعة',
          line3: 'الدمام، المنطقة الشرقية',
          line4: 'المملكة العربية السعودية'
        },
        workingHours: {
          title: 'ساعات العمل',
          weekdays: 'السبت - الخميس',
          weekdayTiming: '٨:٠٠ ص - ٨:٠٠ م',
          friday: 'الجمعة',
          fridayTiming: 'مغلق',
        },
        social: {
          title: 'تابعنا',
          facebook: 'فيسبوك',
          twitter: 'تويتر',
          instagram: 'انستغرام',
          whatsapp: 'واتساب'
        },
        copyright: '© ٢٠٢٤ شركة أوتو كينج. جميع الحقوق محفوظة.'
      },

      // Error Messages
      errors: {
        required: 'هذا الحقل مطلوب',
        email: 'يرجى إدخال بريد إلكتروني صحيح',
        phone: 'يرجى إدخال رقم هاتف صحيح',
        minLength: 'يجب أن يكون على الأقل {0} أحرف',
        maxLength: 'يجب ألا يتجاوز {0} حرف',
        invalidDate: 'يرجى اختيار تاريخ صحيح',
        invalidTime: 'يرجى اختيار وقت صحيح',
        submitError: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
        submitSuccess: 'تم الإرسال بنجاح!'
      },

      // Maintenance Tips Additional Content
      maintenanceTips: {
        general: {
          title: 'الصيانة العامة',
          description: 'نصائح صيانة منتظمة للحفاظ على سيارتك في حالة ممتازة',
          tips: [
            'تغيير الزيت المنتظم يطيل عمر المحرك',
            'فحص ضغط الإطارات شهرياً',
            'فحص الفرامل كل ١٠,٠٠٠ كم',
            'الحفاظ على نظافة أقطاب البطارية',
            'استبدال فلاتر الهواء بانتظام'
          ]
        },
        seasonal: {
          title: 'العناية الموسمية',
          description: 'احتياجات صيانة خاصة للمواسم المختلفة',
          tips: [
            'الاستعداد لدرجات الحرارة القصوى',
            'فحص كفاءة نظام التبريد',
            'فحص الحماية من الطقس',
            'مراقبة مستويات السوائل',
            'اختبار حالة البطارية'
          ]
        }
      },

      // Call-to-Action Buttons
      cta: {
        bookNow: 'احجز الآن',
        getQuote: 'احصل على تسعيرة',
        learnMore: 'اعرف المزيد',
        contactUs: 'اتصل بنا',
        subscribe: 'اشترك',
        viewServices: 'عرض جميع الخدمات',
        readMore: 'اقرأ المزيد',
        submitForm: 'إرسال',
        callNow: 'اتصل الآن',
        directions: 'احصل على الاتجاهات'
      },

      topbar: {
        address: 'شركة أوتو كينج، الربيعة، الدمام المملكة العربية السعودية',
        workingHours: 'السبت - الاثنين: ٨:٠٠ صباحاً - ٨:٠٠ مساءً',
        phone: '+٩٦٦-٥٣٨٤٥٩٩٩٥'
      },

      pageHeader: {
        home: 'الرئيسية',
        pages: 'الصفحات'
      }
    }
  };

  constructor(
    private languageService: LanguageService,
    private storageService: StorageService
  ) {
    // Initialize with stored language or default to English
    const storedLang = this.storageService.getItem('selectedLanguage');
    if (storedLang) {
      this.languageService.setLanguage(storedLang as Language);
    }
  }

  getTranslation(key: string): string {
    const currentLang = this.languageService.getCurrentLanguage();
    return this.getNestedTranslation(this.translations[currentLang], key) || key;
  }

  private getNestedTranslation(obj: any, path: string): string {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null;
    }, obj) || '';
  }
} 