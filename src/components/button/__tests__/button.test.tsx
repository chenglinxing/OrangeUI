import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '../button';

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'large',
  className: 'testClassName',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

// test("test button",()=>{
//     const wrapper = render(<Button>Nice</Button>)
//     const element = wrapper.queryByText("Nice")
//     // expect(element).toBeTruthy()
//     expect(element).toBeInTheDocument()
// })

describe('button test', () => {
  it('should render the correct default button', () => {
    const wrapper = render(
      <Button {...defaultProps} btnType="primary">
        Nice
      </Button>,
    );
    const element = wrapper.getByText('Nice');
    // expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-primary');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should render  the correct components based on different props', () => {
    const wrapper = render(
      <Button {...testProps} btnType="primary">
        Nice
      </Button>,
    );
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg testClassName');
  });

  it('link button and test href prop', () => {
    const wrapper = render(
      <Button btnType="link" href="http://testLink">
        Link
      </Button>,
    );
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn-link');
  });

  it('disabled button set true', () => {
    const wrapper = render(<Button {...disabledProps}>disabled</Button>);
    const element = wrapper.getByText('disabled') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
