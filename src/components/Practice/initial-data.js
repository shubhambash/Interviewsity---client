const initialData  = {
    tasks : {
        'task-1' : {id : 'task-1', content : 'talk to arun'},
        'task-2' : {id : 'task-2', content : 'talk to shibbi'},
        'task-3' : {id : 'task-3', content : 'talk to shubham'},
        'task-4' : {id : 'task-4', content : 'talk to arun'},
        'task-5' : {id : 'task-5', content : 'talk to arun'},

    },
    columns :{
        'column-1': {
            id : 'column-1',
            title : 'Problems',
            taskIds : ['task-1','task-2','task-3','task-4']
        },
        'column-2': {
            id : 'column-2',
            title : 'Solved',
            taskIds : []
        },

        'column-3': {
            id : 'column-3',
            title : 'Unable to do',
            taskIds : []
        },
        'column-4': {
            id : 'column-4',
            title : 'Important',
            taskIds : []
        },
        
    },
    columnOrder : ['column-1', 'column-2',  'column-3', 'column-4']
}

export default initialData;