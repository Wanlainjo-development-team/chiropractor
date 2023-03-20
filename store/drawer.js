import { defineStore } from 'pinia'

export const useDraerStore = defineStore('websiteDraer', {
    state: () => ({
        drawer: false,
        rightDrawer: false,
        routes: [
            {
                title: 'Home',
                icon: 'mdi-home',
                to: '/',
                menu: false
            },
            {
                title: 'Services',
                icon: 'mdi-room-service',
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
                title: 'About',
                icon: 'mdi-account-group',
                to: '/about',
                menu: false
            },
            {
                title: 'Testimonials',
                icon: 'mdi-account-group',
                to: '/testimonial',
                menu: false
            },
            {
                title: 'Blog',
                icon: 'mdi-book-open-page-variant',
                to: '/blog',
                menu: false
            },
            {
                title: 'Contact',
                icon: 'mdi-account-voice',
                to: '/contact',
                menu: false
            }
        ]
    })
})