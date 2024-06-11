import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB WORD
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language_id: document.querySelector('#language').value,
        category: document.querySelector('#category').value, // Added category to payload
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab().then(showVocab);
        });
      });
    }
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language_id: document.querySelector('#language').value,
        category: document.querySelector('#category').value, // Added category to payload
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocab().then(showVocab);
      });
    }
  });
};

export default formEvents;
