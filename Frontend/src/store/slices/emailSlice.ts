import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneratedEmail {
  id: string;
  subject: string;
  content: string;
  targetAudience: string;
  productService: string;
  tone: string;
  cta: string;
  timestamp: Date;
  isFavorite: boolean;
}

interface EmailState {
  currentEmail: GeneratedEmail | null;
  savedEmails: GeneratedEmail[];
  isGenerating: boolean;
  isDarkMode: boolean;
}

const initialState: EmailState = {
  currentEmail: null,
  savedEmails: [],
  isGenerating: false,
  isDarkMode: false,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setCurrentEmail: (state, action: PayloadAction<GeneratedEmail>) => {
      state.currentEmail = action.payload;
    },
    setIsGenerating: (state, action: PayloadAction<boolean>) => {
      state.isGenerating = action.payload;
    },
    addSavedEmail: (state, action: PayloadAction<GeneratedEmail>) => {
      state.savedEmails.unshift(action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const email = state.savedEmails.find(
        (email) => email.id === action.payload
      );
      if (email) {
        email.isFavorite = !email.isFavorite;
      }
    },
    deleteEmail: (state, action: PayloadAction<string>) => {
      state.savedEmails = state.savedEmails.filter(
        (email) => email.id !== action.payload
      );
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {
  setCurrentEmail,
  setIsGenerating,
  addSavedEmail,
  toggleFavorite,
  deleteEmail,
  toggleDarkMode,
} = emailSlice.actions;

export default emailSlice.reducer;
