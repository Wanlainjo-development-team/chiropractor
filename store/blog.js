import { defineStore } from 'pinia'

export const useBlogStore = defineStore('websiteBlog', {
    state: () => ({
        posts: [
            {
                id: 1,
                title: "Why Chiropractic Care Should Be Part of Your Wellness Routine",
                body: "Chiropractic care is a holistic approach to healthcare that focuses on the relationship between the spine and the nervous system. Chiropractors use a variety of techniques to help improve spinal alignment, reduce pain and inflammation, and promote overall wellness. Here are a few reasons why chiropractic care should be part of your wellness routine:",
                reasons: [
                    "Improved spinal health",
                    "Reduced pain and inflammation",
                    "Enhanced range of motion and flexibility",
                    "Improved immune system function",
                    "Better sleep and relaxation"
                ],
                image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1679350160/chriopractor/kaylee-garrett-GaprWyIw66o-unsplash_rdbtkn.jpg"
            },
            {
                id: 2,
                title: "How Chiropractic Care Can Help Alleviate Headaches",
                body: "Headaches are a common problem that can be caused by a variety of factors such as stress, tension, poor posture, or spinal misalignments. Chiropractic care can help alleviate headaches by addressing the underlying causes of the pain. Here are a few ways chiropractic care can help alleviate headaches:",
                reasons: [
                    "Reducing muscle tension in the neck and shoulders",
                    "Improving spinal alignment",
                    "Reducing inflammation and nerve irritation",
                    "Providing nutritional and lifestyle advice"
                ],
                image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1679350241/chriopractor/usman-yousaf-Dd6St65dfYw-unsplash_slp7mu.jpg"
            },
            {
                id: 3,
                title: "Chiropractic Care for Posture Improvement",
                body: "Poor posture can lead to a variety of problems such as back pain, neck pain, and headaches. Chiropractic care can help improve posture by addressing spinal misalignments and muscle imbalances. Here are a few ways chiropractic care can help improve posture:",
                reasons: [
                    "Adjusting spinal misalignments",
                    "Strengthening and stretching specific muscle groups",
                    "Providing ergonomic and postural advice",
                    "Improving joint mobility and flexibility"
                ],
                image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1679350160/chriopractor/chuttersnap-1eL99eGXp0g-unsplash_mzf3kk.jpg"
            }
        ],
    })
})