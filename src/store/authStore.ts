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
  setUserFromLocalStorage: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userRole: null,
  user: null,
  login: async (email, password) => {
    // Simulate API call
    if (email === 'admin@gmail.com' && password === '1234') {
      set({
        isAuthenticated: true,
        userRole: 'admin',
        user: {
          id: '1',
          name: 'Tài khoản quản trị',
          email: 'admin@gmail.com',
        },
      });
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        name: 'Tài khoản quản trị',
        email: 'admin@gmail.com',
      }));
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
      localStorage.setItem('user', JSON.stringify({
        id: '2',
        name: '',
        email: email,
      }));
    }
  },
  logout: () => {
    set({
      isAuthenticated: false,
      userRole: null,
      user: null,
    });
    localStorage.removeItem('user');
  },
  setUserFromLocalStorage: () => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      set({
        isAuthenticated: true,
        userRole: parsedUser.email === 'admin@gmail.com' ? 'admin' : 'user',
        user: parsedUser,
      });
    }
  },
}));