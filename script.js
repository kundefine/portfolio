// --- DATA ---
const skillsData = {
    backend: [
        'Node.js (Express, NestJS)', 'PHP (Laravel)', 'REST API Design', 
        'JWT & Auth', 'WebSockets', 'Asterisk / VoIP', 'Jitsi Integration'
    ],
    frontend: [
        'JavaScript (ES6+)', 'React.js', 'Next.js', 'Vue.js', 'Ant Design', 
        'VueX', 'Redux', 'Zustand', 'TanStack Query', 'HTML5 & CSS3', 
        'Bootstrap', 'Material-UI'
    ],
    devops: [
        'MySQL', 'PostgreSQL', 'Prisma ORM', 'AWS', 'Digital Ocean', 
        'Contabo', 'CI/CD', 'Docker & Compose', 'Git & GitLab', 
        'ELK Stack', 'Winston Logging'
    ]
};

const projectsData = [
    { name: 'CartUp', desc: 'Multi-vendor e-commerce platform with complex vendor management.', tag: 'E-COMMERCE', image: 'img/projects/project__cartup.png', url: '#' },
    { name: 'Foodi', desc: 'Comprehensive food delivery service management system.', tag: 'SERVICE', image: 'img/projects/project_foodi.png', url: '#' },
    { name: 'FlightOps', desc: 'Flight schedule and roostering system for aviation operations.', tag: 'LOGISTICS', image: 'img/projects/project__flightops.png', url: '#' },
    { name: 'USB Express', desc: 'Courier service management system with real-time tracking.', tag: 'COURIER', image: 'img/projects/usb_express.png', url: '#' },
    { name: 'USB Exam', desc: 'Secure online examination platform for educational institutions.', tag: 'EDUCATION', image: 'img/projects/usb_exam.png', url: '#' },
    { name: 'Meditrip', desc: 'Health travel & visa service platform for medical tourism.', tag: 'HEALTHCARE', image: 'img/projects/project__meditrip.png', url: '#' },
    { name: 'Support Ticket System', desc: 'Cross-application ticketing system with secure user access.', tag: 'UTILITY', image: 'img/projects/project_support_ticketing_system.png', url: '#' },
    { name: 'IPPBX - Call Center', desc: 'Robust call center management system built with Asterisk and Issabel IPPBX.', tag: 'VOIP', image: 'img/projects/project_ippbx.png', url: '#' }
];

// --- THREE.JS BACKGROUND ---
function initThreeJS() {
    const canvas = document.querySelector('#bg-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Particles
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#8ff5ff',
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animate() {
        requestAnimationFrame(animate);

        particlesMesh.rotation.y += 0.001;
        
        // Fluid follow mouse
        const targetX = (mouseX / window.innerWidth - 0.5) * 2;
        const targetY = (mouseY / window.innerHeight - 0.5) * -2;
        
        particlesMesh.rotation.x += (targetY - particlesMesh.rotation.x) * 0.05;
        particlesMesh.rotation.y += (targetX - particlesMesh.rotation.y) * 0.05;

        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

// --- TYPING EFFECT ---
function initTypingEffect() {
    const textElement = document.getElementById('intro-typing');
    const sentences = [
        "> Initializing software engineer profile...",
        "> Specializing in backend architecture...",
        "> Building scalable distributed systems...",
        "> Precision. Scability. Reliability."
    ];
    let sentenceIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentSentence = sentences[sentenceIndex];
        
        if (isDeleting) {
            textElement.textContent = currentSentence.substring(0, charIndex--);
            typeSpeed = 50;
        } else {
            textElement.textContent = currentSentence.substring(0, charIndex++);
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentSentence.length + 1) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// --- CONTENT INJECTION ---
function injectContent() {
    // Skills
    const skillContainers = {
        'backend-skills': skillsData.backend,
        'frontend-skills': skillsData.frontend,
        'devops-skills': skillsData.devops
    };

    for (const [id, list] of Object.entries(skillContainers)) {
        const container = document.getElementById(id);
        list.forEach(skill => {
            const chip = document.createElement('div');
            chip.className = 'chip';
            chip.textContent = skill;
            container.appendChild(chip);
        });
    }

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <svg class="hud-corner corner-tl" viewBox="0 0 24 24"><path d="M2 12V2h10"/></svg>
            <svg class="hud-corner corner-tr" viewBox="0 0 24 24"><path d="M2 12V2h10"/></svg>
            <svg class="hud-corner corner-bl" viewBox="0 0 24 24"><path d="M2 12V2h10"/></svg>
            <svg class="hud-corner corner-br" viewBox="0 0 24 24"><path d="M2 12V2h10"/></svg>
            <div class="project-img-container">
                <img src="${project.image}" alt="${project.name}" class="project-img">
            </div>
            <div class="project-content">
                <div class="project-header">
                    <span class="project-tag">${project.tag}</span>
                    <a href="${project.url}" target="_blank" class="project-link-icon" aria-label="Open Project">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                </div>
                <h3>${project.name}</h3>
                <p class="body-sm">${project.desc}</p>
            </div>
        `;
        projectsContainer.appendChild(card);
    });
}

// --- SCROLL ANIMATIONS ---
function initScrollAnimations() {
    const streamPath = document.getElementById('stream-path');
    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
        const drawOffset = 1000 * (1 - scrollPercentage);
        if(streamPath) streamPath.style.strokeDashoffset = drawOffset;
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('section > .content-wrapper');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// --- INITIALIZE ALL ---
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initTypingEffect();
    injectContent();
    initScrollAnimations();

    // Contact Form handling (Simulation)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'SIGNAL SENT ✓';
        btn.style.background = 'var(--secondary)';
        form.reset();
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    });
});
