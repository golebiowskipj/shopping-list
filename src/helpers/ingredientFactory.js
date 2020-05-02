import uuid from 'react-uuid';

export const ingredientFactory = (name, unit) => (
    {
        id: uuid(),
        name,
        unit,
    }
);