import React, { Fragment, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Textarea } from '../../../../../shared/components';
import Ratings from '../../../Ratings';
import { Actions, FormButton } from './Styles';
import { connect } from 'react-redux';

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isWorking: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsCommentsBodyForm = (props) => {
  const $textareaRef = useRef();
  const [display, setDisplay] = useState('block');
  // const [ratings, setRatings] = useState();
  const handleSubmit = () => {
    if ($textareaRef.current.value.trim()) {
      props.onSubmit();
    }
  };
  console.log(props);
  return (
    <Fragment>
      <Textarea
        autoFocus
        placeholder="Add a comment..."
        value={props.value}
        onChange={(e) => {
          props.onChange();
        }}
        ref={$textareaRef}
      />
      {props.type === 'review' ? (
        <Actions>
          <FormButton
            style={{ display: `${display}` }}
            variant="primary"
            isWorking={props.isWorking}
            onClick={(e) => {
              if (props.type === 'review') setDisplay('none');
              handleSubmit();
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
        </Actions>
      ) : (
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
      )}
    </Fragment>
  );
};

ProjectBoardIssueDetailsCommentsBodyForm.propTypes = propTypes;

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(
  ProjectBoardIssueDetailsCommentsBodyForm
);
