const NUM_STEPS = 18;
const TASK_PATH = '/tasks';
const PAGE_TITLE = 'Meine Pizza-Seite | CSS + JS Kurs - Task'

let currentStep = 1;

function initialize() {
    currentStep = 1;

    // set max in progress bar
    document.getElementById('progress').setAttribute('max', NUM_STEPS - 1);

    // set max steps in footer
    document.getElementById('steps').innerText = NUM_STEPS;
    
    updateToCurrentStep();
}

function updateToCurrentStep() {
    // update page title
    document.title = `${PAGE_TITLE} ${currentStep}`;

    // load new task
    document.getElementById('task').setAttribute('src', `${TASK_PATH}/task-${currentStep}.html`);

    // update progress bar
    document.getElementById('progress').value = currentStep - 1;
    document.getElementById('progress').innerHTML = `${currentStep}/${NUM_STEPS}`;

    // set current step in footer
    document.getElementById('step').innerText = currentStep;

    if (currentStep == 1) {
        document.getElementById('prev').disabled = true;
    } else {
        document.getElementById('prev').disabled = false;
    }

    if (currentStep == NUM_STEPS) {
        document.getElementById('next').disabled = true;
    } else {
        document.getElementById('next').disabled = false;
    }
}

function next() {
    if (currentStep < NUM_STEPS) {
        currentStep++;
        updateToCurrentStep();
    }
}

function prev() {
    if (currentStep > 1) {
        currentStep--;
        updateToCurrentStep();
    }
}