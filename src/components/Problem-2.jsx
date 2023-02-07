import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../components/Modal/Modal'

const Problem2 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState('all');
    const [onlyEven, setOnlyEven] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          `https://contact.mediusware.com/api/contacts?type=${modalType}&only_even=${onlyEven}&search=${searchTerm}&page=1`
          );
          setContacts(response.data);
        };
    
        fetchData();
      }, [modalType, onlyEven, searchTerm]);
    
      const handleModalOpen = type => {
        setModalType(type);
        setModalOpen(true);
      };
    
      const handleModalClose = () => {
        setModalOpen(false);
      };
    
      const handleOnlyEvenChange = e => {
        setOnlyEven(e.target.checked);
      };
    
      const handleSearchTermChange = e => {
        setSearchTerm(e.target.value);
      };
    

    return (

        <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
  
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => handleModalOpen('all')}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => handleModalOpen('us')}
            >
              US Contacts
            </button>
          </div>
  
          {modalOpen && (
            <Modal
              type={modalType}
              onlyEven={onlyEven}
              contacts={contacts}
              searchTerm={searchTerm}
              onClose={handleModalClose}
              onOnlyEvenChange={handleOnlyEvenChange}
              onSearchTermChange={handleSearchTermChange}
            />
          )}
        </div>
      </div>
    );
};

export default Problem2;