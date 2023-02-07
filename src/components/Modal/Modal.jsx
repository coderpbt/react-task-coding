import React from 'react';

const Modal = ({ type, onlyEven, contacts, searchTerm, onClose, onOnlyEvenChange, onSearchTermChange }) => {
  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal-container">
          <div className="modal-header">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => onClose('all')}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => onClose('us')}
            >
              US Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-secondary"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              value={searchTerm}
              onChange={onSearchTermChange}
            />
            <label>
              <input
                type="checkbox"
                checked={onlyEven}
                onChange={onOnlyEvenChange}
              />
              Only even
            </label>
            <ul className="contact-list">
              {
                type === 'all'
                  ? contacts.map((contact, index) => (
                    <div key={index} className="contact-item">
                      {contact.name}
                    </div>
                  ))
                  : type === 'us'
                    ? contacts.filter(contact => contact.country === 'US')
                      .map((contact, index) => (
                        <div key={index} className="contact-item">
                          {contact.name}
                        </div>
                      ))
                    : []
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

