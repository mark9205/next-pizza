import { cn } from '@/lib/utils';
import * as React from 'react';
import { Catergories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';

interface Props {
    className?: string
}

export const TopBar: React.FunctionComponent<Props> = ({ className }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className='flex items-center justify-between'>
                <Catergories />
                <SortPopup />
            </Container>
        </div>
    )
};

