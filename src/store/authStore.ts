import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  userRole: 'admin' | 'user' | null;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userRole: null,
  user: null,
  login: async (email, password) => {
    // Simulate API call
    if (email === 'admin@example.com' && password === 'admin') {
      set({
        isAuthenticated: true,
        userRole: 'admin',
        user: {
          id: '1',
          name: 'Tài khoản quản trị',
          email: 'admin@example.com',
        },
      });
    } else {
      set({
        isAuthenticated: true,
        userRole: 'user',
        user: {
          id: '2',
          name: '',
          email: email,
        },
      });
    }
  },
  logout: () => {
    set({
      isAuthenticated: false,
      userRole: null,
      user: null,
    });
  },
}));