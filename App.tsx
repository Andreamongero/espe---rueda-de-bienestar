
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import ScreenIntro1 from './screens/ScreenIntro1';
import ScreenIntro2 from './screens/ScreenIntro2';
import ScreenIntro3 from './screens/ScreenIntro3';
import ScreenIntro4 from './screens/ScreenIntro4';
import ScreenOnboarding from './screens/ScreenOnboarding';
import ScreenExplanation from './screens/ScreenExplanation';
import ScreenReframe from './screens/ScreenReframe';
import ScreenWheelOverview from './screens/ScreenWheelOverview';
import ScreenWheelHub from './screens/ScreenWheelHub';
import ScreenDimension from './screens/ScreenDimension';
import ScreenBalanceFinal from './screens/ScreenBalanceFinal';
import ScreenPlanAccion from './screens/ScreenPlanAccion';
import ScreenSurvey from './screens/ScreenSurvey';
import ScreenSuccess from './screens/ScreenSuccess';

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ScreenIntro1 />} />
          <Route path="/intro2" element={<ScreenIntro2 />} />
          <Route path="/intro3" element={<ScreenIntro3 />} />
          <Route path="/intro4" element={<ScreenIntro4 />} />
          <Route path="/onboarding" element={<ScreenOnboarding />} />
          <Route path="/wellness-explanation" element={<ScreenExplanation />} />
          <Route path="/reframe" element={<ScreenReframe />} />
          <Route path="/wheel-overview" element={<ScreenWheelOverview />} />
          <Route path="/wheel-hub/:step" element={<ScreenWheelHub />} />
          <Route path="/dimension/:id/:index" element={<ScreenDimension />} />
          <Route path="/balance-final" element={<ScreenBalanceFinal />} />
          <Route path="/plan-accion" element={<ScreenPlanAccion />} />
          <Route path="/survey" element={<ScreenSurvey />} />
          <Route path="/success" element={<ScreenSuccess />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
