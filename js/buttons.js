const buttons = [
    {
        name: '7',
        symbol: '7',
        value: 7,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name:'8',
        symbol: '8',
        value: 8,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {   
        name: '9',
        symbol: '9',
        value: 9,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name: 'del',
        symbol: 'del',
        action: 'delete',
        type: 'delete',
        class: 'calc__btn btn-func'
    },
    {
        name: '4',
        symbol: '4',
        value: 4,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name: '5',
        symbol: '5',
        value: 5,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name: '6',
        symbol: '6',
        value: 6,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name: 'plus',
        symbol: '&plus;',
        value: '+',
        action: 'add',
        type: 'operator',
        class: 'calc__btn btn-num'
    },
    {
        name: '1',
        symbol: '1',
        value: 1,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name: '2',
        symbol: '2',
        value: 2,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name: '3',
        symbol: '3',
        value: 3,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name: 'minus',
        symbol: '&minus;',
        value: '-',
        action: 'substract',
        type: 'operator',
        class: 'calc__btn btn-num'
    },
    {
        name: 'decimal',
        symbol: '&#46;',
        value: '.',
        action: 'decimal',
        type: 'operator',
        class: 'calc__btn btn-num'
    },
    {
        name: '0',
        symbol: '0',
        value: 0,
        type: 'number',
        class: 'calc__btn btn-num'
    },
    {
        name: 'divide',
        symbol: '&#47;',
        value: '/',
        action: 'divide',
        type: 'operator',
        class: 'calc__btn btn-num'
    },
    {
        name: 'multiply',
        symbol: '&times;',
        value: '*',
        action: 'multiply',
        type: 'operator',
        class: 'calc__btn btn-num'
    },
    {
        name: 'reset',
        symbol: 'reset',
        action: 'reset',
        type: 'reset',
        class: 'calc__btn btn-func btn-reset'
    },
    {
        name: 'calculate',
        symbol: '&#61;',
        action: 'calculate',
        type: 'calculate',
        class: 'calc__btn btn-equals'
    },
]

export default buttons;