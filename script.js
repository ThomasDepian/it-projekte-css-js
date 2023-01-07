const NUM_TASKS = 18;
const TASK_PATH = '/it-projekte-css-js/tasks';
// const TASK_PATH = '/tasks';
const PAGE_TITLE = 'Meine Pizza-Seite | CSS + JS Kurs - Task'

let currentTask = 1;

function initialize() {
    currentTask = 1;

    // set max in progress bar
    document.getElementById('progress').setAttribute('max', NUM_TASKS - 1);

    // set max Task in footer
    document.getElementById('num-tasks').innerText = NUM_TASKS;
    
    updateToCurrentTask();
}

function updateToCurrentTask() {

    // update page title
    document.title = `${PAGE_TITLE} ${currentTask}`;

    // load new task
    document.getElementById('task').setAttribute('src', `${TASK_PATH}/task-${currentTask}.html`);

    // update progress bar
    document.getElementById('progress').value = currentTask - 1;
    document.getElementById('progress').innerHTML = `${currentTask}/${NUM_TASKS}`;

    // set current task in footer
    document.getElementById('num-task').innerText = currentTask;

    if (currentTask == 1) {
        document.getElementById('prev').disabled = true;
    } else {
        document.getElementById('prev').disabled = false;
    }

    if (currentTask == NUM_TASKS) {
        document.getElementById('next').disabled = true;
    } else {
        document.getElementById('next').disabled = false;
    }
}

function next() {
    if (currentTask < NUM_TASKS) {
        currentTask++;
        updateToCurrentTask();
    }
}

function prev() {
    if (currentTask > 1) {
        currentTask--;
        updateToCurrentTask();
    }
}