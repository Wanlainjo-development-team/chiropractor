import { defineStore } from 'pinia'

export const useDraerStore = defineStore('websiteDraer', {
    state: () => ({
        drawer: false,
        routes: [
            {
                title: 'Home',
                icon: 'mdi-home',
                to: '/'
            },
            {
                title: 'About Us',
                icon: 'mdi-account',
                to: '/about'
            },
            {
                title: 'Courses',
                icon: 'mdi-account-school',
                to: '/courses'
            },
            {
                title: 'Contact',
                icon: 'mdi-phone',
                to: '/contact'
            },
            {
                title: 'Events',
                icon: 'mdi-party-popper',
                to: '/events'
            },
            {
                title: 'Communities',
                icon: 'mdi-account-group',
                to: '/community'
            }
        ]
    })
})