import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Todos} from './component/Todos';

it("should match snapshot", () => {
    const {container} = render(<App/>);
    expect(container).toMatchSnapshot();
});
