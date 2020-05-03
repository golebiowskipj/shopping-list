import React, { useReducer, useEffect } from 'react';
import { recipies } from './data/recipies';
import { RecipiesList } from './components/recipes-list/recipies-list.component';
import { Search } from './components/search/search.component';
import { LayoutStyled } from './components/layout/layout.style';
import { GenerateShoppingListButton } from './components/generate-shopping-list-button/generate-shopping-list-button.component';
import { Modal } from './components/modal/modal.component';
import { IngredientsList } from './components/ingredients-list/ingredients-list.component';

export const GlobalContext = React.createContext(null);

export const types = {
  addIngredient: 'add_ingr',
  addRecipie: 'add_recipie',
  removeRecipie: 'remove_recipie',
  handleSearch: 'handle_search',
  generateShopingList: 'generate_shopping_list',
  setRecipies: 'set_recipies',
  clear: 'clear'
}

function reducer(state, action) {
  switch (action.type) {
    case types.generateShopingList:

      const ingredients = state.selectedRecipies.map(recipie => {
        return recipie.ingredients.map(ingredient => {
          return { ...ingredient, qty: ingredient.qty * recipie.count }
        })
      })

      const flattened = ingredients.reduce((a, b) => {
        return a.concat(b);
      })

      const merged = flattened.reduce((acc, cur) => {
        const found = acc.find(f => f.id === cur.id);

        if (found) {
          found.qty = found.qty + cur.qty
        } else {
          acc.push(cur)
        }

        return acc;
      }, []);

      return { ...state, ingredients: [...merged] }
    case types.addRecipie:
      const { id: newIdAdd } = action.payload;
      const updatedAdd = state.recipies.map(recipie => {
        if (recipie.id === newIdAdd) {
          return { ...recipie, count: recipie.count + 1 }
        } else {
          return { ...recipie }
        }
      })
      return { ...state, recipies: updatedAdd, selectedRecipies: updatedAdd.filter(recipie => recipie.count > 0) }

    case types.removeRecipie:
      const { id: newIdRemove } = action.payload;
      const updatedRemove = state.recipies.map(recipie => {
        if (recipie.id === newIdRemove && recipie.count > 0) {
          return { ...recipie, count: recipie.count - 1 }
        } else {
          return { ...recipie }
        }
      })
      return { ...state, recipies: updatedRemove, selectedRecipies: updatedRemove.filter(recipie => recipie.count > 0) }
    case types.handleSearch:
      return { ...state, search: action.payload }
    case types.clear:
      return { ...state, selectedRecipies: [], ingredients: [], recipies: [...recipies] }
    case types.setRecipies:
      return { ...state, recipies: action.payload, selectedRecipies: action.payload.filter(recipie => recipie.count > 0) }
    default:
      return { ...state }
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, { selectedRecipies: [], ingredients: [], recipies: [...recipies], search: '' });

  const saveToLocalStorage = (type, data) => {
    localStorage.setItem(type, JSON.stringify(data));
  }

  const getFromLocalStorage = (type) => {
    const data = localStorage.getItem(type);

    return data ? JSON.parse(data) : [];
  }

  const clearLocaleStorage = (type) => {
    localStorage.removeItem(type);
  }

  useEffect(() => {
    const data = getFromLocalStorage('recipies');

    if (data) {
      dispatch({ type: types.setRecipies, payload: data });
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage('recipies', state.recipies)
  }, [state.recipies]);

  const handleSearch = (e) => {
    dispatch({ type: types.handleSearch, payload: e.target.value });
  }

  const addRecipie = (recipie) => {
    dispatch({ type: types.addRecipie, payload: recipie });
    saveToLocalStorage('recipies', state.recipies);
    console.log(getFromLocalStorage('recipies'))
  }
  const removeRecipie = (recipie) => {
    dispatch({ type: types.removeRecipie, payload: recipie })
  }

  const getFilteredRecipies = () => {
    return state.recipies.filter(recipie => recipie.name.toLowerCase().includes(state.search.toLowerCase()))
  }

  return (
    <GlobalContext.Provider value={{
      handleSearch,
      addRecipie,
      removeRecipie
    }}>
      <LayoutStyled>
        <section>
          <Search placeholder='Szukaj przepisu' />
          <div style={{ display: 'flex', marginBottom: '25px', justifyContent: 'flex-end' }}>
            <Modal
              title="Lista zakupów"
              activator={setShow => <GenerateShoppingListButton type="list" text="Lista zakupów" disabled={state.selectedRecipies.length === 0 ? true : false} onClick={() => {
                dispatch({ type: types.generateShopingList });
                setShow(true)
              }} />}
            >
              <IngredientsList ingredients={state.ingredients} />
            </Modal>
            <GenerateShoppingListButton type="clear" text="Wyczyść" disabled={state.selectedRecipies.length === 0 ? true : false} onClick={() => {
              dispatch({ type: types.clear });
              clearLocaleStorage('recipies');
            }} />
          </div>

        </section>
        <section>
          <RecipiesList recipies={getFilteredRecipies()} />
        </section>
      </LayoutStyled>
    </GlobalContext.Provider>
  );
}

export default App;
