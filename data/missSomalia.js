export function updatelocalStorage() {
    localStorage.setItem('missSomalia', JSON.stringify(missSomalia));
}
export let missSomalia = JSON.parse(localStorage.getItem('missSomalia')) || [
    {
        missID: 4020304050,
        missName: 'Iqra Albetroos',
        missDesc: 'Iqra waxay ku dhalatay magaalada mogadisho waana gabadh u tartamaysa quruxda somalia sanadkii 2aad oo xiriira',
        missIMG: 'images/iqra.jpg',
        missAge: 27,
        missVotes: {
            missAllVotes: 0
        },
    }, {
        missID: 5020304050,
        missName: 'Maandeeq Muuse Haaji',
        missDesc: 'Maandeeq waxay ku dhalatay magaalada mogadisho waana gabadh u tartamaysa quruxda somalia sanadkii 2aad oo xiriira',
        missIMG: 'images/maandeeq.png',
        missAge: 20,
        missVotes: {
            missAllVotes: 0
        },
    },{
        missID: 6020304050,
        missName: 'Muna Mohamed Ali',
        missDesc: 'Muna waxay ku dhalatay magaalada mogadisho waana gabadh u tartamaysa quruxda somalia sanadkii 2aad oo xiriira',
        missIMG: 'images/muna.jpg',
        missAge: 21,
        missVotes: {
            missAllVotes: 0
        },
    },
    {
        missID: 1020304050,
        missName: 'Aisha Mohamed Abdi',
        missDesc: 'Aisha waxay ku dhalatay magaalada mogadisho waana gabadh u tartamaysa quruxda somalia sanadkii 2aad oo xiriira',
        missIMG: 'images/aisha.jpg',
        missAge: 20,
        missVotes: {
            missAllVotes: 0
        },
    },
    {
        missID: 2020304050,
        missName: 'Farhiya Haaji Mohamud',
        missDesc: 'Farhia waxay ku dhalatay magaalada hargeisa waana gabadh u tartamaysa quruxda somalia sanadkii 3aad oo xiriira',
        missIMG: 'images/farhiya.jpg',
        missAge: 24,
        missVotes: {
            missAllVotes: 0
        },
    },
    {
        missID: 3020304050,
        missName: 'Nasra Faarah Cali',
        missDesc: 'Nasta waxay ku dhalatay magaalada mogadisho waana gabadh u tartamaysa quruxda somali sanadkiilabaad oo xiriira',
        missIMG: 'images/nasra.jpg',
        missAge: 18,
        missVotes: {
            missAllVotes: 0
        },
    },
];

updatelocalStorage()

// Ensure to call this function somewhere else in your application to initially populate localStorage
// updatelocalStorage();
