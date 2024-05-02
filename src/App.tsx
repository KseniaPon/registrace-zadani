import { Registration, UserDataStructure } from "./components/Registration";

export const App = () => {
  const handleSubmitForm = (data: UserDataStructure) => {
    console.log(data)
  }

  return (
    <div className="container">
     <Registration onSubmitForm={handleSubmitForm}/>
    </div>
  );
};

export default App;
