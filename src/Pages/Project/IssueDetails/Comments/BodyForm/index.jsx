import React, { Fragment, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Textarea } from '../../../../../shared/components';
import Ratings from '../../../Ratings';
import { Actions, FormButton } from './Styles';
import { connect } from 'react-redux';

const ProjectBoardIssueDetailsCommentsBodyForm = (props) => {
  const $textareaRef = useRef();
  const [display, setDisplay] = useState('block');
  // const [ratings, setRatings] = useState();
  const handleSubmit = () => {
    if ($textareaRef.current.value.trim()) {
      props.onSubmit();
    }
  };
  if (props.type === 'review') {
    return (
      <React.Fragment>
        <input
          autoFocus
          placeholder="Add a comment..."
          value={props.value}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          ref={$textareaRef}
        />
        {/* <Actions>
          <FormButton
            style={{ display: `${display}` }}
            variant="primary"
            isWorking={props.isWorking}
            onClick={(e) => {
              setDisplay('none');
            }}
          >
            Save
          </FormButton>
          <FormButton
            style={{ display: `${display}` }}
            variant="empty"
            onClick={props.onCancel}
          >
            Cancel
          </FormButton>
        </Actions> */}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Textarea
          autoFocus
          placeholder="Add a comment..."
          value={props.value}
          onChange={props.onChange}
          ref={$textareaRef}
        />
        <Actions>
          <FormButton
            variant="primary"
            isWorking={props.isWorking}
            onClick={handleSubmit}
          >
            Save
          </FormButton>
          <FormButton variant="empty" onClick={props.onCancel}>
            Cancel
          </FormButton>
        </Actions>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(
  ProjectBoardIssueDetailsCommentsBodyForm
);
