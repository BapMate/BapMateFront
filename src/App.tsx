import Landing from './pages/landing';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './style/theme';
import { ThemeProvider } from 'styled-components';
import KakaoLogin from './pages/kakaoLogin';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Main from './pages/main';
import Signup from './pages/signup';
import CalenderTest from './pages/calendertest';

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/kakao/redirect" element={<KakaoLogin />} />
            <Route path="/main" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/calendertest" element={<CalenderTest />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
