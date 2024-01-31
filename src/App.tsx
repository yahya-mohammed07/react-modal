import { useState } from "react";
import "./App.css";
import "./index.css";
import Modal from "./components/modal/modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <div className="modalRight">
            <div className="content">
              <h1 className="text-2xl">Yohoo!!</h1>
            </div>
            <p
              className="border cursor-pointer px-3 py-2 rounded-md active:bg-slate-300 hover:bg-slate-100 text-xl text-blue-900"
              onClick={() => setShowModal(false)}
            >
              Close
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default App;
