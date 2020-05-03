import React, { useReducer } from 'react';
import { recipies } from './data/recipies';
import { RecipiesList } from './components/recipes-list/recipies-list.component';
import { Search } from './components/search/search.component';
import { LayoutStyled } from './components/layout/layout.style';
import { GenerateShoppingListButton } from './components/generate-shopping-list-button/generate-shopping-list-button.component';

export const GlobalContext = React.createContext(null);

export const types = {
  addIngredient: 'add_ingr',
  addRecipie: 'add_recipie',
  removeRecipie: 'remove_recipie',
  handleSearch: 'handle_search',
  generateShopingList: 'generate_shopping_list'
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
    default:
      return { ...state }
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, { selectedRecipies: [], ingredients: [], recipies: [...recipies], search: '' });

  const handleSearch = (e) => {
    dispatch({ type: types.handleSearch, payload: e.target.value });
  }

  const addRecipie = (recipie) => {
    dispatch({ type: types.addRecipie, payload: recipie })
  }
  const removeRecipie = (recipie) => {
    dispatch({ type: types.removeRecipie, payload: recipie })
  }

  const getFilteredRecipies = () => {
    return state.recipies.filter(recipie => recipie.name.toLowerCase().includes(state.search.toLowerCase()))
  }


  // todo
  // po kliknieciu na nazwe przepisu - modal ze skladnikami 
  // zmiana dispatch - lista zakupow generowana na klik - dodanie przepisu tworzy tylko liste przepisow 

  return (
    <GlobalContext.Provider value={{
      handleSearch,
      addRecipie,
      removeRecipie
    }}>
      <LayoutStyled>
        <section>
          <Search />
          <GenerateShoppingListButton disabled={state.selectedRecipies.length === 0 ? true : false} onClick={() => { dispatch({ type: types.generateShopingList }) }} />
        </section>
        <section>
          <RecipiesList recipies={getFilteredRecipies()} />
          <ul>
            {state.ingredients.map(ingr => {
              return <li key={ingr.id}>
                <span>{ingr.name} </span>
                <span>{ingr.qty}</span>
                <span>{ingr.unit}</span>
              </li>
            })}
          </ul>
        </section>
      </LayoutStyled>
    </GlobalContext.Provider>
  );
}

export default App;
