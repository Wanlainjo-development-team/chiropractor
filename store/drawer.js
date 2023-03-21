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
                to: '/services',
                menu: true,
                subMenus: [
                    {
                        title: 'CHIROPRACTIC CARE',
                        routes: [
                            {
                                title: 'Back Pain Treatment',
                                to: '/services/backPainTreatment'
                            },
                            {
                                title: 'Neck Pain',
                                to: '/services/neckPain'
                            },
                            {
                                title: 'Headache Treatment',
                                to: '/services/headacheTreatment'
                            },
                            {
                                title: 'Sciatica',
                                to: '/services/sciatica'
                            },
                            {
                                title: 'Lower Extremity Pain',
                                to: '/services/lowerExtremityPain'
                            },
                            {
                                title: 'Upper Extremity Pain',
                                to: '/services/upperExtremityPain'
                            },
                            {
                                title: 'Car Accident Injuries',
                                to: '/services/carAccidentInjury'
                            },
                        ]
                    },
                    {
                        title: 'OTHER SERVICES',
                        routes: [
                            {
                                title: "Acupuncture",
                                to: "/services/acupuncture",
                            },
                            {
                                title: "Massage Therapy",
                                to: "/services/massageTherapy",
                            },
                            {
                                title: "Spinal Decompression",
                                to: "/services/spinalDecompression",
                            },
                            {
                                title: "Rehabilitation",
                                to: "/services/rehabilitation",
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
            }
        ]
    })
})