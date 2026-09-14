import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Material Sorter",
        description: "Autonomous material sorter using VEX API",
        category: "Embedded Hardware",
        image: "/images/projects/marblewebsite.png", // Replace with real image
        tech: ["C++", "3D Modeling", "Engineering Design"],
        liveUrl: "https://www.youtube.com/watch?v=-ida7KRZlcA",
        reportUrl: "/images/projects/Akhil Bejjanki, Ryan Vir, Janav Rakesh, Luke Chen - 3.3.1 Project Report.pdf",
        featured: true,
    },
    {
        id: "2",
        title: "RaspberryPi Motion Detector Robot",
        description: "Robot traverses surrounding area",
        category: "Embedded Hardware",
        image: "/images/projects/RaspberryPiPlaceholder.png", // Replace with real image
        tech: ["RaspberryPi", "Ultrasonic Sensor"],
        codeUrl: "https://github.com/example/portfolio",
        featured: true,
        comingSoon: true,
    },
    {
        id: "gt-movies-store",
        title: "GT Movies Store",
        description: "A Django-based movie shopping web application",
        category: "Software + AI",
        image: "/images/projects/MovieStore.png",
        tech: ["Django", "Python", "HTML/CSS", "Bootstrap", "SQLite"],
        liveUrl: "https://akhilbejjanki6.pythonanywhere.com/",
        liveLabel: "Live App",
        codeUrl: "https://github.com/Akhil-Bejjanki/moviesstore/tree/main",
        demoUrl: "https://youtu.be/rFIZsqSt2Tk",
        featured: true,
        longDescription: [
            "I designed and developed GT Movies Store as a Django-based movie shopping web application that gives users a simple way to browse a catalog of films, view details, add movies to a cart, and complete a purchase. The app is meant to make movie selection and shopping feel straightforward for a user who wants to look at available titles, compare them, and decide what to watch or buy. The main entry point is the home page, which leads into the rest of the site through navigation links for About, Movies, Cart, login, and signup. From there, users can move between pages using Django routes and template links rather than a separate JavaScript app, which keeps the flow easy to understand and consistent across the project.",
            "The primary functionality is centered on browsing and interacting with movie information. On the Movies page, users can see a list of movie cards and search for titles by name, which helps them quickly find what they are looking for. Each movie has its own detail page that displays the description, price, image, and quantity selector for adding the item to the cart. I also implemented user accounts so that a user can sign up, log in, and log out, and once authenticated they can access their order history page. The shopping cart stores selected movies in the session, allows users to review the total, clear items, and complete a purchase, after which the app creates an order record and shows a confirmation page. In addition, users can leave reviews on movie pages, edit or delete their own review, and report a review if they find it inappropriate; reported reviews are filtered out from the page so they are not shown to other users. These features match the project’s user stories by enabling browsing, account management, purchase flow, and a way to interact with reviews in a practical and user-friendly way.",
            "The project uses Django, Python, HTML, CSS, Bootstrap, templates, SQLite database models, and standard Django authentication and routing. I created models for movies, reviews, orders, and cart items, and I used Django templates and Bootstrap styling to keep the interface visually consistent across screens. The overall experience is built around a normal Django workflow: the user interacts with templates, those requests hit URL patterns and views, and the database stores the data behind the app. This made it possible to implement the core features in a structure that is readable, maintainable, and easy to expand."
        ],
        processDescription: [
            "I approached this project incrementally by building the app feature by feature rather than trying to implement everything at once. I started with the project structure and the basic Django app setup, then added the home page, movie listing, and movie detail views before moving on to authentication and shopping functionality. I separated concerns into Django apps for accounts, movies, cart, and home, which made it easier to manage each part of the project without mixing too much logic together. As I added features, I created URL routes, views, templates, and models that matched the app’s purpose, and I checked the browser often to confirm that each screen and interaction worked the way I intended.",
            "When I ran into doubts or bugs, I used the Django error messages, tracebacks, and template behavior to narrow down the source of the problem. For example, I had to pay attention to template paths, URL naming, authentication decorators, and the relationship between models and views to make sure pages rendered correctly and that logged-in versus logged-out users saw the right content. I also relied on course materials and Django documentation when I needed clarification on things like auth flow, route patterns, and how forms and templates connect to back-end logic. This process taught me to debug iteratively: test a feature, fix the issue, recheck the output, and move forward only when the behavior was correct. I kept the project manageable by solving one problem at a time and revalidating after each change, which helped me build a functioning Django project with a clear structure and a complete user flow."
        ]
    },
    {
        id: "3",
        title: "Smart Path AI",
        description: "AI learning tool",
        category: "Software + AI",
        image: "/images/projects/SmartPathPicture.png", // Replace with real image
        tech: ["React", "Graph-RAG", "MongoDB"],
        featured: true,
        comingSoon: true,
    },
];
