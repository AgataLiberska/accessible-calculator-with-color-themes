const buttons = [
    {
        symbol: '7',
        value: 7,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '8',
        value: 8,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '9',
        value: 9,
        class: 'calc__btn btn-num'
    },
    {
        symbol: 'del',
        action: 'delete',
        class: 'calc__btn btn-func'
    },
    {
        symbol: '4',
        value: 4,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '5',
        value: 5,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '6',
        value: 6,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '&plus;',
        value: '&plus;',
        action: 'add',
        class: 'calc__btn btn-num'
    },
    {
        symbol: '1',
        value: 1,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '2',
        value: 2,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '3',
        value: 3,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '&minus;',
        value: '&minus;',
        action: 'substract',
        class: 'calc__btn btn-num'
    },
    {
        symbol: '&#46;',
        value: '&#46;',
        action: 'decimal',
        class: 'calc__btn btn-num'
    },
    {
        symbol: '0',
        value: 0,
        class: 'calc__btn btn-num'
    },
    {
        symbol: '&#47;',
        value: '&#47;',
        action: 'divide',
        class: 'calc__btn btn-num'
    },
    {
        symbol: '&times;',
        value: '&times;',
        action: 'multiply',
        class: 'calc__btn btn-num'
    },
    {
        symbol: 'reset',
        action: 'reset',
        class: 'calc__btn btn-func btn-reset'
    },
    {
        symbol: '&#61;',
        action: 'calculate',
        class: 'calc__btn btn-equals'
    },
]

export default buttons;