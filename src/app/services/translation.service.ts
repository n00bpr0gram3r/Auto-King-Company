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
      
      // Carousel
      premiumServices: 'Premium Auto Services in Eastern Province',
      expertRepairs: 'Expert Vehicle Repairs & Maintenance in Dammam',
      trustedCare: 'Trusted Vehicle Care',
      serviceGuarantee: '24-Hour Service Guarantee',
      
      // Services
      qualityServicing: 'Quality Servicing',
      qualityDesc: 'Eastern Province\'s most trusted vehicle repair workshop, serving Dammam, Khobar, Hassa, and surrounding areas. We offer comprehensive maintenance services for all vehicle types:',
      expertTechnicians: 'Expert Technicians',
      expertDesc: 'Our certified team specializes in all major vehicle brands including Japanese, Korean, Chinese, and Indian manufacturers. Services include:',
      modernEquipment: 'Modern Equipment',
      equipmentDesc: 'State-of-the-art diagnostic and repair equipment for precise service delivery. Special features include:',
      
      // About Page
      aboutTitle: 'About Auto King Company',
      aboutSubtitle: 'Your Trusted Auto Service Partner in Eastern Province',
      ourHistory: 'Our History',
      historyDesc: 'Auto King Company has been serving the Eastern Province with excellence in automotive care. Located in Ar Rabiyah, Dammam, we\'ve built our reputation on trust, quality, and customer satisfaction.',
      ourMission: 'Our Mission',
      missionDesc: 'To provide premium quality auto repair and maintenance services with transparency, reliability, and customer convenience at the forefront of everything we do.',
      ourValues: 'Our Values',
      valuesList: {
        quality: 'Quality Excellence',
        integrity: 'Professional Integrity',
        innovation: 'Technical Innovation',
        customer: 'Customer First',
        reliability: '24-Hour Service Guarantee'
      },
      
      // Service Features
      diagnosticServices: 'Complete diagnostic services',
      acRepair: 'AC repair and maintenance',
      computerScanning: 'Computer scanning & programming',
      mechanicalServices: 'Full mechanical services',
      serviceGuaranteeFeature: '24-hour service guarantee',
      
      // Expert Features
      advancedDiagnostics: 'Advanced diagnostics',
      electricalSystems: 'Electrical systems repair',
      engineMaintenance: 'Engine maintenance',
      computerizedTesting: 'Computerized testing',
      roadsideAssistance: 'Emergency roadside assistance',
      
      // Equipment Features
      diagnosticTools: 'Latest diagnostic tools',
      alignmentSystems: 'Computerized alignment systems',
      acEquipment: 'Advanced AC service equipment',
      scanningTools: 'Professional scanning tools',
      mobileUnits: 'Mobile service units for corporate clients',

      // Membership Benefits
      membershipTitle: 'Exclusive Membership Benefits',
      membershipDesc: 'Join our lifetime membership program and enjoy exclusive benefits',
      benefitsList: {
        priority: 'Priority Service',
        discounts: 'Special Discounts',
        inspection: 'Free Inspections',
        support: '24/7 Support Access',
        offers: 'Exclusive Seasonal Offers'
      }
    },
    ar: {
      // Common
      readMore: 'اقرأ المزيد',
      readLess: 'اقرأ أقل',
      exploreServices: 'استكشف خدماتنا',
      joinMembership: 'انضم للعضوية',
      
      // About Page
      aboutTitle: 'عن شركة أوتو كينج',
      aboutSubtitle: 'شريكك الموثوق في خدمة السيارات في المنطقة الشرقية',
      ourHistory: 'تاريخنا',
      historyDesc: 'تقدم شركة أوتو كينج خدماتها في المنطقة الشرقية بتميز في العناية بالسيارات. من موقعنا في الربيعة، الدمام، بنينا سمعتنا على الثقة والجودة ورضا العملاء.',
      ourMission: 'مهمتنا',
      missionDesc: 'تقديم خدمات إصلاح وصيانة السيارات بجودة عالية مع الشفافية والموثوقية وراحة العملاء في مقدمة كل ما نقوم به.',
      ourValues: 'قيمنا',
      valuesList: {
        quality: 'التميز في الجودة',
        integrity: 'النزاهة المهنية',
        innovation: 'الابتكار التقني',
        customer: 'العميل أولاً',
        reliability: 'ضمان خدمة 24 ساعة'
      },

      // Carousel & Services (existing translations...)
      premiumServices: 'خدمات السيارات المتميزة في المنطقة الشرقية',
      expertRepairs: 'إصلاحات وصيانة السيارات المتخصصة في الدمام',
      trustedCare: 'رعاية موثوقة للسيارات',
      serviceGuarantee: 'ضمان خدمة 24 ساعة',
      
      // Services
      qualityServicing: 'خدمة عالية الجودة',
      qualityDesc: 'ورشة إصلاح السيارات الأكثر ثقة في المنطقة الشرقية، نخدم الدمام والخبر والأحساء والمناطق المحيطة. نقدم خدمات صيانة شاملة لجميع أنواع السيارات:',
      expertTechnicians: 'فنيون خبراء',
      expertDesc: 'يتخصص فريقنا المعتمد في جميع العلامات التجارية الرئيسية للسيارات بما في ذلك اليابانية والكورية والصينية والهندية. تشمل الخدمات:',
      modernEquipment: 'معدات حديثة',
      equipmentDesc: 'معدات تشخيص وإصلاح متطورة لتقديم خدمة دقيقة. تشمل الميزات الخاصة:',
      
      // Service Features
      diagnosticServices: 'خدمات تشخيص كاملة',
      acRepair: 'إصلاح وصيانة التكييف',
      computerScanning: 'فحص وبرمجة الكمبيوتر',
      mechanicalServices: 'خدمات ميكانيكية كاملة',
      serviceGuaranteeFeature: 'ضمان خدمة 24 ساعة',
      
      // Expert Features
      advancedDiagnostics: 'تشخيص متقدم',
      electricalSystems: 'إصلاح الأنظمة الكهربائية',
      engineMaintenance: 'صيانة المحرك',
      computerizedTesting: 'اختبار محوسب',
      roadsideAssistance: 'مساعدة طارئة على الطريق',
      
      // Equipment Features
      diagnosticTools: 'أحدث أدوات التشخيص',
      alignmentSystems: 'أنظمة محاذاة محوسبة',
      acEquipment: 'معدات تكييف متطورة',
      scanningTools: 'أدوات فحص احترافية',
      mobileUnits: 'وحدات متنقلة للعملاء من الشركات',

      // Membership Benefits
      membershipTitle: 'مزايا العضوية الحصرية',
      membershipDesc: 'انضم إلى برنامج العضوية مدى الحياة واستمتع بمزايا حصرية',
      benefitsList: {
        priority: 'خدمة ذات أولوية',
        discounts: 'خصومات خاصة',
        inspection: 'فحوصات مجانية',
        support: 'دعم على مدار الساعة',
        offers: 'عروض موسمية حصرية'
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
    return this.currentTranslations.value[key] || key;
  }

  getCurrentTranslations() {
    return this.currentTranslations.asObservable();
  }
} 