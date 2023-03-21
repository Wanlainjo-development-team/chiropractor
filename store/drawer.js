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
                                to: '/services/backPainTreatment',
                                text: 'A vast majority of Americans will experience back pain at some point in their lives, and most will suffer from low-back pain specifically. Chiropractors are experts at treating back pain, and Metronet Chiropractic Clinic has been successfully treating Minnesotan’s with back pain since 1986.'
                            },
                            {
                                title: 'Neck Pain',
                                to: '/services/neckPain',
                                text: 'Neck pain and stiffness is one of the most common pain conditions causing people to suffer silently. The reason that the Minnesota company “My Pillow” is a huge success, is that neck pain and discomfort often bothers people at night and it is difficult to find a comfortable position to sleep. A good pillow can be helpful, but the problem is most of the time not your pillow. It’s your neck! And Metronet Chiropractic Clinic chiropractors are neck pain treatment experts.'
                            },
                            {
                                title: 'Headache Treatment',
                                to: '/services/headacheTreatment',
                                text: 'There are many different types of headaches, ranging from annoying tension headaches to debilitating migraines, and chiropractic is an effective headache treatment for the most common types of headaches.'
                            },
                            {
                                title: 'Sciatica',
                                to: '/services/sciatica',
                                text: 'Many people have experienced sciatica or have known someone plagued with this pain. It is a very common condition. Sciatica is pain, radiating through the buttock and down the back of the leg and can be severe and debilitating. Low back pain and sciatica are the most common reasons for long term, often addictive, consumption of opioid medications. Chiropractors are experts offering effective treatment for sciatica pain, without the use of dangerous and addictive drugs.'
                            },
                            {
                                title: 'Lower Extremity Pain',
                                to: '/services/lowerExtremityPain',
                                text: 'Many people unnecessarily suffer from lower extremity pain. Knee pain, hip pain, or ankle pain can limit many activities and the ability to exercise, which can than lead to other health issues. If you can’t walk comfortably, the pounds tend to pile on due to lack of exercise. This can eventually lead to more serious health issues.'
                            },
                            {
                                title: 'Upper Extremity Pain',
                                to: '/services/upperExtremityPain',
                                text: 'Pain in shoulders, arms, and hands often stems from the neck. The nerves that exit from the mid to lower neck (The Brachial plexus) travel from the neck down to the shoulder, down the arm and all the way down to the fingertips. These nerves can cause upper extremity pain anywhere along their pathway, if they are pinched or irritated by misaligned vertebrae or a disc herniation in the neck. A chiropractor can diagnose and treat this successfully.'
                            },
                            {
                                title: 'Car Accident Injuries',
                                to: '/services/carAccidentInjury',
                                text: 'If you’ve ever been in a car accident, you’ve probably experienced a whiplash injury. A whiplash injury strains muscles, sprains ligaments, misaligns vertebra and can damage discs. Even minor car accident injuries can result in life-long pain and discomfort, if not treated appropriately. The chiropractors at Metronet Chiropractic Clinic have been successfully diagnosing and treating car accident injuries in Minnesota since 1986, and we are here to help you recover from your car accident injury.'
                            },
                        ]
                    },
                    {
                        title: 'OTHER SERVICES',
                        routes: [
                            {
                                title: "Acupuncture",
                                to: "/services/acupuncture",
                                text: 'All the doctors at Metronet Chiropractic Clinic Wayzata are certified in acupuncture and meridian therapy. By combining traditional Chinese acupuncture technique with high-tech Electronic Meridian Imaging (EMI), the doctors are able to diagnose and treat conditions that are undetectable to most physicians.'
                            },
                            {
                                title: "Massage Therapy",
                                to: "/services/massageTherapy",
                                text: 'Our highly qualified team of massage therapists have years of experience helping patients reduce muscle tension as well as stress and fatigue through effective massage techniques. Some of our past and current clients include professional athletes and dancers so you can be sure you’ll be in safe hands with us.'
                            },
                            {
                                title: "Spinal Decompression",
                                to: "/services/spinalDecompression",
                                text: 'Back or neck surgery can be costly in more ways than one, considering there are several risks associated with these procedures. Luckily nowadays, there’s a much more effective treatment for spinal pain and injuries.'
                            },
                            {
                                title: "Rehabilitation",
                                to: "/services/rehabilitation",
                                text: 'We offer our patients various options when it comes to therapeutic exercise and personal training. Rehab has been shown to help the reeducation of the muscles leading to increased range of motion as well as improved balance and strength. Our rehab programs are customized to every individual patient’s conditions and requirements.'
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