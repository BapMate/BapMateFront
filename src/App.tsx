import Landing from './pages/landing';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { theme } from './style/theme';
import { ThemeProvider } from 'styled-components';
import KakaoLogin from './pages/kakaoLogin';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kakao/redirect" element={<KakaoLogin />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
