import FileUpload from "./FileUpload";

function App() {

  const updateFilesCb = (files) => {
    console.log('updateFilesCb', files)
  }

  return (
    <div >
      <FileUpload multiple label="Upload file" updateFilesCb={updateFilesCb} />
    </div>
  );
}

export default App;
