import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Vocab Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="language">Language / Tech</label>
        <textarea class="form-control" placeholder="Language / Tech" id="language" style="height: 100px">${obj.language_id || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" id="category" required>
          <option value="">Select a category</option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
