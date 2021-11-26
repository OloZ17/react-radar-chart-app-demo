import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testing App() Component', () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    delete window.ResizeObserver;
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
    jest.restoreAllMocks();
  });

  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });

  it('should add a skill', () => {
    render(<App />);
    const initialSize = screen.queryAllByRole('textbox').length;
    const addSkill_buttons = screen.queryAllByTestId('addSkill-button');
    fireEvent.click(addSkill_buttons[0]);
    const newSize = screen.queryAllByRole('textbox').length;
    expect(newSize) > initialSize;
  });

  it('should remove a skill', () => {
    render(<App />);
    const initialSize = screen.queryAllByRole('textbox').length;
    const removeSkill_buttons = screen.queryAllByTestId('removeSkill-button');
    fireEvent.click(removeSkill_buttons[0]);
    const newSize = screen.queryAllByRole('textbox').length;
    expect(newSize) < initialSize;
  });

  it('should handlechange skill', () => {
    render(<App _skills={['']} />);
    const inputs = screen.queryAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: 'Test' } });
    expect(inputs[0]).toHaveValue('Test');
  });

  it('should reset requirements', () => {
    render(<App />);
    const button = screen.getAllByTestId('resetRequirement-button');
    fireEvent.click(button[0]);
    const inputs = screen.getAllByTestId('requirement-input');
    expect(inputs[0]).toHaveValue(0);
  });

  it('should handlechange requirements', () => {
    render(<App />);
    const inputs = screen.getAllByTestId('requirement-input');
    fireEvent.change(inputs[0], { target: { value: 100 } });
    expect(inputs[0]).toHaveValue(100);
  });

  it('should reset achievements', () => {
    render(<App />);
    const button = screen.getAllByTestId('resetAchievement-button');
    fireEvent.click(button[0]);
    const inputs = screen.getAllByTestId('achievement-input');
    expect(inputs[0]).toHaveValue(0);
  });

  it('should handlechange achievements', () => {
    render(<App />);
    const inputs = screen.getAllByTestId('achievement-input');
    fireEvent.change(inputs[0], { target: { value: 100 } });
    expect(inputs[0]).toHaveValue(100);
  });
});
