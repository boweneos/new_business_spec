// App State
let currentState = {
    activeFlow: null,
    currentStepIndex: 0
};

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const detailView = document.getElementById('detail-view');
const backBtn = document.getElementById('back-btn');
const hero = document.getElementById('hero');

// Detail View Elements
const flowTitle = document.getElementById('flow-title');
const flowSubtitle = document.getElementById('flow-subtitle');
const currentStepNum = document.getElementById('current-step-num');
const totalStepsNum = document.getElementById('total-steps-num');
const prevBtn = document.getElementById('prev-step');
const nextBtn = document.getElementById('next-step');
const progressBar = document.getElementById('progress-bar');
const stepImage = document.getElementById('step-image');
const visualContainer = document.getElementById('visual-container');
const stepsList = document.getElementById('steps-list');
const imageLoader = document.getElementById('image-loader');

// Text Elements
const stepPhase = document.getElementById('step-phase');
const stepIntent = document.getElementById('step-intent');
const stepAction = document.getElementById('step-action');
const stepResult = document.getElementById('step-result');
const stepStrategy = document.getElementById('step-strategy');

// Initialize
function init() {
    renderMenu();
    setupEventListeners();
    animateIntro();
}

function animateIntro() {
    // Check if gsap is available
    if (typeof gsap !== 'undefined') {
        gsap.from('header', { y: -100, opacity: 0, duration: 1, ease: 'power3.out' });
        gsap.from('#hero', { y: 50, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
    }
}

function renderMenu() {
    menuGrid.innerHTML = '';
    workflowData.forEach((flow, index) => {
        const card = document.createElement('div');
        card.className = 'glass-panel p-8 rounded-2xl cursor-pointer card-hover transition-all duration-300 border border-white/5 relative overflow-hidden group';
        card.onclick = () => openFlow(index);

        // Card Content
        const metadata = flow.metadata || {};
        const title = metadata.original_title || metadata.title || 'Untitled Workflow';
        const description = metadata.goal || 'No description available.';
        const stepCount = flow.metadata.total_steps || flow.steps.length;

        card.innerHTML = `
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg class="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <div class="relative z-10">
                <div class="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">Workflow ${index + 1}</div>
                <h3 class="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">${title}</h3>
                <p class="text-slate-400 text-sm mb-6 line-clamp-3">${description}</p>
                <div class="flex items-center justify-between text-xs text-slate-500 border-t border-white/10 pt-4">
                    <span>${stepCount} Steps</span>
                    <span class="flex items-center">
                        Explore 
                        <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </div>
            </div>
        `;

        // Set initial opacity to 1 to ensure visibility
        card.style.opacity = '1';
        menuGrid.appendChild(card);

        // Stagger animation for cards - only if gsap is available
        if (typeof gsap !== 'undefined') {
            gsap.from(card, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.5 + (index * 0.1),
                ease: 'power2.out'
            });
        }
    });
}

function openFlow(index) {
    const flow = workflowData[index];
    if (!flow || !flow.steps || flow.steps.length === 0) {
        alert('This flow has no steps available.');
        return;
    }

    currentState.activeFlow = flow;
    currentState.currentStepIndex = 0;

    // Populate static details
    flowTitle.textContent = flow.metadata.original_title || 'Workflow Details';
    totalStepsNum.textContent = flow.steps.length;

    // Populate Sidebar
    renderSidebar(flow);

    // Show View
    detailView.classList.remove('hidden');

    // Animate In
    const timeline = gsap.timeline();
    timeline.fromTo(detailView,
        { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
        { opacity: 1, clipPath: 'circle(150% at 50% 50%)', duration: 0.8, ease: 'power3.inOut' }
    );

    // Render first step
    renderStep(0);
}

function closeFlow() {
    gsap.to(detailView, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            detailView.classList.add('hidden');
            currentState.activeFlow = null;
        }
    });
}

function renderSidebar(flow) {
    stepsList.innerHTML = '';
    flow.steps.forEach((step, idx) => {
        const item = document.createElement('div');
        item.className = `p-3 rounded-lg text-sm cursor-pointer hover:bg-white/5 transition-colors border border-transparent ${idx === 0 ? 'bg-white/10 border-brand-accent/30 text-white' : 'text-slate-400'}`;
        item.dataset.index = idx;
        item.innerHTML = `
            <div class="flex items-center">
                <span class="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs mr-3 border border-white/10 text-slate-500">${idx + 1}</span>
                <span class="truncate">${step.intent || 'Unnamed Step'}</span>
            </div>
        `;
        item.onclick = () => renderStep(idx);
        stepsList.appendChild(item);
    });
}

function updateSidebar(index) {
    const items = stepsList.querySelectorAll('div[data-index]');
    items.forEach(item => {
        const idx = parseInt(item.dataset.index);
        if (idx === index) {
            item.className = 'p-3 rounded-lg text-sm cursor-pointer bg-white/10 border border-brand-accent/30 text-white transition-all duration-300';
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            item.className = 'p-3 rounded-lg text-sm cursor-pointer hover:bg-white/5 text-slate-400 border border-transparent transition-all duration-300';
        }
    });
}

function renderStep(index) {
    const flow = currentState.activeFlow;
    if (!flow || index < 0 || index >= flow.steps.length) return;

    currentState.currentStepIndex = index;
    const step = flow.steps[index];

    // Update Navigation State
    currentStepNum.textContent = index + 1;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === flow.steps.length - 1;

    // 1. Animate Out Text
    const textElements = [stepIntent, stepAction, stepResult, stepStrategy, stepPhase];
    gsap.to(textElements, {
        opacity: 0, y: -10, duration: 0.2, onComplete: () => {
            // Update Content
            stepPhase.textContent = step.phase ? `Phase: ${step.phase}` : (step.step_id || `Step ${index + 1}`);
            stepIntent.textContent = step.intent || 'No intent defined';

            // Action
            if (step.action && typeof step.action === 'object') {
                // If action is complex (like sequence)
                if (step.action === 'sequence') {
                    stepAction.textContent = "Sequence of actions (see sub-steps)";
                } else {
                    stepAction.textContent = JSON.stringify(step.action);
                }
            } else {
                stepAction.textContent = step.action || '';
                if (step.ui_element && step.ui_element.label) {
                    stepAction.textContent += ` on "${step.ui_element.label}"`;
                }
            }

            // Result
            stepResult.textContent = step.resulting_state || 'No specific result state.';

            // Strategy
            if (step.ui_element && step.ui_element.identification_strategy) {
                stepStrategy.textContent = step.ui_element.identification_strategy.join('\n');
            } else {
                stepStrategy.textContent = 'No identification strategy provided.';
            }

            // Animate In Text
            gsap.to(textElements, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 });
        }
    });

    // 2. Update Image
    if (step.visual_reference) {
        imageLoader.style.display = 'flex'; // Show loader

        // Load new image
        const img = new Image();
        img.src = step.visual_reference;
        img.onload = () => {
            stepImage.src = step.visual_reference;
            imageLoader.style.display = 'none';
            // Animation
            gsap.fromTo(stepImage, { scale: 1.1, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.5 });
        };
        img.onerror = () => {
            imageLoader.style.display = 'none';
            // Set placeholder or error state
            stepImage.src = ''; // Clear or set placeholder
        }
    } else {
        stepImage.src = '';
        imageLoader.style.display = 'flex';
        // Maybe show a "No Image" placeholder
    }

    // 3. Update Progress Bar
    const progress = ((index + 1) / flow.steps.length) * 100;
    progressBar.style.width = `${progress}%`;

    // 4. Update Sidebar
    updateSidebar(index);
}

function setupEventListeners() {
    backBtn.onclick = closeFlow;

    prevBtn.onclick = () => {
        if (currentState.currentStepIndex > 0) {
            renderStep(currentState.currentStepIndex - 1);
        }
    };

    nextBtn.onclick = () => {
        if (currentState.activeFlow && currentState.currentStepIndex < currentState.activeFlow.steps.length - 1) {
            renderStep(currentState.currentStepIndex + 1);
        }
    };

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (detailView.classList.contains('hidden')) return;

        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentState.activeFlow && currentState.currentStepIndex < currentState.activeFlow.steps.length - 1) {
                renderStep(currentState.currentStepIndex + 1);
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentState.currentStepIndex > 0) {
                renderStep(currentState.currentStepIndex - 1);
            }
        } else if (e.key === 'Escape') {
            closeFlow();
        }
    });
}

// Start
init();
