"use client"
import { createContext, useContext, useReducer, useEffect } from 'react'

const WishlistContext = createContext()

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (!existingItem) {
        return {
          ...state,
          items: [...state.items, action.payload]
        }
      }
      return state
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case 'CLEAR_WISHLIST':
      return { ...state, items: [] }
    default:
      return state
  }
}

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] })

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' })
  }

  const isInWishlist = (id) => {
    return state.items.some(item => item.id === id)
  }

  // Persist wishlist to localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedWishlist) {
      const parsedWishlist = JSON.parse(savedWishlist)
      parsedWishlist.forEach(item => addItem(item))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.items))
  }, [state.items])

  return (
    <WishlistContext.Provider value={{
      items: state.items,
      addItem,
      removeItem,
      clearWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
