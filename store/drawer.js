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
            // {
            //     title: 'meet your chiropractors',
            //     icon: 'mdi-account',
            //     to: '/a',
            //     menu: false
            // },
            // {
            //     title: 'Services',
            //     icon: 'mdi-account-school',
            //     to: '/b',
            //     menu: true,
            //     subMenus: [
            //         {
            //             title: 'CHIROPRACTIC CARE',
            //             routes: [
            //                 {
            //                     title: 'Back Pain Treatment',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Neck Pain',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Headache Treatment',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Sciatica',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Shoulder Pain Treatment',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Lower Extremity Pain',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Upper Extremity Pain',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Car Accident Injuries',
            //                     to: ''
            //                 },
            //             ]
            //         },
            //         {
            //             title: 'OTHER SERVICES',
            //             routes: [
            //                 {
            //                     title: 'Acupuncture',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Massage Therapy',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Rehabilitation',
            //                     to: ''
            //                 },
            //                 {
            //                     title: 'Spinal Decompression',
            //                     to: ''
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     title: 'Testimonials',
            //     icon: 'mdi-phone',
            //     to: '/c',
            //     menu: false
            // },
            // {
            //     title: 'Blog',
            //     icon: 'mdi-party-popper',
            //     to: '/d',
            //     menu: false
            // },
            // {
            //     title: 'Payments',
            //     icon: 'mdi-account-group',
            //     to: '/e',
            //     menu: false
            // },
            // {
            //     title: 'Forms',
            //     icon: 'mdi-account-group',
            //     to: '/e',
            //     menu: false
            // },
            // {
            //     title: 'Contact',
            //     icon: 'mdi-account-group',
            //     to: '/e',
            //     menu: false
            // }
        ]
    })
})