import React from 'react';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';

import Task from '../Task';

const TaskList = ({
  tasks,
  onSnoozeTask,
  onPinTask,
  onArchiveTask,
  onUpdateTaskTitle
}) => {
  const events = {
    onSnoozeTask,
    onPinTask,
    onArchiveTask,
    onUpdateTaskTitle,
  };

  return (
    <div className="list-items">
      {tasks.map(task => <Task key={task.id} task={task} {...events} />)}
    </div>
  );
};

TaskList.fragments = {
  task: (
    gql`
      fragment TaskListTaskFragment on Task {
        id
        updatedAt
        ...TaskFragment
      }
      ${Task.fragments.task}
    `
  ),
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(propType(Task.fragments.task)).isRequired,
  onSnoozeTask: PropTypes.func,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
  onUpdateTaskTitle: PropTypes.func,
};

export default TaskList;
