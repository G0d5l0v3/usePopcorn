import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";



const App = () => {

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "",
          },
        }}
      >
        <Suspense>
          <Routes>
            <Route path="/" element={""} />
          </Routes>
        </Suspense>
      </ConfigProvider>
    </>
  );
};

export default App;
