import Provider from "./contexto/Provider";
import MainRouter from "./routes/MainRouter";
function App() {
  return (
    <>
      <Provider>
        <MainRouter />
      </Provider>
    </>
  );
}
export default App;
