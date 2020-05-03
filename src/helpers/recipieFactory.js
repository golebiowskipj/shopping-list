import uuid from 'react-uuid';

export const recipieFactory = (name, ingredients) => (
    {
        id: uuid(),
        name,
        ingredients,
        count: 0
    }
)