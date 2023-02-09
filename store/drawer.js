import { defineStore } from 'pinia'

export const useDraerStore = defineStore('websiteDraer', {
    state: () => ({
        drawer: false,
        routes: [
            {
                title: 'Home',
                icon: 'mdi-home',
                to: '/',
                menu: false
            },
            {
                title: 'meet your chiropractors',
                icon: 'mdi-account',
                to: '/chiropractorPage',
                menu: false
            },
            {
                title: 'Services',
                icon: 'mdi-account-school',
                to: '/servicesPage',
                menu: true,
                subMenus: [
                    {
                        title: 'CHIROPRACTIC CARE',
                        routes: [
                            {
                                title: 'Back Pain Treatment',
                                to: '/services/services/backPainTreatment'
                            },
                            {
                                title: 'Neck Pain',
                                to: '/services/services/neckPain'
                            },
                            {
                                title: 'Headache Treatment',
                                to: '/services/services/headacheTreatment'
                            },
                            {
                                title: 'Sciatica',
                                to: '/services/services/sciatica'
                            },
                            {
                                title: 'Lower Extremity Pain',
                                to: '/services/services/lowerExtremityPain'
                            },
                            {
                                title: 'Upper Extremity Pain',
                                to: '/services/services/upperExtremityPain'
                            },
                            {
                                title: 'Car Accident Injuries',
                                to: '/services/services/carAccidentInjury'
                            },
                        ]
                    },
                    {
                        title: 'OTHER SERVICES',
                        routes: [
                            {
                                title: "Acupuncture",
                                to: "/services/services/acupuncture",
                            },
                            {
                                title: "Massage Therapy",
                                to: "/services/services/massageTherapy",
                            },
                            {
                                title: "Spinal Decompression",
                                to: "/services/services/spinalDecompression",
                            },
                            {
                                title: "Rehabilitation",
                                to: "/services/services/rehabilitation",
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Testimonials',
                icon: 'mdi-phone',
                to: '/testimonial',
                menu: false
            },
            {
                title: 'Blog',
                icon: 'mdi-party-popper',
                to: '/blog',
                menu: false
            },
            {
                title: 'Payments',
                icon: 'mdi-account-group',
                to: '/payment',
                menu: false
            },
            {
                title: 'Forms',
                icon: 'mdi-account-group',
                to: '/forms',
                menu: false
            },
            {
                title: 'Contact',
                icon: 'mdi-account-group',
                to: '/contact',
                menu: false
            }
        ]
    })
})