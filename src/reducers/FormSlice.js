import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  showNewClientForm: false,
  currentStep: 1,
  currentStructure: "list",
  selectedOption: "Everyone",
  currentAccountFormTab: 1
}

const FormSlice = createSlice({
  name: "formDisplay",
  initialState,
  reducers: {
    openForm: (state) => {
      return {
        ...state,
        showForm: true
      }
    },
    closeForm: (state) => {
      return {
        ...state,
        showForm: false
      }
    },
    showNewClientPopup: (state) => {
      return {
        ...state,
        showNewClientForm: true
      }
    },
    closeClientPopup: (state) => {
      return {
        ...state,
        showNewClientForm: false
      }
    },
    incrementStep: (state) => {
      return {
        ...state,
      currentStep: state.currentStep + 1
      }
    },

    decrementStep: (state) => {
      return {
        ...state,
      currentStep: state.currentStep - 1
      }
    },

    resetStep: (state) => {
      return {
        ...state,
        currentStep: 1
      }
    },

    updateCurrentStructure: (state,action) => {
      return {
        ...state,
        currentStructure: action.payload
      }
    },

    updateSelectedOption: (state,action) => {
      return {
        ...state,
        selectedOption: action.payload
      }
    },
    incrementCurrentAccTab: (state) => {
      if(state.currentAccountFormTab !== 2) {
        return {
          ...state,
          currentAccountFormTab: state.currentAccountFormTab + 1
        }
      }
    }
  }
})

export const {openForm,closeForm,showNewClientPopup,closeClientPopup,incrementStep,decrementStep,resetStep,updateCurrentStructure,updateSelectedOption} = FormSlice.actions
export default FormSlice.reducer