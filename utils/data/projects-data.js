import blackjack from '/public/image/blackjack.jpg';
import foodorder from '/public/image/foodorder.jpg';
import laptoprental from '/public/image/laptoprental.jpg';
import markjayyarn from '/public/image/markjayyarn.jpg';

export const projectsData = [
    
        {
            id: 1,
            name: 'Online Food Order System',
            description: "Developed a dynamic PHP-based online food ordering system. The application allows users to browse menus, place orders, and make payments seamlessly. Integrated secure user authentication, real-time order tracking, and a comprehensive admin dashboard for managing menus, orders, and user accounts.",
            tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            role: 'Full Stack Developer',
            code: '',
            demo: '',
            image: foodorder,
        },
        {
            id: 2,
            name: 'Laptop Rental System',
            description: "Built a PHP-based web application for a laptop rental service. Users can browse available laptops, rent them for specific durations, and process payments online. Implemented a robust admin panel to manage inventory, rentals, and customer details.",
            tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            role: 'Full Stack Developer',
            code: '',
            demo: '',
            image: laptoprental,
        },
        {
            id: 3,
            name: 'Blackjack Game',
            description: "Created an engaging Blackjack game implemented as a React-based web application. The game features a user-friendly interface, automated dealer and player actions, and animations for dealing cards. Additionally, transitioned the game to a Python-based terminal application with a beautified display using the Rich library.",
            tools: ['React', 'JavaScript', 'Python', 'Rich'],
            role: 'Frontend Developer',
            code: '',
            demo: 'https://mogusu2.github.io/blackjack/',
            image: blackjack,
        },
        {
            id: 4,
            name: 'MarkJay Yarn Storefront',
            description: "Designed and developed a React-based e-commerce storefront for selling yarned and knitted items. The application includes a feature-rich shopping experience with product listings, a modern frontend interface, and payment integrations using Stripe and M-Pesa.",
            tools: ['React', 'JavaScript', 'Stripe API', 'M-Pesa', 'Vite'],
            role: 'Frontend Developer',
            code: '',
            demo: '',
            image: markjayyarn,
        },
    
];

