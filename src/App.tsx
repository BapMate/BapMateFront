import Landing from './pages/landing';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './style/theme';
import { ThemeProvider } from 'styled-components';
import KakaoLogin from './pages/kakaoLogin';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Main from './pages/main';
import Signup from './pages/signup';
import UploadPostPage from './pages/uploadpost';
import MeetUpHome from './pages/meetUpHome';
import MeetingPage from './pages/meetingPage';
import SignupFavor from './pages/favorPage';
import MyPage from './pages/myPage';
import GlobalStyle from './style/GlobalStyle';

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/kakao/redirect" element={<KakaoLogin />} />
            <Route path="/main" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/meetup" element={<UploadPostPage />} />
            <Route path="/home" element={<MeetUpHome />} />
            <Route path="/meetinglist" element={<MeetingPage />} />
            <Route path="/signup/favor/:number" element={<SignupFavor />} />
            <Route path="/myPage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
