import { useNavigate } from "react-router-dom";
import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

// Clicking the ⚙ Staff button in the Navbar opens this modal.
// It just offers two links - it doesn't need its own state.
export default function StaffAccessModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  function goTo(path) {
    onClose();
    navigate(path);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Staff Access">
      <p className="text-sm text-charcoal/70 mb-4">
        Choose a screen. These are meant for restaurant staff only.
      </p>
      <div className="flex flex-col gap-3">
        <Button variant="primary" onClick={() => goTo("/staff/kitchen")}>
          🍳 Kitchen Display
        </Button>
        <Button variant="secondary" onClick={() => goTo("/staff/counter")}>
          🧾 Counter Dashboard
        </Button>
      </div>
    </Modal>
  );
}
