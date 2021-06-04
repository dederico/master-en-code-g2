import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import Search from './Search';

describe('Home Component', () => {
    it('renders home component', () => {
        // screen.debug();
        render(<Home />);
        // screen.debug();
        
    });
    
    it('render home with search component inside', () => {
            render(<Home />);
            const label = screen.getByText('Mi busqueda')
            expect(label).toBeInTheDocument();
    });
it('tests input text on search', () => {
    render(<Home />);
    const input = screen.getByTestId('idTestSearch');
    fireEvent.change(input, {
        target: {
            value: 'una busqueda mas',
        }
    })
    screen.debug();
})
    it('detecs that onChange executes properly', () => {
        const onChangeFunction = jest.fn();
        render(
            <Search
                value=""
                onChange={onChangeFunction}
                title="Mi barra de busqueda"
            />
        )
        const input = screen.getByTestId('idTestSearch');
        fireEvent.change(input, {
            target: {
                value:'cualquier cosa',
            }
        })
        expect(onChangeFunction).toHaveBeenCalledTimes(1);
    });
});
