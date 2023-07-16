import { SiOpenaigym } from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Value One",
        desc: "Discover the sacred connection between body, mind, and soul."
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Value Two",
        desc: "Elevate your workouts, nourish your spirit, and find serenity."
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Value Three",
        desc: "Achieve inner peace through the strength of your body."
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Value Four",
        desc: "Nurture your body, strengthen your spirit, transcend limits."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "You should aim for a minimum of 3-5 days of exercise per week to maintain a healthy fitness routine."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out varies based on personal preference and schedule. Some people find that morning workouts energize them for the day, while others prefer exercising in the afternoon or evening to relieve stress. Choose a time that suits you and allows for consistency in your fitness routine."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Workouts should generally be 30 minutes to an hour long. Focus on quality and variety, including cardio, strength training, and flexibility exercises. Consistency is key for achieving fitness goals."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, warming up before workouts is crucial. It helps prepare your body by increasing blood flow, loosening muscles, and reducing the risk of injury. Spend 5-10 minutes on dynamic stretches and light cardio activities to warm up effectively."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Incorporating both strength training and cardio exercises into your fitness routine is beneficial. Strength training helps build muscle, increases metabolism, and improves overall strength, while cardio enhances cardiovascular fitness, burns calories, and supports heart health. Striking a balance between the two can lead to well-rounded fitness and optimal health benefits."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes, weightlifting is an effective form of strength training. It helps build muscle, increase strength, and improve overall fitness. However, other options like bodyweight exercises and resistance training can also be effective for strength training. Choose what suits you best."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "I've tried several gyms, but this one stands out. The variety of classes, personalized training programs, and friendly staff create an incredible fitness experience. I've seen amazing results!",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Being a part of this gym has completely changed my perspective on fitness. The passionate trainers, diverse workout options, and welcoming environment make it an enjoyable and rewarding place to train.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Being a part of this gym has completely changed my perspective on fitness. The passionate trainers, diverse workout options, and welcoming environment make it an enjoyable and rewarding place to train.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "This gym has become my second home. The variety of classes keeps me motivated, the personal trainers push me to my limits, and the sense of community is unmatched. Highly recommend!",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "From the moment I stepped into this gym, I felt welcomed. The knowledgeable trainers, positive atmosphere, and cutting-edge equipment make it the perfect place to achieve my fitness goals.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            { feature: 'First Feature', available: true },
            { feature: 'Second Feature', available: true },
            { feature: 'Third Feature', available: true },
            { feature: 'Fourth Feature', available: true },
            { feature: 'Fifth Feature', available: true },
            { feature: 'Fifth Feature Plus', available: false },
            { feature: 'Sixth Feature', available: false },
            { feature: 'Seventh Feature', available: false },
            { feature: 'Seventh Feature Plus', available: false },
            { feature: 'Eighth Feature', available: false },
            { feature: 'Ninth Feature', available: false },
            { feature: 'Tenth Feature', available: false },
            { feature: 'Eleventh Feature', available: false }
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            { feature: 'First Feature', available: true },
            { feature: 'Second Feature', available: true },
            { feature: 'Third Feature', available: true },
            { feature: 'Fourth Feature', available: true },
            { feature: 'Fifth Feature', available: true },
            { feature: 'Fifth Feature Plus', available: true },
            { feature: 'Sixth Feature', available: true },
            { feature: 'Seventh Feature', available: true },
            { feature: 'Seventh Feature Plus', available: true },
            { feature: 'Eighth Feature', available: false },
            { feature: 'Ninth Feature', available: false },
            { feature: 'Tenth Feature', available: false },
            { feature: 'Eleventh Feature', available: false }
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            { feature: 'First Feature', available: true },
            { feature: 'Second Feature', available: true },
            { feature: 'Third Feature', available: true },
            { feature: 'Fourth Feature', available: true },
            { feature: 'Fifth Feature', available: true },
            { feature: 'Fifth Feature Plus', available: true },
            { feature: 'Sixth Feature', available: true },
            { feature: 'Seventh Feature', available: true },
            { feature: 'Seventh Feature Plus', available: true },
            { feature: 'Eighth Feature', available: true },
            { feature: 'Ninth Feature', available: true },
            { feature: 'Tenth Feature', available: true },
            { feature: 'Eleventh Feature', available: true }
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]