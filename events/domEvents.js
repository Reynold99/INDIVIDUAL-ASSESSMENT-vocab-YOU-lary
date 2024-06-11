import {
  getJavascript,
  getPython,
  getCSS,
  getHTML
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import showVocab from '../pages/vocab';
import clearDom from '../utils/clearDom';
import {
  signOut
} from '../utils/auth';

const domEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id === 'logout-button') {
      signOut();
    } else if (e.target.id === 'create-entry') {
      e.preventDefault();
      clearDom();
      addVocabForm();
    } else if (e.target.id === 'python') {
      clearDom();
      getPython().then((vocabWords) => showVocab(vocabWords));
    } else if (e.target.id === 'javascript') {
      clearDom();
      getJavascript().then((vocabWords) => showVocab(vocabWords));
    } else if (e.target.id === 'css') {
      clearDom();
      getCSS().then((vocabWords) => showVocab(vocabWords));
    } else if (e.target.id === 'html') {
      clearDom();
      getHTML().then((vocabWords) => showVocab(vocabWords));
    }
  });
};

export default domEvents;
