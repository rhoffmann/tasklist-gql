import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Inbox from './Inbox';

import {
  TASK_INBOX,
  TASK_PINNED,
  TASK_SNOOZED,
  TASK_ARCHIVED
} from '../Task/Task.types';

function buildTask(attrs) {
  const task = {
    id: Math.round(Math.random() * 1000000).toString(16),
    title: 'Test Task',
    subtitle: 'on Test Board',
    url: 'http://test.url',
    state: TASK_INBOX,
    updatedAt: Date.now(),
    ...attrs,
  };
  return task;
}

const pinnedTasks = [
  buildTask({ state: TASK_PINNED }),
  buildTask({ state: TASK_PINNED }),
  buildTask({ state: TASK_PINNED }),
];

const inboxTasks = [
  buildTask({ state: TASK_INBOX }),
  buildTask({ state: TASK_INBOX }),
  buildTask({ state: TASK_INBOX }),
];

const onPinTask = action('onPinTask');
const onSnoozeTask = action('onSnoozeTask');
const events = { onSnoozeTask, onPinTask };

storiesOf('Inbox', module)
  .addDecorator(story => <div id="content-container">{story()}</div>)
  .add('loading', () => <Inbox loading={true} />)
  .add('error', () => <Inbox error={new Error('Foobar')} />)
  .add('no tasks', () => <Inbox pinnedTasks={[]} inboxTasks={[]} {...events} />)
  .add('no pinned tasks', () => (
    <Inbox pinnedTasks={[]} {...{ inboxTasks, ...events }} />
  ))
  .add('no inbox tasks', () => (
    <Inbox
      inboxTasks={[]}
      {...{
        pinnedTasks,
        ...events,
      }}
    />
  ))
  .add('full', () => (
    <Inbox
      {...{
        pinnedTasks,
        inboxTasks,
        ...events,
      }}
    />
  ));
