var tasks = [
    {'name': 'Write for Envato Tuts+', 'duration': 120},
    {'name': 'Work out', 'duration': 60},
    {'name': 'Procrastinate on Doulingo', 'duration': 240},
];

let tasksName = tasks.filter(
    i => i.name
);

document.getElementById("view1").innerHTML = tasks;
