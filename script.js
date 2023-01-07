const NUM_TASKS = 18;
// const TASK_PATH = '/it-projekte-css-js/tasks';
const TASK_PATH = '/tasks';
const PAGE_TITLE = 'Meine Pizza-Seite | CSS + JS Kurs - Task'

let currentTask = 1;

function readTaskFromUrl() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
        });
        
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    const taskNr = params.task || 1;
    return taskNr;    
}

function initialize() {
    // addEventListener('beforeunload', _ => {
    //     return "Achtung! Deine bisherige Arbeit könnte verloren gehen. Bitte benutze zum navigieren ausschließlich die Knöpfe auf der Webseite. Willst du fortfahren?";
    // });
    // requestFullscreen();

    currentTask = readTaskFromUrl();

    // set max in progress bar
    document.getElementById('progress').setAttribute('max', NUM_TASKS - 1);

    // set max Task in footer
    document.getElementById('num-tasks').innerText = NUM_TASKS;
    
    updateToCurrentTask();
}

function updateToCurrentTask() {

    // update URL
    window.history.pushState(undefined, `Task ${currentTask}`, `index.html?task=${currentTask}`);

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