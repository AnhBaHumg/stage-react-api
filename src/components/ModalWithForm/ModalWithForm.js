import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, onClose, name, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h3 className="modal-form-title">{title}</h3>
        <button
          className="close__button"
          type="button"
          onClick={onClose}
        ></button>
        <form onSubmit={onSubmit} className="modal-form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
