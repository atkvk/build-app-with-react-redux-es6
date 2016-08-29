import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

import {ManageCoursePage} from './ManageCoursePage';

describe('Manage course page', () => {

  it('title must have at least 5 chars', () => {
    const props = {
      course: {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      },
      authors: [],
      actions: {
        saveCourse: () => Promise.resolve()
      }
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();

    expect(saveButton.prop('type')).toBe('submit');

    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
