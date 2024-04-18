import React, {Fragment, useState} from 'react';
import Input from './components/Input.tsx';
import {getTitleSlugFromURL} from './common/utils/utils.ts';
import {Problem} from './common/types/problem.type.ts';
import TextArea from './components/TextArea.tsx';
import Button from './components/Button.tsx';
import Modal from './components/Modal.tsx';
import {ModalState} from './common/types/modal_state.type.ts';

const App = (): React.JSX.Element => {
  const [leetcodeURL, setLeetcodeURL] = useState('');
  const [notes, setNotes] = useState('');
  const [modalState, setModalState] = useState<ModalState>({
    isActive: true,
    type: 'success',
  });

  const handleModalClose = () => {
    setModalState({
      isActive: false,
      type: '',
    });
  };

  //TODO: merge these 2 methods into one
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setLeetcodeURL(value);
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {value} = event.target;
    setNotes(value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setModalState({
      isActive: true,
      type: 'loading',
    });

    const titleSlug = getTitleSlugFromURL(leetcodeURL);
    const problem = await getProblemData(titleSlug);
    const response = await fetch(
      'http://localhost:3000/api/v1/notion/problem/add',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(problem),
      }
    );
    const notionData = await response.json();
    console.log(notionData);

    setModalState({
      isActive: true,
      type: 'success',
    });

    resetFormFields();
  };

  const resetFormFields = () => {
    setNotes('');
    setLeetcodeURL('');
  };

  const getProblemData = async (titleSlug: string): Promise<Problem> => {
    const response = await fetch(
      `http://localhost:3000/api/v1/leetcode/problem/${titleSlug}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const problem = await response.json();
    return {
      id: problem.questionFrontendId,
      title: problem.title,
      url: `https://leetcode.com/problems/${titleSlug}`,
      difficulty: problem.difficulty,
      notes: notes,
    };
  };

  return (
    <Fragment>
      <form
        className="flex h-fit flex-col gap-4 bg-white p-6"
        onSubmit={handleFormSubmit}>
        <Input
          id="leetcodeURL"
          label={'LeetCode URL'}
          value={leetcodeURL}
          onChange={handleInputChange}
        />
        <TextArea
          id="notes"
          label="Notes"
          value={notes}
          onChange={handleTextAreaChange}
        />
        <Button
          type="submit"
          text="Add"
        />
      </form>
      <Modal
        {...modalState}
        onClose={handleModalClose}
      />
    </Fragment>
  );
};

export default App;
